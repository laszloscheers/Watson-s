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
    "use strict";
    
    var tracing = document.getElementById("tracing");
    var eavesdropping = document.getElementById("eavesdropping");
    
    document.addEventListener('DOMContentLoaded', function(){
    
        document.getElementById('cart_custom').addEventListener('submit', estimateTotal);
    
    });

    function estimateTotal(event) {
        event.preventDefault();
        
    
        var TR = parseInt(document.getElementById("tracing-q").value, 10 )|| 0;
        var ED = parseInt(document.getElementById("eavesdropping-q").value, 10 )|| 0;
        var LA = parseInt(document.getElementById("legal-advice-q").value, 10 )|| 0;
        var HK = parseInt(document.getElementById("hacking-q").value, 10 )|| 0;
        
        console.log(TR);
        console.log(ED);
        console.log(LA);
    
        var state_index = state.value;
        
        var totalItemPrice, 
            estimate,
            totalTracing,
            totalEavesdropping,
            totalLegal,
            totalHacking,
            taxes;
        
        var t_quantity = sneakers + jersey + supple + water;

        totalTracing = tracing * TR;
        totalEavesdropping = eavesdropping * ED;
        totalLegal = LA * 150;
        totalHacking= HK * 500;
        taxes= 21;

        var result_html = document.getElementById('results');

        if(TR != 0){
            result_html.innerHTML = 'Total Tracing: ' + tracing + ' * ' + TR + ' = ' + totalTracing + '.';
        }
        if(ED != 0){
            result_html.innerHTML = 'Total Eavesdropping: ' + eavesdropping + ' * ' + ED + ' = ' + totalEavesdropping + '.';
        }
        if(LA != 0){
            result_html.innerHTML = 'Total Tracing: ' + tracing + ' * ' + LA + ' = ' + totalLegal+ '.';
        }
        if(HK != 0){
            result_html.innerHTML = 'Total Tracing: ' + tracing + ' * ' + TR + ' = ' + totalTracing + '.';
        }


        totalShippingCost = shippingCostPer * t_quantity;
        
        estimate = '$' +((totalItemPrice * taxFactor ) + totalShippingCost).toFixed(2);
        
        document.getElementById('total_estimate').value=estimate;
    

    
        result_html.innerHTML = 'Total Item: ' + t_quantity + '<br>';
        result_html.innerHTML +='Total Shipping: $' + totalShippingCost.toFixed(2) + '<br>';
        result_html.innerHTML +='Tax:' + (( taxFactor - 1 )*100).toFixed(2) + '%';
        
        result_html.innerHTML +='(State:'  + state_index + ')';

    
    }
    
    })();    