import React from "react";
import Head from 'next/head';



export default function App() {

  return (

<div className="App">  

  <Head>
  <meta charset="utf-8"></meta>
  <title>Not Found</title>
  <meta content="Not Found" property="og:title"></meta>
  <meta content="Not Found" property="twitter:title"></meta>
  <meta content="width=device-width, initial-scale=1" name="viewport"></meta>
  <link href="images/favicon.jpg" rel="shortcut icon" type="image/x-icon"></link>
  <link href="images/webclip.jpg" rel="apple-touch-icon"></link>

  </Head>

  <div class="utility-page-wrap">
    <div class="_404-wrap"><img src="images/logoKerurproject-01.png" loading="lazy" width="731" sizes="(max-width: 479px) 81vw, (max-width: 767px) 88vw, (max-width: 991px) 84vw, 731px" srcset="images/logoKerurproject-01-p-500.png 500w, images/logoKerurproject-01-p-800.png 800w, images/logoKerurproject-01-p-1080.png 1080w, images/logoKerurproject-01-p-1600.png 1600w, images/logoKerurproject-01-p-2000.png 2000w, images/logoKerurproject-01-p-2600.png 2600w, images/logoKerurproject-01-p-3200.png 3200w, images/logoKerurproject-01.png 4702w" alt=""></img>
      <div class="_404-content-wrap">
        <div class="heading-jumbo">Oups, cette page n'existe pas</div>
      </div>
      <a href="index.html" class="button cc-white-button w-inline-block">
        <div>Revenir à la page d'accueil</div>
      </a>
    </div>
  </div>
  </div>
  );
}