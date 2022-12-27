
export const API = 'https://restcountries.com/v3.1/'
export const RES_PER_PAGE = 40

const timeout = function(s){
    return new Promise(function(_, reject){
        setTimeout(function(){
            reject(new Error (`Request took long! Timeout after ${s} seconds`))
        }, s * 1000)
    })
}

export const getJSON = async function(url) {
    try{
        const res = await Promise.race([fetch(url), timeout(10)])
        const data = await res.json()
        if(!res.ok) throw new Error(`${data.message} ${res.status}`)
        return data
    }
    catch(err){
        throw err
    }
}