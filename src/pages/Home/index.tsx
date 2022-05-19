import Button from '../../components/Button';
import './styles.css';
import { Link } from 'react-router-dom';
import CarImg from '../../assets/images/car.png';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-card">
      <img src={CarImg} alt="Carro" />
        <div className="home-content-container">
          <h1>O carro perfeito para você</h1>
          <p>
            Conheça nossos carros e dê mais um passo na realização do seu sonho
          </p>
        </div>
      </div>
      <div className="home-button-container">
        <div className="button-icon">
          <Link to="cars">
            <Button texto={'VER CATÁLOGO'} />
          </Link>
        </div>
        <div className="button-h5">
          <h5>Comece agora a navegar</h5>
        </div>
      </div>
    </div>
  );
};

export default Home;
