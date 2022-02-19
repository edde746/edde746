function isTouchEnabled() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}

export function dragScroll(element) {
  const mouseDown = () => {
    if (isTouchEnabled()) return;

    element.classList.remove("snap-x");
    document.body.onmousemove = (e) => {
      element.scrollBy(e.movementX * -1, 0);
      if (e.movementX) element.classList.add("pointer-events-none");
    };
    document.body.onmouseup = () => {
      element.classList.add("snap-x");
      element.classList.remove("pointer-events-none");
      document.body.onmouseup = null;
      document.body.onmousemove = null;
    };
  };
  element.addEventListener("mousedown", mouseDown);

  return {
    destroy() {
      element.removeEventListener("mousedown", mouseDown);
    },
  };
}
