function shopNow() {
    var button = document.getElementById("shopButton");
    button.classList.toggle("clicked");
}

function toggleDropdown() {
    var dropdown = document.getElementById("dropdownMenu");
    if (dropdown.style.display === "flex") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "flex";
    }


    function productClicked(element) {
        element.classList.toggle('clicked');
    }
}

