export default {
  inserted: (el) => {
    function loadImage() {
      el.src = el.dataset.src;
    }

    loadImage();
  },
};
