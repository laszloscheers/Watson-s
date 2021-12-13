//Script for carousel on main page
$(document).ready(function(){

    $('.items').slick({
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
    {
    breakpoint: 1024,
    settings: {
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    dots: true
    }
    },
    {
    breakpoint: 600,
    settings: {
    slidesToShow: 2,
    slidesToScroll: 2
    }
    },
    {
    breakpoint: 480,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1
    }
    }
    
    ]
    });
    });
    
//script for copy to clipboard on contact page
function CopyToClipboard(id)
{
var r = document.createRange();
r.selectNode(document.getElementById(id));
window.getSelection().removeAllRanges();
window.getSelection().addRange(r);
document.execCommand('copy');
window.getSelection().removeAllRanges();
}

//Script for calculator
(function() {
    document.addEventListener('DOMContentLoaded', function(){
    
        document.getElementById('cart_custom').addEventListener('submit', estimateTotal);
    });
	
	/* Function to disable Calculate button after submit */
	
	function disableButton() {
		document.getElementById("submit").disabled = true;
	}

    function estimateTotal(event) {
        event.preventDefault();

        var eavesdropping = document.getElementById("eavesdropping");
        var tracing = document.getElementById("tracing");
        var TR = parseInt(document.getElementById("tracing-q").value);
        var ED = parseInt(document.getElementById("eavesdropping-q").value);
        var LA = parseInt(document.getElementById("legal-advice-q").value,);
        var HK = parseInt(document.getElementById("hacking-q").value);
        
        console.log(TR);
        console.log(ED);
        console.log(LA);
        console.log(HK);
        
        var totalTracing,
            totalEavesdropping,
            totalLegal,
            totalHacking,
            totalPrice,
            totalTaxes,
            totalPriceUntaxed;

        totalTracing = tracing.value * TR;
        totalEavesdropping = eavesdropping.value * ED;
        totalLegal = LA * 150;
        totalHacking= HK * 500;
        totalPriceUntaxed=0;
        totalPrice=0;


        var result_html = document.getElementById('results');

        if(TR != 0){
            totalPriceUntaxed += totalTracing;
            result_html.innerHTML += 'Total Tracing: ' + tracing.value + '€ * ' + TR + ' = ' + totalTracing + '€ <br>';
        }
        if(ED != 0){
            totalPriceUntaxed += totalEavesdropping;
            result_html.innerHTML += 'Total Eavesdropping: ' + eavesdropping.value + '€ * ' + ED + ' = ' + totalEavesdropping + '€ <br>';
        }
        if(LA != 0){
            totalPriceUntaxed += totalLegal;
            result_html.innerHTML += 'Total Legal Advice: ' + '150' + '€ * ' + LA + ' = ' + totalLegal+ '€ <br>';
        }
        if(HK != 0){
            totalPriceUntaxed += totalHacking;
            result_html.innerHTML += 'Total Hackers: ' + '500' + '€ * ' + HK + ' = ' + totalHacking + '€ <br>';
        }

        totalPrice=totalPriceUntaxed+(21*totalPriceUntaxed/100);
        totalTaxes= 21*totalPriceUntaxed/100;
        console.log(totalPriceUntaxed);

		result_html.innerHTML += '<br>Your total balance is: <br><br>';
        result_html.innerHTML += 'Taxes 21%: ' + totalTaxes + '€<br>';
        result_html.innerHTML += 'Total: ' + (totalPriceUntaxed + totalTaxes) + '€<br>';

		disableButton();
		
    }
    
    })();