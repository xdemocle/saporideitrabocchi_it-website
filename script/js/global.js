// SNIFF BROWSER
OP = ((ind1 = navigator.userAgent.indexOf("Opera")) > -1) ? 1 : 0;
punto = (OP) ? navigator.userAgent.indexOf(".",ind1):0;
OP5 = (OP && parseInt(navigator.userAgent.substr(punto-1)) == 5) ? 1 : 0;
OP6 = (OP && parseInt(navigator.userAgent.substr(punto-1)) == 6) ? 1 : 0;


IE = ((ind2 = navigator.appVersion.indexOf("MSIE")) > -1 && !OP) ? 1 : 0;
IE4 = (IE && parseInt(navigator.appVersion.substr(ind2+5)) == 4) ? 1 : 0;
IE5 = (IE && parseInt(navigator.appVersion.substr(ind2+5)) == 5) ? 1 : 0;
IE6 = (IE && parseInt(navigator.appVersion.substr(ind2+5)) == 6) ? 1 : 0;


NN = (navigator.appName.indexOf("Netscape")>-1) ? 1 : 0;
NN4 = (NN && parseInt(navigator.appVersion)==4) ? 1 : 0;
NN6 = (NN && parseInt(navigator.appVersion)>4) ? 1 : 0;


OT = (!IE && !NN && !OP) ? 1 : 0;

if(IE) {
bName = "Explorer";
}
else if(NN) {
bName = "Netscape";
}
else if(OP) {
bName = "Opera";
};


// INTERCETTA I TARGET BLANK
function intercetta()
{
	for (var c=0; c<document.links.length; c++)
	{
		if (document.links[c].className=="blank")
                {
                    document.links[c].target="_blank";
                }
	}
};

function AntiSpam(dom, before, after, label) {
var text=(label=='')?before+'[b]&#[/b]64;'+after+'.'+dom:label;
var addr=before+'&#64;'+after+'.'+dom;
document.write('<a href="mailto:'+addr+'">'+text+'</a>');
}


// div scrollers
var scrollDiv;
var hDiv;
var tClip;
var bClip;
var wClip;
var interval;
var topPos = 0;

function initScroller(id) {
    scrollDiv = document.getElementById(id);   
    var margin = parseInt(scrollDiv.offsetTop);
    
    var scrollDiv__controls = document.getElementById(id + '__controls');

    /* Style per il div interno (testo) */
    scrollDiv.style.width    = (scrollDiv.parentNode.offsetWidth - (margin * 2)) - 24 + 'px';
    scrollDiv.style.height   = 'auto';
    scrollDiv.style.overflow = 'hidden';
    
    /* Style per il div esterno (contenitore) */
    scrollDiv.parentNode.style.overflow = 'hidden';
    
    /* Style per il div con i controlli (testo) */
    scrollDiv__controls.style.display = 'block';  


    /* Impostazioni per visualizzare la parte di testo superiore */
    hDiv  = scrollDiv.offsetHeight;

    tClip = 0;   
    wClip = scrollDiv.parentNode.offsetWidth - (margin * 2);
    bClip = scrollDiv.parentNode.offsetHeight - (margin * 2);

    scrollDiv.style.clip = 'rect('+ tClip +'px,'+ wClip +'px,'+ bClip +'px,0)';   
    // alert("tClip:"+tClip+"\nwClip:"+wClip+"\nbClip:"+bClip+"\n");
}

function scroll(scrollBy, time) {
    tClip += scrollBy;
    bClip += scrollBy;
    topPos -= scrollBy;

    
    if (tClip < 0 || bClip > hDiv) {
        tClip -= scrollBy;
        bClip -= scrollBy;
        topPos += scrollBy;    
    }
    
    
    scrollDiv.style.clip = 'rect('+ tClip +'px, '+ wClip +'px, '+ bClip +'px, 0)';   
    scrollDiv.style.top = topPos + 'px';    
    interval = setTimeout('scroll('+ scrollBy +', '+ time +')', time);
}

function stopScroll() {
    if (interval) clearTimeout(interval);
}
