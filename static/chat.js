// client-chat
(function () {

  let socket = io();

  let HTML = {
    usernameInput  : document.querySelector("#username-input"),
    sender         : document.querySelector("#sender"),
    senderForm     : document.querySelector("#sender-form"),
    senderInput    : document.querySelector("#sender-input"),
    senderSubmit   : document.querySelector("#sender-submit"),
    replies        : document.querySelector("#replies"),
    replybar       : document.querySelector("#replybar"),
    replybarInput  : document.querySelector("#replybar-input"),
    replybarSubmit : document.querySelector("#replybar-submit")
  };

  let user = { id: undefined, name: undefined };

  let reply = {};

  const INVALID_REPLY = /[^a-z\d\+\-\s]+/gi;
  let isValidReply = v => (v.search(INVALID_REPLY) === -1);
  const INVALID_NAME = /[^a-z\d\+\-\s\-\.]+/gi;
  let isValidName = v => (v.search(INVALID_NAME) === -1);

  let main = function () {

    if(typeof user.name === "undefined") {
      //HTML.sender.classList.add('is-show');
      //HTML.formSender.addEventListener("submit", setUsername);
      user.name = prompt("Nom de personnage");
      
      socket.emit('new player', user);
      socket.on('welcome player', function (data) {
        console.log(data.message);
      })
    }
    
    let sentReply = function (e) {
      apiRolled();

    }

    HTML.replybarInput.addEventListener('keyup', e => (e.key === 'Enter')? sentReply(e) : false);
    HTML.replybarSubmit.addEventListener('click', sentReply);

  };

  // Envoi un message : "Votre nom contient des caractères interdits"
  /* let setUsername = function () {
    let input = HTML.inputSender.value; 
    if (isValidName(input)) user.name = input;
    else errorUsername();
  } */

  let apiRolled = function () {
    axios.post('/channel/rolled', {
      user: user.name,
      rolls: HTML.replybarInput.value
    })
    .then(function (response) {
      let d = response.data;
      socket.emit('player rolled', {
        user: d.user,
        time: d.date,
        rolls: d.rolls
      });
      //insertReply(d.user, d.date, d.rolls);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  socket.on('watch my rolled', function (d) {
    console.log(d)
    insertReply(d.user, d.time, d.rolls);
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
      tpl += `<div class="dicetray__roll">
        <span class="c-side">${roll.input}</span>
        <span class="c-result">
          <b>${roll.dices.sum}</b> <small>(dé)</small> + 
          <b>${roll.modifiers}</b> <small>(bonus)</small> = 
          <b>${roll.sum}</b></span>
      </div>`
    }
    return tpl;
  }

  main();
})();