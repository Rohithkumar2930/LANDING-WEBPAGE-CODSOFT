const scriptURL = 'https://script.google.com/macros/s/AKfycbw6pOlLL4PKihCkf9cHXmqflTJpPCI_Z7RYFgUu2N6bD89MVNdkDlbuOegxjizXNRf6IA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Booking Confirmed"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 3000)
        })
        .catch(error => console.error('Error!', error.message))
})