import image from './img/bot_image.jpg';
import './App.css';
import { useState} from 'react';

function App() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const [time, setTime] = useState(`${hours}:${minutes}:${seconds}`); //using the useState hook to get the data from the local time and set it to the time variable
  const [dateTime, setDateTime] = useState(`${days[day]}, ${day} ${months[month]} ${year}`); //using the useState hook to get the data from the local date and set it to the dateTime variable
  console.log(dateTime);

  const checkStatus = (e) => {
    let isActive = true;
    if(dateTime === 'Thursday, 20 April 2022'){ //if the dateTime is Thursday, 20 April 2022, the bot will be inactive
      isActive = false;
    }
    const status = document.querySelector('.status');
    if(isActive === true){
      status.innerHTML = 'Active';
      status.style.color = 'green';
    }else{
      status.innerHTML = 'Inactive';
      status.style.color = 'red';
    }
  }
  const handleInput = () => {
    const botMessage = document.querySelector('#message1');
    const humanMessage = document.querySelector('#message2');
    
    let badwords = ['fuck|bad|stupid|useless|bitch|crazy|nonsense|shit'] //adding the bad words
    let words = new RegExp(badwords);
    if(words.test(document.querySelector('#input').value)){ // if the input contains bad words
      botMessage.innerHTML = 'Please do not use bad words'; // display this message
    }

    let welcome = ['Sup|sup|Hello|Hi|hello|hi|Yo|Halla|yello|yelow']
    let words2 = new RegExp(welcome);
    if(words2.test(document.querySelector('#input').value)){
      botMessage.innerHTML = 'Hello There how are you doing today?';
    }

    let bye = ['Bye|bye|Goodbye|goodbye|See you later|see you later|See you|see you']
    let words3 = new RegExp(bye);
    if(words3.test(document.querySelector('#input').value)){
      const status = document.querySelector('.status');
      botMessage.innerHTML = 'Bye, have a nice day';
      setTimeout(() => {
        status.innerHTML = 'Not active';
      }, 5000);
    }

    let thanks = ['Thanks|thanks|thank you|thank you very much|thank you very much']
    let words4 = new RegExp(thanks);
    if(words4.test(document.querySelector('#input').value)){
      botMessage.innerHTML = 'You are welcome';
    }

    let how = ['How are you|how are you doing|how are you doing today|how are you doing today|How are you|how are you']
    let words5 = new RegExp(how);
    if(words5.test(document.querySelector('#input').value)){
      botMessage.innerHTML = 'I am fine, thank you';
    }

    let good = ["That's good|Sound nice|that sounds awesome|that sounds great|Great|great|sounds great|that's sounds good|Nice|nice"]
    let words6 = new RegExp(good);
    if(words6.test(document.querySelector('#input').value)){
      botMessage.innerHTML = '😁';
    }

    let response = ["I'm fine|I am fine|I am fine today|I am fine today|i'm fine|i'm great|I'm fine|I'm great|Good|good|I'm good|i'm good|great|Great"]
    let words7 = new RegExp(response);
    if(words7.test(document.querySelector('#input').value)){
      botMessage.innerHTML = 'That is good';
    }

    let nameAsk = ["What's your name|what's your name|What is your name|what is your name"]
    let words8 = new RegExp(nameAsk);
    if(words8.test(document.querySelector('#input').value)){
      botMessage.innerHTML = 'My name is Bot';
    }

    let owner = ["Who is the owner|who is the owner|Who is the owner of this bot|who is the owner of this bot|Who made you|who made you|Who is your maker|Who made you|who is your maker|who is your owner|Who is your owner"]
    let words9 = new RegExp(owner);
    if(words9.test(document.querySelector('#input').value)){
      botMessage.innerHTML = 'The owner of this bot is Treasure';
    }

    let owner2 = ["Who's Treasure|who's Treasure|Who is Treasure|who is Treasure"]
    let words10 = new RegExp(owner2);
    if(words10.test(document.querySelector('#input').value)){
      botMessage.innerHTML = 'Treasure is a programmer based on ReactJS and NodeJS he is the owner of a youtube channel called Creative Tutorials';
    }

    let ageAsk = ["What's your age|what's your age|What is your age|what is your age|How old are you|how old are you"] //adding the age-question
    let words11 = new RegExp(ageAsk);
    if(words11.test(document.querySelector('#input').value)){ // if the input contains some question
      botMessage.innerHTML = 'I am 1 year old';
    }
    humanMessage.innerHTML = document.querySelector('#input').value; // display the input
  }
  return (
    <div className="App" onLoad={checkStatus}>
      <div className="wrapper">
        <div className="content">
          <div className="header">
            <div className="img">
              <img src={image} alt="" />
            </div>
            <div className="right">
              <div className="name">ChatBot</div>
              <div className='status'></div>
            </div>
          </div>
          <div className="main">
            <div className="main_content">
              <div className="messages">
                <div className="bot-message" id='message1'></div>
                <div className="human-message" id='message2'></div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="btm">
                <div className="input">
                  <input type="text" id='input' placeholder='Enter your message'/>
                </div>
                <div className="btn">
                  <button onClick={handleInput}>
                    <i className="fas fa-paper-plane"></i>
                    Send
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
