define(['underscore', 'jQuery'], function() {
	var showName = function(n) {
  		var temp = _.template("<p>Hello <%= name %></p>");
  		$("body").html(temp({name: n}));
	};
	return {
  		showName: showName
	};
});