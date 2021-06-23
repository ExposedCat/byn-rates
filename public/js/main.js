const table = document.querySelector('#rates-table tbody')

window.onload = async event => {
    const actualCurrencies = await getActualCurrencies()
    for (const currency of actualCurrencies) {
        const row = document.createElement('tr')
        
        const flagWrapper = document.createElement('td')
        const flagUri = `https://www.countryflags.io/${currency.Cur_Abbreviation.slice(0, 2)}/flat/64.png`
        let flag = `<img src="${flagUri}" class="flag">`

        const nameWrapper = document.createElement('td')
        nameWrapper.innerText = `${currency.Cur_Scale} ${currency.Cur_Name}`

        const currencyWrapper = document.createElement('span')
        currencyWrapper.innerText = `  ${currency.Cur_Abbreviation}`

        const rateWrapper = document.createElement('td')
        rateWrapper.innerText = `${currency.Cur_OfficialRate.toFixed(4)}`

        const dateWrapper = document.createElement('td')
        dateWrapper.innerText = `${new Date(currency.Date).toLocaleDateString('RU')}`

        flagWrapper.insertAdjacentHTML('beforeend', flag)
        flagWrapper.appendChild(currencyWrapper)
        row.appendChild(flagWrapper)
        row.appendChild(nameWrapper)
        row.appendChild(rateWrapper)
        row.appendChild(dateWrapper)
        table.appendChild(row)
    }
}