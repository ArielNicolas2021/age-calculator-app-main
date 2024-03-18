let yearIn = document.getElementById('yearInput')
let yearOut = document.getElementById('yearOutput')
let yearTime = new Date().getFullYear()
let yearLabel = document.getElementById('yearLabel')

let monthIn = document.getElementById('monthInput')
let monthOut = document.getElementById('monthOutput')
let monthTime = new Date().getMonth() + 1
let monthLabel = document.getElementById('monthLabel')

let dayIn = document.getElementById('dayInput')
let dayOut = document.getElementById('dayOutput')
let dayTime = new Date().getDate()
let dayLabel = document.getElementById('dayLabel')

let days = ''
let error = document.getElementById('error')


document.getElementById('btn').addEventListener('click', verification)

// Detect leap years


// Check if the inputs are correct
function verification(e) {
    e.preventDefault()

    if(dayIn.value === '' || monthIn.value === '' || yearIn.value === '' || dayIn.value <= 0 || dayIn.value > 31 || monthIn.value <= 0 || monthIn.value > 12 || yearIn.value < 1900 || yearIn.value > yearTime) {
        dayIn.classList.add('error-input')
        dayLabel.style.color = 'var(--light-red)'

        monthIn.classList.add('error-input')
        monthLabel.style.color = 'var(--light-red)'

        yearIn.classList.add('error-input')
        yearLabel.style.color = 'var(--light-red)'

        error.style.display = 'block'
    } else {
        calculate()
    }
}

// Calculate your age
function calculate() {
    if (monthIn.value === 1 || monthIn.value === 3 || monthIn.value === 5 || monthIn.value === 7 || monthIn.value === 8 || monthIn.value === 10 || monthIn.value === 12 ) {
        days = 31
    } else if (monthIn.value === 2 && yearIn.value % 4 === 0) {
        days = 29
    } else if (monthIn.value === 2) {
        days = 28
    } else {
        days = 30
    }

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

    dayIn.classList.remove('error-input')
    monthIn.classList.remove('error-input')
    yearIn.classList.remove('error-input')
    error.style.display = 'none'

}
