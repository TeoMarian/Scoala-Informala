'use strict';

fetch('https://api.openweathermap.org/data/2.5/weather?q=Cluj-Napoca,ro&APPID=1455c30d5c74cdda1243bffd7035cb6c')
    .then(response => response.json())
    .then(data =>
        console.log(data)
    );





var field = document.querySelector('textarea');
var backUp = field.getAttribute('placeholder');
const addCommentBtn = document.querySelector('.addCommentBtn');
const clear = document.getElementById('clear');


field.onfocus = function () {
    this.setAttribute('placeholder', '');
    this.style.borderColor = "#333";
    addCommentBtn.style.display = 'block';
}

field.onblur = function () {
    this.setAttribute('placeholder', backUp)
}

clear.onclick = function () {
    addCommentBtn.style.display = "none";
    field.value = "";
}

const commentSection = document.getElementById('allSubmittedComments');
addCommentBtn.addEventListener('click', addComment);


const comments = [];

function addComment() {
    const commentOwner = document.getElementById("userName").value;
    const commentBody = document.getElementById("newComment").value;
    if (commentOwner.length !== 0 && commentBody.length !== 0) {
        let comment = {
            owner: commentOwner,
            comment: commentBody
        };
        comments.push(comment);
        refreshList();
    }
};


function showComments() {
    // debugger;
    for (let i = 0; i < comments.length; i++) {
        const wrapComment = document.createElement('div');
        const commentBox = document.createElement('div');
        commentBox.innerHTML = comments[i].owner + " " + comments[i].comment;
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Delete';
        deleteButton.className = 'deleteComment';
        deleteButton.setAttribute("onclick", "deleteComment(" + i + ")");
        wrapComment.className = 'commentWrapper';

        wrapComment.append(commentBox, deleteButton);
        commentSection.append(wrapComment);
    }

};

function deleteComment(index) {
    comments.splice(index, 1);

    refreshList();
};

function refreshList() {
    commentSection.innerHTML = "";
    showComments();
}