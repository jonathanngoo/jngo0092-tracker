const form = document.getElementById("taskform");
const tasklistElem = document.querySelector("#tasklist");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(form.elements.taskName.value);
  addTask(
    form.elements.taskName.value,
    form.elements.taskType.value,
    form.elements.taskRate.value,
    form.elements.taskTime.value,
    form.elements.taskClient.value,
    form.elements.taskLocation.value
  );
  console.log(taskList);
});

function displayTask(task) {
  let item = document.createElement("li");
  item.setAttribute("data-id", task.id);
  item.innerHTML = `<p> 
  <strong>${task.name}</strong><br>${task.type} <br>${task.rate}<br>${task.time}<br>${task.client}
  <br>${task.location}<p>`;
  tasklistElem.appendChild(item);
  form.reset();

  let delButton = document.createElement("button");
  let delButtonText = document.createTextNode("Delete");
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

function displayRadioValue() {
  var value = document.getElementsByName("taskLocation").value;
  document.getElementById("taskLocation").innerHTML = value;
}

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

// Create an array called 'taskList'
var taskList = [];

// Create a function called 'addTask'
// Give the function input parameters for: name, type, rate, time, client
// Paste your object definition from above in the function
// Replace the property values with the input paramaters
// Add the object to the taskList array

function addTask(name, type, rate, time, client, location) {
  // Creating the object with the usual property:value syntax
  // Create task object
  // let task = {
  //   name: name,
  //   type: type,
  //   id: Date.now(),
  //   date: new Date().toISOString(),
  //   rate: rate,
  //   time: time,
  //   client: client
  // }

  // Creating the object, directly passing in the input parameters
  let task = {
    name,
    type,
    id: Date.now(),
    date: new Date().toISOString(),
    rate,
    time,
    client,
    location,
  };

  taskList.push(task);
  displayTask(task);

  let listButton = document.createElement("button");
  listButton.textContent = "Add to list";
  card.appendChild(listButton);

  listButton.addEventListener("click", function (event) {
    console.log(country.name.common);

    let listOftasks = JSON.parse(localStorage.getItem("listOftasks"));

    console.log(listOftasks);
    if (listOftasks == null) {
      listOftasks = [client];
    } else {
      if (
        listOftasks.find(
          (element) => element.name.common === client.name.common
        )
      ) {
        console.log("Person already exists");
      } else {
        listOftasks.push(client);
      }
    }

    localStorage.setItem("listOftasks", JSON.stringify(listOftasks));
    updateList();
  });
}

updateList();

function updateList() {
  let list;
}

// Call the function with test values for the input paramaters
addTask("Initial Sketches", "Concept Ideation", 35, 5, "Google", "Sydney");

// Log the array to the console.
console.log(taskList);
