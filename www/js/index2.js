$( "#mainpage" ).page({
  create: function( event, ui ) { 
    //alert("Sub Page Loaded"); 
    console.log("Sub Page loaded, start creating your content! Token:"+localStorage.getItem(tokenName)); 
    token = $('#token');
    if (validateLoggedIn())
    {
      token.html(localStorage.getItem(tokenName));
    }
    else
    {
      token.html('Please log in');
    };
    // Call functions to do page logic
    LoadData();
  }
});

