//showing entire <div='sonnet'> in console
var sonnet = document.getElementById('sonnet').textContent;	
console.log(sonnet);

//finding the word 'orphans'position in sonnet
var orphan_search = sonnet.search('orphans');
console.log('orphans position', orphan_search);

//finding entire sonnet length
var sonnet_length = sonnet.length;
console.log('sonnet length', sonnet_length);

// replacing 1st "winter" with "yuletide"
var winterReplaced = console.log(sonnet.replace('winter', 'yuletide'));

// replacing all "the"s with "a large"
var replaceALL = sonnet.replace(/the /gi, 'a large ');
console.log(replaceALL);

// Set the content of the sonnet div with the new string
document.getElementById("sonnet").innerHTML = replaceALL;
