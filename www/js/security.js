var tokenName = "FullTemplateToken";

function validateLoggedIn()
{
	if (localStorage.getItem(tokenName) === null) {
      // alert("not logged in");
      $(':mobile-pagecontainer').pagecontainer('change', 'index.html#loginpage', {});
    }
    else
    {
      return true; 
    }
}

function saveLoginToken(token)
{
	localStorage.setItem(tokenName,token);
}