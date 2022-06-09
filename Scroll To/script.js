const navLinks = [...document.querySelectorAll("nav a")]
const sections = [...document.querySelectorAll("section")]

let sectionsPosition;

function positionCalculation(){
  sectionsPosition = sections.map(section => section.offsetTop)
}
positionCalculation()
console.log(sectionsPosition);

navLinks.forEach(link => link.addEventListener("click", addScrollSmooth))

function addScrollSmooth(e){
  const linkIndex = navLinks.indexOf(e.target);
  window.scrollTo({
    top: sectionsPosition[linkIndex],
    behavior: "smooth"
  })
}

window.addEventListener("resize", positionCalculation)