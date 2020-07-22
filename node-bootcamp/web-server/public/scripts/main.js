console.log('Client side JS loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

const getData = async (searchTerm) => {
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    const url = `/weather?address=${searchTerm}`

    const response = await fetch(url)
    if (response.status === 200) {
        const data = await response.json()
        if (!data.error) {
            return data
        } else {
            console.log(data)
            throw new Error('No data to return')
        }
    } else {
        throw new Error('Bad request')
    }
}

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    if (search.value) {
        getData(search.value).then((response) => {
            console.log(response)
            messageOne.textContent = ''
            messageTwo.textContent = `It's ${response.forecast} degrees in ${response.location}`
        }).catch((error) => {
            messageOne.textContent = 'Something went wrong! Please try again later.'
            console.log(error)
        })
    }
})

