var Insert = document.getElementById('load-inventory');
var inventoryString = "";

function populatePage (inventory) {
  // Loop over the inventory and populate the page
  inventoryString+=`<h1 class="jumbotron text-center">Inventory</h1>`;

	for (var i = 0;i < inventory.length;i++) {
		if(i%3 === 0){
			inventoryString +=`<div class="row">`;
		}
		inventoryString += `<div id="car-card-${[i]}" class="col-md-4 cardBorder click-event">`;
		inventoryString += `Make: ${inventory[i].make} <br/>`;
		inventoryString += `Model: ${inventory[i].model}<br/>`;
		inventoryString += `Year: ${inventory[i].year}<br/>`;
		inventoryString += `Price: $${inventory[i].price}<br/>`;
		inventoryString += `Description:<p id="description"> ${inventory[i].description}</p>`;
		inventoryString += `</div>`;
		if((i+1)%3 === 0){
			inventoryString +=`</div><br />`;
		}

	};

	Insert.innerHTML += inventoryString;
  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents();
}

document.getElementById('search-input').addEventListener("keydown",function(){
	var x = document.getElementsByClassName("triggered")[0];
	console.log(x);
	console.log(x.lastChild);
	x.lastChild.innerHTML= document.getElementById("search-input").value;
});

document.getElementById('submitBtn').addEventListener("keydown",function(e){
	var x = document.getElementsByClassName("triggered")[0];
	console.log(e.keyCode);
	if(e.keyCode === 13){
		e.preventDefault();
		x.lastChild.innerHTML= document.getElementById("search-input").value;
	}

});

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);

