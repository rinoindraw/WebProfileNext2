import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'
import Image from 'next/image'


function Home(){
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Navbar />

      <section className="home-section">
        <div className="container">
          <div className="text-wrapper home-content">
            <h4 className="co-title">FrontEnd Developer</h4>
            <h1 className="title">Rino Indra Wicaksono</h1>
            <p className="description">Undergraduate Computer Science Student At University of Gunadarma</p>

            <Link href="/contact"><a className="cta">Contact Me</a></Link>
          </div>
          <div className="image-wrapper">
            <div className="image-inner">
              <Image src="/PasFoto.jpeg" width="1066px" height="1600px" alt="" className='img-profile'/>              
            </div>
          </div>
        </div>
      </section>

      <section className="home-section about-wrapper">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title other-title">About</h1>
            <p className="description about-description">I am a college student who wants to gain experience and really
            interested in Web Developer, especially Front End Developer.I am a person who likes to look for opportunities and can work in a team.</p>  
          </div>
        </div>
      </section>

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

      <section className="home-section contact-wrapper">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title other-title contact-title">Contact</h1>
            <p className="description">Thanks for review my work</p>
            <ul className="contact-link">
              <Link href="/contact"><li className="contact-item"><a className="cta email">Email: rinoindra75@gmail.com</a></li></Link>  
              <Link href="/contact"><li className="contact-item"><a className="cta whatsapp">WhatsApp: 087818917880</a></li></Link>  
              <Link href="/contact"><li className="contact-item"><a className="cta linkedin">Linkedin: rinoindraw</a></li></Link>  
            </ul>  
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;