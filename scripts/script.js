function hello()
{
    showsmile();
}

function showsmile()
{
    let box = document.getElementById('modal');
    box.style.display="block";   
    document.getElementsByTagName('section')[0].style.opacity="0";
    document.getElementById('title').style.opacity="0";
    document.getElementsByTagName('body')[0].style.backgroundColor="cyan";
}
function hidesmile()
{
    let a = window.innerHeight;
    let b = window.innerWidth;

    let box = document.getElementById('modal');
    box.style.display="none";
    document.getElementsByTagName('section')[0].style.opacity="1";
    document.getElementById('title').style.opacity="1";
    if(a<=689 && b<=425)
    {
        document.getElementsByTagName('body')[0].style.backgroundColor="rgb(56, 162, 204)";    
    }
    else
        document.getElementsByTagName('body')[0].style.backgroundColor="cyan";
}