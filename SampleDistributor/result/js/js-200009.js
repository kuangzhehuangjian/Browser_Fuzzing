
<!--
function flip(e) {
  current = e.style.display;
  if (current == 'block') {
    e.style.display = 'none';
    return 0;
  }
  else {
    e.style.display = 'block';
    return 1;
  }
}

function toggleBox(szDivId, elem, msg1, msg2)
{
  var res = -1;  if (document.getElementById) {
    res = flip(document.getElementById(szDivId));
  }
  else if (document.all) {
    // this is the way old msie versions work
    res = flip(document.all[szDivId]);
  }
  if(elem) {
    if(res == 0) elem.innerHTML = msg1; else elem.innerHTML = msg2;
  }

}

function toggleAllBoxes() {
  if (document.getElementsByTagName) {
    d = document.getElementsByTagName('div');
    for (i = 0; i < d.length; i++) {
      if (d[i].className == 'log') {
        flip(d[i]);
      }
    }
  }
}

// -->
