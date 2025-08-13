
document.querySelectorAll(".tab-link").forEach(tab => {
    tab.addEventListener("click", function (event) {
        event.preventDefault();

        document.querySelectorAll(".tab-link").forEach(btn => btn.classList.remove("active"));
        document.querySelectorAll(".content-tab").forEach(content => content.style.display = "none");

        this.classList.add("active");
        document.getElementById(this.dataset.tab).style.display = "block";
    });
});


document.getElementById('findServices')?.addEventListener('click', function () {
    const locationInput = document.getElementById('location').value;
    const selectedService = document.getElementById('service').value;
    const output = document.getElementById('output');
    const results = document.getElementById('results');

    if (!locationInput) {
        alert('Please enter your location.');
        return;
    }

    let simulatedResponse = '';
    if (selectedService === 'ambulance') {
        simulatedResponse = `Ambulance services are available near ${locationInput}. Estimated arrival: 10 mins.`;
    } else if (selectedService === 'bed') {
        simulatedResponse = `Beds are available in hospitals near ${locationInput}. Immediate booking open.`;
    } else if (selectedService === 'doctor') {
        simulatedResponse = `Doctors can visit ${locationInput} within 10 minutes.`;
    }

    output.textContent = simulatedResponse;
    results.style.display = 'block';
});


document.getElementById('findAmbulance')?.addEventListener('click', function () {
    const locationInput = document.getElementById('location').value;
    const selectedHospital = document.getElementById('hospital').value;
    const selectedPayment = document.getElementById('paymentOption').value;
    const ambulanceOutput = document.getElementById('output');
    const ambulanceResults = document.getElementById('results');

    if (!locationInput || !selectedHospital || !selectedPayment) {
        alert('Please enter all required fields.');
        return;
    }

    ambulanceOutput.textContent =
        `You have requested an ambulance to ${selectedHospital} with a ${selectedPayment} payment option.`;
    ambulanceResults.style.display = 'block';
});

document.getElementById("bookTest")?.addEventListener("click", function () {
    const testType = document.getElementById("testType").value;
    const patientName = document.getElementById("patientName").value.trim();
    const appointmentDate = document.getElementById("appointmentDate").value;
    const hospitalLab = document.getElementById("hospitalLab").value;
    const paymentMethod = document.getElementById("paymentMethod").value;

    if (!testType || !patientName || !appointmentDate || !hospitalLab || !paymentMethod) {
        alert("Please fill out all fields before booking.");
        return;
    }

    const formattedDate = new Date(appointmentDate).toLocaleDateString();
    const output = `
        <strong>Patient Name:</strong> ${patientName} <br>
        <strong>Test Type:</strong> ${testType} <br>
        <strong>Appointment Date:</strong> ${formattedDate} <br>
        <strong>Lab Location:</strong> ${hospitalLab} <br>
        <strong>Payment Method:</strong> ${paymentMethod}
    `;

    document.getElementById("labOutput").innerHTML = output;
    document.getElementById("labResults").style.display = "block";
});


document.getElementById('submitBloodRequest')?.addEventListener('click', function (event) {
    event.preventDefault();

    const bloodGroup = document.getElementById('blood-group').value;
    const quantity = document.getElementById('quantity').value;
    const deliveryMethod = document.querySelector('input[name="delivery_method"]:checked')?.value;

    if (!bloodGroup || !quantity || !deliveryMethod) {
        alert('Please fill in all required fields.');
        return;
    }

    document.getElementById('blood-bank-response').textContent =
        `Your blood request for ${bloodGroup} (${quantity} units) has been submitted. Delivery method: ${deliveryMethod}.`;
    document.getElementById('blood-bank-results').style.display = 'block';
});
