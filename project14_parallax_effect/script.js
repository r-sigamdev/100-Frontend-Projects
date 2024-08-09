window.onscroll = () => {
  const aniImage = document.querySelector(".fullMoonImg");
  aniImage.style.transform = "scale(" + (500 - scrollY) / 500 + ")";
};
