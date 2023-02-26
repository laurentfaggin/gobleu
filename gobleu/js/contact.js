function checked() {
    let checkbox = document.querySelectorAll('input[type="checkbox"]');
    let boxchecked = false;
   // console.log(checkbox.check)
    checkbox.forEach(element => {
          if(element.checked){
           boxchecked =  true
        }
    })
    if(boxchecked == false) alert("vous devez cocher au moins un site");
    
    return boxchecked; 
}


