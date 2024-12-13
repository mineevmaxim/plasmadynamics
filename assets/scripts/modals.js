const submitButtons = document.querySelectorAll(".submit-btn");
const target = document.getElementById("form");

const modalWearResistant = document.getElementById("modal-wear-resistant");
const modalThermalBarrier = document.getElementById("modal-thermal-barrier");
const modalAntifriction = document.getElementById("modal-antifriction");
const modalHeatResistant = document.getElementById("modal-heat-resistant");
const modalCorrosionResistant = document.getElementById(
    "modal-corrosion-resistant"
);
const modalElectricallyConductive = document.getElementById(
    "modal-electrically-conductive"
);
const modalOverlay = document.getElementById("modal-overlay");

const modalWearResistantBtn = document.getElementById(
    "modal-wear-resistant-btn"
);
const modalThermalBarrierBtn = document.getElementById(
    "modal-thermal-barrier-btn"
);
const modalAntifrictionBtn = document.getElementById("modal-antifriction-btn");
const modalHeatResistantBtn = document.getElementById(
    "modal-heat-resistant-btn"
);
const modalCorrosionResistantBtn = document.getElementById(
    "modal-corrosion-resistant-btn"
);
const modalElectricallyConductiveBtn = document.getElementById(
    "modal-electrically-conductive-btn"
);

modalWearResistantBtn.addEventListener("click", () => {
    modalWearResistant.style.display = "block";
    modalOverlay.style.display = "block";
});
modalThermalBarrierBtn.addEventListener("click", () => {
    modalThermalBarrier.style.display = "block";
    modalOverlay.style.display = "block";
});
modalAntifrictionBtn.addEventListener("click", () => {
    modalAntifriction.style.display = "block";
    modalOverlay.style.display = "block";
});
modalHeatResistantBtn.addEventListener("click", () => {
    modalHeatResistant.style.display = "block";
    modalOverlay.style.display = "block";
});
modalCorrosionResistantBtn.addEventListener("click", () => {
    modalCorrosionResistant.style.display = "block";
    modalOverlay.style.display = "block";
});
modalElectricallyConductiveBtn.addEventListener("click", () => {
    modalElectricallyConductive.style.display = "block";
    modalOverlay.style.display = "block";
});

modalOverlay.addEventListener("click", closeModal);
submitButtons.forEach((submitButton) =>
    submitButton.addEventListener("click", goToForm)
);

function closeModal() {
    modalWearResistant.style.display = "none";
    modalThermalBarrier.style.display = "none";
    modalAntifriction.style.display = "none";
    modalHeatResistant.style.display = "none";
    modalCorrosionResistant.style.display = "none";
    modalElectricallyConductive.style.display = "none";
    modalOverlay.style.display = "none";
}

function goToForm() {
    closeModal();
    target.scrollIntoView({ block: "center", behavior: "smooth" });
}
