

function validateLoggedIn()
{
	securityToken = localStorage.getItem('DreamTripsToken');
	if (localStorage.getItem('DreamTripsToken') == '12134567890')
    {
      $(':mobile-pagecontainer').pagecontainer('change', 'index.html#loginpage', {});
    }
    else
    { return true; }
}

function saveLoginToken(token)
{
	localStorage.setItem('DreamTripsToken',token);
}