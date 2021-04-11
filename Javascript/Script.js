$(document).ready(function()
{
	/*Header*/

	$('body').prepend('<header></header>');
	$('header').prepend('<h1 id = "letterhead_text">Brianne Beecroft</h1>');
	$('header').append('<img id = "letterhead_image" src = "../Images/Letterhead.jpg" />');
	$('header').append('<nav id ="navigation_bar"></nav>');
	$('#navigation_bar').append('<ul id = "nav_items"></ul>');
	$('#nav_items').append('<li><a href = "Home.html">Home</a>');
	$('#nav_items').append('<li> | ');
	$('#nav_items').append('<li><a href = "Artist Statement.html">Artist Statement</a>');
	$('#nav_items').append('<li> | ');
	$('#nav_items').append('<li><a href = "Artwork.html">Artwork</a>');
	$('#nav_items').append('<li> | ');
	$('#nav_items').append('<li><a href = "My Story.html">My Story</a>');
	$('#nav_items').append('<li> | ');
	$('#nav_items').append('<li><a href = "Contact.html">Contact</a>');


	/*Bottom Spacing*/


	//Change this to a div later so I can add my credit!!!!
	$('body').append('<br><br><br><br><br>');





});