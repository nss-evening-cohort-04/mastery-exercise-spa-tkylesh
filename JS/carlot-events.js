var CarLot = (function(newCarLot) {
    var addListener = [];
    newCarLot.activateEvents = function() {
        addListener = document.getElementsByClassName("click-event");
        var search = document.getElementById('search-input');
        for (var i = addListener.length - 1; i >= 0; i--) {      
            //8) When you click on one of the car elements, change the width of the border to a higher value,
            // and change the background color to any other color of your choosing.
            addListener[i].addEventListener("click",function(e){
                    var allCards = document.getElementsByClassName('col-md-4');
                    for (var i = 0; i < allCards.length; i++){      
                            document.getElementById(allCards[i].id).classList.remove("triggered");
                            document.getElementById(allCards[i].id).classList.remove("triggeredColor");
                    }   
                if (e.target.classList.contains('col-md-4')){
                    document.getElementById(e.target.id).classList.toggle("triggered");
                    document.getElementById(e.target.id).classList.toggle("triggeredColor");
                    //9) Also, on click of the car element, clear the value of the text input in the navbar, and put the cursor in the text input.
                    document.getElementById("search-input").value = "";
                    document.getElementById("search-input").focus();
                }
                //*******************commented out code makes the triggered class go away when clicked again**************************//
                    // var allCards = document.getElementsByClassName('col-md-4');
                    // for (var i = 0; i < allCards.length; i++){
                    //      if(allCards[i].id != e.target.id){
                    //         document.getElementById(allCards[i].id).classList.remove("triggered");
                    //         document.getElementById(allCards[i].id).classList.remove("triggeredColor");
                    //      }
                    // }
                //*******************************************************************************************************************//                  
            });         
         }; 
    }
    
    //10) When you start typing into the navbar's text input, the description, and only that property,
    // of the currently selected car should be bound to what you are typing in and match it exactly.
    newCarLot.textInputEvents = function() {
        document.getElementById('search-input').addEventListener("keyup",function(){
            var x = document.getElementsByClassName("triggered")[0];
            x.lastChild.innerHTML= document.getElementById("search-input").value;
        });

        document.getElementById('search-input').addEventListener("keydown",function(e){
            var x = document.getElementsByClassName("triggered")[0];
            if(e.keyCode === 13){
                // e.preventDefault();
                x.lastChild.innerHTML= document.getElementById("search-input").value;
                document.getElementById("search-input").value='';
                document.getElementById("search-input").blur();
                x.classList.toggle("triggered");
                x.classList.toggle("triggeredColor");
            }
        });

        document.getElementById('submitBtn').addEventListener("click", function(){
            var x = document.getElementsByClassName("triggered")[0];
            x.lastChild.innerHTML = document.getElementById('search-input').value;
            document.getElementById("search-input").value="";
            document.getElementById("search-input").blur();
            x.classList.toggle("triggered");
            x.classList.toggle("triggeredColor");            
        });
    }  
    return newCarLot;
})(CarLot || {});
