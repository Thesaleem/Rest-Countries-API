import error from "url:../../../pages/page_not_found.svg";
export default class View {
    _htmlElement = document.querySelector('html')

    _data;

    render(data, render = true){
        this._data = data;
        const markup = this._generateMarkup();
        if(!render) return markup; //otherwise it gives error from the previewview.render 
        // since it doesn't have any parentelement to insert markup from the preview. So previewview has to be false always to return just markup

        this._clear()
        this._parentElement.insertAdjacentHTML("afterbegin", markup)
    }

    renderError(message = this._errorMessage){
        const markup = `
                <div class="error">
                    <img src="${error}" alt="" class="w-[400px] h-[400px]" />
                    <p class="text-2xl text-center">${message}</p>
                </div> 
            `

            this._clear()
            this._parentElement.insertAdjacentHTML('afterbegin', markup)
    }
    _clear(){
        this._parentElement.innerHTML = ''
    }
    _clearInput(){
        this._childElement.value = ''
    }
}

