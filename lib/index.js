var Mehdown;

if (typeof exports === 'object' && typeof require === 'function') {
    Mehdown = exports;
}
else {
    Mehdown = {};
}

Mehdown.usernameRegExp = /(^|[^@\w])@(\w{1,15})\b/g;

Mehdown.parse = function(text) {
	// Hashtags
	text = text.replace(/(^|[^#\w])#([a-z0-9_-]+)\b/gi, '$1' + Mehdown.hashtag('$2'));

	// Usernames
	text = text.replace(Mehdown.usernameRegExp, '$1' + Mehdown.username('$2'));

	return text;
};

Mehdown.hashtag = function(hashtag) {
	return '<a href="https://mediocre.com/tags/' + hashtag + '">#' + hashtag + '</a>';
}

Mehdown.username = function(username) {
	//return '<span class="vcard"><a href="https://mediocre.com/forums/users/' + username + '">@<span class="fn nickname">' + username + '</span></a>';
	return '<a href="/brenner/users/' + username + '">@' + username + '</a>';
}