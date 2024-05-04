document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector('.header');
    const info = document.querySelector('.info');

    header.addEventListener('click', function () {
        const margin = 25; // Adjust the margin value as needed
        const infoOffset = info.offsetTop - margin;
        window.scrollTo({ top: infoOffset, behavior: 'smooth' });
    });
});


fetch('https://noderesume.onrender.com/')
.then(response => response.json())
.then(data => {
    // Display personal information
    document.getElementById('name').innerText = data.personalInfo.name;
    document.getElementById('fjob').innerText = data.personalInfo.fjob;
    document.getElementById('birthdate').innerText = "Birthday: " + data.personalInfo.birthdate;
    document.getElementById('gender').innerText = "Gender: " + data.personalInfo.gender;
    document.getElementById('age').innerText = "Age: " + data.personalInfo.age;
    document.getElementById('address').innerText = "Address: " + data.personalInfo.address;
    document.getElementById('phoneNumber').innerText = "Contact Number: " + data.personalInfo.phoneNumber;
    document.getElementById('email').innerText = "Email: " + data.personalInfo.email;

    // Display about me
    document.getElementById('aboutme').innerText = data.aboutme;

    // Display skills
    const skillsList = document.getElementById('skills');
    data.skills.forEach(skill => {
        const li = document.createElement('li');
        li.innerText = skill;
        skillsList.appendChild(li);
    });

    // Display education
    const educationContainer = document.getElementById('education');
    data.education.forEach(edu => {
        const eduDiv = document.createElement('div');
        eduDiv.innerHTML = `
            <h2>${edu.school}</h2>
            <p>${edu.level} | ${edu.year}</p>
            <p>${edu.address}</p>
        `;
        educationContainer.appendChild(eduDiv);
    });

    // Display experience
    const experienceList = document.getElementById('experience');
    data.experience.forEach(exp => {
        const li = document.createElement('li');
        li.innerText = exp;
        experienceList.appendChild(li);
    });

    // Display awards
    const awardsList = document.getElementById('awards');
    data.awards.forEach(award => {
        const li = document.createElement('li');
        li.innerText = award;
        awardsList.appendChild(li);
    });

    // Display references
    const referencesList = document.getElementById('references');
    data.references.forEach(reference => {
        const li = document.createElement('li');
        li.innerText = reference;
        referencesList.appendChild(li);
    });
})
.catch(error => {
    console.error('Error fetching data:', error);
});
