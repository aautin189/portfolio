
var acc = document.getElementsByClassName("accordion");
var i;


// assuming there are multiple accordions
for (i = 0; i < acc.length; i++) {
  
	// add an event listener for each
  acc[i].addEventListener("click", function() {
    
  	// used for true or false (the inverse) - active is revealed 
    this.classList.toggle("active");
    

    //iterate through each element nested inside the accordion
    var panel = this.nextElementSibling;
    
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
