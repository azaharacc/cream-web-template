const loadLanguage = (lang) => {
    fetch("assets/languages.json")
        .then(response => response.ok ? response.json() : Promise.reject("Error loading language file"))
        .then(data => {
            const languageData = data[lang];

            if (languageData) {
                // Asignar contenido directamente
                document.querySelector(".text-overlay h1").textContent = languageData.title;
                document.getElementById("text-overlay1").textContent = languageData["text-overlay1"];
                document.getElementById("subtitle1").textContent = languageData["subtitle1"];
                document.getElementById("text1").textContent = languageData["text1"];
                document.getElementById("text2").textContent = languageData["text2"];
                document.getElementById("subtitle2").textContent = languageData["subtitle2"];
                document.getElementById("text3").textContent = languageData["text3"];
                document.getElementById("copyright").textContent = languageData["copyright"];
                document.getElementById("contact-btn").textContent = languageData["contact-btn"];
                document.getElementById("contact-us").textContent = languageData["contact-us"];
                document.getElementById("contact-subtitle").textContent = languageData["contact-subtitle"];
                document.getElementById("where").textContent = languageData["where"];
                document.getElementById("contact-subtitle2").textContent = languageData["contact-subtitle2"];
                document.getElementById("contact-text").textContent = languageData["contact-text"];
                document.getElementById("contact-subtitle3").textContent = languageData["contact-subtitle3"];
                document.getElementById("contact-jobs").textContent = languageData["contact-jobs"];
                document.getElementById("contact-subtitle4").textContent = languageData["contact-subtitle3"];
                document.getElementById("contact-press").textContent = languageData["contact-press"];
                document.getElementById("contact-end").textContent = languageData["contact-end"];  
            }
        })
        .catch(error => console.error(error));
};

// Cambiar idioma
function changeLanguage(lang) {
    loadLanguage(lang);
}

function toggleLanguageDropdown() {
    const dropdown = document.getElementById("language-toggle");
    // Alterna la visibilidad del select
    dropdown.style.display = (dropdown.style.display === "none" || dropdown.style.display === "") ? "block" : "none";
}

