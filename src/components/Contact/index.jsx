import React, {useState} from 'react';
import {Container, ImageBackground, Heading} from './style';
import Image from 'next/image'
import Button from '../Button';
import Input from '../Input';
import Icons from '../Icons';
import {gumletLoader} from '../../utils/gumletLoader';

const Contact = (props) => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const sentMail = async ()  => {
        const token = "a2064791-13b2-4e57-bf5f-c21d1147f4ac";
        const mailData = {
            name,
            number,
            email,
            message
        }
        if(validationTrue()){
            console.log('in ');
            try {
                const resp = await Email.send({
                    SecureToken : token,
                    To : "sajin4dev@gmail.com",
                    Subject: 'From Fundfolio Website',
                    To : "support@fundfolio.in",
                    From : email,
                    Number : number,
                    Body : `Name: ${name}\n`+ 
                    `Email: ${email}\n`+ 
                    `Message: ${message}`
                });
                document.getElementById('message').innerText = "Thank you! Your message is successfully sent :)";
            } catch (e) {
                // document.getElementById('message').innerText = "Oops! Somthing went wrong :/";
                console.log(e);
            }
        }
        
    }
    const validationTrue = () => {
        if(name === ""){
            alert("Please enter your name");
            return false;
        }
        if(number !== "" && !number.length >=10 && !number.length < 15){
            alert("Please enter a valid mobile number.");
            return false;
        }
        if(email === "" ||  ! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
            alert("Please enter a valid email id");
            return false;
        }
        if(message === ""){
            alert("Please type your message");
            return false
        }
        
    }
    return(
      <Container id="contact">
        <ImageBackground>
            <Image loader={gumletLoader} src="/location-bg.jpg" className="background" layout={'fill'}/>
        </ImageBackground>
        <div style={{position: 'relative'}}>
            <Heading>contact us</Heading>
            <Input type={'text'} label="my name is" placeholder="your name" onChange={(e)=>setName(e.target.value)}/>
            <Input type="number" label="my phone number is" placeholder="your phone number" onChange={(e)=>setNumber(e.target.value)}/>
            <Input type="email" label="reach me at" placeholder="your@email.com" onChange={(e)=>setEmail(e.target.value)}/>
            <Input label="message" placeholder="type here" onChange={(e)=>setMessage(e.target.value)}/>
            <Button type="ghost"  onClick={()=>sentMail()}><Icons name="arrow" fill={"#fff"}/><span>Submit</span></Button>
        </div>
      </Container>
    )
}

export default Contact