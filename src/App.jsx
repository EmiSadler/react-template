import Gig from "./components/Gig.jsx";
import "./App.css";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <div className="gig-container">
        <Gig band="The Decemberists" image="https://upload.wikimedia.org/wikipedia/en/5/5b/The_Decemberists_-_The_King_Is_Dead.jpg" album="The King is Dead album cover" description="An eclectic evening listening to The Decemberists with drinks." date="31 May 2025" location="Somewhere cozy with a fire"/>
        <Gig band="Mark Forster" image="https://cdn-images.dzcdn.net/images/cover/f72e9b88f233c475b44f82875a7f3acd/0x1900-000000-80-0-0.jpg" album="Liebe album cover" description="A vibrant evening listening to Mark Forster with themed cocktails." date="1 June 2025" location="Somewhere with a dance floor"/>
        <Gig band="Cameron Jericho" image="https://source.boomplaymusic.com/group10/M00/06/27/5ba762c18ed946ae881922e617b92a8e_320_320.jpg" album="Starlight album cover" description="A chill evening listening to Cameron Jericho with craft beer." date="2 June 2025" location="Somewhere with a small stage"/>
        <Gig band="Ehrling" image="https://i1.sndcdn.com/artworks-000225817908-bl4sqa-t500x500.jpg" album="Sthlm Sunset album cover" description="An upbeat evening listening to Ehrling with margaritas." date="3 June 2025" location="Somewhere with a view"/>
        <Gig band="Max Giesinger" image="https://upload.wikimedia.org/wikipedia/en/a/a1/Der_Junge%2C_der_rennt.jpg" album="Der Junge, der rennt album cover" description="A relaxing evening listening to Max Giesinger with gin cocktails." date="4 June 2025" location="Somewhere with a pool table"/>
        <Gig band="The Salts" image="https://m.media-amazon.com/images/I/51o32UpUH3L._UXNaN_FMjpg_QL85_.jpg" album="She Rises album cover" description="A folk evening listening to The Salts with locally brewed ales." date="5 June 2025" location="Somewhere by the sea"/>
      </div>
    <Footer />
    </>
  );
}

export default App;
