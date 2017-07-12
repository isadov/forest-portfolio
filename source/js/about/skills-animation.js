	module.exports = function () {  

		jQuery('.pie').each(function(index, element) {
			var num = +($(this).text());
			var chart = '<svg viewBox="0 0 32 32" class="pie-skill"><circle class="circle-2" r="16" cx="16" cy="16" style="stroke-dasharray: 10 100" /><circle class="circle" r="16" cx="16" cy="16" style="stroke-dasharray: 110 100" /></svg>';
			jQuery(this).html(chart);
			jQuery(this).find('.circle-2').css('stroke-dasharray', '110');
			jQuery(this).find('.circle').css('stroke-dasharray', num + ' 100');
		});

	};