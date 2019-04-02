document.getElementById("game").onkeypress = function(){
	document.getElementById("result").innerHTML = "";
}

document.getElementById("check").addEventListener("click", function(){
	let game = document.getElementById("game").value;
	let gameResult = checker(game);
	document.getElementById("result").innerHTML = gameResult;
});

// Function to check for game
function checker(game){
	game = game.trim();	
	try {
	  game = JSON.parse(game);
	}
	catch(error) {
	  return "No/Incomplete game";
	}	

	let counter = 0; //For count if check is completed
	let moves = ['X','O','-'];
	let nobody = [["---"], ["---"], ["---"]];
	let wincase = [["XO-"], ["XXO"], ["O-X"]]

	//If game is empty or game length is not equal to 3 or is not an array
	if(game == '' || game.length != 3 || !Array.isArray(game)){
		return "No/Incomplete game";
	}else{
		for (let i = 0; i < game.length; i++){
			let line = game[i];
			//If each line length is equal to 0 or is not an array
			if(line.length == 0 || !Array.isArray(game)){
				return "No/Incomplete game";
				//If each line length is not equal to 3
			}else{
				for (let j = 0; j < line.length; j++) {
					let move = line[i];
					// If moves does not include accepted move
					if(!moves.includes(move)){
						return "Corrupted game";
					}else{
						counter++;
					}
				}
			}
		}
	}

	if(counter == 9){
		if(JSON.stringify(game) === JSON.stringify(nobody)){
			return "Nobody moved";
		}else if(wincase.includes(JSON.stringify(game))){
			return true;
		}else{
			return false;
		}
	}
}