function QRgenerator(){
    var gapi="https://chart.googleapis.com/chart?cht=qr&"
    var inputtext=document.getElementById("textdata").value;
    var imgsize=document.getElementById("size").value;
    var displayimage=document.getElementById("img");

    if(inputtext!="" && imgsize=="100")
    {
        displayimage.src=gapi+"chs=100x100&"+"chl="+inputtext;
    }
    else if(inputtext!="" && imgsize=="150"){
        displayimage.src=gapi+"chs=150x150&"+"chl="+inputtext;
    }
    else if(inputtext!="" && imgsize=="200"){
        displayimage.src=gapi+"chs=200x200&"+"chl="+inputtext;
    }
    else if(inputtext!="" && imgsize=="250"){
        displayimage.src=gapi+"chs=250x250&"+"chl="+inputtext;
    }
    else if(inputtext!="" && imgsize=="300"){
        displayimage.src=gapi+"chs=300x300&"+"chl="+inputtext;
    }
    else{
        alert("Please Enter Any Text..")
    }

}

function QRtransparent(){
    var gapi="https://chart.googleapis.com/chart?cht=qr&"
    var inputtext=document.getElementById("textdata").value;
    var imgsize=document.getElementById("size").value;
    var displayimage=document.getElementById("img");

    if(inputtext!="" && imgsize=="100")
    {
        displayimage.src=gapi+"chf=bg,s,65432100&chs=100x100&"+"chl="+inputtext;
    }
    else if(inputtext!="" && imgsize=="150"){
        displayimage.src=gapi+"chf=bg,s,65432100&chs=150x150&"+"chl="+inputtext;
    }
    else if(inputtext!="" && imgsize=="200"){
        displayimage.src=gapi+"chf=bg,s,65432100&chs=200x200&"+"chl="+inputtext;
    }
    else if(inputtext!="" && imgsize=="250"){
        displayimage.src=gapi+"chf=bg,s,65432100&chs=250x250&"+"chl="+inputtext;
    }
    else if(inputtext!="" && imgsize=="300"){
        displayimage.src=gapi+"chf=bg,s,65432100&chs=300x300&"+"chl="+inputtext;
    }
    else{
        alert("Please Enter Any Text..")
    }

}