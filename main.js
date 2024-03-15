let yearIn = document.getElementById('yearInput')
let yearOut = document.getElementById('yearOutput')
let yearTime = new Date().getFullYear()
let monthIn = document.getElementById('monthInput')
let monthOut = document.getElementById('monthOutput')
let monthTime = new Date().getMonth() + 1
let dayIn = document.getElementById('dayInput')
let dayOut = document.getElementById('dayOutput')
let dayTime = new Date().getDate()
let days = ''

let error = document.getElementById('error')

document.getElementById('btn').addEventListener('click', verification)

// Detect leap years
if (monthTime === 1 || monthTime === 3 || monthTime === 5 || monthTime === 7 || monthTime === 8 || monthTime === 10 || monthTime === 12 ) {
    days = 31
} else if (monthTime === 2 && monthTime % 4 === 0) {
    days = 29
} else if (monthTime === 2) {
    days = 28
} else {
    days = 30
}

// Check if the inputs are correct
function verification(e) {
    e.preventDefault()
    if(dayIn.value === '' || monthIn.value === '' || yearIn.value === '') {
        dayIn.classList.add('error-input')
        monthIn.classList.add('error-input')
        yearIn.classList.add('error-input')
        error.style.display = 'block'
    } else {
        calculate()
    }
}

// Calculate your age
function calculate() {
    if (monthTime - monthIn.value < 0 && dayTime - dayIn.value < 0) {
        yearOut.innerHTML = `${yearTime - yearIn.value - 1}<span> years</span>`
        monthOut.innerHTML = `${monthTime - monthIn.value + 11}<span> months</span>`
        dayOut.innerHTML = `${dayTime - dayIn.value + days}<span> days</span>`
    } else if (monthTime - monthIn.value < 0) {
        yearOut.innerHTML = `${yearTime - yearIn.value - 1}<span> years</span>`
        monthOut.innerHTML = `${monthTime - monthIn.value + 12} <span> months</span>`
        dayOut.innerHTML = `${dayTime - dayIn.value}<span> days</span>`
    } else if (dayTime - dayIn.value < 0) {
        if (monthTime - monthIn.value === 0) {
            yearOut.innerHTML = `${yearTime - yearIn.value - 1}<span> years</span>`
            monthOut.innerHTML = `${monthTime - monthIn.value + 11}<span> months</span>`
            dayOut.innerHTML = `${dayTime - dayIn.value + days}<span> days</span>`    
        } else {
            yearOut.innerHTML = `${yearTime - yearIn.value}<span> years</span>`
            monthOut.innerHTML = `${monthTime - monthIn.value - 1}<span> months</span>`
            dayOut.innerHTML = `${dayTime - dayIn.value + days}<span> days</span>`    
        }
    } else {
        yearOut.innerHTML = `${yearTime - yearIn.value}<span> years</span>`
        monthOut.innerHTML = `${monthTime - monthIn.value}<span> months</span>`
        dayOut.innerHTML = `${dayTime - dayIn.value}<span> days</span>`
    }
}
