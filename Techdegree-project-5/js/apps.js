baguetteBox.run('.gallery', {
    buttons: true,
    animation: 'slideIn'
});

// searchbox

//variables

let searchinput = document.getElementById("imsearch").toLowerCase();
const gallery = document.querySelector(".gallery");
let ammount = gallery.getElementsByClassName("gallery-photos");
let searchinput = '';
let photocaption;

function searchbox(searchinput) {

    for (i= 0; i < ammount.length; i++ ) {

        photocaption = ammount[i].dataset.caption.toLowerCase();

        if(!photocaption.includes(searchinput)) {
            ammount[i].style.display = "none";
        } else {
            photos[i].style.display = "";
        }
    }

}



