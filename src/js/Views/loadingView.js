import previewView from "./previewView.js";
import View from "./View.js";

class loadingView extends View{

  _parentElement = document.querySelector(".countries-container");
  _childElement = document.querySelector('.search-field')
  _countryName;
  _errorMessage = `This country can't be found. Try again!`
  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('')
  }

  addHandlerRender(handler) {
    window.addEventListener("load", e => {
      handler()
      this._clearInput()
    });
  }

  addHandlerCountry(handler){
    this._parentElement.addEventListener('click', e => {
        const target = e.target.closest('.countries')
        if(!target) return;
        const countryEl = target.querySelector('.country-name')
        this._countryName = countryEl.textContent
      
        window.location.href = './details.html'
        handler(this._countryName)
        this._clearInput()
    })
  }
  addHandlerDetails(handler){
    window.addEventListener('load', () => {
      handler(this._countryName)
    })
  }
}

export default new loadingView();
