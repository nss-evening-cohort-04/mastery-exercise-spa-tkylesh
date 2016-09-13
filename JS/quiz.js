var Insert = document.getElementById('load-inventory');
var inventoryString = "";

function populatePage (inventory) {
  // Loop over the inventory and populate the page
  inventoryString+=`<h1 class="jumbotron text-center">Inventory</h1>`;

	for (var i = 0;i < inventory.length;i++) {
		if(i%3 === 0){
			inventoryString +=`<div class="row">`;
		}
		inventoryString += `<div id="car-card" class="col-md-4">`;
		inventoryString += `${inventory[i].make}<br/>`;
		inventoryString += `${inventory[i].model}<br/>`;
		inventoryString += `${inventory[i].year}<br/>`;
		inventoryString += `${inventory[i].price} USD<br/>`;
		inventoryString += `${inventory[i].description}<br/>`;
		inventoryString += `</div>`;
		if((i+1)%3 === 0){
			inventoryString +=`</div>`;
		}

	};

	Insert.innerHTML = inventoryString;
  // Now that the DOM is loaded, establish all the event listeners needed
  // CarLot.activateEvents();
}
CarLot.loadInventory(populatePage);

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory();