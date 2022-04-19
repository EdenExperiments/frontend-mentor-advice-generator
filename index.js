const adviceIdContainer = document.getElementById("IdNo")
const adviceTextContainer = document.getElementById("Advice")

async function generateAdvice() {
    // Fetch request using Async/Await 
    const response = await fetch('https://api.adviceslip.com/advice');
    const adviceJson = await response.json();
    const adviceId = adviceJson.slip.id;
    const adviceText = adviceJson.slip.advice;

    adviceIdContainer.textContent = adviceId;
    adviceTextContainer.textContent = adviceText;


    // Fetch method for practice. 
    
    // fetch('https://api.adviceslip.com/advice')
    //     .then(response => {
    //         if (!response.ok) {   //Check for network error, which does not set off .catch
    //             throw new Error("Network error occured")
    //         }
    //         return response.json()
    //     })
    //     .then(data => {
    //         adviceIdContainer.textContent = data.slip.id;
    //         adviceTextContainer.textContent = data.slip.advice;           
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })



    //Below is the XMLHttpRequest, which is added for practice and will work with 
    //IE, but also requires the onclick function to have the async removed and
    //the script tag to be moved to the head to work with IE, but due to it's end
    //of life in June, have not opted to spent large amounts of time on conditionals
    //for it to work completely. 

    //XMLHttpRequest method for IE
    // let xhr = new XMLHttpRequest();
    // xhr.open('GET', 'https://api.adviceslip.com/advice', true);
    // xhr.responseType = 'json';
    // xhr.onload = function() {
        //adviceIdContainer.textContent = data.slip.id;
        //adviceTextContainer.textContent = data.slip.advice;     
    // }
    // xhr.send();

}