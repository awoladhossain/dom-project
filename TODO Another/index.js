
let count = 0;

function submit() {
    const inputValue = document.getElementById('inputBox');
    const myElementValue = inputValue.value;
    inputValue.value = "";

    console.log(myElementValue);
    count += 1;

    const container = document.getElementById('tbodyAll');
    const tr = document.createElement("tr");
    tr.innerHTML = `
                    <th>${count}</th>
                    <td>${myElementValue}</td>
                    <td><button onclick ="success(event)" class="btn btn-outline btn-success">Success</button></td>
                    <td><button onclick = "deleteData(event)" class="btn btn-outline btn-error">Delete</button></td>
    `
    container.appendChild(tr);
    saveData();
}

function success(event) {
    event.target.parentElement.parentElement.style.backgroundColor = "teal";
    saveData();
}
function deleteData(event) {
    event.target.parentElement.parentElement.style.display = "none";
    saveData();
}

function clearAll() {
    const container = document.getElementById('tbodyAll');
    container.innerHTML = "";
    saveData();
}

function saveData() {
    const container = document.getElementById('tbodyAll');
    localStorage.setItem("data", container.innerHTML)
}

function showData() {
    const container = document.getElementById('tbodyAll');
    container.innerHTML = localStorage.getItem("data");
}
showData();