$(function(){
	getCityByPrefCd();

	$('#select-pref').change(function() {
		getCityByPrefCd();
	});

	function getCityByPrefCd () {
		var pref_cd = $('#select-pref :selected').val();
		// .phpファイルへのアクセス
	    $.ajax('/ajax',
	      {
	        type: 'POST',
	        data: { "pref_cd" : pref_cd },
	        dataType: 'json'
	      }
	    )
	    .done(function(response) {
	    	$('#select-city').text("");
	    	Object.keys(response).forEach(function (key) {
	    	  var html  = "<option value = \"" + response[key]['city_cd'] + "\">";
	    	  	   html += response[key]['city_name'];
	    	  	   html += "</option>";
		      $('#select-city').append(html);
	    	});
	    })
	    .fail(function() {
	    	$('#select-city').text("");
	    });
	}
});
