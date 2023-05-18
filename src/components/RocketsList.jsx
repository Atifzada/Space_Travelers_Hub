import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RocketsData from '../redux/rockets/api';
import '../styles/Rocket.css';

const RocketsList = () => {
  const { rockets, status, error } = useSelector((state) => state.rockets);
  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(RocketsData());
  }, [Dispatch]);
  if (status) {
    return 'Please wait while data is loading ';
  }
  if (error) {
    return 'You have an error while fetching data';
  }
  return (
    <div className="main">
      {
            rockets.map((rocket) => (
              <section className="card" key={rocket.id}>
                <div className="myImg">
                  <img src={rocket.rocket_images} alt="" />
                </div>
                <div className="rocketDetails">
                  <h2 className="name">{rocket.rocket_name}</h2>
                  <p>
                    <span />
                    {rocket.description}
                  </p>
                  <button type="button"> Reserve Rocket </button>
                </div>
              </section>
            ))
        }
    </div>
  );
};
export default RocketsList;