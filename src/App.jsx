import './App.css'
import Modal from './components/Modal/Modal'
import logo from './assets/logo.svg'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import ctaImg from './assets/Modal.png'
import heroImg from './assets/hero-img.png'

function App() {

  return (
    <>

    <Header/>

    <section className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="hero-content">
              <div className="hero-text">
                <h1>
                  Zeker weten <br />
                  dat je afscheid <br />
                  goed geregeld is
                </h1>
                <p>
                  Met de Fune app creëer je overzicht van alles dat belangrijk
                  voor <br /> je uitvaart. Creëer rust voor je nabestaande en rust
                  in je hoofd <br /> omdat je met Fune alles netjes achterlaat
                  wanneer het zover is.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src={heroImg}
              width="100%"
              className="hero-img"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>

    <section className="modal-section">
      <div className="container">
        <Modal/>
      </div>
    </section>

    <section className="cta">
      <div className="container d-flex flex-column gap-5 align-items-center">
        <img src={ctaImg} width="110px" alt="" />
        <img src={logo} width="170px" alt="" />
        <div>
          <button className="btn-1 d-inline">Binnenkort verkrijgbaar</button>
        </div>
      </div>
    </section>

    <Footer/>
    
    <div className="purple-cover-circle" />
    <div className="blue-cover-circle" />
    </>
  )
}

export default App
