/*调用fullpage.js*/
$(document).ready(function() {
	$('#content').fullpage({
		sectionsColor: ['pink', '#F9F3DC', '#16a085', '#D57744', '#26B1B6'],
		anchors: ['about', 'skill', 'work', 'opus', 'contact'],
		menu: '#nav',
		'navigation': true,
		continuousVertical: true /*是否循环*/
	});
});
/*文字特效开始*/
$(function() {
	var $introduce = document.querySelectorAll(".introduce")[0];

	function set() {
		$('.introduce').css('display', 'block');
		$('.img1').addClass('animated bounceInUp rollIn');
		$('.box1').addClass('animated bounceInUp zoomInLeft flipInX rotateIn');
		$('.box2').addClass('animated bounceInRight');
		$('.box3').addClass('animated bounceInLeft');
		$('.box4').addClass('animated bounceInRight');
		$('.box5').addClass('animated bounceInLeft');
	}
	setTimeout(set, 1000);
});
/*时间轴开始*/
"use strict";
!
function(t, i) {
	var e = {
		id: "#cardArea",
		sid: ".card-item"
	};
	i.fn.cardArea = function(t) {
		var t = i.extend({},
			e, t);
		return this.each(function() {
			var e = i(t.id),
				n = e.find(t.sid);
			n.on("mouseenter",
				function() {
					i(this).addClass("active").siblings().removeClass("active")
				})
		})
	};
}(window, jQuery);
$(function() {
	$("#cardArea").cardArea()
});
/*选项卡开始*/
$(function() {
	$("#tab2").rTabs({
		bind: 'click',
		animation: 'left'
	});
})
