import View from "./View.js"

class filteredView extends View{
    _parentElement = document.querySelector('.filter')
    _childElement = document.querySelector('.search-field')


    addHandlerFilter(handler){
        const regions = this._parentElement.querySelectorAll('.region')
        regions.forEach(region => {
            region.addEventListener('click', (e) => {
                const filteredRegion = document.querySelector('.filtered-region')
                const selectedRegion = e.target.textContent

                filteredRegion.textContent = selectedRegion
                handler(selectedRegion)
                this._clearInput()
            })
        })
    }
}

export default new filteredView()