const  Courses ={
    title:"Courses",
    courses: [
         "Java",
        "JavaScript",
        "Python" ] 
    };
const  Address ={
    title:"Address",
    addr:["Salem",
        "Tamilnadu",
        "India"]
};

function displayInfo()
{
    const infoDiv = document.getElementById('infoId');
    const infoDiv1=document.getElementById('infoId1');
    
    let content  = `<h1>${Courses.title}</h1>`;
     content += `<ul>`;
    Courses.courses.forEach(course => {
        content += `<h4><li>${course}</li></h4>`;
    });
    content += `</ul>`;
    infoDiv.innerHTML =content;

    infoDiv.style.backgroundColor='#BCC6CC';
    infoDiv.style.padding='20px';
    infoDiv.style.borderRadius = '5px';


    let content1= `<h1>${Address.title}</h1>`;
    content +=`<ul>`;
    Address.addr.forEach(addre=>{
        content1 +=`<h4><li>${addre}</li></h4>`;
    });
    content1+=`</ul>`;
    infoDiv1.innerHTML = content1;

    infoDiv1.style.backgroundColor='#FFFF00';
    infoDiv1.style.padding='20px';
    infoDiv1.style.borderRadius = '5px';

    document.body.style.backgroundColor = '#e0f7fa';
}

window.addEventListener('load',displayInfo);