const d = document;


const inpBox = d.querySelector("#input-box");
const addBtn = d.querySelector("#add-btn");
const listContainer = d.querySelector("#list-container");

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
}

addBtn.addEventListener("click", () => {
  if (inpBox.value === "") {
    alert("Please Enter a task first!");
  } else {
    let li = d.createElement("li");
    li.innerHTML = inpBox.value;
    listContainer.appendChild(li);

    let dlt = d.createElement("span");
    dlt.classList.add("img");
    li.appendChild(dlt);
  }
  inpBox.value = "";
  saveData();
});

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

showData();

function updateElement() {
  let resizeBtn = d.querySelector("#add-btn i");
  let screenWidth = window.innerWidth;

  if(screenWidth >= 400){
     addBtn.innerHTML = "Add"
  } else{
    addBtn.innerHTML = "<i class='bx bx-plus plus-sign'>"
  }
}
updateElement();
window.addEventListener("resize", updateElement)

