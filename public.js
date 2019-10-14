function getcookie(name)
{
	var strCookie=document.cookie;
    var arrCookie=strCookie.split('; ');
    for (var i=0;i<arrCookie.length;i++)
    {
		var arr=arrCookie[i].split('=');
        if (arr[0]==name)
			return unescape(arr[1]);
    }
    return '';
}
function setcookie(name,value,expirehours)
{
	var cookieString=name+'='+escape(value);
    if (expirehours>0)
    {
		var date=new Date();
        date.setTime(date.getTime()+expirehours*3600*1000);
        cookieString=cookieString+'; expires='+date.toGMTString();
	}
    document.cookie=cookieString;
}
function setDocTitle(name)
{
	top.document.title = name;
}

//��ֹF5ˢ��
var check=function(e){
   e=e||window.event;
   //alert(e.which||e.keyCode);
   if((e.which||e.keyCode)==116){
    if(e.preventDefault){
    e.preventDefault();}
    else{event.keyCode = 0;
     e.returnValue=false;} 
   } 
}
if(document.addEventListener){
   document.addEventListener("keydown",check,false);
}
else{
   document.attachEvent("onkeydown",check);
}

var language=getcookie('language');
if (language==''){
		if (navigator.appName == 'Netscape') 
				language = navigator.language; 
		else 
				language = navigator.browserLanguage; 	
		language=language.toLowerCase();
		if (language.indexOf('zh-cn') > -1) 
			language = 'simple_chinese'; 
		else if (language.indexOf('zh-tw') > -1) 
			language = 'traditional_chinese'; 
		else if (language.indexOf('es') > -1) 
			language = 'spanish'; 
		else if (language.indexOf('fr') > -1) 
			language = 'french'; 
		else if (language.indexOf('ru') > -1) 
			language = 'russian'; 
		else if (language.indexOf('pl') > -1) 
			language = 'polski'; 
		else if (language.indexOf('it') > -1) 
			language = 'italian'; 
		else if (language.indexOf('pt') > -1) 
			language = 'Portuguese'; 
		else if (language.indexOf('de') > -1) 
			language = 'deutsch'; 	
		else if (language.indexOf('po') > -1) 
			language = 'portugal'; 
		else if (language.indexOf('ko') > -1) 
			language = 'Korea';
		else if (language.indexOf('ja') > -1) 
			language = 'Japan';
		else 
			language = 'english'; 	
}

if (language=='simple_chinese')
	document.write('<script src="simple_chinese/string.js"><\/script><script src="simple_chinese/oem.js"><\/script>');
else if (language=='traditional_chinese')	
	document.write('<script src = "traditional_chinese/string.js"><\/script><script src = "traditional_chinese/oem.js"><\/script>');
else if (language=='spanish')
	document.write('<script src="spanish/string.js"><\/script><script src="spanish/oem.js"><\/script>');
else if (language=='french')
	document.write('<script src="french/string.js"><\/script><script src="french/oem.js"><\/script>');
else if (language=='russian')
	document.write('<script src="russian/string.js"><\/script><script src="russian/oem.js"><\/script>');
else if (language=='polski')
	document.write('<script src="polski/string.js"><\/script><script src="polski/oem.js"><\/script>');
else if (language=='italian')
	document.write('<script src="italian/string.js"><\/script><script src="italian/oem.js"><\/script>');
else if (language=='deutsch')
	document.write('<script src="deutsch/string.js"><\/script><script src="deutsch/oem.js"><\/script>');
else if (language=='portugal')
	document.write('<script src="portugal/string.js"><\/script><script src="portugal/oem.js"><\/script>');
else if (language=='Korea')
	document.write('<script src="korea/string.js"><\/script><script src="korea/oem.js"><\/script>');
else if (language=='Japan')
	document.write('<script src="Japan/string.js"><\/script><script src="Japan/oem.js"><\/script>');	
else
	document.write('<script src="english/string.js"><\/script><script src="english/oem.js"><\/script>');
	
	
function reboot()
{
	var url;
	if (confirm(_sure_reboot))
	{
		top.reboot_seconds = 30;
		url='reboot.htm';
		location=url;
		url='cmd.cgi?cmd_tag=reboot&group_tag=cms_info&next_url=reboot.htm';
		$.getScript(url);
		$.getScript(url);
		$.getScript(url);
	}
}
function restore_factory()
{
	var url;
	if (confirm(_sure_restore))
	{
		top.reboot_seconds = 30;
		url='reboot.htm';
		location=url;
		url='cmd.cgi?cmd_tag=factory_reset&group_tag=process&next_url=reboot.htm';
		//$.getScript(url);
		$.getScript(url);
		$.getScript(url);
		$.getScript(url);
	}
}

	
function removeSelfClass(){
	$("#dd-status", parent.document).removeClass("selected");
	$("#dd-alias", parent.document).removeClass("selected");
	$("#dd-datetime", parent.document).removeClass("selected");
	//$("#dd-media", parent.document).removeClass("selected");
	$("#dd-recordpath", parent.document).removeClass("selected");
	
	$("#dd-alarm", parent.document).removeClass("selected");
	$("#dd-mail", parent.document).removeClass("selected");
	$("#dd-ftp", parent.document).removeClass("selected");
	$("#dd-log", parent.document).removeClass("selected");
	
	$("#dd-ip", parent.document).removeClass("selected");
	$("#dd-ap", parent.document).removeClass("selected");
	$("#dd-wireless", parent.document).removeClass("selected");
	$("#dd-ddns", parent.document).removeClass("selected");
	
	
	$("#dd-ptz", parent.document).removeClass("selected");
	
	$("#dd-multidev", parent.document).removeClass("selected");
	$("#dd-user", parent.document).removeClass("selected");
	$("#dd-upgrade", parent.document).removeClass("selected");

}
var PRI_REFUSE=0;
var PRI_VISITOR=1;
var PRI_OPERATOR=2;
var PRI_ADMINISTRATOR=255;
