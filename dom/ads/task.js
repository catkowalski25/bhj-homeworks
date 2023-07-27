document.querySelectorAll(".rotator").forEach(rttr => 
    setInterval(caseRotator, 1000, rttr))

function caseRotator(elem) {
    let rttrCases = elem.querySelectorAll(".rotator__case");
    for (let index = 0; index < rttrCases.length; index++) {
        if (rttrCases[index].classList.contains("rotator__case_active")){
            rttrCases[index].classList.remove("rotator__case_active");
            rttrCases[(index+1) % rttrCases.length].classList.add("rotator__case_active");
        break;
        }
    }
}