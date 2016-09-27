

var CarLot = (function(){

		var inventory = [];
		
	return{

		loadInventory: function(callback){
			var inventoryLoader = new XMLHttpRequest();

			inventoryLoader.addEventListener("error", function() {
	        	console.log("There was an error processing the file.");
	    	});

	    	inventoryLoader.open("GET", "inventory.json");
			inventoryLoader.send();	

			inventoryLoader.addEventListener("load",function(){
				var data = JSON.parse(this.responseText);
				inventory = data.cars;
				callback(inventory);	
			});
		},
		getInventory: function(){
			return inventory;
		}
	};

})();