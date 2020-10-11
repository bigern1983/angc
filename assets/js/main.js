

fixtures = document.querySelectorAll(".fixture");
months = document.querySelectorAll(".month");
showOld = document.querySelector("#showOld");

function hideMonths() {
    var today = new Date(Date.now());
    var thisMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    months.forEach(function (month) {
        var parsedDate = new Date(month.dataset.date)
        console.log(month.textContent, thisMonth, parsedDate, thisMonth - parsedDate);
        if (new Date(month.dataset.date) < thisMonth) {
            console.log("toggle")
            month.classList.toggle("d-none");
        }
    });
}

function hide(element) {
    var today = Date.now() 
    var elDate = new Date(element.dataset.date);
 
    if (elDate < today) {
        element.classList.toggle("d-none");
    }
}

// fixtures.forEach(function (element) {
//     hide(element);
// });


showOld.addEventListener("click", function (ev) {
    hideMonths();
    fixtures.forEach(function (element) {
        hide(element);
   }) 
});

