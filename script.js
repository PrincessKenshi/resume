document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector('.header');
    const info = document.querySelector('.info');

    header.addEventListener('click', function () {
        const margin = 25; // Adjust the margin value as needed
        const infoOffset = info.offsetTop - margin;
        window.scrollTo({ top: infoOffset, behavior: 'smooth' });
    });
});


// Fetch data from Express.js server
fetch('https://noderesume.onrender.com/resume')
  .then(response => response.json())
  .then(data => {
    // Populate Personal Information
    document.getElementById('name').innerHTML = `<h1>Hello, I am ${data.Personal_Information[0].name}</h1>`;
    document.getElementById('profile-pic').src = data.Personal_Information[0].profile_pic;
    document.getElementById('Gender:').innerHTML = `<h4 id="Gender:">Gender: ${data.Personal_Information[0].Gender}</h4>`;
    document.getElementById('Age:').innerHTML = `<h4 id="Age:">Age: ${data.Personal_Information[0].Age}</h4>`;
    document.getElementById('Contact Number:').innerHTML = `<h4 id="Contact Number:">Contact Number: ${data.Personal_Information[0].ContactNo}</h4>`;
    document.getElementById('BirthDate:').innerHTML = `<h4 id="BirthDate:">Birthday: ${data.Personal_Information[0].Birthdate}</h4>`;
    document.getElementById('Address:').innerHTML = `<h4 id="Address:">Address: ${data.Personal_Information[0].Address}</h4>`;
    document.getElementById('Email:').innerHTML = `<h4 id="Email:">Email: ${data.Personal_Information[0].Email}</h4>`;

    // Populate About Me
    document.getElementById('aboutmeinfo').innerHTML = `<h3>${data.About_Me[0].Description}</h3>`;

    // Populate Skills
    let skillsHTML = '';
    data.Skills.forEach(skill => {
      skillsHTML += `<p>${skill.SkillName}</p>
      <div class="ps">
      <div class="skills">${skill.Percentage}</div>
      </div>`;
    });
    document.getElementById('proskils').innerHTML = skillsHTML;

    // Populate Education
    let educationHTML = '';
    data.Education.forEach(edu => {
      educationHTML += `<h2>${edu.School}</h2>
      <h3>${edu.Level} | ${edu.Year}</h3>
      <p>${edu.Address}</p><br>`;
    });
    document.getElementById('educationinfo').innerHTML = educationHTML;

    // Populate Work Experience
    document.getElementById('experienceinfo').innerHTML = `<h3>${data.Work_Experience[0].Description}</h3>`;

    // Populate References
    document.getElementById('referenceinfo').innerHTML = `<h3>${data.References[0].Description}</h3>`;
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

  fetch('https:noderesume.onrender.com/resume')
    .then(response => response.json())
    .then(data => {
        document.getElementById('degree').innerText = data.education.degree;
        document.getElementById('year').innerText = data.education.year;
        document.getElementById('university').innerText = data.education.university;

        const skillsList = document.getElementById('skills');
        data.skills.forEach(skill => {
            const li = document.createElement('li');
            li.innerText = skill;
            skillsList.appendChild(li);
        });

        const experienceList = document.getElementById('experience');
        data.experience.forEach(exp => {
            const li = document.createElement('li');
            li.innerText = exp;
            experienceList.appendChild(li);
        });

        const awardsList = document.getElementById('awards');
        data.awards.forEach(award => {
            const li = document.createElement('li');
            li.innerText = award;
            awardsList.appendChild(li);
        });

        document.getElementById('name').innerText = data.personalInfo.name;
        document.getElementById('address').innerText = data.personalInfo.address;
        document.getElementById('phoneNumber').innerText = data.personalInfo.phoneNumber;
        document.getElementById('email').innerText = data.personalInfo.email;
        document.getElementById('birthdate').innerText = data.personalInfo.birthdate;
        document.getElementById('gender').innerText = data.personalInfo.gender;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });