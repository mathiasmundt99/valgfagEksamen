// Her sættes variablen commentIndex = 0
let commentIndex = 0;
// Her bruges vores querySelector til at ramme alle elementer med klassen "comment"
const comments = document.querySelectorAll('.comment');

// Den function sørger for at fjerne active klassen på alle comments
// Udover den comment hvor commetIndex = i 
function showComment(index) {
    comments.forEach((comment, i) => {
        comment.classList.remove('active');
        if (i === index) {
            comment.classList.add('active');
        }
    });
}

// Function til pilene på index.html
// commentIndex sættes og bruges i showComment()
// % bruges til at sørger for at vi ikke overgår comment.lentgh men wrapper tilbage til 0 
function nextComment() {
    commentIndex = (commentIndex + 1) % comments.length;
    showComment(commentIndex);
}

// Function til pilene på index.html
// commentIndex sættes og bruges i showComment()
function prevComment() {
    commentIndex = (commentIndex - 1 + comments.length) % comments.length;
    showComment(commentIndex);
}

// Vis den første kommentar 
showComment(commentIndex);
