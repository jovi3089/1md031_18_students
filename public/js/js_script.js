class MenuItem {
  constructor(productName, kcal, allergic) {
    this.pn = productName;
    this.kcal = kcal.toString() + " kcal";
    this.allergies = allergic;
    this.stock = 1;
    if (allergic) {
      this.allergicPref = "Contains gluten and/or lactos";
    }
  }
}
function displayListItem(menuItem, htmlElement) {
  for (var i = 0; i < 2; i++) {
    switch (i) {
      case 0:
        helpDisplayListItem(menuItem.kcal, htmlElement)
        break;
      case 1:
          if (menuItem.allergies) {
            helpDisplayListItem(menuItem.allergicPref, htmlElement)
          }
        break;
    }
  }
}
function displayGrid(menuItem, divParent) {
  ;
}
function eventSubmitButton() {
  console.log("(Js) Button clicked on!");
}
function helpDisplayListItem(menuItemVaule, htmlElement) {
  let listItem = document.createElement("li");
  let listValue = document.createTextNode(menuItemVaule);
  listItem.appendChild(listValue);
  htmlElement.appendChild(listItem);
}
function textFieldReader(input_name) {
  let text = document.getElementsByName(input_name)[0].value;
  if (typeof text === 'string' || text instanceof String) {
    return  text;

  }
  else {
    return "No input"
  }
}
function radioReader(input_name) {
  let radios = document.getElementsByName(input_name);
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      return radios[i].value;
    }
  }
  return "No radio is checked";
}

//dynamic layout
//var meat = new MenuItem("meatyOne", 100, true), meatElement = document.getElementById("meatBurg");
//var fish = new MenuItem("fishyOne", 200, true), fishElement = document.getElementById("fishBurg");
//var vegan = new MenuItem("veggyOne", 300, false), veganElement = document.getElementById("vegBurg");
//displayListItem(meat, meatElement);
//displayListItem(fish, fishElement);
//displayListItem(vegan, veganElement);
console.log(MenuItems[0].name);
//user input

//actions
//var submitButton = document.getElementById('subBut');
//submitButton.addEventListener("click", eventSubmitButton)
