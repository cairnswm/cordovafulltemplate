$( "#mainpage" ).page({
  create: function( event, ui ) { 
    //alert("Sub Page Loaded"); 
    console.log("Sub Page loaded, start creating your content! Token:"+localStorage.getItem('DreamTripsToken')); 
    token = $('#token');
    if (validateLoggedIn())
    {
      token.html(localStorage.getItem('DreamTripsToken'));
    }
    else
    {
      token.html('Please log in');
    }
  }
});
              