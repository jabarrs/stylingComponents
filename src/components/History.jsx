import React, { Fragment } from 'react';

export const History = () => {
  return (
    <Fragment>
      <section id="history">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col">
              <h2>History</h2>
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
            fill="#ffffff"
            fill-opacity="1"
            d="M0,0L30,42.7C60,85,120,171,180,208C240,245,300,235,360,229.3C420,224,480,224,540,229.3C600,235,660,245,720,234.7C780,224,840,192,900,165.3C960,139,1020,117,1080,117.3C1140,117,1200,139,1260,122.7C1320,107,1380,53,1410,26.7L1440,0L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </section>
    </Fragment>
  );
};
