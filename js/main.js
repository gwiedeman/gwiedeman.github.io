var tap = ("ontouchstart" in document.documentElement);

if(!tap){
	
	window.onload = function() {
		$('#writing-9').mouseenter(function () {
		  $(".abstract-default").hide()
		  $("#abs9").show()
		});
		$('#writing-9').mouseleave(function () {
			$("#abs9").hide()
			$(".abstract-default").show()
		});
		$('#writing-0').mouseenter(function () {
		  $(".abstract-default").hide()
		  $("#abs0").show()
		});
		$('#writing-0').mouseleave(function () {
			$("#abs0").hide()
			$(".abstract-default").show()
		});
		$('#writing-1').mouseenter(function () {
		  $(".abstract-default").hide()
		  $("#abs1").show()
		});
		$('#writing-1').mouseleave(function () {
			$("#abs1").hide()
			$(".abstract-default").show()
		});
		$('#writing-2').mouseenter(function () {
		  $(".abstract-default").hide()
		  $("#abs2").show()
		});
		$('#writing-2').mouseleave(function () {
			$("#abs2").hide()
			$(".abstract-default").show()
		}); 
		$('#writing-3').mouseenter(function () {
		  $(".abstract-default").hide()
		  $("#abs3").show()
		});
		$('#writing-3').mouseleave(function () {
			$("#abs3").hide()
			$(".abstract-default").show()
		}); 
		$('#writing-4').mouseenter(function () {
		  $(".abstract-default").hide()
		  $("#abs4").show()
		});
		$('#writing-4').mouseleave(function () {
			$("#abs4").hide()
			$(".abstract-default").show()
		});
		$('#writing-5').mouseenter(function () {
		  $(".abstract-default").hide()
		  $("#abs5").show()
		});
		$('#writing-5').mouseleave(function () {
			$("#abs5").hide()
			$(".abstract-default").show()
		}); 
		$('#writing-6').mouseenter(function () {
		  $(".abstract-default").hide()
		  $("#abs6").show()
		});
		$('#writing-6').mouseleave(function () {
			$("#abs6").hide()
			$(".abstract-default").show()
		}); 
	}

}