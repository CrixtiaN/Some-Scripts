document.head.innerHTML+='<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">';
document.body.innerHTML+='<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">\n<button class="my-btn" onclick="scrollTo(0,0)"><i class="material-icons">arrow_upward</i></button>\n<style>.my-btn{background-color:#ececec;color:rgba(0,0,0,.25);border-radius:50%;font-size:24px;height:56px;margin:auto;min-width:56px;width:56px;padding:0;overflow:hidden;border:none;display:inline-block;font-weight:500;text-transform:uppercase;letter-spacing:0;will-change:box-shadow;transition:box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1);outline:0;cursor:pointer;text-decoration:none;text-align:center;line-height:1px;vertical-align:middle;position:fixed;right:30px;bottom:30px;z-index:999;box-shadow:0 3px 4px 0 rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.2),0 1px 8px 0 rgba(0,0,0,.12)}.my-btn:hover{background-color:#e62117!important;box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.2)!important;color:#fff!important}.my-btn:active{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)!important;-webkit-filter:brightness(95%);filter:brightness(95%)}</style>';

document.head.innerHTML+='<style>.my-btn{background-color:#ececec;color:rgba(0,0,0,.25);border-radius:50%;font-size:24px;height:56px;margin:auto;min-width:56px;width:56px;padding:0;overflow:hidden;border:none;display:inline-block;font-weight:500;text-transform:uppercase;letter-spacing:0;will-change:box-shadow;transition:box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1);outline:0;cursor:pointer;text-decoration:none;text-align:center;line-height:1px;vertical-align:middle;position:fixed;right:30px;bottom:30px;z-index:999;box-shadow:0 3px 4px 0 rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.2),0 1px 8px 0 rgba(0,0,0,.12)}.my-btn:hover{background-color:#e62117!important;box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.2)!important;color:#fff!important}.my-btn:active{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)!important;-webkit-filter:brightness(95%);filter:brightness(95%)}</style>';
document.getElementById("react-root").innerHTML+='<button class="my-btn" onclick="scrollTo(0,0)"><i class="material-icons" style="font-size: 24px">arrow_upward</i></button>';
void(0);

//-------------------------------------MAC ADDRESS-------------------------------------

var tplink = ["00-0A-EB-","00-14-78-","00-19-E0-","00-1D-0F-","00-21-27-","00-23-CD-","00-25-86-","00-27-19-","40-16-9F-","54-E6-FC-","74-EA-3A-","94-0C-6D-","B0-48-7A-","D8-5D-4C-","E0-05-C5-","F4-EC-38-"];
var rhex = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
var rhex_gen ="";
var ask_n = Number(prompt("How many MAC's?","15"));
var ask_ven= confirm("TP-Link Vendor?");
var ask_s = prompt("Separate them whith?","-");
var ask_uc= confirm("On Uppercase");
var mac_s = 12;
var body_content = "<pre>\n";
for (i=0;i<ask_n;i++)
{
	if (ask_ven==true)
	{
	body_content+= '<span>'+ tplink[Math.floor((Math.random() * (tplink.length-1)))];
	mac_s=6;
	}
	else
	{
	body_content+= '<span>';
	}
	//body_content+= '<span>'+ tplink[i];
	for(j=1;j<=mac_s;j++)
	{
		rhex_gen += rhex[Math.floor((Math.random() * (rhex.length-1)))];
		//if((j==2 || j==4 || j==6 || j==8 || j==10) && j<5)
		if(j%2==0 && j<mac_s)

		{
			rhex_gen += "-";
		}
	}
	body_content+= rhex_gen+'</span>\n';
	rhex_gen="";
}
body_content+='</pre>';
if (ask_uc!=true)
{
	body_content=body_content.toLowerCase();
	//alert("lowercase its true wtf!");
}
body_content=body_content.replace(/-/g,ask_s);
if(location.href!="about:blank")
{
var new_w = window.open(/*"javascript:setTimeout(function(){ document.title=document.getElementsByTagName('"+element_type+"').length+' Photos' }, 1000);"*/).document.body.innerHTML += body_content;
}
else
{
document.body.innerHTML=body_content;
}
body_content="";
void(0);

//minified
javascript:var a="00-0A-EB- 00-14-78- 00-19-E0- 00-1D-0F- 00-21-27- 00-23-CD- 00-25-86- 00-27-19- 40-16-9F- 54-E6-FC- 74-EA-3A- 94-0C-6D- B0-48-7A- D8-5D-4C- E0-05-C5- F4-EC-38-".split(" "),b="0123456789ABCDEF".split(""),c="",d=Number(prompt("How many MAC's?","15")),e=confirm("TP-Link Vendor?"),f=prompt("Separate them whith?","-"),g=confirm("On Uppercase"),h=12,k="<pre>\n";for(i=0;i<d;i++){1==e?(k+="<span>"+a[Math.floor(Math.random()*(a.length-1))],h=6):k+="<span>";for(j=1;j<=h;j++)c+=b[Math.floor(Math.random()*(b.length-1))],0==j%2&&j<h&&(c+="-");k+=c+"</span>\n";c=""}k+="</pre>";1!=g&&(k=k.toLowerCase());k=k.replace(/-/g,f);"about:blank"!=location.href?window.open().document.body.innerHTML+=k:document.body.innerHTML=k;k="";void 0;
//minified

//Search for duplicates
var spans = document.getElementsByTagName("span");
var innerh = document.body.innerHTML;
for(i=0;i<spans.length;i++)
{
	console.log(i);
	if(innerh.indexOf(spans[i].innerHTML)!=innerh.lastIndexOf(spans[i].innerHTML))
	{
		alert("Se encontro una repeticon "+spans[i].innerHTML+"\nelemento numero: "+i);
	}
}
//Search for duplicates

//------------------------------TESTING RANDOM AND REORDER-----------------------------

var ta=[""];
var bc="";
var n = prompt("Numero",10)
for(i=0;i<n;i++)
{
	ta[i]=Math.floor((Math.random() * n)+1);
	if(i != 0 && ta.lastIndexOf(ta[i],-2) != (-1 || undefined))
	{
		//alert("entro if "+ta[i]+" "+i);
		i--;
	}
	else
	{
		//alert("entro else "+ta[i]+" "+i);
		bc+=" "+ta[i];
	}
	//bc+=" "+ta[i];
}
//var new_w = window.open().document.body.innerHTML=bc;
document.body.innerHTML=bc;
bc="<br><br>";
void(0);

var temp;
for(i=0;i<ta.length;i++)
{
	if(ta[i]-1!=i)
	{
		//alert("i="+i);
		temp=ta[ta[i]-1];
		//alert("1er "+temp);
		ta[ta[i]-1]=ta[i];
		//alert("2do "+ta[ta[i]]);
		ta[i]=temp;
		//alert("3er "+ta[i]);
		i--;
	}
	if(temp==undefined)
	{
		i=ta.length;
	}
	//alert(ta[ta[i]-1]);
	
}
for(i=0;i<ta.length;i++)
{
	//alert(ta[ta[i]-1]);
	bc+=" "+ta[i];
}
//new_w.document.body.innerHTML+=bc;
document.body.innerHTML+=bc;
void(0);

//minified
javascript:var a=[""],b="",c=prompt("Numero",10);for(i=0;i<c;i++)a[i]=Math.floor(Math.random()*c+1),0!=i&&-1!=a.lastIndexOf(a[i],-2)?i--:b+=" "+a[i];document.body.innerHTML=b;b="<br><br>";void 0;var d;for(i=0;i<a.length;i++)a[i]-1!=i&&(d=a[a[i]-1],a[a[i]-1]=a[i],a[i]=d,i--),void 0==d&&(i=a.length);for(i=0;i<a.length;i++)b+=" "+a[i];document.body.innerHTML+=b;void 0;
//minified