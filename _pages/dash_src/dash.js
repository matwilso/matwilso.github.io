// requires jquery, js-cookie

var buttonDisp = {}
buttonDisp['school'] = ['SCHOOL IS OUT', 'SCHOOL IS IN'];
buttonDisp['workhours'] = ['FREE TIME', 'WORKING HOURS'];

function setButtonText(idTag) {
	if (JSON.parse(Cookies.get(idTag)) == false) {
		$('#'+idTag).removeClass('red');
		$('#'+idTag).addClass('green');
		$('#'+idTag).text(buttonDisp[idTag][0]);
	}
	else {
		$('#'+idTag).removeClass('green');
		$('#'+idTag).addClass('red');
		$('#'+idTag).text(buttonDisp[idTag][1]);
	}
}

function checkButtonTimes() {
	var today = new Date();
	var dayOfWeek = today.getDay();
	var timeOfDay = today.getHours()

	if (dayOfWeek == 1) {
		// set school on mondays
		Cookies.set('school', true);
	}
	else {
		// else only set school if it doesn't have a previous value
		if (Cookies.get('school') == undefined || Cookies.get('school') == '') {
			Cookies.set('school', true);
		}
	}
	if (Cookies.get('workhours') != undefined || Cookies.get('workhours') == '') {
		return;
	}
	// set work hours on based on time and day
	if ((dayOfWeek != 0 && dayOfWeek != 6) && timeOfDay <= 18) {
		Cookies.set('workhours', true);
	}
	else {
		Cookies.set('workhours', false);
	}
}

$(document).ready(function() {
	checkButtonTimes();
	setButtonText('school');
	setButtonText('workhours');

	$('#school').click(function() {
		Cookies.set('school', !JSON.parse(Cookies.get('school')), { expires: 1 });
		setButtonText('school');
	});

	$('#workhours').click(function() {
		Cookies.set('workhours', !JSON.parse(Cookies.get('workhours')), { expires: 1 });
		setButtonText('workhours');
	});
});


// old shit
/*
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

jQuery(function ($) {
    var ninetyMinutes = 60 * 90,
        display = $('#time');
    startTimer(ninetyMinutes, display);
});
*/
