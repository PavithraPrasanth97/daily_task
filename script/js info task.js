const courses = {
    title: "Courses",
    items: [
        "Java",
        "JavaScript",
        "Python"
    ]
};

const address = {
    title: "Address",
    items: ["Salem", "Tamilnadu", "India"]
};

const businessHour = {
    title: "Business Hour",
    items: [
        "Monday-Friday: 9:00 - 18:00",
        "Saturday: 9:00 - 16:00",
        "Sunday: Closed"
    ]
};

const sections = [courses, address, businessHour];

function displayInfo() {
    const footer = document.getElementById('footer');
    
    sections.forEach(section => {
        footer.appendChild(createSection(section));
    });
}

function createSection(section) {
    const sectionDiv = document.createElement('div');
    
    const sectionTitle = document.createElement('h1');
    sectionTitle.textContent = section.title;
    sectionDiv.appendChild(sectionTitle);

    const sectionList = document.createElement('ul');
    section.items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item; 
        sectionList.appendChild(listItem);
    });
    
    sectionDiv.appendChild(sectionList);
    return sectionDiv;
}

window.addEventListener('load', displayInfo);
