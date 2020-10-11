

fixtures = document.querySelectorAll(".fixture");
months = document.querySelectorAll(".month");
showOld = document.querySelector("#showOld");


function hide(element) {
    var today = Date.now() 
    elDate = new Date(element.dataset.date);
 
    if (elDate < today) {
        element.classList.toggle("d-none");
    }
}
// fixtures.forEach(function (element) {
//     hide(element);
// });


showOld.addEventListener("click", function (ev) {
    fixtures.forEach(function (element) {
        hide(element);
   }) 
});

