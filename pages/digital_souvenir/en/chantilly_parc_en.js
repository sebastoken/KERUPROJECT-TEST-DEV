import React, {useState, useRef, useEffect} from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { FiPlus } from "react-icons/fi";
import Router from "next/router";
import Head from 'next/head';

import CheckoutForm from "../../../components/CheckoutForm";
import FAQ from "../../../components/FAQ";
import Footer from "../../../components/footer"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);




// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.



export default function App() {
  const [clientSecret, setClientSecret] = React.useState("");
  const [showModal, setShowModal] = React.useState(false);
  const [showModal1, setShowModal1] = React.useState(false);



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

  function Buy_parc_gold (){
    setShowModal1(true);
    Create_intent_gold_parc()
  }

  function Buy_parc_silver(){
    setShowModal(true);
    Create_intent_silver_parc()
  }



  function Create_intent_silver_parc(){

    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "prod_MPM5RpvKmNrh6n", price :'price_1LgXNaF8K11ShNmKsGfm0SmQ' }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));

  }

  function Create_intent_gold_parc(){

    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "prod_MPM5Ir2d1aY031", price :'price_1LgXN6F8K11ShNmKhTOU39Lk' }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));

  }



  const appearance = {
    theme: 'stripe',
    variables: {
      colorPrimary: '#060c3b',
      colorText: '#060c3b',
    },
  };
  const options = {
    clientSecret,
    appearance,
  };


  return (


    <div class="App">  


    <Head>
    <meta charset="utf-8"></meta>
    <title>Château de Chantilly</title>
    <meta content="Château de Chantilly" property="og:title"></meta>
    <meta content="Château de Chantilly" property="twitter:title"></meta>
    <meta content="width=device-width, initial-scale=1" name="viewport"></meta>
    <link href="images/favicon.ico" rel="shortcut icon" type="image/x-icon"></link>
    <link href="images/webclip.ico" rel="apple-touch-icon"></link>
    </Head>

    <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>



<div class="body-6">
    <div class="navbar-chantilly" background="../images/background-chantilly.jpg"> 
        <img src="../../images/chantilly-logo.png" loading="lazy" width="400" class="image-41"></img>
    </div>
    
    <div class="background-chantilly">
    <div className="navbar_lang">
                <a href="../chantilly_parc">
                <span>
                🇬🇧English
                </span>
                </a>
     
          </div>

  <div class="div-start-collect">
    <h1 class="heading-52">Welcome !</h1>

<section class="souvenir_sect">
  <div className="souvenir_div">
  <model-viewer src="https://keruprojectwebsite.s3.eu-west-3.amazonaws.com/jardin_silver.txt" ar ar-modes="webxr scene-viewer quick-look" camera-controls shadow-intensity="1" exposure="1.11" autoplay>
    <div class="progress-bar hide" slot="progress-bar">
    <div class="update-bar"></div>
    </div>
  
  </model-viewer>
</div>
</section>

<h1 class="heading-52">Park of Château de Chantilly<br></br><i class="edition_text">- Silver 2022 -<br></br>10 000 editions</i></h1>
<p class="price-text"><i>Prix unitaire: 3€</i></p>
<button onClick={() => Buy_parc_silver()} class="buy-button">Get this souvenir</button>
</div> 

<div class="div-start-collect">
<section class="souvenir_sect">
  <div className="souvenir_div">
  <model-viewer src="https://keruprojectwebsite.s3.eu-west-3.amazonaws.com/jardin_chantilly_gold.txt" ar ar-modes="webxr scene-viewer quick-look" camera-controls shadow-intensity="1" exposure="1.11" autoplay>
    <div class="progress-bar hide" slot="progress-bar">
    <div class="update-bar"></div>
    </div>
  
  </model-viewer>
</div>
</section>

<h1 class="heading-52">Park of Château de Chantilly<br></br><i class="edition_text">- Gold 2022 -<br></br>150 editions</i></h1>
<p class="price-text"><i>Prix unitaire: 10€</i></p>
<button onClick={() => Buy_parc_gold()} class="buy-button">Get this souvenir</button>
</div> 


</div>



  

<div class="div-explication">
<div className="faqs">
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}

</div>
</div>

<div class="div-explication">

    <img src="../../images/logoKerurproject-01-p-500.png"></img>
</div>
<Footer></Footer>
</div>



<>
      {showModal ? (
        <>
          <div class="modal-container" onClick={() => setShowModal(false)}>
          <div class="modalcover"onClick={e => e.stopPropagation()}>
          {clientSecret && (
      <Elements options={options} stripe={stripePromise}>
        <CheckoutForm 
        price={3}/>
      </Elements>
    )}
          </div>
        </div>
        </>
      ) : null}
    </>


    <>
      {showModal1 ? (
        <>
          <div class="modal-container" onClick={() => setShowModal1(false)}>
          <div class="modalcover"onClick={e => e.stopPropagation()}>
          {clientSecret && (
      <Elements options={options} stripe={stripePromise}>
        <CheckoutForm 
        price={10}/>
      </Elements>
    )}
          </div>
        </div>
        </>
      ) : null}
    </>


</div>


);

}