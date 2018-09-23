const counter = document.getElementById('counter');
const minusButton = document.getElementById('-');
const plusButton = document.getElementById('+');
const likeButton = document.getElementById('<3');
const likes = document.querySelector('.likes')
const pauseButton = document.getElementById('pause')
const commentsForm = document.getElementById('comment-form');
const comments = document.getElementById('list');
const commentButton = document.getElementById('submit');

let count = 0; //starting the count of second;
let likesCount = {}; //counting the # of likes for each second;
let isPause = false; //just assign a status for our application;

setInterval(function(){
  if(isPause === false){
    count += 1;
    counter.innerText = count;
  }
}, 1000)

// setInterval format: https://www.w3schools.com/jsref/met_win_setinterval.asp
//The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).
//The setInterval() method will continue calling the function until clearInterval() is called, or the window is closed.

minusButton.addEventListener("click", function(e){
  count = count - 1;
    counter.innerText = count;
})

plusButton.addEventListener("click", function(e){
  count = count + 1;
    counter.innerText = count;
})

likeButton.addEventListener("click", function(e){
  likes.innerHTML = ""
  if (likesCount[count]){
     likesCount[count] += 1;
  } else {
    likesCount[count] = 1;
  }
  for (const key in likesCount) {
    likes.innerHTML += `<li>${key} has been liked ${likesCount[key]} times</li>`;
  }
})// this method is iterating whole object each time it is updated;

pauseButton.addEventListener("click", function(event){
  if (isPause === false){
    minusButton.disabled = true;
    plusButton.disabled = true;
    likeButton.disabled = true;
    pauseButton.innerText = "resume";
    likeButton.disabled = true;
    commentButton.disabled = true;
    isPause = !isPause;
  } else {
    minusButton.disabled = false;
    plusButton.disabled = false;
    likeButton.disabled = false;
    pauseButton.innerText = "pause"
    likeButton.disabled = false;
    commentButton.disabled = false;
    isPause = !isPause;
  }
})

commentsForm.addEventListener("submit", function(event){
  event.preventDefault();

  const input = event.target.querySelector('#inputstring').value;
  comments.innerHTML += `<p>${input}</p>`

   event.target.reset()
})
