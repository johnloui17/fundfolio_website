import React, { useState, useEffect } from "react";
import {
  Container,
  ImageBackground,
  Heading,
  FormContainer,
  BtnTextContainer,
  Spin,
} from "./style";
import Image from "next/image";
import Button from "../Button";
import Input from "../Input";
import Icons from "../Icons";
import { gumletLoader } from "../../utils/gumletLoader";
import ReCaptcha from "./reCaptcha";

const Contact = (props) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [device, setDevice] = useState("");
  const [loader, setLoader] = useState(false);
  const [action, setAction] = useState("ghost");
  const [buttonType, setButtonType] = useState();
  useEffect(() => {
    if (window.innerWidth < 800) setDevice("mobile");
    setButtonType("ghost");
  }, []);
  useEffect(() => {
    handleButtonTypeChange();
  }, [action]);
  useEffect(() => {
    if (validationTrue(false)) {
      action === "ghost" ? setAction("default") : null;
    } else {
      action === "default" ? setAction("ghost") : null;
    }
  }, [name, number, email, message]);
  const sentMail = async () => {
    const token = "a2064791-13b2-4e57-bf5f-c21d1147f4ac";
    const mailData = {
      name,
      number,
      email,
      message,
    };
    if (validationTrue(true)) {
      setAction("submitting");
      try {
        grecaptcha.ready(async function () {
          grecaptcha
            .execute("6LfTTIcaAAAAAGQDA__sAkZNZadGNeQCmld4Cpvz", {
              action: "submit",
            })
            .then(async function (token) {
              // Add your logic to submit to your backend server here.
              const resp = await Email.send({
                SecureToken: token,
                Subject: "From Fundfolio Website",
                To: "support@fundfolio.in",
                From: email,
                Number: number,
                Body:
                  `Name: ${name}\n` +
                  `Email: ${email}\n` +
                  `Message: ${message}`,
              });
              setAction("submitted");
            });
        });
      } catch (e) {
        // document.getElementById('message').innerText = "Oops! Somthing went wrong :/";
        setAction("error");
        console.log(e);
      }
    } else {
      console.log(validationTrue());
    }
  };
  const validationTrue = (displayAlert) => {
    if (name === "") {
      displayAlert ? alert("Please enter your name") : null;
      return false;
    }
    if (number !== "" && !number.length >= 10 && !number.length < 15) {
      displayAlert ? alert("Please enter a valid mobile number.") : null;
      return false;
    }
    if (
      email === "" ||
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      displayAlert ? alert("Please enter a valid email id") : null;
      return false;
    }
    if (message === "") {
      displayAlert ? alert("Please type your message") : null;
      return false;
    }
    return true;
  };
  const handleButtonTypeChange = () => {
    if (action === "default") {
      setButtonType(null);
    } else if (action === "ghost") {
      setButtonType("ghost");
    } else if (action === "submitting") {
      setButtonType("submitting");
    } else if (action === "submitted") {
      setButtonType("submitted");
    } else if (action === "error") {
      setButtonType(null);
    }
  };
  const getIcon = () => {
    if (action === "default") {
      return <Icons name="arrow" fill={"#fff"} />;
    } else if (action === "ghost") {
      return <Icons name="arrow" fill={"#fff"} />;
    } else if (action === "submitting") {
      return <Spin />;
    } else if (action === "submitted") {
      return <Icons name="check" fill={"#fff"} />;
    } else if (action === "error") {
      return null;
    }
  };
  const getText = () => {
    if (action === "default") {
      return "submit";
    } else if (action === "ghost") {
      return "submit";
    } else if (action === "submitting") {
      return "submitting";
    } else if (action === "submitted") {
      return "submitted";
    } else if (action === "error") {
      return "error";
    }
  };
  const resetForm = () => {
    setNumber("");
    setName("");
    setEmail("");
    setMessage("");
    setButtonType("ghost");
  }
  return (
    <Container id="contact">
      <ImageBackground>
        {device === "mobile" ? (
          <>
            <Image
              loader={gumletLoader}
              src="/mob_map.png"
              className="backgroundMobile"
              layout={"fill"}
            />
          </>
        ) : (
          <Image
            loader={gumletLoader}
            src="/location-bg.jpg"
            className="background"
            layout={"fill"}
          />
        )}
      </ImageBackground>
      <FormContainer>
        <Heading>contact us</Heading>
        <Input
          type={"text"}
          label="my name is"
          placeholder="your name"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="number"
          label="my phone number is"
          placeholder="your phone number"
          onChange={(e) => setNumber(e.target.value)}
        />
        <Input
          type="email"
          label="reach me at"
          placeholder="your@email.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="message"
          placeholder="type here"
          onChange={(e) => setMessage(e.target.value)}
        />
        {/* <ReCaptcha/> */}
        <Button
          id="submitButton"
          type={buttonType}
          onClick={() => {
            action === "default" ? sentMail() : null;
          }}
        >
          {getIcon()}
          <BtnTextContainer>{getText()}</BtnTextContainer>
        </Button>
      </FormContainer>
    </Container>
  );
};

export default Contact;
