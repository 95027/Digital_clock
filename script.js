
function clock(){

    let d=new Date();
    let h=d.getHours();
    let m=d.getMinutes();
    let s=d.getSeconds();
    let am="AM"
    
    if(h>12)
    {
        h-=12;
        am="PM"
    }

    h=(h<10)?"0"+h:h;
    m=(m<10)?"0"+m:m;
    s=(s<10)?"0"+s:s;

    document.getElementById('hours').innerHTML=h;
    document.getElementById('minutes').innerHTML=m;
    document.getElementById('seconds').innerHTML=s;
    document.getElementById('am').innerHTML=am;

    setTimeout(()=>{
        clock()
    },1000)
}

clock();
