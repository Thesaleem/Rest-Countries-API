import * as model from "./model.js";
import loadingView from "./Views/loadingView.js";
import paginationView from "./Views/paginationView.js"
import searchView from "./Views/searchView.js";
import filteredView from "./Views/filteredView.js";
import detailsView from "./Views/detailsView.js";
import 'core-js/actual'
import 'regenerator-runtime/runtime'


const controlCountries = async function () {
  try{
    const text = "all";
  
    //Load all countries
    await model.loadCountries(text);

    loadingView.render(model.pageResults(model.state.start));
  
    paginationView.render(model.state.start)
  }
  catch(err){
    console.log(err)
    paginationView._clear()
    loadingView.renderError()
  }

};


const controlSearchResults = async function (){
  try{

    const query = searchView.getQuery()
    if(!query) return;

    await model.searchResults(query)

    loadingView.render(model.pageResults(model.state.search))
    paginationView.render(model.state.search)
  }
  catch(err){
    console.log(err)
    paginationView._clear()
    loadingView.renderError()
  }

}



const controlFilteredResults = async function(region){
  try{
    await model.filteredResults(region)

    loadingView.render(model.pageResults(model.state.filter))
    
    paginationView.render(model.state.filter)
  }
  catch(err){
    console.log(err)
    paginationView._clear()
    loadingView.renderError()
  }
}

const controlPages = function (goTo){
    loadingView.render(model.pageResults(model.state.start, goTo));
    paginationView.render(model.state.start)

}

const controlClcikedCountry = function (country){
    model.clickedResults(country)
}
const controlDetails = function(){
  detailsView.render(model.detailedResults())

}

const controlBorderDetails = async function(country){
  try{
    await model.borderResults(country)
    detailsView.render(model.state.border.results[0])
  }
  catch(err){
    console.log(err)
    detailsView.renderError()
  }
}

const init = function () {
  if(loadingView._htmlElement.classList.contains('index')){
    loadingView.addHandlerRender(controlCountries);
    paginationView.addHandlerClick(controlPages)
    searchView.addHandlerSearch(controlSearchResults)
    filteredView.addHandlerFilter(controlFilteredResults)
    loadingView.addHandlerCountry(controlClcikedCountry)
    searchView.addHandlerCancel(controlCountries)
  }
  if(!loadingView._htmlElement.classList.contains('index')){

    loadingView.addHandlerDetails(controlDetails)
    detailsView.addBorderHandler(controlBorderDetails)
    detailsView.addBackHandler()
  }
};

init();
