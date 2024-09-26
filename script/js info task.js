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

function displayInfo() {
    const footer = document.getElementById('footer');

    const coursesDiv = document.createElement('div');
    coursesDiv.classList.add('section', 'courses');

    const coursesTitle = document.createElement('h1');
    coursesTitle.textContent = Courses.title;
    coursesDiv.appendChild(coursesTitle);

    const coursesList = document.createElement('ul');
    Courses.courses.forEach(course => {
        const listItem = document.createElement('li');
        const itemTitle = document.createElement('h4');
        itemTitle.textContent = course;
        listItem.appendChild(itemTitle);
        listItem.style.listStyleType = 'none';
        coursesList.appendChild(listItem);
    });
    coursesDiv.appendChild(coursesList);
    footer.appendChild(coursesDiv);

    
    const addressDiv = document.createElement('div');
    addressDiv.classList.add('section', 'address');

    const addressTitle = document.createElement('h1');
    addressTitle.textContent = Address.title;
    addressDiv.appendChild(addressTitle);

    const addressList = document.createElement('ul');
    Address.addr.forEach(addre => {
        const listItem = document.createElement('li');
        const itemTitle = document.createElement('h4');
        itemTitle.textContent = addre;
        listItem.appendChild(itemTitle);
        listItem.style.listStyleType = 'none';
        addressList.appendChild(listItem);
    });
    addressDiv.appendChild(addressList);
    footer.appendChild(addressDiv);
}

window.addEventListener('load', displayInfo);
