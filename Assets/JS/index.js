
// Her sættes commentIndex = 0
let commentIndex = 0;
// Her bruges vores querySelector til at ramme alle elementer med klassen "comment"
const comments = document.querySelectorAll('.comment');

// Den function sørger for at fjerne active klassen på alle comments
// Udover den comment som commetIndex = i 
function showComment(index) {
    comments.forEach((comment, i) => {
        comment.classList.remove('active');
        comment.setAttribute('aria-hidden', 'true');
        if (i === index) {
            comment.classList.add('active');
            comment.setAttribute('aria-hidden', 'false');
        }
    });
}

// Function til pilene på index.html
function nextComment() {
    commentIndex = (commentIndex + 1) % comments.length;
    showComment(commentIndex);
}

// Function til pilene på index.html
function prevComment() {
    commentIndex = (commentIndex - 1 + comments.length) % comments.length;
    showComment(commentIndex);
}

showComment(commentIndex);
