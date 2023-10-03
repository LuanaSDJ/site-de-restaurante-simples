$(document).ready(funcion () {
  $("a").on("click",function (event){
    if (this.hash !== "") {
      event.preventDefault();
      $("html, body").animate(
        {
          scollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});