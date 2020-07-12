$('#buttonone').click(() => {  
  $('#first').slideToggle(0); 
}); 

$('#buttontwo').click(() => { 
  $('#buttonone .panel-body').html('New name');
}); 

$('#buttonthree').click(() => { 
  $('button').css('background', 'purple'); 
}); 


