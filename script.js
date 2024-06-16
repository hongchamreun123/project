const form = document.getElementById('contact-form');
const table = document.getElementById('contact-table');
const tbody = table.getElementsByTagName('tbody')[0];

let contactData = [];

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const date = new Date().toLocaleDateString();

  const contactItem = {
    name,
    phone,
    email,
    date
  };

  contactData.push(contactItem);

  updateTable();

  form.reset();
});

function updateTable() {
  tbody.innerHTML = '';

  contactData.forEach((item, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.name}</td>
      <td>${item.phone}</td>
      <td>${item.email}</td>
      <td>${item.date}</td>
      <td>    
    `;
    tbody.appendChild(row);
  });
}


let editingIndex = -1;

function updateTable() {
  tbody.innerHTML = '';

  contactData.forEach((item, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.name}</td>
      <td>${item.phone}</td>
      <td>${item.email}</td>
      <td>${item.date}</td>
      <td>
        <button class="edit-btn" data-index="${index}">Edit</button>
        <button class="delete-btn" data-index="${index}">Delete</button>
      </td>
    `;
    tbody.appendChild(row);
  });

  const editBtns = document.getElementsByClassName('edit-btn');
  const deleteBtns = document.getElementsByClassName('delete-btn');

  for (let i = 0; i < editBtns.length; i++) {
    editBtns[i].addEventListener('click', handleEdit);
  }

  for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener('click', handleDelete);
  }
}

function handleEdit(event) {
  const index = event.target.dataset.index;
  const contact = contactData[index];

  document.getElementById('name').value = contact.name;
  document.getElementById('phone').value = contact.phone;
  document.getElementById('email').value = contact.email;

  editingIndex = index;
  saveBtn.textContent = 'Update';
}

function handleDelete(event) {
  const index = event.target.dataset.index;
  contactData.splice(index, 1);
  updateTable();
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const date = new Date().toLocaleDateString();


  updateTable();
  form.reset();
});

updateTable();