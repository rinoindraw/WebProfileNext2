import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'
import Image from 'next/image';


function Portfolio(){
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
    <Navbar></Navbar>

    <section className="home-section">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title other-title">Portfolio</h1>
            <p className="description">My Work in FrontEnd Web Developer, Graphic Designer, and UX Designer</p>

            <div className="portfolio-wrapper">
                <div className="portfolio-item">
                  <div className="portfolio-inner">
                    <Image src="/work1.PNG" width="1366px" height="652px" alt="" className="portfolio-image" />
                  </div>
                    <h4 className="portfolio-name">Web Profile</h4>
                    <div className="portfolio-category">FrontEnd Developer</div>
                </div>
                  
                <div className="portfolio-item">
                  <div className="portfolio-inner">
                    <Image src="/work2.PNG" width="1366px" height="652px" alt="" className="portfolio-image" />                  
                  </div>
                    <h4 className="portfolio-name">Web Login</h4>
                    <div className="portfolio-category">FrontEnd Developer</div>
                </div>
            </div>  

            <div className="portfolio-wrapper">
                <div className="portfolio-item">
                  <div className="portfolio-inner">
                    <Image src="/work3.PNG" width="1366px" height="652px" alt="" className="portfolio-image" />
                  </div>
                    <h4 className="portfolio-name">Web Profile</h4>
                    <div className="portfolio-category">FrontEnd Developer</div>
                </div>

                <div className="portfolio-item">
                  <div className="portfolio-inner">
                    <Image src="/work4.PNG" width="1366px" height="652px" alt="" className="portfolio-image" />
                  </div>
                    <h4 className="portfolio-name">Web Vclass</h4>
                    <div className="portfolio-category">FrontEnd Developer</div>
                </div>
            </div>

            <div className="portfolio-wrapper">
              <div className="portfolio-item">
                <div className="portfolio-inner">
                    <Image src="/work5.png" width="4500px" height="4500px" alt="" className="portfolio-image" />
                </div>
                    <h4 className="portfolio-name">Logo Designer</h4>
                    <div className="portfolio-category">Graphic Designer</div>
                </div>

              <div className="portfolio-item">
                <div className="portfolio-inner">
                    <Image src="/work6.jpg" width="4584px" height="5417px" alt="" className="portfolio-image" />
                </div>

                    <h4 className="portfolio-name">Creative Poster</h4>
                    <div className="portfolio-category">Graphic Designer</div>
              </div>
            </div>

            <div className="portfolio-wrapper">
              <div className="portfolio-item">
                <div className="portfolio-inner">
                    <Image src="/work7.png" width="360px" height="768px" alt="" className="portfolio-image ux-design" />
                </div>
                    <h4 className="portfolio-name">Mobile App Designer</h4>
                    <div className="portfolio-category">UX Designer</div>
                </div>

                <div className="portfolio-item">
                  <div className="portfolio-inner">
                    <Image src="/work8.png" width="360px" height="768px" alt="" className="portfolio-image ux-design" />
                  </div>
                    <h4 className="portfolio-name">Mobile App Designer</h4>
                    <div className="portfolio-category">UX Designer</div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;