define(['underscore', 'jQuery'], function() {
	var showName = function(n) {
  		var temp = _.template("<p>Hello <%= name %></p>");
  		$("body").append(temp({name: n}));
	};
	return {
  		showName: showName
	};
});