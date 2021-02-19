var questionEl = $('.question');
var answerbx = $('.answerbx');
var answer1  = $('.answer1')
var answer2  = $('.answer2')
var answer3  = $('.answer3')
var answer4  = $('.answer4')
var start = $('.start');
var hiscore = $('.highscore');
var hsbtn = $('.enths')
var time =$('#time');
var cscore = $('.score')
var timeleft = 60;

var score = 0
var newhs = localStorage.getItem("highscore")
var hscore = newhs
var newhsn = localStorage.getItem("highscoren")




if (newhs > 0 ){
    hiscore.text("highscore: " + newhs + " by " +newhsn)
}
else{
    hiscore.text ("highscore: " + "Set your highscore!")
}

time.text(timeleft)
cscore.text("current score" + " " + score)


function timer(){
var timeInterval = setInterval(function () {
 if (timeleft> 1){
     --timeleft
     time.text(timeleft)
     
 }
 
 else{
     time.text("times up!")
  
     clearInterval
     questionEl.text('Finished!')
     
     
     
    
 }} , 1000);
}
function savehs(){
    var hsform = $(".form-input")
    if (score > hscore ){
   
    console.log(hsform.val())
    hscore =score
    hiscore.text("highscore: " + hscore + " "+ hsform.val())
    localStorage.setItem("highscore", hscore)
    localStorage.setItem("highscoren", hsform.val())

    console.log('saving...')
}
else{alert("youre score isnt the highscore!")
return}
}

function  question1(){
    questionEl.text('What tag is used to define the metadata about an HTML document, and must always be included inside the element?')
    
 answer1.val('table')
 answer2.val('meta')
 answer3.val('div')
 answer4.val('img')
 
 
};
function question2(){
    questionEl.text('What group of tags are used to define the text headers in the body of the HTML document?')
    
 answer1.val('h1-h6')
 answer2.val('button')
 answer3.val('td')
 answer4.val('footer')
};
function question3(){
        questionEl.text('What element is a container for all the head elements, and may include the document title, scripts, styles, meta information, and more?')
        
     answer1.val('body')
     answer2.val('br')
     answer3.val('head')
     answer4.val('title')
};
function question4(){
        questionEl.text('What tag is used to define – and place – an interactive button in an HTML document?')
        
     answer1.val('td')
     answer2.val('button')
     answer3.val('footer')
     answer4.val('clickfield')
};
function question5(){
        questionEl.text('What tag is used to render or transform text into an important (bold) version?')
        
     answer1.val('em')
     answer2.val('a')
     answer3.val('blockquote')
     answer4.val('strong')
};
function check1(){
    if ( timeleft <= 0 ) { return; }  
   
    else if ((answer1.val()) == 'table'){
        questionEl.text('Incorrect!')
        timeleft --
        timeleft --
        timeleft --
        timeleft --
        timeleft --
        timeleft --
        question2()
        return
    }
    
    else if ((answer1.val()) == 'body'){
        questionEl.text('Incorrect!')
        timeleft --
        timeleft --
        timeleft --
        timeleft --
        timeleft --
        timeleft --
        question4()
        return
    }
    else if ((answer1.val()) == 'td'){
        questionEl.text('Incorrect!')
        timeleft --
        timeleft --
        timeleft --
        timeleft --
        timeleft --
        timeleft --
        question5()
        return
        
    }
    else if ((answer1.val()) == 'em'){
        questionEl.text('Incorrect!')
        timeleft --
        timeleft --
        timeleft --
        timeleft --
        timeleft --
        timeleft --
        question1()
        return
    }
    else if((answer1.val()) == 'h1-h6'){
        questionEl.text('Correct!');
        score ++
        cscore.text("current score" + " " + score)
        question3()
        return
    }
 
};

function check2(){
    if ( timeleft <= 0 ) { return; }  
  
  
  
        else if ((answer2.val()) == 'button'){
            questionEl.text('Incorrect!')
            timeleft --
            timeleft --
            timeleft --
            timeleft --
            timeleft --
            timeleft --
            question3()
            return
        }
        else if ((answer2.val()) == 'br'){
            questionEl.text('Incorrect!')
            timeleft --
            timeleft --
            timeleft --
            timeleft --
            timeleft --
            timeleft --
            question4()
            return
            
        }
       
        else if ((answer2.val()) == 'a'){
            questionEl.text('Incorrect!')
            timeleft --
            timeleft --
            timeleft --
            timeleft --
            timeleft --
            timeleft --
            question1()
            return
        } 
        if((answer2.val()) == 'button'){
            questionEl.text('Correct!');
            score ++
            cscore.text("current score" + " " + score)
            question5()
            return
        }
        if((answer2.val()) == 'meta'){
            questionEl.text('Correct!');
            score ++
            cscore.text("current score" + " " + score)
            question2()
            
            return
        }
};

function check3(){
    if ( timeleft <= 0 ) { return; }  
   
    else if ((answer3.val()) == 'div'){
        questionEl.text('Incorrect!')
        timeleft --
        timeleft --
        timeleft --
        timeleft --
        timeleft --
        timeleft --
        question2()
        return
    }
    else if ((answer3.val()) == 'td'){
        questionEl.text('Incorrect!')
        timeleft --
        timeleft --
        timeleft --
        timeleft --
        timeleft --
        timeleft --
        question3()
        return
    }
   
    else if ((answer3.val()) == 'footer'){
        questionEl.text('Incorrect!')
        timeleft --
        timeleft --
        timeleft --
        timeleft --
        timeleft --
        timeleft --
        question5()
        return
    }
    else if ((answer3.val()) == 'blockquote'){
        questionEl.text('Incorrect!')
        timeleft --
        timeleft --
        timeleft --
        timeleft --
        timeleft --
        timeleft --
        question1()
        return
    }
    if((answer3.val()) == 'head'){
        questionEl.text('Correct!');
        score ++
        cscore.text("current score" + " " + score)
        question4()
        return
    }
};

function check4(){
    if ( timeleft <= 0 ) { return; }  
    
    
   
    if ((answer4.val()) == 'title'){
        questionEl.text('Incorrect!')
        timeleft --
        timeleft --
        timeleft --
        timeleft --
        timeleft --
        timeleft --
        question4()
        return
        return
    }
    if ((answer4.val()) == 'footer'){
        questionEl.text('Incorrect!')
        timeleft --
        timeleft --
        timeleft --
        timeleft --
        timeleft --
        timeleft --
        question3()
        return
    }
    if ((answer4.val()) == 'clickfield'){
        questionEl.text('Incorrect!')
        timeleft --
        timeleft --
        timeleft --
        timeleft --
        timeleft --
        timeleft --
        question5()
        return
    }
    if ((answer4.val()) == 'img'){
        questionEl.text('Incorrect!')
        timeleft --
        timeleft --
        timeleft --
        timeleft --
        timeleft --
        timeleft --
        question2()
        return
    }
    if((answer4.val()) == 'strong'){
        questionEl.text('Correct!');
        score ++
        cscore.text("current score" + " " + score)
        question1()
        return
    }
}
function gamestart(){
    timer();
    question1();
answer1.on('click', check1)
answer2.on('click', check2);
answer3.on('click', check3);
answer4.on('click', check4);
}

hsbtn.on('click', savehs)
start.on('click', gamestart);

