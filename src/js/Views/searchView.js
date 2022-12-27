import View from "./View.js"

class searchView extends View{
    _parentElement= document.querySelector('.search')
    _childElement = document.querySelector('.search-field')
    _cancel = document.querySelector('.cancel')

    getQuery(){
        const query = this._childElement.value 

        // this._clearInput()
        return query;
    }

    addHandlerSearch(handler){
        this._parentElement.addEventListener('submit', function(e){
            e.preventDefault()
            handler()
        })
    }

    addHandlerCancel(handler){
        this._cancel.addEventListener('click', () => {
            this._clearInput()
            handler()
        })
    }
}

export default new searchView()