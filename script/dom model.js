//Accessing Dom Elements
const title=document.getElementById('titleid');
const description=document.getElementById('descriptionid');
const btn=document.getElementById('buttonid');
const list=document.getElementById('listid');
const inputfield=document.getElementById('inputid');
const addbtn=document.getElementById('addid');




function change()
{
    title.textContent = "Welcome to our DOM";
    description.textContent="Description is changed";
    title.style.color="Blue";
    description.style.color="Green";
}

function additem()
{
   const typevalue =  inputfield.value;
   const newitem = document.createElement('li');
   newitem.textContent=typevalue;
   list.appendChild(newitem);

}




btn.addEventListener('click',change);
addbtn.addEventListener('click',additem);
