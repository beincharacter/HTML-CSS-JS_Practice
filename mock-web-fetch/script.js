const allCurr = document.querySelectorAll('.onthis');

for (let curr of allCurr) {
    curr.addEventListener('click', () => {
        
        for (let c of allCurr) {
            c.style.paddingBelow = "none";
            c.style.backgroundColor = ''
        }
        
        curr.style.borderBelow = "black";
        curr.style.backgroundColor = 'rgb(209, 233, 241)'
    })
}
const allNav = document.querySelectorAll('.on-nav');

for (let nav of allNav) {
    nav.addEventListener('click', () => {
        
        for (let c of allNav) {
            c.style.paddingBelow = "none";
            c.style.backgroundColor = ''
        }
        
        nav.style.borderBottom = "black";
        nav.style.backgroundColor = 'rgb(204, 178, 178)'
    })
}


const API_URL = 'https://example.com/api/companies';

async function getData() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function renderData() {
  const data = await getData();

  const container = document.querySelector('.container');

  data.forEach((company) => {
    const row = document.createElement('div');
    row.classList.add('row');

    // Checkmark button
    const checkmarkButton = document.createElement('button');
    checkmarkButton.classList.add('checkmark-button');
    checkmarkButton.innerHTML = '&#10003;';
    row.appendChild(checkmarkButton);

    // Company logo
    const logo = document.createElement('img');
    logo.classList.add('logo');
    logo.src = company.logo;
    row.appendChild(logo);

    // Company name
    const name = document.createElement('div');
    name.classList.add('name');
    name.textContent = company.name;
    row.appendChild(name);

    // Status
    const status = document.createElement('div');
    status.classList.add('status');
    status.textContent = company.active ? 'Active' : 'Inactive';
    row.appendChild(status);

    // About section
    const about = document.createElement('div');
    about.classList.add('about');
    about.textContent = company.about;
    row.appendChild(about);

    // User section
    const userSection = document.createElement('div');
    userSection.classList.add('user-section');
    company.users.forEach((user) => {
      const userProfile = document.createElement('img');
      userProfile.classList.add('user-profile');
      userProfile.src = user.profile;
      userSection.appendChild(userProfile);
    });
    row.appendChild(userSection);

    // Value bar
    const valueBar = document.createElement('input');
    valueBar.classList.add('value-bar');
    valueBar.type = 'range';
    valueBar.min = 0;
    valueBar.max = 100;
    valueBar.value = company.value;
    row.appendChild(valueBar);

    // Delete button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = 'Delete';
    row.appendChild(deleteButton);

    // Edit button
    const editButton = document.createElement('button');
    editButton.classList.add('edit-button');
    editButton.textContent = 'Edit';
    row.appendChild(editButton);

    container.appendChild(row);
  });
}

renderData();

