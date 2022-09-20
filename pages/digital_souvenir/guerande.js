import React from "react";
import { useCallback, useState } from 'react';
import Router from 'next/router';
import Head from 'next/head';
import FAQ from "../../components/FAQ";

import Footer from "../../components/footer_g"






export default function App() {

  const [email, setEmail] = useState('');
  const [isClicked, setIsClicked] = useState(false);

  const location = "Ville de Guérande"
  const image_url = "https://keruprojectwebsite.s3.eu-west-3.amazonaws.com/nft_guerande.png"
  const edition = "Édition été 2022"
  const description = "Félicitations ! Vous faites partis des tous premiers collectionneurs en détenant ce souvenir digital. Il a été crée sous forme de NFT sur la blockchain Tezos. À l’avenir, vous pourrez plus facilement l’échanger, le partager sur cette plateforme. Dès aujourd’hui, pour vous remercier pour votre soutien, nous vous transmettons le badge des premiers supporters KERU, édité en seulement 1500 exemplaires."

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
      answer: "Les souvenirs digitaux sont des NFT. NFT signifie « Non-fungible token » ou « jeton non-fongible » en français. Il s’agit d’un actif numérique infalsifiable authentifié grâce à la blockchain, sorte de livre de comptes à grande échelle accessible dans le monde entier et qui permet de garder la trace de toutes les transactions effectuées. Ainsi, un NFT est unique, rare et indivisible.",
      open: false
    },
    {
       question:
        "Les souvenirs digitaux sont ils respectueux de l'environnement ?",
       answer: "Nos souvenirs sont développées sur Tezos, la blockchain la moins émettrice de carbone qui utilise seulement des énergies renouvalables pour fonctionner. Chez KERU PROJECT, depuis la phase de conception du projet, nous adoptons une démarche éco-responsable.",
       open: false
      },
      {
       question:
        "Sur quelle blockchain êtes-vous ?",
        answer: "Nous sommes basés sur Tezos. https://tezos.com",
        open: false
      },
      ,
      {
       question:
        "Où-est-ce que je peux obtenir un souvenir digital ?",
        answer: "Vous trouverez la liste de nos partenaires sur keruproject.org",
        open: false
      },
      {
        question:
         "Comment puis-je accéder à mon souvenir digital ?",
         answer: "Nous créons un portefeuille virtuel pour vous, sur lequel seront stockés vos souvenirs. A l'avenir, vous pourrez en profitez et les échanger sur l'application KERU que nous développons.",
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
        alert("Adresse email non valide");
    
      }else
      {
          clickHandler({email,location,image_url,edition, description});
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
     body: JSON.stringify({email:e.email,location:e.location,error:error}),
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
    <title>Ville de Guérande</title>
    <meta content="Ville de Guérande" property="og:title"></meta>
    <meta content="Ville de Guérande" property="twitter:title"></meta>
    <meta content="width=device-width, initial-scale=1" name="viewport"></meta>
    <link href="images/favicon.ico" rel="shortcut icon" type="image/x-icon"></link>
    <link href="images/webclip.ico" rel="apple-touch-icon"></link>
    </Head>



<div class="body-4">
<div class="columns-7 w-row">
    <div class="column-19 w-col w-col-3"><img src="../images/keruprojectxguerande.png" loading="lazy" width="230" alt="" class="image-30"></img></div>
    <div class="column-15 w-col w-col-6">
      <h1 class="heading-41">Bienvenue !</h1>
      <h1 class="heading-37">Merci de participer au lancement de KERU PROJECT en partenariat avec la ville de Guérande</h1>
    </div>
    <div class="column-12 w-col w-col-3"><img src="../images/keruprojectxguerande.png" loading="lazy" width="258" alt="" class="image-29"></img></div>
  </div>
  <div class="section-12 wf-section"></div>
  <div class="section-12 wf-section">
    <a href="#" class="lightbox-link w-inline-block w-lightbox" aria-label="open lightbox" aria-haspopup="dialog"><img src="../images/guerandenft2022.png" loading="lazy" width="200" alt="" class="image-27"></img>
    </a>
  </div>
  <div class="section-13 wf-section">
    <div class="div-block-7">
      <div class="text-block-17">Souvenir digital été 2022</div>
      <div class="text-block-17">Ville de Guérande</div>
    </div>
  </div>
  <div class="form-block w-form">
    <form_1 id="email-form" name="email-form" data-name="Email Form" class="form_1" aria-label="Email Form">
    <input type="email" class="text-field-3 w-input" autofocus="false" maxlength="256" name="email" data-name="Email" placeholder="Renseignez votre addresse mail" id="email" onChange={handleInputOnChange} required></input>
    <button class="submit-button-2" type="submit" disabled={isClicked} onClick={() => check()}>Obtenez votre souvenir</button>
    </form_1>
  </div>
  
  <div class="section-15 wf-section">
    <div class="text-block-20"><span class="text-span-19">Qui sommes-nous? </span>Nous sommes une jeune startup française et nous réinventons les souvenirs touristiques. </div>
  </div>
  <div class="section-16 wf-section">
    <div class="columns-6 w-row">
      <div class="column-13 w-col w-col-6">
        <div class="text-block-21"><span class="text-span-17">Notre mission: </span>Soutenir notre patrimoine, et offrir aux visiteurs l&#x27;opportunité de financer des projets à impact dans les domaines de l&#x27;écologie et de la culture.</div>
      </div>
      <div class="column-14 w-col w-col-6">
        <div class="div-block-9"><span class="text-span-18">Comment? </span>Grâce à une communauté de visiteurs engagés qui pourront collectionner des souvenirs par catégorie de lieux visités.</div>
      </div>
    </div><img src="../images/collectors.png" loading="lazy" width="303" alt="" class="image-34"></img>
  </div>
  <div class="section-9 wf-section">
    <h1 class="heading-40">L&#x27;aventure commence avec vous</h1>
    <p class="paragraph-28">Nous sommes en phase de développement et nous avons besoin de premiers utilisateurs. Vous souhaitez faire parti des tous premiers détenteurs de souvenir digitaux ? Indiquez nous votre email (aucun usage commercial ne sera effectué), et nous vous communiquerons ensuite les informations pour récupérer votre souvenir. Le souvenir est gratuit et vous permettra, en tant que premiers soutiens de KERU PROJECT, d’obtenir des avantages au sein de la communauté. C&#x27;est le début d&#x27;une grande aventure!</p>
    <p class="paragraph-29">(Psst, des surprises attendent nos premiers collectionneurs)</p>
    <a href="https://twitter.com/keru_projectdao?s=21&amp;t=7JHyudycW8LExdX1r1Vblg" class="button-20">NOUS SUIVRE SUR TWITTER</a>
  </div>
  <div class="section-22 wf-section">
    <h1 class="heading-51">L&#x27;équipe</h1>
    <div class="div-block-13">
      <div class="div-block-15"><img src="../images/heleneprofilpic.png" loading="lazy" width="170" height="175" sizes="(max-width: 479px) 170, 170" srcset="../images/heleneprofilpic-p-500.png 500w, ../images/heleneprofilpic-p-500.png 598w" alt="" class="image-40"></img>
        <div class="text-block-25">Hélène Quintin</div>
        <a href="https://www.linkedin.com/in/helenequintin/" target="_blank" class="button-21 w-button">LinkedIn</a>
      </div>
      <div class="div-block-14"><img src="../images/sebastien.jpeg" loading="lazy" width="170" height="175" alt="" class="image-39"></img>
        <div class="text-block-26">Sébastien Lacan</div>
        <a href="https://www.linkedin.com/in/sebastienlacan/" target="_blank" class="button-22 w-button">LinkedIn</a>
      </div>
    </div>
  </div>
  
<div class="div-explication_g">
  <div className="faqs">
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}

  </div>
</div>

<div class="text-center">Vous avez encore des questions? Envoyez-nous un mail<a href="mailto:hello@kerudao.org?subject=I%20have%20a%20question%20for%20you" class="link-2">hello@kerudao.org</a>
</div>

<div class="div-explication_g">
<img src="../images/logoKerurproject-01-p-500.png"></img>
  </div>
<Footer></Footer>
  </div>
</div>
  );
    }