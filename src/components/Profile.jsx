import React, { Fragment } from 'react';
import gambar from '../assets/img/jabar.jpg';

export const Profile = () => {
  return (
    <Fragment>
      <section className="jumbotron text-center">
        <img src={gambar} alt="Jabaruddin Syukri" width="200" className="rounded-circle img-tumbnail" />
        <h1 className="display-4">Jabaruddin Syukri</h1>
        <p className="lead">Pelatihan Eduwork | My Biografi</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,96L30,128C60,160,120,224,180,245.3C240,267,300,245,360,229.3C420,213,480,203,540,165.3C600,128,660,64,720,42.7C780,21,840,43,900,58.7C960,75,1020,85,1080,117.3C1140,149,1200,203,1260,218.7C1320,235,1380,213,1410,202.7L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </section>
    </Fragment>
  );
};
