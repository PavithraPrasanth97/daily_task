
const calculate = document.getElementById('calculate');

calculate.addEventListener('click',function(){
    const simpleCalculationElement = document.getElementById('simpleCalculation').value;
    const resultArea=document.getElementById('resultArea');

try{
    const result = eval(simpleCalculationElement);
    resultArea.textContent =`Result: ${result}`;
}catch(error)
{
    resultArea.textContent =`Invalid expression`;
}
});

