angular
.module('NavApp', [])
.directive('nav', function () {
	return {
		restrict: 'E',
		template: "<a href='index.html'>Home</a>"
	};
});
