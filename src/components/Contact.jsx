import React, { Fragment } from 'react';

export const Contact = () => {
  return (
    <Fragment>
      <section id="contact">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col">
              <h2>Contact Me</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form>
                <div className="mb-3">
                  <label for="name" className="form-label">
                    Full Name
                  </label>
                  <input type="text" className="form-control" id="name" aria-describedby="name" />
                </div>
                <div className="mb-3">
                  <label for="email" className="form-label">
                    Email
                  </label>
                  <input type="email" className="form-control" id="email" aria-describedby="email" />
                </div>
                <div className="mb-5">
                  <label for="message" className="form-label">
                    Message
                  </label>
                  <textarea className="form-control" id="message" rows="3"></textarea>
                </div>

                <button type="submit" className="btn btn-dark mb-5">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
