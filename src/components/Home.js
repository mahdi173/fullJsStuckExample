import React, { Component } from 'react'; 

class Home extends Component {

    render() {

        return (
           <div>
            <section id="hero" className="hero d-flex align-items-center">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 d-flex flex-column justify-content-center">
                      <h1>We offer modern solutions for growing your business</h1>
                      <h2>We are team of talented designers making websites with Bootstrap</h2>
                      <div>
                        <div className="text-center text-lg-start">
                          <a href="#about" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                            <span>Get Started</span>
                            <i className="bi bi-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 hero-img">
                      <img src="assets/img/hero-img.png" className="img-fluid" alt="" />
                    </div>
                  </div>
                </div>

              </section>
            <main  id="main">
                <section id="about" className="about">

                  <div className="container">
                    <div className="row gx-0">

                      <div className="col-lg-6 d-flex flex-column justify-content-center">
                        <div className="content">
                          <h3>Who We Are</h3>
                          <h2>Expedita voluptas omnis cupiditate totam eveniet nobis sint iste. Dolores est repellat corrupti reprehenderit.</h2>
                          <p>
                            Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt et. Inventore et et dolor consequatur itaque ut voluptate sed et. Magnam nam ipsum tenetur suscipit voluptatum nam et est corrupti.
                          </p>
                          <div className="text-center text-lg-start">
                            <a href="#" className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                              <span>Read More</span>
                              <i className="bi bi-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6 d-flex align-items-center">
                        <img src="assets/img/about.jpg" className="img-fluid" alt=""/>
                      </div>

                    </div>
                  </div>

                </section>
            </main>
            </div>

            )


            

    }

}

export default Home;