import React from 'react'
import './Contact.css'
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import emailjs from '@emailjs/browser';
import { useState } from 'react';

const Contact = () => {
  const [name, setname] = useState('');
  const [emailid, setemailid] = useState('');
  const [message, setmessage] = useState('');
  const [isopen, setisopen] = useState(true);

      
  const sendEmail=(e)=> {
    e.preventDefault();
 
  console.log(name);
  console.log(emailid);
  console.log(message)
  setmessage('');
  setemailid('');
  setname('');
  setisopen(false)

    
  
      
emailjs.send( 'service_mw422g6', 'template_thnxeur', {
       
        from_name: name,
        message: message,
         reply_to :emailid,
           
  
  
    }, 'UHku05c1fsztWeJut')
      .then((result) => {
  
          console.log(result.text);
          setname('');
    setemailid('');
    setmessage('');
    window.alert("Your Email Has Been Succesfully sent to CSS Team. Thanks For it!!")
   
      }, (error) => {
          console.log(error.text);
      }); 

    }
  return (
    <> 
   
      <div className="contact-us" >
          
         <div className="header" style={{backgroundColor:'#FFDEAD',display:'flex',justifyContent:'center',color:'black',width:'100vw'}}>
           Want To Contact us ! Mail US NOW .
         </div>
          <div className="emailus" style={{backgroundColor:'#36454F',width:'100vw'}}>
         <div className="form"  >
          
               <div className="input author">
               <input
    type="text"
    id="name"
    name="name"
    value={name}
    placeholder="NAME"
    onChange={(event) =>
      setname(event.target.value)
    } required
  
  />
 
               </div>
                  
               <div className="input email">
               <input 
    type="email"
    id="emailid"
    name="emailid"
    value={emailid}
    placeholder="EMAIL"
    onChange={(event) => {
      setemailid(event.target.value);
    }}
    required
  />

             </div>


             <div className="input msg" >
             <textarea 
    type="text"
    id="message"
    rows="4" cols="30"
    name="message"
    value={message}
    placeholder="LEAVE A MESSAGE FOR US"
    
   style={{opacity:'1',fontSize:'14px',color:'black'}}
    onChange={(event) => {
      setmessage(event.target.value);
    }}
    required
  />
                </div>

                <div className="submit" >
                <button type="submit"   onClick={sendEmail 
}>Submit</button>

                </div>
               
               
         </div>
         </div>



      </div>
   
   </>
  )
}

export default Contact


