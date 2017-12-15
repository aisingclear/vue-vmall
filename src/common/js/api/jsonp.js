function jsonp(url,callback){
  function callback(data){
    window.minge = data;
    console.log(window.minge);
  }
  var oS = document.createElement('script');
  oS.src = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+val+'&cb=fly';
  document.body.appendChild( oS );

}
