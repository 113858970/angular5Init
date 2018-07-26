var url = {
  base_host:'',
  proHost:''
}
var href = window.location.href;
var test1 = new RegExp('dev-');
var test2 = new RegExp('nebula.qyy.com');
var pro = new RegExp('nebula.737.com');
if(!test1.test(href)  && test2.test(href)){
	url.base_host = 'nebula.qyy.com';
  url.proHost = '//';
}else if(pro.test(href)){
	url.base_host = 'nebula.737.com';
  url.proHost = '//';
}else{
  url.base_host = 'nebula.qyy.com';
  url.proHost = '//dev-';
}


module.exports = url;
