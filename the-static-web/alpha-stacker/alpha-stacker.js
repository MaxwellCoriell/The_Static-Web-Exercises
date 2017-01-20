// Create an array that contains the letters of the alphabet
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h","i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var stack = ""
// The stackLetter function should accept the array as the sole argument
function stackLetters (theAlphabetArray) {
//		debugger
	for (var nextLetterCounter = 0; nextLetter <= theAlphabetArray.length -1; nextLetterCounter++) {
		if(nextLetterCounter % 3 === 0 && nextLetter > 0) { //add a "space" after every 3rd letter
			stack += " " + theAlphabetArray[nextLetterCounter];
		}else{ //don't add a space
			stack += theAlphabetArray[nextLetterCounter];
			console.log(stack);
		}

	}
}
stackLetters(alphabet);

//attempted to make it with push

/*				spaceArray.push(theAlphabetArray[i])
			}
			else {
				spaceArray.push(theAlphabetArray[i])	
				spaceArray.push(" ");
			}
	}
	console.log(spaceArray); */
// Invoke the function and pass in the array

	


