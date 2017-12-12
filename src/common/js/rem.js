(function(){
  var remHtml = document.querySelector('html');
  var remWidth = remHtml.getBoundingClientRect().width;
  remHtml.style.fontSize = remWidth/10 + 'px';
})();
