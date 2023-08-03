let hasTips = document.querySelectorAll('.has-tooltip');
hasTips.forEach(a => {
   addTips(a);
   a.addEventListener('click', showTips);
});

function addTips(elem) {
   let tooltip = document.createElement("div");
   tooltip.classList.add("tooltip");
   tooltip.innerText = elem.title;
   tooltip.dataset.position = "bottom";
   tooltip.style = `left: ${elem.getBoundingClientRect().left}px; top: ${elem.getBoundingClientRect().bottom}px`;
   elem.insertAdjacentElement("afterend", tooltip);
}

function showTips(event) {
   event.preventDefault();
   let isVisible = this.nextElementSibling.classList.contains('tooltip_active');
   document.querySelectorAll('.tooltip').forEach(tip => tip.classList.remove('tooltip_active'));
   if (!isVisible) {
      this.nextElementSibling.classList.add('tooltip_active');
   }
}