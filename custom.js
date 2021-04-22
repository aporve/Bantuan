document.getElementById('ym-notification').style.bottom = '138px';
var observer = new MutationObserver(function(mutations) {
    document.getElementById('ym-notification').style.bottom = '138px'; 
});
var target = document.getElementById('ym-notification');
observer.observe(target, { attributes : true, attributeFilter : ['style'] });
