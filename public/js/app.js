//console.log('client side javascript side is loaded')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message1')
const messageTwo = document.querySelector('#message2')




weatherForm.addEventListener('submit', (e) =>
{
    e.preventDefault()

    const location = search.value
    console.log(location)

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('/weather?address=' + location).then((response) =>
    {
        response.json().then((data) =>
        {
            if(data.error)
            {
                messageOne.textContent = data.error
            }
            else
            {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })


})




// fetch('http://localhost:3000/weather?address=chennai')