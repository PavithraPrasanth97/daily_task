const Courses = {
    title: "Courses",
    courses: [
        "Java",
        "JavaScript",
        "Python"
    ]
};

const Address = {
    title: "Address",
    addr: ["Salem", "Tamilnadu", "India"]
};

const Business_Hour= {
    title: "Bussiness Hour",
    content : [
        "Monday-Friday : 9:00 - 18:00",
        "Saturday : 9:00 - 16:00",
        "Sunday : Closed"
    ]
};

function displayInfo() {
    const footer = document.getElementById('footer');

    // Create a div for courses
    const coursesDiv = document.createElement('div');
    coursesDiv.classList.add('Coursesstyle');

    const coursesTitle = document.createElement('h1');
    coursesTitle.textContent = Courses.title;
    coursesDiv.appendChild(coursesTitle);

    const coursesList = document.createElement('ul');
    Courses.courses.forEach(course => {
        const listItem = document.createElement('li');
        const itemTitle = document.createElement('h4');
        itemTitle.textContent = course;
        listItem.appendChild(itemTitle);
        coursesList.appendChild(listItem);
    });
    coursesDiv.appendChild(coursesList);
    footer.appendChild(coursesDiv);

    // Create a div for address
    const addressDiv = document.createElement('div');
    addressDiv.classList.add( 'Addressstyle');

    const addressTitle = document.createElement('h1');
    addressTitle.textContent = Address.title;
    addressDiv.appendChild(addressTitle);

    const addressList = document.createElement('ul');
    Address.addr.forEach(addre => {
        const listItem = document.createElement('li');
        const itemTitle = document.createElement('h4');
        itemTitle.textContent = addre;
        listItem.appendChild(itemTitle);
        addressList.appendChild(listItem);
    });
    addressDiv.appendChild(addressList);
    footer.appendChild(addressDiv);


      //create a div for business_hour
    const BusinessDiv = document.createElement('div');
    BusinessDiv.classList.add( 'Businessstyle');

    const BusinessTitle = document.createElement('h1');
    BusinessTitle.textContent = Business_Hour.title;
    BusinessDiv.appendChild(BusinessTitle);

    const BusinessList = document.createElement('ul');
    Business_Hour.content.forEach(cont => {
        const listItem = document.createElement('li');
        const itemTitle = document.createElement('h4');
        itemTitle.textContent = cont;
        listItem.appendChild(itemTitle);
        BusinessList.appendChild(listItem);
    });
    BusinessDiv.appendChild(BusinessList);
    footer.appendChild(BusinessDiv);
}

window.addEventListener('load', displayInfo);
