document.addEventListener("DOMContentLoaded", async () => {
  try {
    // Get partials
    const headerResponse = await fetch('partials/header.html');
    const headerData = await headerResponse.text();
    document.getElementById('header-container').innerHTML = headerData;

    const sliderResponse = await fetch('partials/slider.html');
    const sliderData = await sliderResponse.text();
    document.getElementById('slider-container').innerHTML = sliderData;

    const imagesResponse = await fetch('partials/two-images.html');
    const imagesData = await imagesResponse.text();
    document.getElementById('images-container2').innerHTML = imagesData;

    const footerResponse = await fetch('partials/footer.html');
    const footerData = await footerResponse.text();
    document.getElementById('footer').innerHTML = footerData;

    const contactResponse = await fetch('partials/contact.html');
    const contactData = await contactResponse.text();
    document.getElementById('contact-popup').innerHTML = contactData;

    // Initialize the slider, popup and language after loading the partials
    initSlider();
    initPopup();
    loadLanguage('en');
  } 
  catch (error) {
    console.log('Error al cargar los partials: ', error);
  }
});
