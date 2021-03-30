

setTimeout(function(){ document.getElementById('ym-notification').style.bottom = '70px';}, 200);
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutationRecord) {
        document.getElementById('ym-notification').style.bottom = '70px';
    });    
});

var target = document.getElementById('ym-notification');
observer.observe(target, { attributes : true, attributeFilter : ['style'] });


//testing
/***
document.getElementsByClassName("ym-close").addEventListener("click", function() {
    document.getElementById('ym-notification').style.bottom = '70px !important';
});
**/
