import React from "react";
import Head from 'next/head';



export default function App() {

    const [showModal, setShowModal] = React.useState(false);

  return (

<div className="App">  

<Head>
  <meta charset="utf-8"></meta>
  <title>KERU PROJECT</title>
  <meta content="Vos futurs souvenirs." name="description"></meta>
  <meta content="KERU PROJECT" property="og:title"></meta>
  <meta content="Vos futurs souvenirs." property="og:description"></meta>
  <meta content="KERU PROJECT" property="twitter:title"></meta>
  <meta content="Vos futurs souvenirs." property="twitter:description"></meta>
  <meta property="og:type" content="website"></meta>
  <meta content="summary_large_image" name="twitter:card"></meta>



</Head>



<div class="navbar-no-shadow wf-section">
    <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar-no-shadow-container w-nav">
      <div class="container-regular">
        <div class="navbar-wrapper">
          <a href="#" class="navbar-brand w-nav-brand"><img src="images/logoKerurproject-01.png" loading="lazy" width="181" srcset="images/logoKerurproject-01-p-500.png 500w, images/logoKerurproject-01-p-800.png 800w, images/logoKerurproject-01-p-1080.png 1080w, images/logoKerurproject-01-p-1600.png 1600w, images/logoKerurproject-01-p-2000.png 2000w, images/logoKerurproject-01-p-2600.png 2600w, images/logoKerurproject-01-p-3200.png 3200w, images/logoKerurproject-01.png 4702w" sizes="(max-width: 479px) 100vw, 181px" alt="" class="image-13"></img></a>
          <nav role="navigation" class="nav-menu-wrapper w-nav-menu">
            <ul role="list" class="nav-menu w-list-unstyled">
            <div class="handle-size">
              <li class="list-item">
                <a href="#forvisitors" class="nav-link">Visiteurs</a>
              </li>
              <li>
                <a href="#partners" class="nav-link">Partenaires</a>
              </li>
              <li>
                <a href="#ourvalues" class="nav-link">Nos valeurs</a>
              </li>
              <li>
                <a href="#team" class="nav-link">Équipe</a>
              </li>
              </div>
              <li>
                <a href="/" class="nav-link">🇬🇧</a>
              </li>
              <li class="mobile-margin-top-10">
                <div class="nav-button-wrapper">
                  <a href="http://www.kerudao.org" target="_blank" class="button-primary-su">S'inscrire</a>
                </div>
              </li>
              <li class="mobile-margin-top-10">
                <div class="nav-button-wrapper">
                  <a href="http://www.kerudao.org" target="_blank" class="button-primary-si">Se connecter</a>
                </div>
              </li>
            </ul>
          </nav>
          <div class="menu-button-2 w-nav-button">
          </div>
        </div>
      </div>
    </div>
  </div>
  <section id="home" class="first-section">
    <div class="hero-wrapper">
      <div class="hero-split">
        <h1 class="heading-25">Vos futurs souvenirs.</h1>
        <h4 class="paragraph-7">Nous proposons des souvenirs intemporels et utiles.</h4>
        <a href="https://discord.gg/Vzc98b2R9H" target="_blank" class="button-primary-2 w-button">Rejoignez la communauté !</a>
      </div>
    </div>
    <div class="container-3 w-clearfix"><img src="images/wherenext-p-500.jpg" loading="lazy" width="196" srcset="images/wherenext-p-500.jpeg 500w, images/wherenext-p-800.jpeg 800w, images/wherenext-p-1080.jpeg 1080w, images/wherenext-p-500.jpg 1125w" sizes="(max-width: 47px) 100vw, (max-width: 767px) 27vw, 196px" alt="" class="image-17"></img></div>
  </section>
  <section id="nextgen" class="pricing-overview wf-section">
    <div class="container-4">
      <h2 class="centered-heading">La future génération de voyageurs, d&#x27;artistes et de visiteurs</h2>
      <div class="pricing-grid">
        <div id="w-node-ba851090-0173-38cd-9a75-849a32b363b7-a16ebd3a" class="pricing-card-three"><img src="images/non-fungible-token.png" loading="lazy" data-w-id="ba851090-0173-38cd-9a75-849a32b363b8" alt="" class="pricing-image"></img>
          <h3 class="heading-27">Souvenirs digitaux officiels</h3>
          <h5 class="pricing-card-text">Nous travaillons main dans la main avec nos sites touristiques partenaires. Les souvenirs digitaux KERU sont des jetons non fongibles (NFT)</h5>
        </div>
        <div id="w-node-ba851090-0173-38cd-9a75-849a32b363c1-434363a5" class="pricing-card-three"><img src="images/art.png" loading="lazy" data-w-id="ba851090-0173-38cd-9a75-849a32b363c2" srcset="images/art-p-500.png 500w, images/art.png 512w" sizes="80px" alt="" class="pricing-image"></img>
          <h3 class="heading-27">Co-creés avec des artistes</h3>
          <h5 class="pricing-card-text">Des jeunes artistes aux plus renommées, nous promouvons les jeunes talents</h5>
        </div>
        <div id="w-node-ba851090-0173-38cd-9a75-849a32b363cb-434363a5" class="pricing-card-three"><img src="images/connection.png" loading="lazy" data-w-id="ba851090-0173-38cd-9a75-849a32b363cc"  alt="" class="pricing-image"></img>
          <h3 class="heading-28">Communauté à impact</h3>
          <h5 class="pricing-card-text">Lors de l&#x27;obtention d&#x27;un souvenir KERU, vous rejoindrez une communauté globale qui a pour mission de financer des projets culturels, écologiques et d&#x27;éducation</h5>
        </div>
      </div>
    </div>
  </section>
  <section id="forvisitors" class="features-list wf-section">
    <div class="container-5">
      <div class="features-wrapper-two">
        <div class="features-left">
          <h1><span class="text-span-12">Pour les visiteurs</span></h1>
          <h2 class="features-paragraph">Montrez les endroits que vous avez visité <br></br> Gagnez des avantages <br></br>Rejoignez des communautés à impacts</h2><img src="images/wherenext.jpg" loading="lazy" width="250" srcset="images/wherenext-p-500.jpeg 500w, images/wherenext-p-800.jpeg 800w, images/wherenext-p-1080.jpeg 1080w, images/wherenext.jpg 1125w" sizes="(max-width: 479px) 0px, (max-width: 991px) 100vw, 250px" alt="" class="image-18"></img>
        </div>
        <ul role="list" class="features-right w-list-unstyled">
          <li class="features-block-two"><img src="images/avatar-copie-3.png" loading="lazy" alt="" class="features-image"></img>
            <ul role="list" class="list">
              <li class="list-item-2">
                <h1 class="heading-29">Découvrez</h1>
                <p class="paragraph-4">Visitez des sites touristiques, prouvez que vous êtes bien sur place (en scannant le QR code ou en vous localisant) pour obtenir vos souvenirs digitaux.</p>
              </li>
            </ul>
          </li>
          <li class="features-block-two"><img src="images/hologram-copie-4.png" loading="lazy" alt="" class="features-image"></img>
            <ul role="list" class="list">
              <li>
                <h3 class="heading-29">Collectionnez &amp; partagez</h3>
                <h5 class="paragraph-4">Récuperez vos souvenirs, faites des collection et partagez les avec vos amis.</h5>
              </li>
            </ul>
          </li>
          <li class="features-block-two"><img src="images/connection.png" loading="lazy" alt="" class="features-image"></img>
            <ul role="list" class="list">
              <li>
                <h3 class="heading-29">Obtenez des avantages</h3>
                <h5 class="paragraph-4">Avez KERU, au plus vous visitez, au plus vous avez de chance d&#x27;obtenir des avantages (réductions, invitations spéciales, experiences), au plus vous aidez.</h5>
              </li>
            </ul>
          </li>
          <li class="features-block-two"><img src="images/avatar-copie-2.png" loading="lazy" alt="" class="features-image"></img>
            <ul role="list" class="list">
              <li>
                <h3 class="heading-29">Aidez</h3>
                <h5 class="paragraph-4"> Quand vous obtenez un souvenir KERU, vous rejoignez une communauté et vous aurez le droit de voter pour soutenir les projets de votre choix.</h5>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section id="partners" class="hero-heading-right wf-section">
    <div class="div-block-4">
      <div class="features-left">
        <h1 class="heading-30">Pour les partenaires</h1>
        <div class="hero-wrapper-2">
          <h2 class="margin-bottom-24px">Engagez mieux votre audience en proposant des souvenirs à votre image qui aident vraiment.</h2>
          <h3 class="paragraph-8">Nous vous offrons une interface bureau et mobile pour que vous puissiez gérer vos souvenirs digitaux. Vous aurez accès à des analyses statistiques de votre site, des conseils pour mieux engager votre audience ainsi qu&#x27;un accès préférentiel à la stratégie de notre DAO. KERU c&#x27;est également une source de financement pour votre site.</h3>
        </div>
      </div><img src="images/kerudesk.jpg" loading="lazy" width="441" srcset="images/kerudesk-p-500.jpeg 500w, images/kerudesk-p-800.jpeg 800w, images/kerudesk-p-1080.jpeg 1080w, images/kerudesk-p-1600.jpeg 1600w, images/kerudesk-p-2000.jpeg 2000w, images/kerudesk-p-2600.jpeg 2600w, images/kerudesk.jpg 2810w" sizes="(max-width: 479px) 100vw, (max-width: 991px) 441px, (max-width: 1439px) 18vw, 21vw" alt=""></img>
    </div>
    <div class="container-7">
      <div class="container-17">
      <h2 class="paragraph-5">Si vous souhaitez être notre prochain partenaire, écrivez-nous.</h2>
      </div>
      <a href="mailto:hello@kerudao.org?subject=I&#x27;d%20like%20to%20get%20in%20touch" class="button-14 w-button"><span class="text-span-15">Nous contacter</span></a>
    </div>
  </section>
  <section id="ourvalues" class="team-slider wf-section">
    <div class="container-8">
      <h2 class="centered-heading-3">Rejoignez la révolution KERU</h2>
      <h4 class="paragraph-world">Le monde change vite. Les NFTs seront bientôt partout dans nos vies. Ils sont le futur et les DAO (organisation décentralisée) offrent une solution transparente pour construire des communautés autour d&#x27;interêts communs, tout en leur permettant d&#x27;avoir un impact positif. C&#x27;est la mission de KERU PROJECT</h4>
        <div class="team-grid">
          <div class="team-slide-wrapper w-slide">
            <div class="team-block"><img src="images/connection.png" loading="lazy" srcset="images/connection-p-500.png 500w, images/connection.png 512w" sizes="(max-width: 47px) 0px, 100vw" alt="" class="team-member-image-two"></img>
              <div class="team-block-info">
                <h3 class="team-member-name-two">Une communauté à impact</h3>
                <h4 class="team-member-text">Quels projets voudriez-vous financer ? Les collectionneurs KERU seront appelés à voter au travers de la DAO pour choisir quels projets seront financés avec l&#x27;argent récolté. Ça peut être des projets en lien avec l&#x27;éducation, l&#x27;écologie, la culture.</h4>
              </div>
            </div>
          </div>
          <div class="team-slide-wrapper w-slide">
            <div class="team-block"><img src="images/earth-cycles.png" loading="lazy" srcset="images/earth-cycles.png 500w, images/earth-cycles.png 512w" sizes="(max-width: 47px) 0px, 100vw" alt="" class="team-member-image-two"></img>
              <div class="team-block-info">
                <h3 class="team-member-name-two">Une blockchain respectueuse de la planète</h3>
                <h4 class="team-member-text">Nous travaillons avec TEZOS, la blockchain la moins émettrice de carbone qui utilise seulement les energies renouvelables.</h4>
              </div>
            </div>
          </div>
        </div>
        <div class="team-slider-arrow w-slider-arrow-left"></div>
        <div class="team-slider-arrow w-slider-arrow-right">
          <div class="w-icon-slider-right"></div>
        </div>
        <div class="team-slider-nav w-slider-nav w-round"></div>
        <a href="https://twitter.com/keru_projectdao?s=21&amp;t=7JHyudycW8LExdX1r1Vblg" target="_blank" class="button-primary-3">Suivez-Nous</a>
      </div>
   
  </section>
  <section id="team" class="team-circles wf-section">
    <div class="container-6">
      <h2 class="centered-heading-2">Équipe</h2>
      <div class="team-grid">
        <div id="w-node-_4af4e482-3c87-cf15-54fd-c36600e352ea-434363a5" class="team-card"><img src="images/heleneprofilpic-p-500.png" loading="lazy" srcset="images/heleneprofilpic-p-500.png 500w, images/heleneprofilpic-p-500.png 598w" width="1532" sizes="(max-width: 47px) 100vw, (max-width: 991px) 190px, 170px" alt="" class="team-member-image"></img>
          <div class="team-member-name-2">Hélène Quintin</div>
          <a href="https://www.linkedin.com/in/helenequintin/" target="_blank" class="button-15">LinkedIn</a>
        </div>
        <div id="w-node-_4af4e482-3c87-cf15-54fd-c36600e352f5-434363a5" class="team-card"><img src="images/sebastien.jpeg" loading="lazy" alt="" class="team-member-image"></img>
          <div class="team-member-name-2">Sébastien Lacan</div>
          <a href="https://www.linkedin.com/in/sebastienlacan/" target="_blank" class="button-16">LinkedIn</a>
        </div>
      </div>
    </div>
  </section>
  <div class="section-20">
    <h2 class="heading-48">Ils parlent de nous</h2>
    <div class="columns-9 w-row">
      <div data-w-id="f8746bbe-0cf4-b365-28e0-5054e5cd4e80" class="column-20 w-col w-col-3">
        <a href="https://xtz.news/adoption/keru-project-timeless-digital-souvenir-nfts-for-tourism-with-proof-of-visit-on-tezos/" target="_blank" class="w-inline-block"><img src="images/XTZ-News-1.png" loading="lazy" width="175" srcset="images/XTZ-News-1-p-500.png 500w, images/XTZ-News-1-p-800.png 800w, images/XTZ-News-1-p-1080.png 1080w, images/XTZ-News-1-p-1600.png 1600w, images/XTZ-News-1-p-2000.png 2000w, images/XTZ-News-1.png 2200w" sizes="(max-width: 479px) 100vw, (max-width: 767px) 175px, (max-width: 1439px) 17vw, 175px" alt="" class="image-38"></img></a>
      </div>
      <div class="column-21 w-col w-col-3">
        <a href="https://www.ouest-france.fr/pays-de-la-loire/guerande-44350/guerande-helene-quintin-finaliste-du-concours-coups-de-coeur-femmes-du-numerique-15adb022-ea32-11ec-b49c-0a88c1b53246" target="_blank" class="link-block w-inline-block"><img src="images/1200px-Logo_Ouest-France.svg.png" loading="lazy" width="205" srcset="images/1200px-Logo_Ouest-France.svg-p-500.png 500w, images/1200px-Logo_Ouest-France.svg-p-800.png 800w, images/1200px-Logo_Ouest-France.svg-p-1080.png 1080w, images/1200px-Logo_Ouest-France.svg.png 1200w" sizes="(max-width: 479px) 100vw, (max-width: 767px) 205px, (max-width: 991px) 22vw, 205px" alt="" class="image-35"></img></a>
      </div>
      <div class="column-22 w-col w-col-3">
        <a href="https://actu.fr/pays-de-la-loire/guerande_44069/loire-atlantique-une-habitante-de-guerande-en-finale-pour-sa-plateforme-de-souvenirs-digitaux_51694026.html" target="_blank" class="w-inline-block"><img src="images/echo-presquile.png" loading="lazy" width="177" alt="" class="image-36"></img></a>
      </div>
      <div class="column-23 w-col w-col-3">
        <a href="https://www.lapostegroupe.com/fr/actualite/la-poste-lance-la-4e-edition-des-coups-de-cœur-femmes-du-numerique" target="_blank" class="w-inline-block"><img src="images/Logo-groupe-la-poste-2021.png" loading="lazy" width="266" srcset="images/Logo-groupe-la-poste-2021-p-500.png 500w, images/Logo-groupe-la-poste-2021-p-800.png 800w, images/Logo-groupe-la-poste-2021-p-1080.png 1080w, images/Logo-groupe-la-poste-2021-p-1600.png 1600w, images/Logo-groupe-la-poste-2021-p-2000.png 2000w" sizes="(max-width: 479px) 100vw, (max-width: 767px) 266px, (max-width: 1439px) 23vw, 266px" alt="" class="image-37"></img></a>
      </div>
    </div>
  </div>
  <section id="footer" class="footer-subscribe wf-section">
    <div class="footer-bottom"><img src="images/logoKerurproject-01.png" loading="lazy" width="225" srcset="images/logoKerurproject-01-p-500.png 500w, images/logoKerurproject-01-p-800.png 800w, images/logoKerurproject-01-p-1080.png 1080w, images/logoKerurproject-01-p-1600.png 1600w, images/logoKerurproject-01-p-2000.png 2000w, images/logoKerurproject-01-p-2600.png 2600w, images/logoKerurproject-01-p-3200.png 3200w, images/logoKerurproject-01.png 4702w" sizes="(max-width: 479px) 100vw, (max-width: 767px) 225px, (max-width: 991px) 24vw, (max-width: 1439px) 20vw, 225px" alt="" class="image-19"></img>
      <div class="footer-copyright">© 2022 KERU PROJECT. Tous droits réservés</div>
      <div class="footer-legal-block">
        <div class="footer-social-block-three">
          <a href="https://twitter.com/keru_projectdao?s=21&amp;t=7JHyudycW8LExdX1r1Vblg" target="_blank" class="footer-social-link-three w-inline-block"><img src="images/twitter.png" loading="lazy" width="24" alt="" class="image-16"></img></a>
          <a href="https://www.instagram.com/keru_projectnft/" target="_blank" class="footer-social-link-three w-inline-block"><img src="images/instalogo.jpg" loading="lazy" width="25" srcset="images/instalogo-p-500.jpeg 500w, images/instalogo-p-800.jpeg 800w, images/instalogo-p-1080.jpeg 1080w, images/instalogo-p-1600.jpeg 1600w, images/instalogo-p-2000.jpeg 2000w, images/instalogo.jpg 2048w" sizes="(max-width: 479px) 100vw, (max-width: 767px) 25px, (max-width: 991px) 3vw, (max-width: 1439px) 2vw, 25px" alt="" class="image-15"></img></a>
          <a href="https://discord.gg/Vzc98b2R9H" target="_blank" class="footer-social-link-three w-inline-block"><img src="images/Discord_Logo_sans_texte.svg.png" loading="lazy" width="27" srcset="images/Discord_Logo_sans_texte.svg-p-500.png 500w, images/Discord_Logo_sans_texte.svg-p-800.png 800w, images/Discord_Logo_sans_texte.svg-p-1080.png 1080w, images/Discord_Logo_sans_texte.svg-p-1600.png 1600w, images/Discord_Logo_sans_texte.svg.png 1818w" sizes="(max-width: 479px) 100vw, (max-width: 991px) 27px, (max-width: 1439px) 2vw, 27px" alt="" class="image-14"></img></a>
        </div>
        <a href="mentions_legales" target="_blank" class="footer-legal-link">Politique de confidentialité</a>
        <a href="#" class="footer-legal-link">Conditions d&#x27;utilisation</a>
      </div>
    </div>
  </section>

  <>
      {showModal ? (
        <>
          <div class="modalcover">
          <button class="button_close_overlay" onClick={() => setShowModal(false)}>x </button>
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                  <h2 class="walletheader">
                    Laisser nous votre mail <br></br>Nous reviendrons vers vous dès que de nouveaux souvenirs sont disponibles
                  </h2>
                {/*body*/}
                <h4 class="walletheader">
                Pendant ce temps, vous pouvez créer votre compte pour acceler le processus lors de vos futures achats
                  </h4>
                  <input placeholder="hello@kerudao.org"></input>

                  <button class="button_close_overlay_1">Déconnexion</button>

                </div>
            </div>
          </div>
        </>
      ) : null}
    </>



  </div>
  );
}