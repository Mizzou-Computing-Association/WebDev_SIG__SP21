function plusMinus(plus, minus){
  document.getElementById(plus).style.display = "inline"
    document.getElementById(minus).style.display = "none"
}

function showDataScience(){
    div = document.getElementById('data_sci');
    if (div.style.display == "block"){
      div.style.display = "none";
      plusMinus('data_sci_plus', 'data_sci_minus')
    }else{
    div.style.display = "block";
    document.getElementById('vr').style.display = "none";
    document.getElementById('web_dev').style.display = "none"
    document.getElementById('interview').style.display = "none"
    document.getElementById('game_dev').style.display = "none"
    plusMinus('data_sci_minus', 'data_sci_plus')
    if (document.getElementById('vr_minus') !== "none"){
      plusMinus('vr_plus', 'vr_minus')
    }
    if (document.getElementById('interview_minus') !== "none"){
      plusMinus('interview_plus', 'interview_minus')
    }
    if (document.getElementById('web_dev_minus') !== "none"){
      plusMinus('web_dev_plus', 'web_dev_minus')
    }
    if (document.getElementById('game_dev_minus') !== "none"){
      plusMinus('game_dev_plus', 'game_dev_minus')
    }
    }
}

function showVirt(){
    div = document.getElementById('vr');
    if (div.style.display == "block"){
      div.style.display = "none";
      plusMinus('vr_plus', 'vr_minus')
    }else{
    div.style.display = "block";
    document.getElementById('data_sci').style.display = "none";
    document.getElementById('web_dev').style.display = "none"
    document.getElementById('interview').style.display = "none"
    document.getElementById('game_dev').style.display = "none"
   plusMinus('vr_minus', 'vr_plus')
   if (document.getElementById('data_sci_minus') !== "none"){
      plusMinus('data_sci_plus', 'data_sci_minus')
    }
    if (document.getElementById('interview_minus') !== "none"){
      plusMinus('interview_plus', 'interview_minus')
    }
    if (document.getElementById('web_dev_minus') !== "none"){
      plusMinus('web_dev_plus', 'web_dev_minus')
    }
    if (document.getElementById('game_dev_minus') !== "none"){
      plusMinus('game_dev_plus', 'game_dev_minus')
    }
    }
}

function showWebDev(){
    div = document.getElementById('web_dev');
    if (div.style.display == "block"){
      div.style.display = "none";
      plusMinus('web_dev_plus','web_dev_minus')
    }else{
    div.style.display = "block";
    document.getElementById('vr').style.display = "none";
    document.getElementById('data_sci').style.display = "none"
    document.getElementById('interview').style.display = "none"
    document.getElementById('game_dev').style.display = "none"
    plusMinus('web_dev_minus', 'web_dev_plus')
    if (document.getElementById('vr_minus') !== "none"){
      plusMinus('vr_plus', 'vr_minus')
    }
    if (document.getElementById('interview_minus') !== "none"){
      plusMinus('interview_plus', 'interview_minus')
    }
    if (document.getElementById('data_sci_minus') !== "none"){
      plusMinus('data_sci_plus', 'data_sci_minus')
    }
    if (document.getElementById('game_dev_minus') !== "none"){
      plusMinus('game_dev_plus', 'game_dev_minus')
    }
    }
}

function showGameDev(){
    div = document.getElementById('game_dev');
    if (div.style.display == "block"){
      div.style.display = "none";
     plusMinus('game_dev_plus', 'game_dev_minus')
    }else{
    div.style.display = "block";
    document.getElementById('vr').style.display = "none";
    document.getElementById('web_dev').style.display = "none"
    document.getElementById('interview').style.display = "none"
    document.getElementById('data_sci').style.display = "none"
    plusMinus('game_dev_minus', 'game_dev_plus')
    if (document.getElementById('vr_minus') !== "none"){
      plusMinus('vr_plus', 'vr_minus')
    }
    if (document.getElementById('interview_minus') !== "none"){
      plusMinus('interview_plus', 'interview_minus')
    }
    if (document.getElementById('web_dev_minus') !== "none"){
      plusMinus('web_dev_plus', 'web_dev_minus')
    }
    if (document.getElementById('data_sci_minus') !== "none"){
      plusMinus('data_sci_plus', 'data_sci_minus')
    }
    }
}

function showInterview(){
    div = document.getElementById('interview');
    if (div.style.display == "block"){
      div.style.display = "none";
     plusMinus('interview_plus', 'interview_minus')
    }else{
    div.style.display = "block";
    document.getElementById('vr').style.display = "none";
    document.getElementById('web_dev').style.display = "none"
    document.getElementById('data_sci').style.display = "none"
    document.getElementById('game_dev').style.display = "none"
    plusMinus('interview_minus', 'interview_plus')
    if (document.getElementById('vr_minus') !== "none"){
      plusMinus('vr_plus', 'vr_minus')
    }
    if (document.getElementById('data_sci_minus') !== "none"){
      plusMinus('data_sci_plus', 'data_sci_minus')
    }
    if (document.getElementById('web_dev_minus') !== "none"){
      plusMinus('web_dev_plus', 'web_dev_minus')
    }
    if (document.getElementById('game_dev_minus') !== "none"){
      plusMinus('game_dev_plus', 'game_dev_minus')
    }
    }
}