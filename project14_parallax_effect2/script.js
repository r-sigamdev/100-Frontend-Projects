window.onscroll = () => {
  window.scrollBehaviour = "smooth";
  const img1 = document.querySelector(".image1");
  const img2 = document.querySelector(".image2");
  const img3 = document.querySelector(".image3");
  const img4 = document.querySelector(".image4");
  const img5 = document.querySelector(".image5");
  const img6 = document.querySelector(".image6");
  const img7 = document.querySelector(".image7");
  const img8 = document.querySelector(".image8");
  const heading = document.querySelector(".heading");

  //   img6.style.transform = "rotate(" + (45 - scrollY) + ")";

  // img1.style.transform = "scale(" + (500 - scrollY) / 500 + ")";
  //   img6.style.webkitTransform = "rotate(" + (45 + "deg" - scrollY) + ")";

  // for img1
  img1.style.webkitTransform = "translateY(" + (1 + scrollY) + "px" + ")";
  // img1.style.transformOrigin = "top";
  // img1.style.zIndex = "-999";

  // for img2 and img3
  // img2.style.webkitTransform = "translateY(" + (1 - scrollY) + "px" + ")";
  // img3.style.webkitTransform = "translateY(" + (1 - scrollY) + "px" + ")";

  // for img4 and 5\
  img4.style.webkitTransform = "translateX(" + (1 - scrollY) + "px" + ")";
  img5.style.webkitTransform = "translateX(" + (1 + scrollY) + "px" + ")";

  // for image6
  img6.style.webkitTransform = "rotateZ(" + window.pageYOffset / 30 + "deg)";
  // img6.style.transformOrigin = "topRight";

  // for img7 and img8
  // img7.style.webkitTransform = "translateY(" + (1 - scrollY) + "px" + ")";
  // img8.style.webkitTransform = "translateY(" + (1 - scrollY) + "px" + ")";

  // for heading
  heading.style.transformOrigin = "top";
  heading.style.webkitTransform = "translateY(" + (2 + scrollY) + "px" + ")";
};
