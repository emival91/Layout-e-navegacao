import './styles.css';

import CarCard from '../../components/CarCard';
import CarSearch from '../../components/SearchCar';

const Catalog = () => {
  return (
    <div className="card-container">
       <CarSearch />
      <div className="row">
        <div className="col-sm-6 col-lg-4">
          <CarCard />
        </div>
        <div className="col-sm-6 col-lg-4">
          <CarCard />
        </div>
        <div className="col-sm-6 col-lg-4">
          <CarCard />
        </div>
        <div className="col-sm-6 col-lg-4">
          <CarCard />
        </div>
        <div className="col-sm-6 col-lg-4">
          <CarCard />
        </div>
      </div>
    </div>
  );
};
export default Catalog;
