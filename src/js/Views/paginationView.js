import View from "./View.js";

class PaginationView extends View{
    _parentElement = document.querySelector('.pagination')
    addHandlerClick(handler){
        this._parentElement.addEventListener('click', e => {
            const target = e.target.closest('.btn')
            if(!target) return;
            const goTo = +target.dataset.goto
            handler(goTo)
        })
    }
    _generateMarkup(){
        const curPage = this._data.page;
        const numPages =  Math.ceil(this._data.results.length/this._data.resultsPerPage) //Get the number of pages
        //if first page and pages are more than one
        if(curPage === 1 && numPages > curPage){
            return this._generateMarkupBtn('+', 'next', 'forward')
        }
        //if last page and pages are more than one
        else if (numPages > 1 && numPages === curPage){
            return this._generateMarkupBtn('-', 'prev', 'back')
        }
        //other pages in between
        else if (curPage < numPages){
            return [this._generateMarkupBtn('+', 'next', 'forward'), this._generateMarkupBtn('-', 'prev', 'back')].join('')
        }
        // just one page
        return ""
    }

    _generateMarkupBtn(operator, direction, position){
        let curPage = this._data.page
        let page = 0 //initial start
        if (operator === '+'){
            page = curPage + 1
        }
        else if (operator === '-'){
            page = curPage - 1
        }
        return `
            <button data-goto="${page}" class="btn btn--${direction} countries-btn flex justify-center items-center absolute top-0 ${direction === 'prev' ? 'left-0' : 'right-0'}  ">
                <ion-icon name="arrow-${position}-outline" class="pl-1"></ion-icon>
                <span class="ml-2 pr-2">Page ${page}</span>
            </button>
        `
         
    }
}

export default new PaginationView()