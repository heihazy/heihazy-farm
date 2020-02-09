function showPopup() {
  var popup = document.getElementById("popup");
  popup.classList.add("show");
}

function hidePopup() {
  var popup = document.getElementById("popup");
  popup.classList.remove("show");
}

$("document").ready(function() {
  $("body").prepend('<div class="spinner"></div>');
  $(".site-wrap").addClass("hide");
  $(".spinner")
    .append('<div class="rect1"></div>')
    .append('<div class="rect2"></div>')
    .append('<div class="rect3"></div>')
    .append('<div class="rect4"></div>')
    .append('<div class="rect5"></div>');
  setTimeout(function() {
    $(".spinner").addClass("hide");
    $(".site-wrap").removeClass("hide");
  }, 2000);
});
