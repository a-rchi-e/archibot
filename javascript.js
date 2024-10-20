$(document).ready(function(){

    var userIcon = $('<img class="user-icon" src="images/wizardly-icon.png">')
    var botIcon = $('<img class="bot-icon" src="images/wizard.png">') 

    function userMsg(input){ 
        let now = new Date() 
        let time = '' 

        if (now.getMinutes() < 10){ 
            time = now.getDate() + "/" + now.getMonth() + " " + now.getHours() + ":" + "0" + now.getMinutes() 
        } else {
            time = now.getDate() + "/" + now.getMonth() + " " + now.getHours() + ":" + now.getMinutes() 
        }

        let userContHtml = $(`<div class="user-container"></div>`) 
        let messageBubble = $(`<div class="user-bubble">${input}</div>`) 
        let timeDiv = $(`<div class="user-time">${time}</div>`) 

        userContHtml.append(messageBubble) 
        userContHtml.append(userIcon.clone()) 

        $('#chatbox').append(userContHtml) 
        $('#chatbox').append(timeDiv)
        $('input').val('') 


    };

    

   const botInputs = ['Im speechless', 'what a crazy statement to make', 'are you testing my patience?',
    'Archie kept getting stuck on figuring out how to use a flexbox', 
    'what an interesting string of characters', 'i beat chatgpt in a general knowledge contest back in 2023. Ever since then it\'s been asking for a rematch',
    'Archie programmed self awareness in me'
    ]


    function botMsg(binput){ 

        let bnow = new Date()
        let btime = '' 

        if (bnow.getMinutes() < 10){
            btime = bnow.getDate() + "/" + bnow.getMonth() + " " + bnow.getHours() + ":" + "0" + bnow.getMinutes()
        } else {
            btime = bnow.getDate() + "/" + bnow.getMonth() + " " + bnow.getHours() + ":" + bnow.getMinutes()
        }
        
        let botContHtml = $(`<div class="bot-container"></div>`) 
        let bmessageBubble = $(`<div class="bot-bubble">${binput}</div>`)
        let btimeDiv = $(`<div class="bot-time">${btime}</div>`).hide().fadeIn(400) 

        botContHtml.append(botIcon.clone()).hide().fadeIn(400) 
        botContHtml.append(bmessageBubble)

        $('#chatbox').append(botContHtml)
        $('#chatbox').append(btimeDiv)
    }

    botMsg('Welcome to Archie\'s AI companion. i am archibot, pleased to make your acquaintance. Ask me anything.') 

    $('#chatinput-box').keypress(function(event){ 
        if (event.which === 13 && $('input').val().trim() != ''){ 

            let bot_input = botInputs[Math.floor(Math.random() * botInputs.length)] 

            let user_input = $('input').val() 

            userMsg(user_input)
            botMsg(bot_input) 

            var container = $('#chatbox');
            container.scrollTop(container.prop("scrollHeight")); 
        };

    });

});

