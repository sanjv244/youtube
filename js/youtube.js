var menuicon = document.querySelector('.menu-icon');
var sidebar = document.querySelector('.sidebar');

var container = document.querySelector('.container');

let contactInfo = document.querySelector('.contact-info');

document.querySelector('.more_btn').onclick = () =>{
contactInfo.classList.toggle('active');
};


menuicon.onclick = function () {
    sidebar.classList.toggle('small-sidebar');
    container.classList.toggle('large-container')
}