function parallax (elem, inTag = true, rateN = 0, direction = 'v', typeValue = 'px') {
  let el = document.querySelectorAll(elem);
  // let rateNum = parseFloat(el.dataset.rate);
  // let dDirection = el.forEach(el => el.dataset.direction) || 'v';
  window.addEventListener('scroll', ()=>{
    let scrolled = window.pageYOffset;
    let mDirectionError = 'Dirección de parallax no definido correctamente, valores posibles "v" y "r"';
    let rate;
    if (inTag) rate = dDirection === 'v'? 'translate3d(0,'+ (rateNum * scrolled) + typeValue +', 0)' : dDirection === 'h'? 'translate3d('+ (rateN * scrolled) + typeValue +', 0, 0)' : undefined; 
    else rate = direction === 'v'? 'translate3d(0,'+ (rateN * scrolled) + typeValue +', 0)' : direction === 'h'? 'translate3d('+ (rateN * scrolled) + typeValue +', 0, 0)' : undefined;
    
    rate? el.forEach(el => el.style.transform = rate) : console.log(mDirectionError);
  });
}

let elements = {
  el:  ['#S1__text', '#montains_behind', '#montains_front', '#header'],
  val: [-0.1, 0.15, 0.12, -0.5]
};
elements.el.forEach((el, i) => parallax(el, false,  elements.val[i]));

window.addEventListener('scroll', () => {
  let value = window.pageYOffset;
  let starts = document.getElementById('starts');
  starts.style.left = value + 'px';
});
