import React, { Fragment } from 'react';

export const Skill = () => {
  return (
    <Fragment>
      <section id="skill">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col">
              <h2>Skill</h2>
            </div>
          </div>
          <div className="row justify-content-center fs-5 text-center mb-5">
            <div className="col-md-5">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda accusantium molestias id corporis doloribus ducimus. Non minima repellat quae asperiores iusto illo culpa dolorum tenetur excepturi, sunt, incidunt laborum
                tempore.
              </p>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#d3d3d3"
            fill-opacity="1"
            d="M0,256L30,224C60,192,120,128,180,117.3C240,107,300,149,360,186.7C420,224,480,256,540,229.3C600,203,660,117,720,90.7C780,64,840,96,900,128C960,160,1020,192,1080,202.7C1140,213,1200,203,1260,181.3C1320,160,1380,128,1410,112L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </section>
    </Fragment>
  );
};
