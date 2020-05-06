// client-chat
(function () {
  var socket = io.connect('http://localhost:7000');

  let HTML = {
    chatbar        : document.querySelector("#chatbar"),
    usernamebar    : document.querySelector("#usernamebar"),
    usernameInput  : document.querySelector("#username-input"),
    usernameSubmit : document.querySelector("#username-submit"),
    sender         : document.querySelector("#sender"),
    senderForm     : document.querySelector("#sender-form"),
    senderInput    : document.querySelector("#sender-input"),
    senderSubmit   : document.querySelector("#sender-submit"),
    replies        : document.querySelector("#replies"),
    replybar       : document.querySelector("#replybar"),
    replybarInput  : document.querySelector("#replybar-input"),
    replybarSubmit : document.querySelector("#replybar-submit")
  };

  let user = { id: undefined, username: undefined };

  let reply = {};

  const INVALID_REPLY = /[^a-z\d\+\-\s]+/gi;
  let isValidReply = v => (v.search(INVALID_REPLY) === -1);
  const INVALID_NAME = /[^a-z\d\+\-\s\-\.]+/gi;
  let isValidName = v => (v.search(INVALID_NAME) === -1);

  let setName = function (username) {
    if (typeof username === "string" && isValidName(username)) {
      user = {
        id: Math.floor(Math.random() * 10000), 
        username: username
      }
      socket.emit('new player', user);
      HTML.chatbar.classList.add('is-rolled');
      HTML.usernameInput.disabled = true;
      window.setTimeout(function () {
        HTML.replybarInput.focus();
      }, 400)
    }
    else {
      // message erreur
    }
    
  }

  let main = function () {

    /**
     * Events Username
     */
    HTML.usernameInput.addEventListener("keyup", function (e) {
      if(e.key === "Enter") {
        let name = String(HTML.usernameInput.value).trim();
        setName(name);
      }
    })
    HTML.usernameSubmit.addEventListener("click", function (e) {
      let name = String(HTML.usernameInput.value).trim();
      setName(name);
    })
    HTML.usernameSubmit.addEventListener("keyup", function (e) {
      if(e.key === "Enter") {
        let name = String(HTML.usernameInput.value).trim();
        setName(name);
      }
    })

    /**
     * Events Roll Dice
     */
    HTML.replybarInput.addEventListener('keyup', function (e) {
      if (e.key === 'Enter')
        sentReply(e);
    })
    HTML.replybarSubmit.addEventListener('keyup', function (e) {
      if (e.key === 'Enter')
        sentReply(e);
    })
    HTML.replybarSubmit.addEventListener('click', function (e) {
      sentReply(e);
    });
    
    let sentReply = function (e) {
      apiRolled();
      HTML.replybarInput.value = "";
    }

  };

  // Envoi un message : "Votre nom contient des caractères interdits"
  /* let setUsername = function () {
    let input = HTML.inputSender.value; 
    if (isValidName(input)) user.name = input;
    else errorUsername();
  } */

  let apiRolled = function () {
    axios.post('/channel/rolled', {
      user: user.username,
      rolls: HTML.replybarInput.value
    })
    .then(function (response) {
      let data = response.data;
      console.log(data)
      socket.emit('player rolled', {
        username: data.username,
        time: data.date,
        rolls: data.rolls
      });
    })
    .catch(function (error) {
      // error
    });
  }

  socket.on('watch my rolled', function (data) {
    insertReply(data.username, data.time, data.rolls);
  })


  let insertReply = function (username, time, rolls) {
    let div = document.createElement("div");
    div.innerHTML = templateReply(username, time, rolls);
    HTML.replies.appendChild( div );
  }

  let templateReply = function (username, time, rolls) {
    return `<div>
      <div class="dicetray__reply-username">${username} - ${time}</div>
      <div class="dicetray__reply-rolls">
        ${templateRolls(rolls)}
      </div>
    </div>`;
  }

  let templateRolls = function (rolls) {
    let tpl = "";

    for (const roll of rolls.type_dice) {
      let bonus = "";
      if(roll.modifiers > 0) 
        bonus = `+ <b>${roll.modifiers}</b> <small>(bonus)</small>`
      else if (roll.modifiers < 0)
        bonus = `- <b>${-1 * roll.modifiers}</b> <small>(bonus)</small>`

      tpl += `<div class="dicetray__roll">
        <span class="c-side">${roll.input}</span>
        <span class="c-result">
          <b>${roll.dices.sum}</b> <small>(${roll.dices.detail})</small> 
          ${bonus}
          = <b>${roll.sum}</b></span>
      </div>`
    }
    return tpl;
  }

  main();
})();