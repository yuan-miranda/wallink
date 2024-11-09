const locationData = {
    Philippines: {
        Bulacan: ["Malolos", "Meycauayan", "San Jose del Monte", "Santa Maria"],
        Pampanga: ["Angeles", "San Fernando", "Mabalacat", "Guagua"]
    }
}

function updateProvinces() {
    const countrySelect = document.getElementById("country");
    const provinceSelect = document.getElementById("province");
    const citySelect = document.getElementById("city");
    const selectedCountry = countrySelect.value;

    provinceSelect.innerHTML = '<option value="">Select Province</option>';
    citySelect.innerHTML = '<option value="">Select City</option>';

    if (selectedCountry === "Philippines" && locationData[selectedCountry]) {
        Object.keys(locationData[selectedCountry]).forEach(province => {
            const option = document.createElement("option");
            option.value = province;
            option.textContent = province;
            provinceSelect.appendChild(option);
        });
    }
}

function updateCities() {
    const countrySelect = document.getElementById("country");
    const provinceSelect = document.getElementById("province");
    const citySelect = document.getElementById("city");
    const selectedCountry = countrySelect.value;
    const selectedProvince = provinceSelect.value;

    citySelect.innerHTML = '<option value="">Select City</option>';

    if (selectedCountry && selectedProvince && locationData[selectedCountry][selectedProvince]) {
        locationData[selectedCountry][selectedProvince].forEach(city => {
        const option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        citySelect.appendChild(option);
    });
  }
}

function submitButtonListener() {
    const submitButton = document.getElementById("submitButton");
    submitButton.addEventListener("click", () => {
        window.location.href = "checkout-gcash-qr.html";
    });
}

document.addEventListener('DOMContentLoaded', () => {
    submitButtonListener();
});