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
        <img src="/assets/map.jpg" alt="Map" />
      </div>
      <NavBar />
    </>
  );
}
