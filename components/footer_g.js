import { ImFacebook, ImTwitter } from "react-icons/im";
import {FaDiscord, FaInstagram} from "react-icons/fa";
import {GiFleurDeLys} from "react-icons/gi";

export default function footer() {

  const bg = {
   // backgroundImage : "url('/images/footer.png')",
    //backgroundRepeat: 'no-repeat',
    //backgroundPosition: "bottom left"
  }

  return (
    <footer className="div-explication_g" style={bg}>
      <div className="container mx-auto flex justify-center py-12">
          <div className="py-5">
              <div class="icon-wrapper">
                    <a href={"https://discord.com/invite/Vzc98b2R9H"} target="_blank"><FaDiscord color="white" size={30}/></a>
                    <a href={"https://twitter.com/Keru_projectdao"} target="_blank"><ImTwitter color="white" size={30}/></a>     
                    <a href={"https://www.facebook.com/KERU-Project-DAO-106509828810673"} target="_blank"><ImFacebook color="white" size={30}/></a>
                    <a href={"https://www.instagram.com/keru_projectnft/"} target="_blank"><FaInstagram color="white" size={30}/></a>    
                    
                 
              </div>

              <p class="right-reserved">© 2022 KERU PROJECT. All rights reserved</p>
              <a class="right-reserved" href={"https://www.keruproject.org/mentions_legales"} target="_blank"><p className="text-gray-400 text-center">Termes & Condition</p></a>
          </div>
      </div>

    </footer>
  )
}
