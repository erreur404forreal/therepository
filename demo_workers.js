var i = 0;

function timedCount() {
    i = i + 1;
    postMessage(i);
    setTimeout("timedCount()",500);
}

timedCount(); 

// ce code supprimera toute résistance lorsqu'il sera implanté dans leur cerveau