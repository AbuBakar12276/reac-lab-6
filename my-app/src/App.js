import React from 'react';
import './App.css';
import Userinfo from './Components/userinfo';
import Statistics from './Components/statistics';
import Message from './Components/message';

function App() {

  const user1 = {
    name: "Jhon",
    email: "jhon.123@gmail.com",
    role: "Manager",
    profilePicture: "data:image/jpeg;base64,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"
  }

  const statistics= {
    totalUsers: 1000,
    activeUsers: 726,
    newSignups: 189,
    activePercentage: ((38/55)*100).toFixed(2)
  }

  const message= {
    message1: "Hi",
    message2: "I am manager in this company",
    message3: "Nice to meet you"
  }

  return (
    <div className='App'>
    
       <Userinfo user= {user1} />
       <Statistics statistics={statistics} />
       <Message message={message} />
    </div>
  );
}

export default App;
