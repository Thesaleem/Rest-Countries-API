import View from "./View.js";

class detailsView extends View {

    _parentElement = document.querySelector('.details')
    _back = document.querySelector('.back-button')
    _errorMessage = `This country can't be found, this may be due to poor connection. Please try again!`


    _generateMarkup(){
        return `
            <div class="mt-16 lg:flex md:min-h-[405px] justify-between items-center">
                <div class="country-flag flex justify-center items-center w-full lg:w-[40.5%] md:h-full h-[220px]">
                    <img src="${this._data.flag}" alt="" class="max-w-[100%] max-h-[100%] object-contain">
                </div>
                <div class="country-flag__details lg:w-[46.5%]">
                    <h2 class="font-extrabold mt-6 lg:mt-0 text-lg md:text-xl">${this._data.name}</h2>
                    <div class="md:flex gap-36 mt-4 text-[15px]">
                        <div class="leading-7">
                            <p class="font-medium">Native Name: <span class="font-light">${this._data.nativeName}</span></p>
                            <p class="font-medium">Population: <span class="font-light">${new Intl.NumberFormat().format(this._data.population)}</span></p>
                            <p class="font-medium">Region: <span class="font-light">${this._data.region}</span></p>
                            <p class="font-medium">Sub Region: <span class="font-light">${this._data.subregion}</span></p>
                            <p class="font-medium">Capital: <span class="font-light">${this._data.capital}</span></p>
                        </div>
                        <div class="mt-5 md:mt-0 leading-7">
                            <p class="font-medium">Top Level Domain: <span class="font-light">${this._data.domain}</span></p>
                            <p class="font-medium">Currencies: <span class="font-light">${this._data.currency}</span></p>
                            <p class="font-medium">Languages: <span  class="font-light">${this._data.languages}</span></p>
                        </div>
                    </div>
                    <div class=" mt-5 md:mt-16 md:flex items-center text-[15px]">
                        <h4 class="font-medium">Border Countries:</h4>
                        <div class=" flex flex-wrap mt-4 md:mt-0 md:ml-4 gap-2">
                            ${this.generateBorderMarkup()}
                        </div>
                    </div>
                </div>
            </div>
        `
    }

    generateBorderMarkup(){
        return `
            ${this._data.borders === "None" ? "None" : this._data.borders.map(border => `<p class="border-country  cursor-pointer countries-btn">${border}</p>`).join('')}
        `
    }

    addBorderHandler(handler){
        this._parentElement.addEventListener('click', e => {
            const target = e.target.closest('.border-country')
            if(!target) return;
            const borderCountry = target.textContent
            handler(borderCountry)
        })
    }
    addBackHandler(){
        this._back.addEventListener('click', e => {
            history.go(-1)
        })
    }
    

}

export default new detailsView()