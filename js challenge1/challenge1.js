


//Challenge 3:

function rpsGame(yourChoice){
    console.log(yourChoice);
    var humainChoice,botChoice;
    humainChoice=yourChoice.id;
    botChoice=numberToChoice(randTo());
    console.log('computer choice:',botChoice);
    results=decideWinner(humainChoice,botChoice);
    console.log(results);
    message=finalMessage(results);
    console.log(message);
    rpsFrontEnd(yourChoice.id,botChoice,message);
    
}


function reset()
{
        
}

function randTo(){
    return Math.floor(Math.random()*3); 
}

function numberToChoice(number){
    return ['rock','paper','scissors'][number];
}

function decideWinner(yourChoice,computerChoice){
    var rpsDataBase={
         'rock':{'scissors':1,'rock':0.5,'paper':0},
         'paper':{'rock':1,'paper':0.5,'scissors':0},
         'scissors':{'paper':1,'scissors':0.5,'rock':0}
        };
    var yourScore=rpsDataBase[yourChoice][computerChoice];
    var computerScore=rpsDataBase[computerChoice][yourChoice];

    return [yourScore,computerScore]; 
}


function finalMessage([yourScore,computerScore])
{
    if(yourScore<computerScore)
    {
        return{'message':'you lost!','color':'red'};
    }
    else if(yourScore==computerScore){
        return{'message':'you tied!','color':'yellow'};
    }
    else{
        return{'message':'you won!','color':'green'};
    }
}


function rpsFrontEnd(humainImageChoice,botImageChoice,finalMessage){
    var imageDatabase={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    }

    //lets remove all the images

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    //what is div in this case? 

    var humainDiv=document.createElement('div');
    var botDiv=document.createElement('div');
    var messageDiv=document.createElement('div');
 
    humainDiv.innerHTML="<img src='" + imageDatabase[humainImageChoice] + "' height=150 wieth=150 style='box-shadow:0px 10px 50px rgba(37,50,233,1);'>"
    messageDiv.innerHTML="<h1 style='color: " + finalMessage['color'] + "; font-size:60px;padding:30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML="<img src='" + imageDatabase[botImageChoice] + "' height=150 wieth=150 style='box-shadow:0px 10px 50px rgba(243,38,24,1);'>"
    document.getElementById('flex-box-rps-div').appendChild(humainDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);

    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}

