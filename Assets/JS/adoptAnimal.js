//https://www.w3schools.com/howto/howto_js_dropdown.asp

// Først bruges querySelectorAll til at ramme alle elementer med klassen dropdownBtn
//Her påsættes der en forEach, som itterer igennem alle elementerne 
document.querySelectorAll('.dropdownBtn').forEach(button => {

// Her tilføjes en EventListner på elementerne, som lytter efter 'click', og derefter eksekvere en funktion
    button.addEventListener('click', function(event) {
// Her bruges this til at refferer til elementet som blev klikket på. this.nextElemtSibling sikre at det næste elemnt altid er det næste i rækken ift HTML
        const dropdownOptions = this.nextElementSibling;
// Her bruges en if- else til at sætte displey = block/none alt efter deres current state
        if (dropdownOptions.style.display === 'block') {
            dropdownOptions.style.display = 'none';
        } else {
            dropdownOptions.style.display = 'block';
        }
    });
});

// https://www.w3schools.com/howto/howto_js_dropdown.asp
// Funktion som sikre at klik udenfor boksen lukker dropdown ned
window.onclick = function(event) {
    if (!event.target.matches('.dropdownBtn') && !event.target.closest('.dropdownOptions')) {
        const dropdowns = document.querySelectorAll('.dropdownOptions');
        dropdowns.forEach(dropdown => {
            if (dropdown.style.display === 'block') {
                dropdown.style.display = 'none';
            }
        });
    }
}
