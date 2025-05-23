import React from 'react';

const Contact = () => {
  return (
    <>
      <section className="contact-wrapper p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="text">Reach Out to Us</h1>
              <p className="text fs-3">We are only a step away from you</p>
            </div>
          </div>
        </div>
      </section>
      <div className="contact-wrapper-details p-5">
        <div className="container-xxl">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="card p-5">
                <h2 className="footer-title mb-3"><b>Contact Us</b></h2>
                <p className="mb-2"><b>Address:</b> Kutaisi, Georgia</p>
                <p className="mb-2"><b>Phone:</b> <a className="footer-tel" href="tel:+995595959959">Call us at +995599955</a></p>
                <p className="mb-4"><b>Hours:</b> From 8 a.m To 6 p.m</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quos iusto rerum architecto a eaque consequuntur impedit! Harum earum iste, suscipit soluta, culpa necessitatibus quia sit nulla doloremque officia cum.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit hic veniam unde numquam in ullam laudantium odit explicabo itaque! Voluptate similique, accusantium consequatur provident soluta quaerat maxime adipisci vero sed.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-message p-5">
        <div className="container-xxl">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 col-sm-12">
              <div className="card p-5">
                <h2 className="text-center mb-4">Leave Us A Message</h2>
                <div className="d-flex align-items-center justify-content-center">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                    </div>
                    <div className="col-md-6">
                      <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                    </div>
                    <div className="col-12">
                      <label htmlFor="exampleFormControlInput1" className="form-label mb-3">Enter Your Email address</label>
                      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" />
                    </div>
                    <div className="col-12">
                      <label htmlFor="exampleFormControlTextarea1" className="form-label">Type in your message</label>
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="col-12 text-center gap-2">
                      <button id="button-link" type="submit">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
