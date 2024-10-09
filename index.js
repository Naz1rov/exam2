const $checkbox = document.querySelector("#theme");

const $section = document.querySelector("#asosiy")
const $statistika = document.querySelector("#statistika");
const $aboutus = document.querySelector("#about-us");
const $ourcourse = document.querySelector("#our-course");
const $freelessons = document.querySelector("#free-lessons");
const $team = document.querySelector("#team");
const $certificate = document.querySelector("#certificate");
const $footer = document.querySelector("#footer");
const $header = document.querySelector("#header");



$checkbox.addEventListener("change", function() {
    if (this.checked) {
        $section.style.backgroundColor = "black";
        $section.style.color = "white";
        $statistika.style.backgroundColor = "black";
        $statistika.style.color = "white";
        $aboutus.style.backgroundColor = "black";
        $aboutus.style.color = "white";
        $ourcourse.style.backgroundColor = "black";
        $ourcourse.style.color = "white";
        $freelessons.style.backgroundColor = "black";
        $freelessons.style.color = "white";
        $team.style.backgroundColor = "black";
        $team.style.color = "white";
        $certificate.style.backgroundColor = "black";
        $certificate.style.color = "white";
        $footer.style.backgroundColor = "black";
        $footer.style.color = "white";
        $header.style.backgroundColor = "black";
        $header.style.color = "white"

    } else {
        $section.style.backgroundColor = "#f5faff";
        $section.style.color = "black";
        $statistika.style.backgroundColor = "#f5faff";
        $statistika.style.color = "black";
        $aboutus.style.backgroundColor = "#f5faff";
        $aboutus.style.color = "black";
        $ourcourse.style.backgroundColor = "#f5faff";
        $ourcourse.style.color = "black";
        $freelessons.style.backgroundColor = "#f5faff";
        $freelessons.style.color = "black";
        $team.style.backgroundColor = "#f5faff";
        $team.style.color = "black";
        $certificate.style.backgroundColor = "#f5faff";
        $certificate.style.color = "black";
        $footer.style.backgroundColor = "#f5faff";
        $footer.style.color = "black";
        $header.style.backgroundColor = "#f5faff";
        $header.style.color = "black";

        
    }
});

