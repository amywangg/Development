$('div.enter').hover(function() {
		$('a.enter').html('<strong>ENTER ></strong>').fadeIn(5000);
	}, function() {
		$('a.enter').html('<strong>ENTER</strong>');
	});

var str = 'Experience Photography through the artistry of a Bromosapien';

var spans = '<span>' + str.split('').join('</span><span>') + '</span>';
$(spans).hide().appendTo('h2').each(function (i) {
    $(this).delay(75 * i).css({
        display: 'inline',
        opacity: 0
    }).animate({
        opacity: 1
    }, 100);
});