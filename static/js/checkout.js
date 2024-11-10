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

function defaultValues() {
    const countrySelect = document.getElementById("countryDropdown");
    const provinceSelect = document.getElementById("provinceDropdown");
    const citySelect = document.getElementById("cityDropdown");
    const paymentMethodSelect = document.getElementById("paymentMethodDropdown");
    const deliveryOptionSelect = document.getElementById("deliveryOptionDropdown");
    
    countrySelect.selectedIndex = 0;
    provinceSelect.selectedIndex = 0;
    citySelect.selectedIndex = 0;
    paymentMethodSelect.selectedIndex = 0;
    deliveryOptionSelect.selectedIndex = 0;
}

function submitButtonListener() {
    const submitButton = document.getElementById("submitButton");
    const paymentMethodSelect = document.getElementById("paymentMethodDropdown");
    submitButton.addEventListener("click", () => {
        if (paymentMethodSelect.value === "gcash") window.location.href = "checkoutGcashQR.html";
        else window.location.href = "checkoutPending.html";
    });
}

document.addEventListener('DOMContentLoaded', () => {
    submitButtonListener();
    defaultValues();
});