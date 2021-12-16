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


	
/* Function to disable Calculate button after submit */

function disableButton() {
    var submit = document.getElementById('submit-div');
    submit.innerHTML = '<a class="btn-about" id="refresh" onclick="refreshDiv()" href="#quote">Refresh Calculator <i class="fas fa-arrow-circle-right"></i></a>';
    document.getElementById("print-btn").style.visibility = 'visible';

}

//Change quantity dependicg on the option selected
(function() {

    document.addEventListener('DOMContentLoaded', function(){
    
        var option1 = document.getElementById("tracing");
        var option2 = document.getElementById("eavesdropping");

        option1.addEventListener("change", function() {

            var quantity1 = document.getElementById("quantity-1");

            if(option1.value==500){
                quantity1.innerHTML = '<label for="tracing-q" id="quantity-1" class="fee">Day/s:</label>';
            } else if(option1.value==2800){
                quantity1.innerHTML = '<label for="tracing-q" id="quantity-1" class="fee">Week/s:</label>';
            } else if(option1.value==8400){
                quantity1.innerHTML = '<label for="tracing-q" id="quantity-1" class="fee">Moth/s:</label>';
            } else{
                quantity1.innerHTML = '<label for="tracing-q" id="quantity-1" class="fee">Quantity:</label>';
            }
        });

        option2.addEventListener("change", function() {

            var quantity2 = document.getElementById("quantity-2");
            if(option2.value==80){
                quantity2.innerHTML = '<label for="eavesdropping-q" id="quantity-2" class="fee">Hour/s: </label>';
            } else if(option2.value==300){
                quantity2.innerHTML = '<label for="eavesdropping-q" id="quantity-2" class="fee">Bundle/s: </label>';
            } else{
                quantity2.innerHTML = '<label for="eavesdropping-q" id="quantity-2" class="fee">Quantity: </label>';
            }
        });
    
    });
})();

function estimateTotal(event) {
    event.preventDefault();

    var eavesdropping = document.getElementById("eavesdropping");
    var tracing = document.getElementById("tracing");
    var TR = parseInt(document.getElementById("tracing-q").value);
    var ED = parseInt(document.getElementById("eavesdropping-q").value);
    var LA = parseInt(document.getElementById("legal-advice-q").value,);
    var HK = parseInt(document.getElementById("hacking-q").value);
    if(TR==0 && ED==0 && LA==0 && HK==0){
        alert('Please, fill at least one field of the calculator');
        return;
    }
    //console.log(TR);
    //console.log(ED);
    //console.log(LA);
    //console.log(HK);
    
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
    result_html.innerHTML += '<div class="results"><h1>Your Quote </h1></div><br>';
    result_html.innerHTML += '<div class="result-title">Your services: </div><br><br>';

    if(TR != 0){
        var fee1;
        if(tracing.value==500){
            fee1 = 'hour/s';
        } else if(tracing.value==2800){
            fee1 = 'week/s';
        } else if(tracing.value==8400){
            fee1 = 'moth/s';
        }
        totalPriceUntaxed += totalTracing;
        result_html.innerHTML += '<div class="result-content">Tracing Job: &nbsp&nbsp' + tracing.value + '€ &nbsp&nbsp*&nbsp&nbsp ' + TR + ' &nbsp&nbsp'+ fee1 +'&nbsp&nbsp =&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp€' + totalTracing + '</div><br>';
    }
    if(ED != 0){
        var fee2;
        if(eavesdropping.value==80){
            fee2 = 'hour/s';
        } else if(eavesdropping.value==300){
            fee2 = 'bundle/s';
        }
        totalPriceUntaxed += totalEavesdropping;
        result_html.innerHTML += '<div class="result-content">Eavesdropping: &nbsp&nbsp' + eavesdropping.value + '€ &nbsp&nbsp*&nbsp&nbsp ' + ED + ' &nbsp&nbsp' + fee2 + '&nbsp&nbsp =&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp€' + totalEavesdropping + '</div><br>';
    }
    if(LA != 0){
        totalPriceUntaxed += totalLegal;
        result_html.innerHTML += '<div class="result-content">Legal Advice: &nbsp&nbsp' + '150' + '€ &nbsp&nbsp*&nbsp&nbsp ' + LA + ' &nbsp&nbsphour/s&nbsp&nbsp =&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp€' + totalLegal+ '</div><br>';
    }
    if(HK != 0){
        totalPriceUntaxed += totalHacking;
        result_html.innerHTML += '<div class="result-content">Hacking Solutions: &nbsp&nbsp' + '500' + '€ &nbsp&nbsp*&nbsp&nbsp ' + HK + ' &nbsp&nbsphour/s&nbsp&nbsp =&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp€' + totalHacking + '</div><br>';
    }

    totalPrice=totalPriceUntaxed+(21*totalPriceUntaxed/100);
    totalTaxes= 21*totalPriceUntaxed/100;
    //console.log(totalPriceUntaxed);

    result_html.innerHTML += '<div class="result-result">Price without Taxes = &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp€' + totalPriceUntaxed + '</div><br>';
    result_html.innerHTML += '<div class="result-title">Your total balance: </div><br><br>';
    result_html.innerHTML += '<div class="result-content">Taxes 21% = &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp€' + totalTaxes + '</div><br>';
    result_html.innerHTML += '<div class="result-result">Total + Taxes = &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp€' + (totalPriceUntaxed + totalTaxes) + '</div><br>';
    result_html.scrollIntoView();

    disableButton();

}

//script for pint quote
function printDiv(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;
    var tracing = document.getElementById("tracing").selectedIndex;
    var eavesdropping = document.getElementById("eavesdropping").selectedIndex;
    var tracingQ = document.getElementById("tracing-q").value;
    var eavesdroppingQ = document.getElementById("eavesdropping-q").value;
    var legalQ =document.getElementById("legal-advice-q").value;
    var hackingQ = document.getElementById("hacking-q").value;

    document.body.innerHTML = '<div class="container-contact-form">'+printContents+'</div>';

    window.print();

    document.body.innerHTML = originalContents;
    document.getElementById("tracing").selectedIndex = tracing;
    document.getElementById("eavesdropping").selectedIndex = eavesdropping;
    document.getElementById("tracing-q").value = tracingQ;
    document.getElementById("eavesdropping-q").value = eavesdroppingQ;
    document.getElementById("legal-advice-q").value = legalQ;
    document.getElementById("hacking-q").value = hackingQ;
}
function refreshDiv(){
var submit = document.getElementById('submit-div');
var result = document.getElementById('results');

result.innerHTML = '';
submit.innerHTML = '<button class="btn-about" id="submit" value="Estimate Total" type="submit" onclick="estimateTotal(event)">Calculate <i class="fas fa-arrow-circle-right"></i></button>';
document.getElementById("print-btn").style.visibility = 'hidden';
document.getElementById("tracing").selectedIndex = 0;
document.getElementById("eavesdropping").selectedIndex = 0;
document.getElementById("tracing-q").value = 0;
document.getElementById("eavesdropping-q").value = 0;
document.getElementById("legal-advice-q").value = 0;
document.getElementById("hacking-q").value = 0;
location.reload();
}