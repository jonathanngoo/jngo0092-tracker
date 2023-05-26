// Adding image and displaying on form from https://talkerscode.com/howto/upload-image-in-html-and-display.php#:~:text='image'%20variable%20containing%20uploaded%20image,the%20end%20of%20HTML%20document.
var loadFile = function (event) {
  var image = document.getElementById("output");
  image.src = URL.createObjectURL(event.target.files[0]);
};

// Displaying data from form individually https://www.youtube.com/watch?v=f3fALMAVBOE
var content = document.getElementById("content");
document.querySelector(content) .DOMContentLoaded = (document) => {
  document.querySelector('#name').on('change', function(){
  document.querySelector('.data')|
  document.querySelector('#' + document.querySelector(this).value).fadeIn(700);
});
};

// Generating today's date from server https://stackoverflow.com/questions/71953018/html-input-date-field-how-to-set-default-value-to-todays-date
function getDate() {
  var today = new Date();

  document.getElementById("date").value =
    today.getFullYear() +
    "-" +
    ("0" + (today.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + today.getDate()).slice(-2);
}

// Adding a rating system when the user types their movie name https://codepen.io/neilpomerleau/pen/wzxzQM
document.querySelector("radio").addEventListener("change", function () {
  console.log("New star rating: " + this.value);
});

// Reveals tasks after user clicks submit from https://bobbyhadz.com/blog/javascript-show-hide-form-on-click
const submit = document.getElementByType("submit");

submit.addEventListener("click", () => {
  const Task = document.getElementByClass("Tasks");

  if (Task.style.display === "none") {
    Task.style.display = "block";
  } else {
    Task.style.display = "none";
  }
});

// Hiding the form when user starts website and appears when they click submit button
const hideDropdown = document.getElementByClass("hideDropdown");
const showButton = document.getElementByClass("trashBinbutton");
const hideButton = document.getElementByClass("select");

function trashBinbutton() {
  hideDropdown.classList.remove("hidden");
}

function select() {
  hideDropdown.classList.add("hidden");
}

showButton.addEventListener("click", trashBinbutton);
hideButton.addEventListener("click", select);

// Creating a form for the user to input their information
const form = document.getElementById("taskform");
const tasklistElem = document.querySelector("#tasklist");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(form.elements.UserFirstName.value);
  addTask(
    form.elements.UserFirstName.value,
    form.elements.UserLastName.value,
    form.elements.UserId.value,
    form.elements.DateSubmitted.value,
    form.elements.MovieGenre.value,
    form.elements.phoneNumber.value,
    form.elements.Email.value,
    form.elements.movieName.value,
    form.elements.ratingTitle.value,
    form.elements.movieImage.value
  );
  console.log(taskList);
});

// Tasks are displayed from drop down menu
function displayTask(task) {
  let item = document.createElement("li");
  item.setAttribute("data-id", task.id);
  item.innerHTML = `<p> 
  <strong>${user.firstname}</strong><br>${user.lastname} <br>${user.id}<br>${date.submitted}<br>${movie.genre} 
  <br>${phone.number}<br>${email}<br>${movie.name}<br>${rating.title}<br>${movie.image}<p>`;
  tasklistElem.appendChild(item);
  form.reset();

  let delButton = document.createElement("button");
  let delButtonText = document.createTextNode("🗑️");
  delButton.appendChild(delButtonText);
  item.appendChild(delButton);

  delButton.addEventListener("click", function (event) {
    item.remove();
    taskList.forEach(function (taskArrayElement, taskArrayIndex) {
      if (taskArrayElement.id == item.getAttribute("data-id")) {
        taskList.splice(taskArrayIndex, 1);
      }
    });
    console.log(taskList);
  });
}

// function displayRadioValue() {
//   var value = document.getElementsByName("UserFirstName").value;
//   document.getElementById("UserFirstName").innerHTML = value;
//   console.log(displayRadioValue);
// }

// Create an object called 'task'
// Populate the properties based on the provided data model

// Commented out now the object creation is included in the function

// var task = {
//   name: "Initial Sketches",
//   type: "Concept Ideation",
//   id: Date.now(),
//   date: new Date().toISOString(),
//   rate: 50,
//   time: 5,
//   client: "Google"
// }

// console.log(task);

// Adding task list when the user submits the form
var taskList = [];

function addTask(
  userfirstname,
  userlastname,
  userid,
  datesubmitted,
  moviegenre,
  phonenumber,
  email,
  moviename,
  rating,
  movieimage
) {
  // Creating task list to displayed when user selects their tasks
  let task = {
    userfirstname,
    userlastname,
    userid,
    datesubmitted: Date.now(),
    moviegenre,
    phonenumber,
    email,
    moviename,
    rating,
    movieimage,
  };

  taskList.push(task);
  displayTask(task);

  let listButton = document.createElement("button");
  let card = document.createElement("card");
  listButton.textContent = "Add to list";
  card.appendChild(listButton);

  // When users clicks submit, it displays list of tasks from content div tag
  listButton.addEventListener("click", function (event) {
    console.log(user.name.common);

    let listOftasks = JSON.parse(localStorage.getItem("listOftasks"));

    console.log(listOftasks);
    if (listOftasks == null) {
      listOftasks = [client];
    } else {
      if (
        listOftasks.find(
          (element) => element.user.name.common === user.last.name.common
        )
      ) {
        console.log("Person already exists");
      } else {
        listOftasks.push(user);
      }
    }

    localStorage.setItem("listOftasks", JSON.stringify(listOftasks));
    updateList();
  });
}

updateList();

// function updateList() {
//   let list;
// }

console.log(taskList);
