var cimgs = document.querySelectorAll(".cimg");
var mainimge = document.querySelector("#main-imge");
for (var i = 0; i < cimgs.length; i++) {
  cimgs[i].addEventListener("click", function () {
    mainimge.src = this.src;
  });
}
