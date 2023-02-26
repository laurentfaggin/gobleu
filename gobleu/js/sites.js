const photoAffichee = document.getElementById("photo");
const photos = document.querySelectorAll("div.column img");
let indexCourant = 0;
let index = 0;
let urlPhotos = [];

photos.forEach((element, i) => {
    urlPhotos.push(element.src);
    element.addEventListener('click', function(){showImage(i)});
});

photoAffichee.src = urlPhotos[0];
let timer = setInterval(function(){ newSlide() }, 3000);

function newSlide( direction = 1 ){
    indexCourant += direction;
    photoAffichee.src = urlPhotos[indexCourant];
    if( indexCourant == urlPhotos.length-1) {
        indexCourant = -1;
    }
}

function showImage(index){
    photoAffichee.src = urlPhotos[index];
    indexCourant = index;
    clearInterval(timer);
    timer = setInterval(function(){ newSlide() }, 3000);
}

