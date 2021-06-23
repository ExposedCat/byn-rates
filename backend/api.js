import fetch from 'node-fetch'

const apiEndpoint = 'https://www.nbrb.by/api/exrates'

async function apiCall(path, parameters = {}) {
    const stringParameters = Object.entries(parameters).map(parameter => `${parameter[0]}=${parameter[1]}`).join('&')
    try {
        const response = await fetch(`${apiEndpoint}/${path}?${stringParameters}`)
        return response.json()
    } catch (error) {
        console.error(error)
        return null
    }
}

export { apiCall }