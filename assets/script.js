function showDataScience(){
    div = document.getElementById('data_sci');
    if (div.style.display == "block"){
      div.style.display = "none";
    }else{
    div.style.display = "block";
    document.getElementById('vr').style.display = "none";
    document.getElementById('web_dev').style.display = "none"
    document.getElementById('interview').style.display = "none"
    document.getElementById('game_dev').style.display = "none"
    }
}

function showVirt(){
    div = document.getElementById('vr');
    if (div.style.display == "block"){
      div.style.display = "none";
    }else{
    div.style.display = "block";
    document.getElementById('data_sci').style.display = "none";
    document.getElementById('web_dev').style.display = "none"
    document.getElementById('interview').style.display = "none"
    document.getElementById('game_dev').style.display = "none"
    }
}

function showWebDev(){
    div = document.getElementById('web_dev');
    if (div.style.display == "block"){
      div.style.display = "none";
    }else{
    div.style.display = "block";
    document.getElementById('vr').style.display = "none";
    document.getElementById('data_sci').style.display = "none"
    document.getElementById('interview').style.display = "none"
    document.getElementById('game_dev').style.display = "none"
    }
}

function showGameDev(){
    div = document.getElementById('game_dev');
    if (div.style.display == "block"){
      div.style.display = "none";
    }else{
    div.style.display = "block";
    document.getElementById('vr').style.display = "none";
    document.getElementById('web_dev').style.display = "none"
    document.getElementById('interview').style.display = "none"
    document.getElementById('data_sci').style.display = "none"
    }
}

function showInterview(){
    div = document.getElementById('interview');
    if (div.style.display == "block"){
      div.style.display = "none";
    }else{
    div.style.display = "block";
    document.getElementById('vr').style.display = "none";
    document.getElementById('web_dev').style.display = "none"
    document.getElementById('data_sci').style.display = "none"
    document.getElementById('game_dev').style.display = "none"
    }
}