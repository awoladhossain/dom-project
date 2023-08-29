let search = "";

const loadData = () => {
    const URL = "https://restcountries.com/v3.1/all";
    fetch(URL)
        .then((res) => res.json())
        .then((data) => {
            showData(data.slice(0, 18))
        })
}

const showData = (data) => {

    const parentContainer = document.getElementById('sec-id');
    parentContainer.innerHTML = ""; //Clear existing content
    data.forEach(element => {

        const countryName = element.name.common;

        const div = document.createElement("div");
        div.innerHTML = `
       <div class="card w-full h-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
            <img src="${element.flags.png}" alt="Shoes" class="rounded-xl" />
        </figure>
          <div class="card-body items-center text-center">
                <h2 class="card-title">${element.name.common} </h2>
                <div class="card-actions">
            <label onClick="getDetailsData('${
            element.cca2
      }')" for="my-modal" class="btn">Details</label>
        </div>

        </div>
       `
        // ^  Filter and display based on search input
        if (countryName.toUpperCase().indexOf(search.toUpperCase()) > -1) {
            div.style.display = "";
        } else {
            div.style.display = "none";
        }
        parentContainer.appendChild(div);
    });
}


const showAllDataTogether = () => {
    const URL = "https://restcountries.com/v3.1/all";
    fetch(URL)
        .then((res) => res.json())
        .then((data) => {
            showData(data)
        })
}

const showDetail = (id) => {
    console.log(id);
    const URL = `https://restcountries.com/v3.1/alpha/${id}`;
    console.log(URL);
    fetch(URL)
        .then((res) => res.json())
        .then((data) => showModal(data[0]))
}

const showModal = (value) => {
    console.log(value);
}





const seachFn = () => {
    search = document.getElementById('myInput').value.toUpperCase(); //Update the search variable
    loadData(); // Reload data with the updated search
}

loadData()
