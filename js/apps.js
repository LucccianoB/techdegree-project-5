baguetteBox.run('.gallery', {
    buttons: true,
    animation: 'slideIn'
});

// searchbox

//variables

const searchbox = document.querySelector(".searchbox"); /* for eventlistener to input live search*/
let searchinput = ''; /* what is typed into the searchbar*/
const gallery = document.querySelector(".gallery"); 
let ammount = gallery.getElementsByClassName("gallery-photos"); /*used in order to serach through and speicify the photos*/
let photocaption;

//function

function search(searchinput) {

    for (i= 0; i < ammount.length; i++ ) {  /* searches through all the photos*/

        photocaption = ammount[i].dataset.caption.toLowerCase(); /*checks the caption of the given photo*/

        if(!photocaption.includes(searchinput)) {  /* checks to see if it includes what is inputed into the searchbar */
            ammount[i].style.display = "none";
        } else {
            ammount[i].style.display = "";
        }
    }

}

searchbox.addEventListener('keyup', function() {
    search(searchbox.value.toLowerCase());
});

