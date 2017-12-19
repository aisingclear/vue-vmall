(function(){
  var remHtml = document.querySelector('html');
  var remWidth = remHtml.getBoundingClientRect().width;
  remHtml.style.fontSize = remWidth/10 + 'px';
  //以下数据 组件rem转px会用到
  window.htmlFontSize = parseFloat(getComputedStyle(remHtml).fontSize);
})();
