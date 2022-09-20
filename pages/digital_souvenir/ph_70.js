import React from "react";
import { useCallback, useState } from 'react';
import Router from 'next/router';
import Head from 'next/head';
import FAQ from "../../components/FAQ";
import Footer from "../../components/footer_g"



export default function PHgetsouvenir() {

  const [email, setEmail] = useState('');
  const [isClicked, setIsClicked] = useState(false);

  const location = "Anniversaire Paul-Henri"
  const image_url = "https://keruprojectwebsite.s3.eu-west-3.amazonaws.com/PH_70.txt"
  const edition = "70 ans"


  const [faqs, setFaqs] = useState([
    {
      question: "What is KERU PROJECT ?",
      answer:"KERU is reinventing touristic souvenirs. We are building official partnerships with touristic sites to propose tiemeless souvenirs that truly help.",
      open: true
    },
    {
      question: "Who created KERU ?",
      answer: "KERU PROJECT is founded by Hélène Quintin and Sebastien Lacan",
      open: false
    },
    {
      question:
        "What is a digital souvenir ?",
      answer: "Digital souvenirs are NFT. NFT stands for “Non-fungible token”. It is a tamper-proof digital asset authenticated thanks to the blockchain, a kind of large-scale account book accessible worldwide and which makes it possible to keep track of all the transactions carried out. Thus, an NFT is unique, rare and indivisible.",
      open: false
    },
    {
       question:
        "Are digital souvenir ecological ?",
       answer: "Our NFT are developed on Tezos, the least carbon emitting blockchain that uses only renewable energies. In the team, from the conception of our products, we are thinking in an eco-responsible way.",
       open: false
      },
      {
       question:
        "On which blockchain are you ?",
        answer: "We are on Tezos. www.tezos.com",
        open: false
      },
      ,
      {
       question:
        "How can I access to my souvenir ?",
        answer: "At each purchase, we're creating for you a wallet where you'll have your NFTs. Go to www.kerudao.org after your puchase.",
        open: false
      },
      {
        question:
         "How to join the discussion group of the project ?",
         answer: "You can join the community on our discord group, where special discussion will be available for digital souvenir holders.",
         open: false
       }
      
  ]);


  const toggleFAQ = index => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

    function check()
    {
      if(!document.getElementById("email").checkValidity())
      {
        //do stuff here ie. show errors
        alert("Non valid email address");
    
      }else
      {
          clickHandler({email,location,image_url,edition});
          sendConfirmationEmail({email,location})
      }
    }


  async function clickHandler(enteredData) {
    setIsClicked(true);
 
    const response = await 
    fetch("/api/post_free", {
      method: "POST",
      body: JSON.stringify(enteredData),
      headers: 
      {
        "Content-Type": 
        "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    
    Router.push({pathname:'/digital_souvenir/success_keru' });
   }


   async function sendConfirmationEmail(e){
    console.log('mail is sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(e),
      })

      const { error } = await res.json()

      if (error) {

   const response = await 
   fetch("/api/post_error", {
     method: "POST",
     body: JSON.stringify({email:e.email,souvenir_name:e.souvenir_name,error:error}),
     headers: 
     {
       "Content-Type": 
       "application/json",
     },
      });
        return
      }
  
    } catch (error) {
    //console.log(error)
    }
  
}

   const handleInputOnChange = useCallback((event) => {
    setEmail(event.target.value);
  }, []);



  return (

<div class="App">  

    <Head>
    <meta charset="utf-8"></meta>
    <title>Birthday PH</title>
    <meta content="Birthday PH" property="og:title"></meta>
    <meta content="Birthday PH" property="twitter:title"></meta>
    <meta content="width=device-width, initial-scale=1" name="viewport"></meta>
    <link href="images/favicon.ico" rel="shortcut icon" type="image/x-icon"></link>
    <link href="images/webclip.ico" rel="apple-touch-icon"></link>
    </Head>

<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>



<div class="body-4">
<div class="div-souvenir">
  <div class="image_welcome">
  <img src="../images/logoKerurproject-01-p-500.png"></img>
  </div>
  </div>

  <section class="souvenir_sect">
  <div className="souvenir_div">
  <model-viewer src="https://keruprojectwebsite.s3.eu-west-3.amazonaws.com/PH_70.txt" ar ar-modes="webxr scene-viewer quick-look" camera-controls poster="poster.webp" shadow-intensity="1" exposure="1.11" autoplay>
    <div class="progress-bar hide" slot="progress-bar">
        <div class="update-bar"></div>
    </div>
  </model-viewer>
  </div>
</section>


  <div class="form-block w-form">
    <form_1 id="email-form" name="email-form" data-name="Email Form" class="form_1" aria-label="Email Form">
    <input type="email" class="text-field-3 w-input" autofocus="false" maxlength="256" name="email" data-name="Email" placeholder="Email address" id="email" onChange={handleInputOnChange} required></input>
    <button class="submit-button-3" type="submit" disabled={isClicked} onClick={() => check()}>Get your souvenir</button>
    </form_1>
  </div>
  
  
  <div class="div-explication_g">
   <div className="faqs">
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}

   </div>
</div>


<div class="div-explication_g">

<img src="../images/logoKerurproject-01-p-500.png"></img>
</div>
<Footer></Footer>


  </div>
  </div>
  );
    }