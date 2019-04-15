function currencyConversion()
	{
		var usDollars;
		var hongKongDollars;

		usDollars = document.getElementById('txtUsDollars').value;
		hongKongDollars = usDollars * 7.83;
		alert("$"+ hongKongDollars);
	}
