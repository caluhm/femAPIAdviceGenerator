// create a function that fetches the data from the API https://api.adviceslip.com/advice
// and returns the advice as a string
// call the function and log the result to the console

const fetchAdvice = async () => {
    const response = await fetch( 'https://api.adviceslip.com/advice' );
    const data = await response.json();
    const advice = data.slip.advice;
    const id = data.slip.id;
    console.log(advice);
    console.log(id);
    document.getElementById('advice').innerHTML = advice;
    document.getElementById('id').innerHTML = id;
} 

