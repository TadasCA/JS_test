/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

const renderCars = (cars) => {
    const carsContainer = document.getElementById("output");
    carsContainer.innerHTML = "";

    cars.forEach(car => {
    const brand = document.createElement('div');
    brand.innerText = "Car brand: " + car.brand;
  
    const model = document.createElement('p');
    model.innerText = "Models: " + car.models;
  
    const carCard = document.createElement('div')
    carCard.append(brand, model);
    carsContainer.append(carCard);
    brand.style.backgroundColor = "#F3D99F";
    brand.style.color = "red";
    brand.style.textAlign = "center";
    brand.style.padding = "0.5rem";
    model.style.backgroundColor = "#354326"
    model.style.color = "#eee";
    model.style.letterSpacing = "2px"
  })
};
  
  const fetchCars = async () => {
    try {
      const response = await fetch(ENDPOINT);
      if (response.ok) {
        const data = await response.json();
        renderCars(data);
      }
    } catch(error) {
      console.error(error);
    }
  };

  fetchCars();