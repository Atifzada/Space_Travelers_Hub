import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Badge from 'react-bootstrap/Badge';
import RocketsData from '../redux/rockets/api';
import rocketCss from '../styles/Rocket.css';
import { RocketReservation } from '../redux/rockets/rocketSlice';

const RocketsList = () => {
  const { rockets, status, error } = useSelector((state) => state.rockets);
  const Dispatch = useDispatch();
  useEffect(() => {
    if (!rockets.length) Dispatch(RocketsData());
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
                    { rocket.booked ? <Badge bg="info">Reserved</Badge> : '' }
                    {rocket.description}
                  </p>
                  <button className={`${rocket.booked ? rocketCss.booked : rocketCss.unBooked}`} onClick={() => Dispatch(RocketReservation(rocket.id))} type="button">{rocket.booked ? 'Cancel Reservation' : 'Reserve Rocket'}</button>
                </div>
              </section>
            ))
        }
    </div>
  );
};
export default RocketsList;
