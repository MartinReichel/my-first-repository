$('#buttonone').click(() => {  
  $('#first').slideToggle(0); 
}); 

$('#buttontwo').click(() => { 
  $('#buttonone .panel-body').html('New name');
}); 

$('#buttonthree').click(() => { 
  $('.button').css('background', 'purple'); 
}); 

function changeColor() {
  let color = document.getElementById("colorInputColor").value; 
  document.body.style.backgroundcolor = color; 
  document.getElementById("colorInputText").value = color;
  };