const postBtn = document.querySelector('.btn-post').addEventListener('click', addComment);
const commentField = document.querySelector('.comment-field');
const commentSection = document.querySelector('.comment-section');

let commentArr =[];
let output = "<ul>";
loadComments();
function addComment(evt) {
    console.log(commentSection);
    evt.preventDefault();
    console.log(commentField.value);
    if(commentField.value != null) {
        output+= `<li>${commentField.value}</li>`;
        commentArr.push(commentField.value);
    }
    localStorage.setItem('comments',JSON.stringify(commentArr));
    console.log(output);
    output+="</ul>";
    commentSection.innerHTML = output;
}

// function loadComments() {
//     commentSection.innerHTML = JSON.parse(localStorage.getItem('comments'));
// }

