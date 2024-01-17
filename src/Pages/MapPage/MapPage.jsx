import { SearchInput, NavBar } from "../../Components";
import { useNavigate } from 'react-router-dom';

export function MapPage() {
  const navigate = useNavigate();

  const navigateToModal = () => {
    navigate('/modal');
  };

  return (
    <>
      <div>
        <SearchInput navigateToModal={navigateToModal} />
        <img src="./src/Assets/map.jpg" alt="Map" />
      </div>
      <NavBar />
    </>
  );
}
