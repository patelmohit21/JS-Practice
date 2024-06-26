const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const guide = document.querySelectorAll('p')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please enter a valid height ${height}`
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please enter a valid weight ${weight}`
    } else {
        const bmi =(weight / ((height*height)/10000)).toFixed(2)

        results.innerHTML = `<span>${bmi}</span>`
    }

    
});

// time 

// const clock = document.querySelector('#clock')

// setInterval(function(){
//   let date = new Date()
//   clock.innerHTML = date.toLocaleTimeString()
// }, 1000)


