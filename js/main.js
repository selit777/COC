function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
if (getCookie('name') != undefined){
  var a = Number(getCookie('name'));
  document.getElementById('p').innerHTML = getCookie('name');
}else {
  var a = 0;
}
if (getCookie('kas') != undefined){
  var kas = [Number(getCookie('kas').split(' ')[0]), Number(getCookie('kas').split(' ')[1]), Number(getCookie('kas').split(' ')[2]), Number(getCookie('kas').split(' ')[3]), Number(getCookie('kas').split(' ')[4]), Number(getCookie('kas').split(' ')[5]), Number(getCookie('kas').split(' ')[6]), Number(getCookie('kas').split(' ')[7]), Number(getCookie('kas').split(' ')[8])];
  document.getElementById('kas').innerHTML = getCookie('kas');
}else {
  var kas = [0, 0, 0, 0, 0, 0, 0, 0, 0];
}
if (getCookie('up') != undefined){
  var up = [Number(getCookie('up').split(' ')[0]), Number(getCookie('up').split(' ')[1]), Number(getCookie('up').split(' ')[2]), Number(getCookie('up').split(' ')[3]), Number(getCookie('up').split(' ')[4]), Number(getCookie('up').split(' ')[5]), Number(getCookie('up').split(' ')[6]), Number(getCookie('up').split(' ')[7]), Number(getCookie('up').split(' ')[8])];
}else {
  var up  = [1, 1, 1, 1, 1, 1, 1, 1, 1];
}
function Sum(kas) {
  document.cookie = "kas="+kas[0]+" "+kas[1]+" "+kas[2]+" "+kas[3]+" "+kas[4]+" "+kas[5]+" "+kas[6]+" "+kas[7]+" "+kas[8];
  document.cookie = "up="+up[0]+" "+up[1]+" "+up[2]+" "+up[3]+" "+up[4]+" "+up[5]+" "+up[6]+" "+up[7]+" "+up[8]+" ";
  return String(kas.reduce(function(a, b){return a + b;}, 0).toFixed(1))+" K/C";
}

var ccur = 10;
var cur = 0;

var cbab = 100;
var bab = 0;

var cpri = 1;
var pri = 0;

var cbcur = 10;
var bcur = 0;

var cbbab = 100;
var bbab = 0;

var cbpri = 1;
var bpri = 0;

var cocur = 5;
var ocur = 0;

var cobab = 10;
var obab = 0;

var copri = 100;
var opri = 0;

var endgame = 1000000000;

var pu = [1, 1, 1, 1, 1, 1, 1, 1, 1];

var i = [0, 0, 1, 1, 1, 2, 2, 2, 2, 0];
var j = [0, 0, 0, 0, 0, 1, 1, 1, 1];
var k = [1000, 1000, 1000000, 1000000, 1000000, 1000000000, 1000000000, 1000000000, 1000000000];
var p = [1000, 1000, 1000, 1000, 1000, 1000000, 1000000, 1000000, 1000000];
var arr = ['','k','m','b','t','q'];
var ar = ['k', 'm', 'b', 't', 'q'];
var cen = [1, 5, 10, 50, 100, 1, 5, 10, 50];
var col = [0, 0, 0, 0, 0, 0, 0, 0, 0];

var inter1 = undefined;
var inter2 = undefined;
var inter3 = undefined;
var inter4 = undefined;
var inter5 = undefined;
var inter6 = undefined;
var inter7 = undefined;
var inter8 = undefined;
var inter9 = undefined;

function OnClick(){
  a += 1;
  document.cookie = "name="+String(a);
  document.getElementById('p').innerHTML = Math.floor(a);
  // if (a >= 1000){
  //   i[9] += 1;
  //   a /= 1000;
  // }
  // if (arr[i[9]] == ''){
  //   document.getElementById('p').innerHTML = Math.floor(a);
  // } else {
  // document.getElementById('p').innerHTML = a.toFixed(3)+arr[i[9]];
  // }
}

function plusp(b){
  a += b;
  document.getElementById('p').innerHTML = a;
  document.cookie = "name="+String(a);
}

function OnClick1(){
  if (a >= Math.floor(ccur*(k[0]/1000))){
    a -= Math.floor(ccur*(k[0]/1000));
    cur += 1;
    kas[0] += 0.1;
    document.getElementById('p').innerHTML = Math.round(a);
    document.cookie = "name="+String(a);
    inter1 = setInterval(plusp, 10000, 1 * up[0]);
    console.log(inter1);
    ccur = ccur * 1.2;
    if (ccur >= 1000){
      i[0] += 1;
      k[0] *= 1000;
      ccur /= 1000;
    }
    if (arr[i[0]] == ''){
      document.getElementById('ccur').innerHTML = Math.floor(ccur);
    } else {
    document.getElementById('ccur').innerHTML = ccur.toFixed(3)+arr[i[0]];
    }
  document.getElementById('cur').title = "Курсоров: "+String(cur);
  document.getElementById('kas').innerHTML = Sum(kas);
  }
}
function OnClick2(){
  if (a >= Math.floor(cbab*(k[1]/1000))){
    a -= Math.floor(cbab*(k[1]/1000));
    bab += 1;
    kas[1] += 1;
    document.getElementById('p').innerHTML = Math.round(a);
    document.cookie = "name="+String(a);
    inter2 = setInterval(plusp, 1000, 1 * up[1]);
    cbab = cbab * 1.2;
    if (cbab >= 1000){
      i[1] += 1;
      k[1] *= 1000;
      cbab /= 1000;
    }
    if (arr[i[1]] == ''){
      document.getElementById('cbab').innerHTML = Math.floor(cbab);
    } else {
    document.getElementById('cbab').innerHTML = cbab.toFixed(3)+arr[i[1]];
    }
    document.getElementById('bab').title = "Бабуль: "+String(bab);
    document.getElementById('kas').innerHTML = Sum(kas);
  }
}
function OnClick3(){
  if (a >= Math.floor(cpri*(k[2]/1000))){
    a -= Math.floor(cpri*(k[2]/1000));
    pri += 1;
    kas[2] += 10;
    document.getElementById('p').innerHTML = Math.round(a);
    document.cookie = "name="+String(a);
    inter3 = setInterval(plusp, 1000, 10 * up[2]);
    cpri = cpri * 1.2;
    if (cpri >= 1000){
      i[2] += 1;
      k[2] *= 1000;
      cpri /= 1000;
    }
    document.getElementById('cpri').innerHTML = cpri.toFixed(3)+arr[i[2]];
    document.getElementById('pri').title = "Приютов: "+String(pri);
    document.getElementById('kas').innerHTML = Sum(kas);
    // if (cpri > 1000000)
  }
}
function OnClick4(){
  if (a >= Math.floor(cbcur*(k[3]/1000))){
    a -= Math.floor(cbcur*(k[3]/1000));
    bcur += 1;
    kas[3] += 100;
    document.getElementById('p').innerHTML = Math.round(a);
    document.cookie = "name="+String(a);
    inter4 = setInterval(plusp, 1000, 100 * up[3]);
    cbcur = cbcur * 1.2;
    if (cbcur >= 1000){
      i[3] += 1;
      k[3] *= 1000;
      cbcur /= 1000;
    }
    document.getElementById('cbcur').innerHTML = cbcur.toFixed(3)+arr[i[3]];
    document.getElementById('bcur').title = "Больших курсоров: "+String(bcur);
    document.getElementById('kas').innerHTML = Sum(kas);
  }
}
function OnClick5(){
  if (a >= Math.floor(cbbab*(k[4]/1000))){
    a -= Math.floor(cbbab*(k[4]/1000));
    bbab += 1;
    kas[4] += 1000;
    document.getElementById('p').innerHTML = Math.round(a);
    document.cookie = "name="+String(a);
    inter5 = setInterval(plusp, 1000, 1000 * up[4]);
    cbbab = cbbab * 1.2;
    if (cbbab >= 1000){
      i[4] += 1;
      k[4] *= 1000;
      cbbab /= 1000;
    }
    document.getElementById('cbbab').innerHTML = cbbab.toFixed(3)+arr[i[4]];
    document.getElementById('bbab').title = "Групп бабуль: "+String(bbab);
    document.getElementById('kas').innerHTML = Sum(kas);
  }
}
function OnClick6(){
  if (a >= Math.floor(cbpri*(k[5]/1000))){
    a -= Math.floor(cbpri*(k[5]/1000));
    bpri += 1;
    kas[5] += 10000;
    document.getElementById('p').innerHTML = Math.round(a);
    document.cookie = "name="+String(a);
    inter6 = setInterval(plusp, 1000, 10000 * up[5]);
    cbpri = cbpri * 1.2;
    if (cbpri >= 1000){
      i[5] += 1;
      k[5] *= 1000;
      cbpri /= 1000;
    }
    document.getElementById('cbpri').innerHTML = cbpri.toFixed(3)+arr[i[5]];
    document.getElementById('bpri').title = "Больших приютов: "+String(bpri);
    document.getElementById('kas').innerHTML = Sum(kas);
    // if (cpri > 1000000)
  }
}
function OnClick7(){
  if (a >= Math.floor(cocur*(k[6]/1000))){
    a -= Math.floor(cocur*(k[6]/1000));
    ocur += 1;
    kas[6] += 100000;
    document.getElementById('p').innerHTML = Math.round(a);
    document.cookie = "name="+String(a);
    inter7 = setInterval(plusp, 1000, 100000 * up[6]);
    cocur = cocur * 1.2;
    if (cocur >= 1000){
      i[6] += 1;
      k[6] *= 1000;
      cocur /= 1000;
    }
    document.getElementById('cocur').innerHTML = cocur.toFixed(3)+arr[i[6]];
    document.getElementById('ocur').title = "ОГРОМНЫХ курсоров: "+String(ocur);
    document.getElementById('kas').innerHTML = Sum(kas);
  }
}
function OnClick8(){
  if (a >= Math.floor(cobab*(k[7]/1000))){
    a -= Math.floor(cobab*(k[7]/1000));
    obab += 1;
    kas[7] += 1000000;
    document.getElementById('p').innerHTML = Math.round(a);
    document.cookie = "name="+String(a);
    inter8 = setInterval(plusp, 1000, 1000000 * up[7]);
    cobab = cobab * 1.2;
    if (cobab >= 1000){
      i[7] += 1;
      k[7] *= 1000;
      cobab /= 1000;
    }
    document.getElementById('cobab').innerHTML = cobab.toFixed(3)+arr[i[7]];
    document.getElementById('obab').title = "ОГРОМНЫХ Групп бабуль: "+String(obab);
    document.getElementById('kas').innerHTML = Sum(kas);
  }
}
function OnClick9(){
  if (a >= Math.floor(copri*(k[8]/1000))){
    a -= Math.floor(copri*(k[8]/1000));
    opri += 1;
    kas[8] += 10000000;
    document.getElementById('p').innerHTML = Math.round(a);
    document.cookie = "name="+String(a);
    inter9 = setInterval(plusp, 1000, 10000000 * up[8]);
    copri = copri * 1.2;
    if (copri >= 1000){
      i[8] += 1;
      k[8] *= 1000;
      copri /= 1000;
    }
    document.getElementById('copri').innerHTML = copri.toFixed(3)+arr[i[8]];
    document.getElementById('opri').title = "ОГРОМНЫХ приютов: "+String(opri);
    document.getElementById('kas').innerHTML = Sum(kas);
    // if (cpri > 1000000)
  }
}
function OnClick0(){
  if (a >= endgame){
    document.body.style.display = 'none';
    console.log(document.body);
  }
}

function Upgrates(){
  document.getElementById("autoclicker").style.display = 'none';
  document.getElementById("upgrates").style.display = 'inline-block';
}
function Autoclicker(){
  document.getElementById('autoclicker').style.display = 'inline-block';
  document.getElementById("upgrates").style.display = 'none';
}

function OnClick12(){
  if (a >= Math.floor(cen[0]*p[0])){
    a -= Math.floor(cen[0]*p[0]);
    up[0] *= 2;
    kas[0] *= 2;
    col[0] += 1;
    document.getElementById('p').innerHTML = Math.round(a);
    cen[0] *= 1.2;
    clearInterval(inter1);
    inter1 = null;
    inter1 = setInterval(plusp, 10000, 1 * up[0]);
    if (cen[0] >= 1000){
      j[0] += 1;
      p[0] *= 1000;
      cen[0] /= 1000;
    }
    document.getElementById('2ccur').innerHTML = cen[0].toFixed(3)+ar[j[0]];
    document.getElementById('2cur').title = "Улучшения Курсоров: "+String(col[0]);
    document.getElementById('kas').innerHTML = Sum(kas);
  }
}
function OnClick22(){
  if (a >= Math.floor(cen[1]*p[1])){
    a -= Math.floor(cen[1]*p[1]);
    up[1] *= 2;
    kas[1] *= 2;
    col[1] += 1;
    document.getElementById('p').innerHTML = Math.round(a);
    cen[1] *= 1.2;
    clearInterval(inter2);
    inter2 = null;
    inter2 = setInterval(plusp, 1000, 1 * up[1]);
    if (cen[1] >= 1000){
      j[1] += 1;
      p[1] *= 1000;
      cen[1] /= 1000;
    }
    document.getElementById('2cbab').innerHTML = cen[1].toFixed(3)+ar[j[1]];
    document.getElementById('2bab').title = "Улучшения Бабуль: "+String(col[1]);
    document.getElementById('kas').innerHTML = Sum(kas);
  }
}
function OnClick32(){
  if (a >= Math.floor(cen[2]*p[2])){
    a -= Math.floor(cen[2]*p[2]);
    up[2] *= 2;
    kas[2] *= 2;
    col[2] += 1;
    document.getElementById('p').innerHTML = Math.round(a);
    cen[2] *= 1.2;
    clearInterval(inter3);
    inter3 = undefined;
    inter3 = setInterval(plusp, 1000, 10 * up[2]);
    if (cen[2] >= 1000){
      j[2] += 1;
      p[2] *= 1000;
      cen[2] /= 1000;
    }
    document.getElementById('2cpri').innerHTML = cen[2].toFixed(3)+ar[j[2]];
    document.getElementById('2pri').title = "Улучшения Приютов: "+String(col[2]);
    document.getElementById('kas').innerHTML = Sum(kas);
  }
}
function OnClick42(){
  if (a >= Math.floor(cen[3]*p[3])){
    a -= Math.floor(cen[3]*p[3]);
    up[3] *= 2;
    kas[3] *= 2;
    col[3] += 1;
    document.getElementById('p').innerHTML = Math.round(a);
    cen[3] *= 1.2;
    clearInterval(inter4);
    inter4 = undefined;
    inter4 = setInterval(plusp, 1000, 100 * up[3]);
    if (cen[3] >= 1000){
      j[3] += 1;
      p[3] *= 1000;
      cen[3] /= 1000;
    }
    document.getElementById('2cbcur').innerHTML = cen[3].toFixed(3)+ar[j[3]];
    document.getElementById('2bcur').title = "Улучшения Больших Курсоров: "+String(col[3]);
    document.getElementById('kas').innerHTML = Sum(kas);
  }
}
function OnClick52(){
  if (a >= Math.floor(cen[4]*p[4])){
    a -= Math.floor(cen[4]*p[4]);
    up[4] *= 2;
    kas[4] *= 2;
    col[4] += 1;
    document.getElementById('p').innerHTML = Math.round(a);
    cen[4] *= 1.2;
    clearInterval(inter5);
    inter5 = undefined;
    inter5 = setInterval(plusp, 1000, 1000 * up[4]);
    if (cen[4] >= 1000){
      j[4] += 1;
      p[4] *= 1000;
      cen[4] /= 1000;
    }
    document.getElementById('2cbbab').innerHTML = cen[4].toFixed(3)+ar[j[4]];
    document.getElementById('2bbab').title = "Улучшения Групп Бабуль: "+String(col[4]);
    document.getElementById('kas').innerHTML = Sum(kas);
  }
}
function OnClick62(){
  if (a >= Math.floor(cen[5]*p[5])){
    a -= Math.floor(cen[5]*p[5]);
    up[5] *= 2;
    kas[5] *= 2;
    col[5] += 1;
    document.getElementById('p').innerHTML = Math.round(a);
    cen[5] *= 1.2;
    clearInterval(inter6);
    inter6 = undefined;
    inter6 = setInterval(plusp, 1000, 10000 * up[5]);
    if (cen[5] >= 1000){
      j[5] += 1;
      p[5] *= 1000;
      cen[5] /= 1000;
    }
    document.getElementById('2cbpri').innerHTML = cen[5].toFixed(3)+ar[j[5]];
    document.getElementById('2bpri').title = "Улучшения Больших Приютов: "+String(col[5]);
    document.getElementById('kas').innerHTML = Sum(kas);
  }
}
function OnClick72(){
  if (a >= Math.floor(cen[6]*p[6])){
    a -= Math.floor(cen[6]*p[6]);
    up[6] *= 2;
    kas[6] *= 2;
    col[6] += 1;
    document.getElementById('p').innerHTML = Math.round(a);
    cen[6] *= 1.2;
    clearInterval(inter7);
    inter7 = undefined;
    inter7 = setInterval(plusp, 1000, 100000 * up[6]);
    if (cen[6] >= 1000){
      j[6] += 1;
      p[6] *= 1000;
      cen[6] /= 1000;
    }
    document.getElementById('2cocur').innerHTML = cen[6].toFixed(3)+ar[j[6]];
    document.getElementById('2ocur').title = "Улучшения ОГРОМНЫХ Курсоров: "+String(col[6]);
    document.getElementById('kas').innerHTML = Sum(kas);
  }
}
function OnClick82(){
  if (a >= Math.floor(cen[7]*p[7])){
    a -= Math.floor(cen[7]*p[7]);
    up[7] *= 2;
    kas[7] *= 2;
    col[7] += 1;
    document.getElementById('p').innerHTML = Math.round(a);
    cen[7] *= 1.2;
    clearInterval(inter8);
    inter8 = undefined;
    inter8 = setInterval(plusp, 1000, 1000000 * up[7]);
    if (cen[7] >= 1000){
      j[7] += 1;
      p[7] *= 1000;
      cen[7] /= 1000;
    }
    document.getElementById('2cobab').innerHTML = cen[7].toFixed(3)+ar[j[7]];
    document.getElementById('2obab').title = "Улучшения ОГРОМНЫХ Групп Бабуль: "+String(col[7]);
    document.getElementById('kas').innerHTML = Sum(kas);
  }
}
function OnClick92(){
  if (a >= Math.floor(cen[8]*p[8])){
    a -= Math.floor(cen[8]*p[8]);
    up[8] *= 2;
    kas[8] *= 2;
    col[8] += 1;
    document.getElementById('p').innerHTML = Math.round(a);
    cen[8] *= 1.2;
    clearInterval(inter9);
    inter9 = undefined;
    inter9 = setInterval(plusp, 1000, 10000000 * up[8]);
    if (cen[8] >= 1000){
      j[8] += 1;
      p[8] *= 1000;
      cen[8] /= 1000;
    }
    document.getElementById('2copri').innerHTML = cen[8].toFixed(3)+ar[j[8]];
    document.getElementById('2opri').title = "Улучшения ОГРОМНЫХ Приютов: "+String(col[8]);
    document.getElementById('kas').innerHTML = Sum(kas);
  }
}
alert('Этот сайт использует файлы Cookie. Если вы зайдёте на этот сайт ещё раз, ваш прогресс сохранится');
