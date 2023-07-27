document.querySelectorAll(".rotator").forEach(rttr => {
    let first = rttr.querySelector(".rotator__case_active");
    first.style.color = first.dataset.color;
    setTimeout(caseRotator, first.dataset.speed, rttr)
});

function caseRotator(elem) {
    let rttrCases = elem.querySelectorAll(".rotator__case");
    for (let index = 0; index < rttrCases.length; index++) {
        if (rttrCases[index].classList.contains("rotator__case_active")){
            rttrCases[index].classList.remove("rotator__case_active");
            let next = rttrCases[(index+1) % rttrCases.length];
            next.classList.add("rotator__case_active");
            next.style.color = next.dataset.color;
            setTimeout(caseRotator, next.dataset.speed, elem)
            break;
        }
    }
}