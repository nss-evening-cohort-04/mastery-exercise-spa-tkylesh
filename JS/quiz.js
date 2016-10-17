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
  CarLot.textInputEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);

