/**
 * File: pesquisarPage.js
 * Autor: Renato Reis
 * Data: 03/08/2020
 */

class HomePage {
    // define os elementos
    get inputSearch() { return $('input[name="q"]') };

    // métodos dos elementos
    pesquisar(search) {
        this.inputSearch.waitForDisplayed();
        this.inputSearch.setValue(search);
        BhxBrowser.keys('Enter');
    }

    open(){
        browser.url('/')
    }
}

module.exports = HomePage