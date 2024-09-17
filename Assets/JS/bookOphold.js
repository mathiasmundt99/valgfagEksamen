// denne video er brugt som inspiration til accordion: https://www.youtube.com/watch?v=gxgP2ydOwtA&ab_channel=TechBasics
// her fanges den klasse som hedder contentBox hvor indholdet til hvert spørgsmål i accordion er
const accordion = document.querySelectorAll('.contentBox');

// her er et for loop som går igennem alle de elementer som er i accordion listen. 
// for hvert element tilfæjes der er en click event som toggler klassen active på .contentBox som får accordion til at folde sig ud.
for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active');
    });
}