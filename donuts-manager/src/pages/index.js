import FooterComponent from "@/components/FooterComponent";
import HeaderComponent from "@/components/HeaderComponent";

export default function Home() {
  return (
    <>
    <HeaderComponent />
    <div className="welcome-container">
      <p className="welcome">Bienvenide a la página web de Donuts España</p>
    </div>
    <FooterComponent />
    </>
  );
}
