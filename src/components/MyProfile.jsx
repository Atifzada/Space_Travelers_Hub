import React from 'react';
import '../styles/Profile.css';
import { useSelector } from 'react-redux';
import '../styles/MyProfile.css';

const MyProfile = () => {
  const { rockets } = useSelector((state) => state.rockets);
  return (
    <>
      <section className="reservedRockets">
        <div className="display">
          <h2>My Rockets</h2>
          <ul className="rocketsList">
            {rockets.filter((rocket) => rocket.booked).map((rocket) => (
              <li key={rocket.id}>{rocket.rocket_name}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default MyProfile;
