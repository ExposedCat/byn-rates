const apiEndpoint = 'https://nbrb.by/api/exrates'

function error(message, error) {
    // alert(message)
    console.error(error)
}

async function localApiCall(path) {
    try {
        const data = await fetch(`/localapi/${path}`)
        return {
            error: !data.ok,
            data: await data.json()
        }
    } catch (error) {
        return {
            error: true,
            data: error
        }
    }
}

async function getActualCurrencies() {
    const daily = await localApiCall('currencies?periodicity=0')
    const monthly = await localApiCall('currencies?periodicity=1')
    if (daily.error) {
        error(daily.error)
        return []
    }
    if (monthly.error) {
        error(monthly.error)
        return []
    }
    return daily.data.concat(monthly.data)
}