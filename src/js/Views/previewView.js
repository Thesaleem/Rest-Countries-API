import View from "./View.js";

class previewView extends View {
    _parentElement = ''
    _generateMarkup() {
        return `
                <div class="countries bg-white dark:bg-dm-db cursor-pointer w-[280px] min-h-[350px] dark:shadow-none shadow-custom rounded-lg">
                    <div class="">
                        <img src="${
                        this._data.flag
                        }" alt="" class="max-h-[100%] max-w-[100%] ">            
                    </div>
                    <div class="p-6 pl-7 leading-8">
                        <h2 class="font-extrabold text-lg mb-3 country-name">${
                        this._data.name
                        }</h2>
                        <p class="font-medium">Population: <span class="font-light">${new Intl.NumberFormat().format(
                        this._data.population
                        )}</span></p>
                        <p class="font-medium">Region: <span class="font-light">${
                        this._data.region
                        }</span></p>
                        <p class="font-medium">Capital: <span class="font-light">${
                        this._data.capital
                        }</span></p>
                    </div>
                </div>
            `;
    }

}

export default new previewView();
