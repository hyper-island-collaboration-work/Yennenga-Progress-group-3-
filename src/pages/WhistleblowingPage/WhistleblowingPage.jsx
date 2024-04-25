import WhistleBlowing from "../../components/WhistleBlowing";
import Footer from "../../components/footerSection/Footer";
import SocialMedia from "../../components/footerSection/SocialMedia";
import Header from "../../components/headerSection/Header";
import NavBar from "../../menu/NavBar";

export default function WhistleblowingPage() {
  return (
    <>
      <NavBar />
      <Header />
      <WhistleBlowing />
      <Footer />
      <SocialMedia />
    </>
  );
}
