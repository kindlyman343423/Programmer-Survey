function hello()
{
    showsmile();
}

function showsmile()
{
    let box = document.getElementById('after-submit');
    box.style.display="block";   
    document.getElementsByTagName('section')[0].style.opacity="0.2";
    document.getElementById('title').style.opacity="0.2";
    document.getElementsByTagName('body')[0].style.backgroundColor="gray";
}
function hidesmile()
{
    let box = document.getElementById('after-submit');
    box.style.display="none";
    document.getElementsByTagName('section')[0].style.opacity="1";
    document.getElementById('title').style.opacity="1";
    document.getElementsByTagName('body')[0].style.backgroundColor="cyan";
}