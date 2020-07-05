const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle')
    }
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    const country = await getCountry(location.country)
    return country
}

const getLocation = async () => {
    const response = await fetch('https://restcountries.eu/rest/v2/all')
    const location = {city: 'New York', country: 'US'}
    return location
}

const getCountry = async (countryCode) => {
    const response = await fetch('https://restcountries.eu/rest/v2/all') 
    if (response.status === 200) {
        const data = await response.json()
        return data.find(country => country.alpha2Code === countryCode)
    } else {
        throw new Error('Unable to fetch countries')
    }
}