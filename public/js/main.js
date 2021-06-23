const button = document.querySelector('#load-rates')
const list = document.querySelector('#rates-list')

button.addEventListener('click', async event => {
    button.disabled = true
    button.value = 'Rates are loading..'
    list.innerHTML = ''
    const actualCurrencies = await getActualCurrencies()
    for (const currency of actualCurrencies) {
        const item = document.createElement('li')
        const rate = currency.Cur_OfficialRate / currency.Cur_Scale
        item.innerText = `${currency.Cur_Abbreviation}:BYN = ${rate.toFixed(4)}:1`
        list.appendChild(item)
    }
    button.disabled = false
    button.value = 'Reload rates'
})