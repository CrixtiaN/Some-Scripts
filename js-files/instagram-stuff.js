//var img_link = document.getElementsByTagName('img')[document.getElementsByTagName('img').length-1].src.replace(/(\w\d{3}x\d{3}\/|sh0.08\/)/g, '');
//var vid_link = document.getElementsByTagName('video')[document.getElementsByTagName('video').length-1].src;
function open_link_window()
{
		if ( document.getElementsByTagName('video')[0] != undefined)
		{
			window.open(document.getElementsByTagName('video')[document.getElementsByTagName('video').length-1].src);
		}
		else
		{
			window.open(document.getElementsByTagName('img')[document.getElementsByTagName('img').length-1].src.replace(/(\w\d{3}x\d{3}\/|sh0.08\/)/g, ''));
		}
		//window.open(link);
}
function download_img()
{
	if ( document.getElementsByTagName('video')[0] != undefined)
	{
		location.href = document.getElementsByTagName('video')[document.getElementsByTagName('video').length-1].src+"?&dl=1";
	}
	else
	{
		location.href = document.getElementsByTagName('img')[document.getElementsByTagName('img').length-1].src.replace(/(\w\d{3}x\d{3}\/|sh0.08\/)/g, '')+"?&dl=1";
	}
	//location.href = link+"?&dl=1";
}
var checking_header = setInterval(put_buttons, 1000);
function put_buttons() {
    if ( document.querySelector("._s6yvg") != null && document.getElementById("open_button") == null ) 
		{
			//alert("no es null");
			var OpenIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAABNElEQVRYhe3X32vCMBAHcP//f6pkL93a4I+HiaA4QpExpsjWdnXT8vUpuv7Yckmu1Yce3FN79MPlQpMR7iRGtwboGCD1aIV8f75iNY0QhiEhl9jpwnyDGaVmtkFugpQfL3gSAYKAmnO86+JMIabUxAqZCbJdCAtEZ5AcidQFEdb7AkVhyh+cLu084lB59oXd8tEFkkHFuiCGqr9tFSVSJSHcOsIFqSME5PwZUb+QFoRKUf6en+4hfyCA6iB3C/kH0R/EgOgHQkAA1a19ODaee0KICEJ4QPgQHhAHBP+MOHaCF+KxHHwQz5lghSRjPLgOJvvSJBNMXHZHv/+aAdIZxOWoSMz9+nowkon5FG9/eLZPsdg2GsZwnbBMIaHS5p5juGDRM5qu8Jaf2j5551fOW8QAqccZ96IbOpmIkZcAAAAASUVORK5CYII=";
			var DownIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAz0lEQVRYhe3VuwqEMBRFUf//pwQbC8FKJGAhYiFEU0VQfHCmGCwmSExugo6QA7sMd3WJ8CeLngYcCxB19hBRIU1TbZW4A9KXiONYW9kHSIAEyMOQbZkwTUpdcQkpupN3y0aH7LJFnuiPGpXkaOVOh3jBGCCMIE4YQ4QxhISxQFhBrDCWCGuIEYaAIEG0GCKCDDnFOCCcID8YR4Qz5Ivh4I4ILxBfewNkxlAzMOapesBMg4xoMg8f3lHWYHw5ZIUUHJx7SkisNMi9CxB1AaLuA9kdU7bhZK3mAAAAAElFTkSuQmCC";
			//var link = document.getElementsByTagName("img")[document.getElementsByTagName("img").length-1].src.replace(/(\w\d{3}x\d{3}\/|sh0.08\/)/g, "");
			document.querySelector("._s6yvg").childNodes[1].outerHTML+='<div id="download_button"> <a id="download_link" style="margin-right: 5px;" href="javascript:void(0)" onclick="download_img()"> <img alt="Download" src="'+ DownIcon +'" style="padding-top: 6px;"> </a> </div><div id="open_button"> <a style="margin-right: -15px;" href="javascript:void(0)" onclick="open_link_window()"> <img alt="Open" src="'+ OpenIcon +'" style="padding-top: 4px;"> </a> </div>';
			//document.querySelector("._s6yvg").childNodes[1].outerHTML+='<div id="open_button"> <a style="margin-right: -15px;" href="javascript:void(0)" onclick="open_link_window()"> <img alt="Open" src="'+ OpenIcon +'" style="padding-top: 4px;"> </a> </div>';
			//document.querySelector("._s6yvg").childNodes[1].outerHTML+='<div id="download_button"> <a id="download_link" style="margin-right: 5px;" href="javascript:void(0)" onclick="download_img()"> <img alt="Download" src="'+ DownIcon +'" style="padding-top: 6px;"> </a> </div>';
		}
		/*else 
		{
			alert("es null");
			clearInterval(checking_header);
		}*/
		/*if (document.querySelector("._5axto") == null)
		{
			clearInterval(checking_header);
		}*/
}

//-----------------------------------------------------------------------------

function open_link_window(idx, tp_vid)
{
		//if ( document.getElementsByTagName('video')[0] != undefined)
		if (tp_vid==1)
		{
			window.open(document.getElementsByTagName('video')[idx].src);
		}
		else
		{
			window.open(document.getElementsByTagName('img')[idx].src.replace(/(\w\d{3}x\d{3}\/|sh0.08\/)/g, ''));
		}
		//window.open(document.getElementsByTagName('img')[idx].src.replace(/(\w\d{3}x\d{3}\/|sh0.08\/)/g, ''));
		//window.open(link);
}
function download_img(idx, tp_vid)
{
	//if ( document.getElementsByTagName('video')[0] != undefined)
	if(tp_vid==1)
	{
		location.href = document.getElementsByTagName('video')[idx].src+"?&dl=1";
	}
	else
	{
		location.href = document.getElementsByTagName('img')[idx].src.replace(/(\w\d{3}x\d{3}\/|sh0.08\/)/g, '')+"?&dl=1";
	}
	//location.href = document.getElementsByTagName('img')[idx].src.replace(/(\w\d{3}x\d{3}\/|sh0.08\/)/g, '')+"?&dl=1";
	//location.href = link+"?&dl=1";
}
var OpenIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAABNElEQVRYhe3X32vCMBAHcP//f6pkL93a4I+HiaA4QpExpsjWdnXT8vUpuv7Yckmu1Yce3FN79MPlQpMR7iRGtwboGCD1aIV8f75iNY0QhiEhl9jpwnyDGaVmtkFugpQfL3gSAYKAmnO86+JMIabUxAqZCbJdCAtEZ5AcidQFEdb7AkVhyh+cLu084lB59oXd8tEFkkHFuiCGqr9tFSVSJSHcOsIFqSME5PwZUb+QFoRKUf6en+4hfyCA6iB3C/kH0R/EgOgHQkAA1a19ODaee0KICEJ4QPgQHhAHBP+MOHaCF+KxHHwQz5lghSRjPLgOJvvSJBNMXHZHv/+aAdIZxOWoSMz9+nowkon5FG9/eLZPsdg2GsZwnbBMIaHS5p5juGDRM5qu8Jaf2j5551fOW8QAqccZ96IbOpmIkZcAAAAASUVORK5CYII=";
var DownIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAz0lEQVRYhe3VuwqEMBRFUf//pwQbC8FKJGAhYiFEU0VQfHCmGCwmSExugo6QA7sMd3WJ8CeLngYcCxB19hBRIU1TbZW4A9KXiONYW9kHSIAEyMOQbZkwTUpdcQkpupN3y0aH7LJFnuiPGpXkaOVOh3jBGCCMIE4YQ4QxhISxQFhBrDCWCGuIEYaAIEG0GCKCDDnFOCCcID8YR4Qz5Ivh4I4ILxBfewNkxlAzMOapesBMg4xoMg8f3lHWYHw5ZIUUHJx7SkisNMi9CxB1AaLuA9kdU7bhZK3mAAAAAElFTkSuQmCC";
var img_index = 3;
var vid_index = 0;
var i = 0;
var checking_header = setInterval(put_buttons1, 1000);
function put_buttons1() {
	var art = document.getElementsByTagName("article");
	while (i<art.length)
	{
		art[i].querySelector("._s6yvg").childNodes[1].outerHTML+='<div id="download_button"> <a id="download_link" style="margin-right: 5px;" href="javascript:void(0)" onclick="download_img('+img_index+')"> <img alt="Download" src="'+ DownIcon +'" style="padding-top: 6px;"> </a> </div><div id="open_button"> <a id ="open_link" style="margin-right: -15px;" href="javascript:void(0)" onclick="open_link_window('+img_index+')"> <img alt="Open" src="'+ OpenIcon +'" style="padding-top: 4px;"> </a> </div>';
		document.querySelectorAll("#open_button > a")[i].style.marginRight= "10px";
		img_index+= 4;
		if(art[i].getElementsByTagName("video")[0] != undefined)
		{
			art[i].querySelector("#download_link").setAttribute("onclick","download_img("+vid_index+",1)");
			art[i].querySelector("#open_link").setAttribute("onclick","open_link_window("+vid_index+",1)");
			vid_index+= 1;
		}
		i++;
	}
}
//document.querySelectorAll("#open_button > a").style.marginRight= "10px";
//document.getElementsByTagName("article").length
//window.open(document.getElementsByTagName("video")[1].src);

//-------------------------------------------------------------------------------------

//window.onload;
document.head.innerHTML+='<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">\n<style>.material-icons{font-size:36px;color:rgba(0,0,0,.2)}/*.material-icons:active,*/.material-icons:hover{color:rgba(0,0,0,.4)}</style>';
document.head.innerHTML+='<style>.my-btn{background-color:#e8e8e8;color:rgba(0,0,0,.25);border-radius:50%;font-size:24px;height:56px;margin:auto;min-width:56px;width:56px;padding:0;overflow:hidden;border:none;display:inline-block;font-weight:500;text-transform:uppercase;letter-spacing:0;will-change:box-shadow;transition:box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1);outline:0;cursor:pointer;text-decoration:none;text-align:center;line-height:1px;vertical-align:middle;position:fixed;right:30px;bottom:30px;z-index:999;box-shadow:0 3px 4px 0 rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.2),0 1px 8px 0 rgba(0,0,0,.12)}.my-btn:hover{background-color:#125688!important;box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.2)!important;color:#fff!important}.my-btn:active{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)!important;-webkit-filter:brightness(95%);filter:brightness(95%)}</style>';
document.getElementById("react-root").innerHTML+='<button id="my-btn-id" class="my-btn" style="display: none;" onclick="scrollTo(0,0)"><i class="material-icons" style="font-size: 24px; color: inherit;">arrow_upward</i></button>';
//void(0);
//var OpenIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAABNElEQVRYhe3X32vCMBAHcP//f6pkL93a4I+HiaA4QpExpsjWdnXT8vUpuv7Yckmu1Yce3FN79MPlQpMR7iRGtwboGCD1aIV8f75iNY0QhiEhl9jpwnyDGaVmtkFugpQfL3gSAYKAmnO86+JMIabUxAqZCbJdCAtEZ5AcidQFEdb7AkVhyh+cLu084lB59oXd8tEFkkHFuiCGqr9tFSVSJSHcOsIFqSME5PwZUb+QFoRKUf6en+4hfyCA6iB3C/kH0R/EgOgHQkAA1a19ODaee0KICEJ4QPgQHhAHBP+MOHaCF+KxHHwQz5lghSRjPLgOJvvSJBNMXHZHv/+aAdIZxOWoSMz9+nowkon5FG9/eLZPsdg2GsZwnbBMIaHS5p5juGDRM5qu8Jaf2j5551fOW8QAqccZ96IbOpmIkZcAAAAASUVORK5CYII=";
//var DownIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAz0lEQVRYhe3VuwqEMBRFUf//pwQbC8FKJGAhYiFEU0VQfHCmGCwmSExugo6QA7sMd3WJ8CeLngYcCxB19hBRIU1TbZW4A9KXiONYW9kHSIAEyMOQbZkwTUpdcQkpupN3y0aH7LJFnuiPGpXkaOVOh3jBGCCMIE4YQ4QxhISxQFhBrDCWCGuIEYaAIEG0GCKCDDnFOCCcID8YR4Qz5Ivh4I4ILxBfewNkxlAzMOapesBMg4xoMg8f3lHWYHw5ZIUUHJx7SkisNMi9CxB1AaLuA9kdU7bhZK3mAAAAAElFTkSuQmCC";
//var img_index = 3;
var img_index = 1;
var vid_index = 0;
//var bt_code = '<div id="download_button"> <a id="download_link" style="margin-right: 5px;" href="javascript:void(0)" onclick="download_img('+img_index+')"> <img alt="Download" src="'+ DownIcon +'" style="padding-top: 6px;"> </a> </div><div id="open_button"> <a id ="open_link" style="margin-right: -15px;" href="javascript:void(0)" onclick="open_link_window('+img_index+')"> <img alt="Open" src="'+ OpenIcon +'" style="padding-top: 4px;"> </a> </div>';
var bt_code = '<div id="download_button"> <a id="download_link" style="/*margin-right: 5px;*/" href="javascript:void(0)" onclick="download_img('+img_index+')"> <i class="material-icons" style="padding-top: 6px;">get_app</i> </a> </div><div id="open_button"> <a id ="open_link" style="margin-right: -15px;" href="javascript:void(0)" onclick="open_link_window('+img_index+')"> <i class="material-icons" style="padding-top: 4px;">open_in_new</i> </a> </div>';
var i = 0;
function open_link_window(idx, tp_vid)
{
	if ( location.href != "https://www.instagram.com/" && document.getElementsByTagName('video')[0] != undefined)
	{
	window.open(document.getElementsByTagName('video')[document.getElementsByTagName('video').length-1].src);
	}
	else if (location.href != "https://www.instagram.com/")
	{
		//window.open(document.getElementsByTagName('img')[document.getElementsByTagName('img').length-1].src.replace(/(\w\d{3}x\d{3}\/|sh0.08\/)/g, ''));
		window.open(document.getElementsByTagName('img')[document.getElementsByTagName('img').length-1].src.replace(/(\w\d{3}x\d{3}\/|sh0.08\/|c(\d+|\.)+\/|\?(\w+|\W+)+)/g,''));
	}
	else if (tp_vid==1)
	{
		window.open(document.getElementsByTagName('video')[idx].src);
	}
	else
	{
		//window.open(document.getElementsByTagName('img')[idx].src.replace(/(\w\d{3}x\d{3}\/|sh0.08\/)/g, ''));
		window.open(document.getElementsByTagName('img')[idx].src.replace(/(\w\d{3}x\d{3}\/|sh0.08\/|c(\d+|\.)+\/|\?(\w+|\W+)+)/g,''));
	}
	//window.open(document.getElementsByTagName('img')[idx].src.replace(/(\w\d{3}x\d{3}\/|sh0.08\/)/g, ''));
	//window.open(link);
}
function download_img(idx, tp_vid)
{
	//if ( document.getElementsByTagName('video')[0] != undefined)
	if ( location.href != "https://www.instagram.com/" && document.getElementsByTagName('video')[0] != undefined)
	{
		location.href = document.getElementsByTagName('video')[document.getElementsByTagName('video').length-1].src+"?&dl=1";
	}
	else if (location.href != "https://www.instagram.com/")
	{
		//location.href = document.getElementsByTagName('img')[document.getElementsByTagName('img').length-1].src.replace(/(\w\d{3}x\d{3}\/|sh0.08\/)/g, '')+"?&dl=1";
		location.href = document.getElementsByTagName('img')[document.getElementsByTagName('img').length-1].src.replace(/(\w\d{3}x\d{3}\/|sh0.08\/|c(\d+|\.)+\/|\?(\w+|\W+)+)/g,'')+"?&dl=1";
	}

	else if(tp_vid==1)
	{
		location.href = document.getElementsByTagName('video')[idx].src+"?&dl=1";
	}
	else
	{
		//location.href = document.getElementsByTagName('img')[idx].src.replace(/(\w\d{3}x\d{3}\/|sh0.08\/)/g, '')+"?&dl=1";
		location.href = document.getElementsByTagName('img')[idx].src.replace(/(\w\d{3}x\d{3}\/|sh0.08\/|c(\d+|\.)+\/|\?(\w+|\W+)+)/g,'')+"?&dl=1";
	}
	//location.href = document.getElementsByTagName('img')[idx].src.replace(/(\w\d{3}x\d{3}\/|sh0.08\/)/g, '')+"?&dl=1";
	//location.href = link+"?&dl=1";
}
function put_buttons() {
	//window.onload;
	//console.clear();
	//console.log(Array(30).join('\n'));
	if(scrollY>=100)
	{
		document.getElementById("my-btn-id").style.display="inline-block";
	}
	else
	{
		document.getElementById("my-btn-id").style.display="none";
	}

	if ( location.href != "https://www.instagram.com/" && document.querySelector("._s6yvg") != null && document.getElementById("open_button") == null ) 
		{
			//alert("no es null");
			//var link = document.getElementsByTagName("img")[document.getElementsByTagName("img").length-1].src.replace(/(\w\d{3}x\d{3}\/|sh0.08\/)/g, "");
			document.querySelector("._s6yvg").childNodes[1].outerHTML+=bt_code;
			//document.querySelector("._s6yvg").childNodes[1].outerHTML+='<div id="open_button"> <a style="margin-right: -15px;" href="javascript:void(0)" onclick="open_link_window()"> <img alt="Open" src="'+ OpenIcon +'" style="padding-top: 4px;"> </a> </div>';
			//document.querySelector("._s6yvg").childNodes[1].outerHTML+='<div id="download_button"> <a id="download_link" style="margin-right: 5px;" href="javascript:void(0)" onclick="download_img()"> <img alt="Download" src="'+ DownIcon +'" style="padding-top: 6px;"> </a> </div>';
		}
		/*else 
		{
			alert("es null");
			clearInterval(checking_header);
		}*/
		/*if (document.querySelector("._5axto") == null)
		{
			clearInterval(checking_header);
		}*/
	if (location.href == "https://www.instagram.com/")
	{
		var art = document.getElementsByTagName("article");
		while (i<art.length)
		{
			//art[i].querySelector("._s6yvg").childNodes[1].outerHTML+= '<div id="download_button"> <a id="download_link" style="margin-right: 5px;" href="javascript:void(0)" onclick="download_img('+img_index+')"> <img alt="Download" src="'+ DownIcon +'" style="padding-top: 6px;"> </a> </div><div id="open_button"> <a id ="open_link" style="margin-right: -15px;" href="javascript:void(0)" onclick="open_link_window('+img_index+')"> <img alt="Open" src="'+ OpenIcon +'" style="padding-top: 4px;"> </a> </div>';
			art[i].querySelector("._s6yvg").childNodes[1].outerHTML+= '<div id="download_button"> <a id="download_link" style="/*margin-right: 5px;*/" href="javascript:void(0)" onclick="download_img('+img_index+')"> <i class="material-icons" style="padding-top: 6px;">get_app</i> </a> </div><div id="open_button"> <a id ="open_link" style="margin-right: 10px;" href="javascript:void(0)" onclick="open_link_window('+img_index+')"> <i class="material-icons" style="padding-top: 4px;">open_in_new</i> </div>';
			//document.querySelectorAll("#open_button > a")[i].style.marginRight= "10px";
			//img_index+= 4;
			img_index+= 2;
			if(art[i].getElementsByTagName("video")[0] != undefined)
			{
				art[i].querySelector("#download_link").setAttribute("onclick","download_img("+vid_index+",1)");
				art[i].querySelector("#open_link").setAttribute("onclick","open_link_window("+vid_index+",1)");
				vid_index+= 1;
			}
			i++;
		}
	}
	else
	{
		i = 0;
		img_index = 1;
		vid_index = 0;
	}
}
var checking_header = setInterval(put_buttons, 1000);
void(0);
//clearInterval(checking_header);

//Minified
var OpenIcon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAABNElEQVRYhe3X32vCMBAHcP//f6pkL93a4I+HiaA4QpExpsjWdnXT8vUpuv7Yckmu1Yce3FN79MPlQpMR7iRGtwboGCD1aIV8f75iNY0QhiEhl9jpwnyDGaVmtkFugpQfL3gSAYKAmnO86+JMIabUxAqZCbJdCAtEZ5AcidQFEdb7AkVhyh+cLu084lB59oXd8tEFkkHFuiCGqr9tFSVSJSHcOsIFqSME5PwZUb+QFoRKUf6en+4hfyCA6iB3C/kH0R/EgOgHQkAA1a19ODaee0KICEJ4QPgQHhAHBP+MOHaCF+KxHHwQz5lghSRjPLgOJvvSJBNMXHZHv/+aAdIZxOWoSMz9+nowkon5FG9/eLZPsdg2GsZwnbBMIaHS5p5juGDRM5qu8Jaf2j5551fOW8QAqccZ96IbOpmIkZcAAAAASUVORK5CYII=",
DownIcon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAz0lEQVRYhe3VuwqEMBRFUf//pwQbC8FKJGAhYiFEU0VQfHCmGCwmSExugo6QA7sMd3WJ8CeLngYcCxB19hBRIU1TbZW4A9KXiONYW9kHSIAEyMOQbZkwTUpdcQkpupN3y0aH7LJFnuiPGpXkaOVOh3jBGCCMIE4YQ4QxhISxQFhBrDCWCGuIEYaAIEG0GCKCDDnFOCCcID8YR4Qz5Ivh4I4ILxBfewNkxlAzMOapesBMg4xoMg8f3lHWYHw5ZIUUHJx7SkisNMi9CxB1AaLuA9kdU7bhZK3mAAAAAElFTkSuQmCC",img_index=3,vid_index=0,bt_code='<div id="download_button"> <a id="download_link" style="margin-right: 5px;" href="javascript:void(0)" onclick="download_img('+
img_index+')"> <img alt="Download" src="'+DownIcon+'" style="padding-top: 6px;"> </a> </div><div id="open_button"> <a id ="open_link" style="margin-right: -15px;" href="javascript:void(0)" onclick="open_link_window('+img_index+')"> <img alt="Open" src="'+OpenIcon+'" style="padding-top: 4px;"> </a> </div>',i=0;
function open_link_window(a,b){"https://www.instagram.com/"!=location.href&&void 0!=document.getElementsByTagName("video")[0]?window.open(document.getElementsByTagName("video")[document.getElementsByTagName("video").length-1].src):"https://www.instagram.com/"!=location.href?window.open(document.getElementsByTagName("img")[document.getElementsByTagName("img").length-1].src.replace(/(\w\d{3}x\d{3}\/|sh0.08\/)/g,"")):1==b?window.open(document.getElementsByTagName("video")[a].src):window.open(document.getElementsByTagName("img")[a].src.replace(/(\w\d{3}x\d{3}\/|sh0.08\/)/g,
""))}
function download_img(a,b){"https://www.instagram.com/"!=location.href&&void 0!=document.getElementsByTagName("video")[0]?location.href=document.getElementsByTagName("video")[document.getElementsByTagName("video").length-1].src+"?&dl=1":location.href="https://www.instagram.com/"!=location.href?document.getElementsByTagName("img")[document.getElementsByTagName("img").length-1].src.replace(/(\w\d{3}x\d{3}\/|sh0.08\/)/g,"")+"?&dl=1":1==b?document.getElementsByTagName("video")[a].src+"?&dl=1":document.getElementsByTagName("img")[a].src.replace(/(\w\d{3}x\d{3}\/|sh0.08\/)/g,"")+
"?&dl=1"}
function put_buttons(){"https://www.instagram.com/"!=location.href&&null!=document.querySelector("._s6yvg")&&null==document.getElementById("open_button")&&(document.querySelector("._s6yvg").childNodes[1].outerHTML+=bt_code);if("https://www.instagram.com/"==location.href)for(var a=document.getElementsByTagName("article");i<a.length;)a[i].querySelector("._s6yvg").childNodes[1].outerHTML+='<div id="download_button"> <a id="download_link" style="margin-right: 5px;" href="javascript:void(0)" onclick="download_img('+img_index+
')"> <img alt="Download" src="'+DownIcon+'" style="padding-top: 6px;"> </a> </div><div id="open_button"> <a id ="open_link" style="margin-right: -15px;" href="javascript:void(0)" onclick="open_link_window('+img_index+')"> <img alt="Open" src="'+OpenIcon+'" style="padding-top: 4px;"> </a> </div>',document.querySelectorAll("#open_button > a")[i].style.marginRight="10px",img_index+=4,void 0!=a[i].getElementsByTagName("video")[0]&&(a[i].querySelector("#download_link").setAttribute("onclick","download_img("+
vid_index+",1)"),a[i].querySelector("#open_link").setAttribute("onclick","open_link_window("+vid_index+",1)"),vid_index+=1),i++;else i=0,img_index=3,vid_index=0}var checking_header=setInterval(put_buttons,1E3);

function open_link_window(e,n){"https://www.instagram.com/"!=location.href&&void 0!=document.getElementsByTagName("video")[0]?window.open(document.getElementsByTagName("video")[document.getElementsByTagName("video").length-1].src):"https://www.instagram.com/"!=location.href?window.open(document.getElementsByTagName("img")[document.getElementsByTagName("img").length-1].src.replace(/(\w\d{3}x\d{3}\/|sh0.08\/)/g,"")):1==n?window.open(document.getElementsByTagName("video")[e].src):window.open(document.getElementsByTagName("img")[e].src.replace(/(\w\d{3}x\d{3}\/|sh0.08\/)/g,""))}function download_img(e,n){"https://www.instagram.com/"!=location.href&&void 0!=document.getElementsByTagName("video")[0]?location.href=document.getElementsByTagName("video")[document.getElementsByTagName("video").length-1].src+"?&dl=1":location.href="https://www.instagram.com/"!=location.href?document.getElementsByTagName("img")[document.getElementsByTagName("img").length-1].src.replace(/(\w\d{3}x\d{3}\/|sh0.08\/)/g,"")+"?&dl=1":1==n?document.getElementsByTagName("video")[e].src+"?&dl=1":document.getElementsByTagName("img")[e].src.replace(/(\w\d{3}x\d{3}\/|sh0.08\/)/g,"")+"?&dl=1"}function put_buttons(){if("https://www.instagram.com/"!=location.href&&null!=document.querySelector("._s6yvg")&&null==document.getElementById("open_button")&&(document.querySelector("._s6yvg").childNodes[1].outerHTML+=bt_code),"https://www.instagram.com/"==location.href)for(var e=document.getElementsByTagName("article");i<e.length;)e[i].querySelector("._s6yvg").childNodes[1].outerHTML+='<div id="download_button"> <a id="download_link" style="margin-right: 5px;" href="javascript:void(0)" onclick="download_img('+img_index+')"> <img alt="Download" src="'+DownIcon+'" style="padding-top: 6px;"> </a> </div><div id="open_button"> <a id ="open_link" style="margin-right: -15px;" href="javascript:void(0)" onclick="open_link_window('+img_index+')"> <img alt="Open" src="'+OpenIcon+'" style="padding-top: 4px;"> </a> </div>',document.querySelectorAll("#open_button > a")[i].style.marginRight="10px",img_index+=4,void 0!=e[i].getElementsByTagName("video")[0]&&(e[i].querySelector("#download_link").setAttribute("onclick","download_img("+vid_index+",1)"),e[i].querySelector("#open_link").setAttribute("onclick","open_link_window("+vid_index+",1)"),vid_index+=1),i++;else i=0,img_index=3,vid_index=0}var OpenIcon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAABNElEQVRYhe3X32vCMBAHcP//f6pkL93a4I+HiaA4QpExpsjWdnXT8vUpuv7Yckmu1Yce3FN79MPlQpMR7iRGtwboGCD1aIV8f75iNY0QhiEhl9jpwnyDGaVmtkFugpQfL3gSAYKAmnO86+JMIabUxAqZCbJdCAtEZ5AcidQFEdb7AkVhyh+cLu084lB59oXd8tEFkkHFuiCGqr9tFSVSJSHcOsIFqSME5PwZUb+QFoRKUf6en+4hfyCA6iB3C/kH0R/EgOgHQkAA1a19ODaee0KICEJ4QPgQHhAHBP+MOHaCF+KxHHwQz5lghSRjPLgOJvvSJBNMXHZHv/+aAdIZxOWoSMz9+nowkon5FG9/eLZPsdg2GsZwnbBMIaHS5p5juGDRM5qu8Jaf2j5551fOW8QAqccZ96IbOpmIkZcAAAAASUVORK5CYII=",DownIcon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAz0lEQVRYhe3VuwqEMBRFUf//pwQbC8FKJGAhYiFEU0VQfHCmGCwmSExugo6QA7sMd3WJ8CeLngYcCxB19hBRIU1TbZW4A9KXiONYW9kHSIAEyMOQbZkwTUpdcQkpupN3y0aH7LJFnuiPGpXkaOVOh3jBGCCMIE4YQ4QxhISxQFhBrDCWCGuIEYaAIEG0GCKCDDnFOCCcID8YR4Qz5Ivh4I4ILxBfewNkxlAzMOapesBMg4xoMg8f3lHWYHw5ZIUUHJx7SkisNMi9CxB1AaLuA9kdU7bhZK3mAAAAAElFTkSuQmCC",img_index=3,vid_index=0,bt_code='<div id="download_button"> <a id="download_link" style="margin-right: 5px;" href="javascript:void(0)" onclick="download_img('+img_index+')"> <img alt="Download" src="'+DownIcon+'" style="padding-top: 6px;"> </a> </div><div id="open_button"> <a id ="open_link" style="margin-right: -15px;" href="javascript:void(0)" onclick="open_link_window('+img_index+')"> <img alt="Open" src="'+OpenIcon+'" style="padding-top: 4px;"> </a> </div>',i=0,checking_header=setInterval(put_buttons,1e3);

function open_link_window(e,n){"https://www.instagram.com/"!=location.href&&void 0!=document.getElementsByTagName("video")[0]?window.open(document.getElementsByTagName("video")[document.getElementsByTagName("video").length-1].src):"https://www.instagram.com/"!=location.href?window.open(document.getElementsByTagName("img")[document.getElementsByTagName("img").length-1].src.replace(/(\w\d{3}x\d{3}\/|sh0.08\/)/g,"")):1==n?window.open(document.getElementsByTagName("video")[e].src):window.open(document.getElementsByTagName("img")[e].src.replace(/(\w\d{3}x\d{3}\/|sh0.08\/)/g,""))}function download_img(e,n){"https://www.instagram.com/"!=location.href&&void 0!=document.getElementsByTagName("video")[0]?location.href=document.getElementsByTagName("video")[document.getElementsByTagName("video").length-1].src+"?&dl=1":"https://www.instagram.com/"!=location.href?location.href=document.getElementsByTagName("img")[document.getElementsByTagName("img").length-1].src.replace(/(\w\d{3}x\d{3}\/|sh0.08\/)/g,"")+"?&dl=1":1==n?location.href=document.getElementsByTagName("video")[e].src+"?&dl=1":location.href=document.getElementsByTagName("img")[e].src.replace(/(\w\d{3}x\d{3}\/|sh0.08\/)/g,"")+"?&dl=1"}function put_buttons(){if("https://www.instagram.com/"!=location.href&&null!=document.querySelector("._s6yvg")&&null==document.getElementById("open_button")&&(document.querySelector("._s6yvg").childNodes[1].outerHTML+=bt_code),"https://www.instagram.com/"==location.href)for(var e=document.getElementsByTagName("article");i<e.length;)e[i].querySelector("._s6yvg").childNodes[1].outerHTML+='<div id="download_button"> <a id="download_link" style="margin-right: 5px;" href="javascript:void(0)" onclick="download_img('+img_index+')"> <img alt="Download" src="'+DownIcon+'" style="padding-top: 6px;"> </a> </div><div id="open_button"> <a id ="open_link" style="margin-right: -15px;" href="javascript:void(0)" onclick="open_link_window('+img_index+')"> <img alt="Open" src="'+OpenIcon+'" style="padding-top: 4px;"> </a> </div>',document.querySelectorAll("#open_button > a")[i].style.marginRight="10px",img_index+=4,void 0!=e[i].getElementsByTagName("video")[0]&&(e[i].querySelector("#download_link").setAttribute("onclick","download_img("+vid_index+",1)"),e[i].querySelector("#open_link").setAttribute("onclick","open_link_window("+vid_index+",1)"),vid_index+=1),i++;else i=0,img_index=3,vid_index=0}var OpenIcon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAABNElEQVRYhe3X32vCMBAHcP//f6pkL93a4I+HiaA4QpExpsjWdnXT8vUpuv7Yckmu1Yce3FN79MPlQpMR7iRGtwboGCD1aIV8f75iNY0QhiEhl9jpwnyDGaVmtkFugpQfL3gSAYKAmnO86+JMIabUxAqZCbJdCAtEZ5AcidQFEdb7AkVhyh+cLu084lB59oXd8tEFkkHFuiCGqr9tFSVSJSHcOsIFqSME5PwZUb+QFoRKUf6en+4hfyCA6iB3C/kH0R/EgOgHQkAA1a19ODaee0KICEJ4QPgQHhAHBP+MOHaCF+KxHHwQz5lghSRjPLgOJvvSJBNMXHZHv/+aAdIZxOWoSMz9+nowkon5FG9/eLZPsdg2GsZwnbBMIaHS5p5juGDRM5qu8Jaf2j5551fOW8QAqccZ96IbOpmIkZcAAAAASUVORK5CYII=",DownIcon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAz0lEQVRYhe3VuwqEMBRFUf//pwQbC8FKJGAhYiFEU0VQfHCmGCwmSExugo6QA7sMd3WJ8CeLngYcCxB19hBRIU1TbZW4A9KXiONYW9kHSIAEyMOQbZkwTUpdcQkpupN3y0aH7LJFnuiPGpXkaOVOh3jBGCCMIE4YQ4QxhISxQFhBrDCWCGuIEYaAIEG0GCKCDDnFOCCcID8YR4Qz5Ivh4I4ILxBfewNkxlAzMOapesBMg4xoMg8f3lHWYHw5ZIUUHJx7SkisNMi9CxB1AaLuA9kdU7bhZK3mAAAAAElFTkSuQmCC",img_index=3,vid_index=0,bt_code='<div id="download_button"> <a id="download_link" style="margin-right: 5px;" href="javascript:void(0)" onclick="download_img('+img_index+')"> <img alt="Download" src="'+DownIcon+'" style="padding-top: 6px;"> </a> </div><div id="open_button"> <a id ="open_link" style="margin-right: -15px;" href="javascript:void(0)" onclick="open_link_window('+img_index+')"> <img alt="Open" src="'+OpenIcon+'" style="padding-top: 4px;"> </a> </div>',i=0,checking_header=setInterval(put_buttons,1e3);

<i class="material-icons" style="padding-top: 6px;">get_app</i>
<i class="material-icons" style="padding-top: 4px;">open_in_new</i>
