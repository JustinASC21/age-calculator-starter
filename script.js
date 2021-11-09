let birthYear = 0;
let currentYear;
let age;
let name = "";

// calculate age button clicked
$("button").click(function() {
  birthYear = $(".year").val();
  name = $(".name").val();
  currentYear = $(".currentYear").val();
  age = currentYear - birthYear;
  $(".message").text(name + " you look to be " + age + " years old by " + currentYear);
  
  // clear fields
  $(".currentYear").val("");
  $(".name").val("");
  $(".year").val("");
})