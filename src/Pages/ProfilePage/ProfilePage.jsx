import "./ProfilePage.css";
import { NavBar } from "../../Components";

export function ProfilePage() {
  return (
    <>
      <div>
        <img src="/assets/profile.jpg" alt="Profile pic" />
        <h2>John Barras</h2>
        <p>Mis datos</p>
        <p>Acerca de nosotros</p>
        <p>Ajustes</p>
      </div>
      <NavBar />
    </>
  );
}
