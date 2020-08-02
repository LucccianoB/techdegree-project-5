baguetteBox.run('.gallery', {
    buttons: true,
    animation: 'slideIn'
});

// searchbox

//variables

const searchbox = document.querySelector(".searchbox");
let searchinput = '';
const gallery = document.querySelector(".gallery");
let ammount = gallery.getElementsByClassName("gallery-photos");
let photocaption;

function search(searchinput) {

    for (i= 0; i < ammount.length; i++ ) {

        photocaption = ammount[i].dataset.caption.toLowerCase();

        if(!photocaption.includes(searchinput)) {
            ammount[i].style.display = "none";
        } else {
            ammount[i].style.display = "";
        }
    }

}

searchbox.addEventListener('keyup', function() {
    search(searchbox.value.toLowerCase());
});

