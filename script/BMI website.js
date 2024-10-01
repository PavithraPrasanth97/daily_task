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