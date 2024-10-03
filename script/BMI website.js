let currentIndex = 0;
        const slides = document.querySelectorAll('.slide');

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length; 
            showSlide(currentIndex);
        }

    
showSlide(currentIndex);

setInterval(nextSlide, 2000);


document.getElementById("calculate").addEventListener("click", function() {

    const height = parseFloat(document.getElementById("heightid").value) / 100; 
    const weight = parseFloat(document.getElementById("weightid").value);
    
    
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        document.getElementById("calculateresult").textContent = "Please enter valid height and weight.";
        document.getElementById("calculatemessage").textContent = "";
        return;
    }
    
    
    const bmi = weight / (height * height);
    const roundedBMI = bmi.toFixed(2); 
    
    
    document.getElementById("calculateresult").textContent = "Your BMI is: " + roundedBMI;

    if(roundedBMI < 18.0)
    {
        document.getElementById("calculatemessage").textContent = "Your weight is Underweight";
    }
    else if(roundedBMI >=18.0 && roundedBMI <=24.9)
    {
        document.getElementById("calculatemessage").textContent = "Your weight is Normal" ;
    }
    else if(roundedBMI >25.0 && roundedBMI <=29.9)
    {
        document.getElementById("calculatemessage").textContent = "Your Weight is Overweight";
    }
    else if(roundedBMI >=30.0)
    {
        document.getElementById("calculatemessage").textContent = "Your Weight is Obese";
    }
});
document.getElementById("clear").addEventListener("click", function() {
    
    document.getElementById("calculatemessage").textContent = "";
    document.getElementById("calculateresult").textContent = "";
    document.getElementById("heightid").value = "";
    document.getElementById("weightid").value = "";
   
});

const navIcon = document.getElementById('nav-icon');
const container = document.getElementById('container');
const navlinks = document.getElementById('navlinks') 

navIcon.addEventListener('click', () => {
    navlinks.classList.toggle('active');
    container.classList.toggle('active');
});
// navIcon.addEventListener('click', () => {

//     container.classList.toggle('active');
// });

// const navIcon = document.getElementById('nav-icon');
// const container = document.getElementById('container');