$(document).ready(function(){
	
	var	indicator = '0',
		key = '',
		operand = '',
		operation = '',
		clear = false;
	
	$('#keyboard button').live('click', function() {
		indicator = $('#indicator input').val();
		key = $(this).html();
	});
	
	$('#keyboard').live('click', function() {
		$('#indicator input').val(indicator);
	});
	
	$('#keyboard button.stub').live('click', function() {
		alert('Yo!');
	});
	
	$('#keyboard button.clear').live('click', function() {
		indicator = '0';
		operand = '';
		operation = '';
		clear = false;
	});
	
	$('#keyboard button.number').live('click', function() {
		if(clear) {
			indicator = key;
			clear = false;
		} else {
			indicator = (indicator == '0' ? '' : indicator) + key;
		}
	});
	
	$('#keyboard button.point').live('click', function() {
		if(clear) {
			indicator = '0.';
			clear = false;
		} else {
			if(indicator.indexOf('.') == -1) {
				indicator += '.'
			}
		}
	});
	
	$('#keyboard button.sign').live('click', function() {
		indicator = -indicator;
	});
	
	$('#keyboard button.operation').live('click', function() {
		if(operation != '') {
			indicator = eval(operand + operation + indicator);
		}
		operand = indicator;
		operation = key;
		clear = true;
	});
	
	$('#keyboard button.exec').live('click', function() {
		indicator = eval(operand + operation + indicator);
		operand = '';
		operation = '';
		clear = true;
	});
	
});