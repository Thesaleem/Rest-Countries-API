import {getJSON, API, RES_PER_PAGE} from "./helper.js"

export const state = {
    countryData: {},
    search: {
        query: '',
        results: [],
        page: 1,
        resultsPerPage: RES_PER_PAGE 
    },
    start:{
        results: [],
        page: 1,
        resultsPerPage: RES_PER_PAGE 
    },
    filter:{
        region: '',
        results: [],
        page: 1,
        resultsPerPage: RES_PER_PAGE 
    },
    border:{
        results:[]
    },
    details:{
        results: [],
    }
}

export const pageResults = function(location, page = location.page){
    location.page = page
    const start = (page - 1) * RES_PER_PAGE //0
    const end = page * RES_PER_PAGE //40
    localStorage.clear()
    return location.results.slice(start, end)

}

export const loadCountries = async function (text){
    try{
        const data = await getJSON(`${API}${text}`)
        state.start.results = data.map(country => registerCountry(country))
    }
    catch(err){
        console.log(err);
        throw err
    }
}


export const searchResults = async function(query){
    try{
        state.search.query = query
        const data = await getJSON(`${API}/name/${query}`)

        state.search.results = data.map(country => registerCountry(country))

        state.start.results = state.search.results
        // console.log(data);
    }
    catch(err){
        throw err
    }
} 

export const filteredResults = async function(region){
    try{
        state.filter.region = region
        const data = await getJSON(`${API}/region/${region}`)
        state.filter.results = data.map(country => registerCountry(country))

        state.start.results = state.filter.results
    }
    catch(err){
        throw err
    }
} 

export const clickedResults = function(nation){
    const selectedCountry = state.start.results.find(country => country.name === nation)
    state.details.results = getCountryValues(selectedCountry)
    localStorage.setItem('clicked', JSON.stringify(state.details.results))
}

export const detailedResults = function(){
    let selectedItem = localStorage.getItem('clicked')
    let country = JSON.parse(selectedItem)
    return country
}

export const borderResults = async function(country){
    try{
        const data = await getJSON(`${API}/alpha/${country}`)
        state.border.results = data.map(country => getAllCountryValues(country))
    }
    catch(err){
        throw err
    }
}


// Refactored codes
const registerCountry = function (country){
    return {
        name: country.name?.offical ?? country.name.common,
        population: country.population,
        region: country.region,
        capital: country.capital, //array
        nativeName: country.name.nativeName, //obj
        subregion: country.subregion,
        domain: country.tld,
        currency: country.currencies, //objects
        languages: country.languages, //obj
        borders: country.borders ?? "None", //array
        flag: country.flags.svg,
    }
}

const getCountryValues = function(country){
    return{
        ...country,
        capital: country.capital.join(', '),
        nativeName: Object.values(country.nativeName)[0].official,
        domain: country.domain.join(''),
        languages: Object.values(country.languages).join(', '),
        currency: Object.values(country.currency)[0].name,
    }
}
const getAllCountryValues = function(country){
    return {
        name: country.name?.offical ?? country.name.common,
        population: country.population,
        region: country.region,
        capital: country.capital.join(', '), //array
        nativeName: Object.values(country.name.nativeName)[0].official, //obj
        subregion: country.subregion,
        domain: country.tld.join(', '),
        currency: Object.values(country.currencies)[0].name, //objects
         languages: Object.values(country.languages).join(', '), //obj
        borders: country.borders ?? "None", //array
        flag: country.flags.svg,    
    }
}