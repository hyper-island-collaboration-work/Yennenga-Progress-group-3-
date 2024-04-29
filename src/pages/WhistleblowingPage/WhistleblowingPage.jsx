import Footer from "../../components/footerSection/Footer";
import Header from "../../components/headerSection/Header";
import Whistleblowing from "../../components/WhistleBlowing/Whistleblowing";
import NavBar from "../../menu/NavBar";
import MainImage from "/images/Whistleblowing-bg.png";

export default function WhistleblowingPage() {
  return (
    <>
      <NavBar />
      <Header
        bgImage={MainImage}
        heading={"Whistleblowing"}
        styles={"pt-52 pb-64 flex justify-center"}
      />
      <Whistleblowing />
      <Footer />
    </>
  );
}
