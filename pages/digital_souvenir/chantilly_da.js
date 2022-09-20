import React, {useState, useRef, useEffect} from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { FiPlus } from "react-icons/fi";
import Router from "next/router";
import Head from 'next/head';

import CheckoutForm from "../../components/CheckoutForm";
import FAQ from "../../components/FAQ";
import Footer from "../../components/footer"

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
      question: "Qu'est ce que KERU PROJECT ?",
      answer:
        "KERU PROJECT réinvente les souvenirs touristiques. Nous établissons des partenariats officiels avec les sites touristiques pour proposer des souvenirs intemporels, modernes, qui soutiennent notre patrimoine culturel.",
      open: true
    },
    {
      question: "Qui a crée KERU PROJECT ?",
      answer: "KERU PROJECT a été crée par Hélène Quintin et Sébastien Lacan.",
      open: false
    },
    {
      question:
        "Qu'est ce qu'un souvenir digital ?",
      answer: "Les souvenirs digitaux sont des NFT. NFT signifie « Non-fungible token » ou « jeton non-fongible » en français. Un NFT est un fichier numérique auquel est attaché un certificat d’authenticité numérique, le rendant non- interchangeable et unique. En obtenant un NFT, un acheteur devient le propriétaire exclusif d’un bien numérique. Ainsi, un NFT est unique, rare et indivisible.",
      open: false
    },
    {
       question:
        "Les souvenirs digitaux sont ils respectueux de l'environnement ?",
       answer: "Nos souvenirs sont développés sur Tezos, la blockchain la moins émettrice de carbone qui utilise seulement des énergies renouvalables pour fonctionner. Chez KERU PROJECT, depuis la phase de conception du projet, nous adoptons une démarche éco-responsable.",
       open: false
      },
      {
       question:
        "Sur quelle blockchain êtes-vous ?",
        answer: "Nous sommes basés sur Tezos. www.tezos.com",
        open: false
      },
      ,
      {
       question:
        "Où-est-ce que je peux obtenir un souvenir digital ?",
        answer: "Vous trouverez la liste de nos partenaires sur www.keruproject.org",
        open: false
      },
      {
        question:
         "Comment puis-je accéder à mon souvenir digital ?",
         answer: "Rendez-vous sur www.kerudao.org. Nous créons pour vous un wallet blockchain, sur lequel seront stockés vos souvenirs. A l'avenir, vous pourrez en profitez et les échanger sur l'application KERU que nous développons. En obtenant un de ces souvenirs, vous ferez partis des premiers KERU collectionneurs!",
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

  function Buy_da_gold (){
    setShowModal1(true);
    Create_intent_gold_da()
  }

  function Buy_da_silver(){
    setShowModal(true);
    Create_intent_silver_da()
  }



  function Create_intent_silver_da(){

    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "prod_MPM1VHf9G22wFW", price :'price_1LgXJXF8K11ShNmKpvnPOB8E' }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));

  }

  function Create_intent_gold_da(){

    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "prod_MPM0DJyYwh7Xug", price :'price_1LgXIjF8K11ShNmKwO9aljEp' }] }),
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
        <img src="../images/chantilly-logo.png" loading="lazy" width="400" class="image-41"></img>
    </div>
    
    <div class="background-chantilly">
    <div className="navbar_lang">
                <a href="en/chantilly_da_en">
                <span>
                🇬🇧English
                </span>
                </a>
     
          </div>

  <div class="div-start-collect">
    <h1 class="heading-52">Bienvenue !</h1>

<section class="souvenir_sect">
  <div className="souvenir_div">
  <model-viewer src="https://keruprojectwebsite.s3.eu-west-3.amazonaws.com/duc_silver.txt" ar ar-modes="webxr scene-viewer quick-look" camera-controls shadow-intensity="1" exposure="1.11" autoplay>
    <div class="progress-bar hide" slot="progress-bar">
    <div class="update-bar"></div>
    </div>
  
  </model-viewer>
</div>
</section>

<h1 class="heading-52">Bicentenaire du duc d'Aumale<br></br><i class="edition_text">- Argent 2022 -<br></br>10 000 éditions</i></h1>
<p class="price-text"><i>Prix unitaire: 3€</i></p>
<button onClick={() => Buy_da_silver()} class="buy-button">Obtenir ce souvenir</button>
</div> 

<div class="div-start-collect">
<section class="souvenir_sect">
  <div className="souvenir_div">
  <model-viewer src="https://keruprojectwebsite.s3.eu-west-3.amazonaws.com/duc_gold.glb.txt" ar ar-modes="webxr scene-viewer quick-look" camera-controls  shadow-intensity="1" exposure="1.11" autoplay>
    <div class="progress-bar hide" slot="progress-bar">
    <div class="update-bar"></div>
    </div>
  
  </model-viewer>
</div>
</section>

<h1 class="heading-52">Bicentenaire du duc d'Aumale<br></br><i class="edition_text">- Or 2022 -<br></br>150 éditions</i></h1>
<p class="price-text"><i>Prix unitaire: 10€</i></p>
<button onClick={() => Buy_da_gold()} class="buy-button">Obtenir ce souvenir</button>
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

    <img src="../images/logoKerurproject-01-p-500.png"></img>
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