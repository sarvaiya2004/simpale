import images from './images/hero-img.png';
import aboutus from './images/aboutus.png';
import icon from './images/icon.png';
import Service from './images/service.png';
import ic from './images/1.png';
import abc from './images/2.png';
import efg from './images/3.png';
import react from './images/myreact.png';
import contact from './images/conte.png';




function App() {




  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: 'white', position: 'sticky', top: '0' }}>
        <a style={{ color: "#2E3B5E", fontSize: '27px', marginLeft: '68px' }} class="navbar-brand" href="#">COMPANY</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav" style={{ marginLeft: '500px' }}>
            <a style={{ color: "#2E3B5E", fontSize: '16px' }} class="nav-item nav-link active" href="#home">Home <span class="sr-only">(current)</span></a>
            <a style={{ color: "#2E3B5E", fontSize: '16px' }} class="nav-item nav-link" href="#about">about Us</a>
            <a style={{ color: "#2E3B5E", fontSize: '16px' }} class="nav-item nav-link" href="#services">Services</a>
            <a style={{ color: "#2E3B5E", fontSize: '16px' }} class="nav-item nav-link disabled" href="#technology">Technology</a>
            <a style={{ color: "#2E3B5E", fontSize: '16px' }} class="nav-item nav-link" href="#contact">Contact Us</a>
          </div>
        </div>
      </nav>
      <div style={{
        color: "#2E3B5E", marginLeft: '30px', padding: '50px', display: 'flex', alignItems: 'center',
        flexWrap: 'wrap', justifyContent: 'space-around'
      }}>
        <div id='home'>
          <h3>Let's Build<br></br>
            Together And<br></br>
            Grow Ahead <br></br></h3>
          <p style={{ color: "#2E3B5E", fontSize: '15px' }} >
            Our innovative IT soltion and services pave the way for<br></br>
            transformative development, Together,let,s leverage<br></br>
           technology to drive progress,empower communities,and<br></br>
           create a brighter future.
         </p>
         <a style={{ color: "#2E3B5E", display: 'inline-block', background: '#FCC349', padding: '10px , 30px', margin: '30px , 0', borderRadius: '30px', textDecoration: 'none', fontSize: '20px', textAlign: 'center' }} href=''> Get in touch</a>
       </div>
       <div style={{ flexBasis: '50%', minWidth: '300px' }}>
         <img style={{ maxWidth: '100%', padding: '50px , o' }} src={images} />
       </div>
     </div>
     {/* ABOUT PAG */}
     <div id='about'>
        <h3 style={{ textAlign: 'center', color: '#2E3B5E' }}>________ ABOUT Us________</h3>




        <div style={{
          color: "#2E3B5E", marginLeft: '30px', padding: '50px', display: 'flex', alignItems: 'center',
          flexWrap: 'wrap', justifyContent: 'space-around'
        }}>
          <div style={{ flexBasis: '50%', minWidth: '300px' }}>
            <img style={{ maxWidth: '100%', padding: '50px , o' }} src={aboutus} />
          </div>
          <div>

            <p style={{ color: "#2E3B5E", fontSize: '15px' }} >
              We are a passionate group of firends driven<br />by a shared vusion to establish an exceptional IT <br />
              solution company.With unwavering focus and<br />dedication,We strive to turn our expertise to<br />
              deliver comprehensive solutions. Together,We<br />are cimmitted to making a positive difference<br />
              through our innovative approach and client-<br />centered approach. <br /><br />
              <p style={{ textAlign: 'center', marginRight: '10px' }}><h6><img src={icon} />4+ years Exprrience </h6></p>

            </p>
          </div>


        </div>
      </div>
      {/* services */}
      <div id='services'>
        <h3 style={{ textAlign: 'center', color: '#2E3B5E' }}>________ SERVICES________</h3>

        <div style={{
          color: "#2E3B5E", marginLeft: '30px', padding: '50px', display: 'flex', alignItems: 'center',
          flexWrap: 'wrap', justifyContent: 'space-around'
        }}>
          <a href=''>
            <div style={{ color: '#2E3B5E' }}>
              <img style={{ marginRight: '5px' }} src={ic} />
              Web development
            </div>
            <a href=''>
              <div style={{ color: '#2E3B5E', marginTop: '40px' }}>
                <img style={{ marginRight: '5px' }} src={abc} />
                Mobile development
              </div></a>
            <a href=''>
              <div style={{ color: '#2E3B5E', marginTop: '40px', marginLeft: '5px' }}>
                <img style={{ marginRight: '9px' }} src={efg} />
                UI/UX Design
              </div></a>
          </a>
          <div style={{ flexBasis: '50%', minWidth: '300px' }}>
            <img style={{ maxWidth: '100%', padding: '50px , o' }} src={Service} />
          </div>

        </div>
      </div>
      {/*  technology */}
      <div id='technology'>
        <h3 style={{ textAlign: 'center', color: '#2E3B5E' }}>________ TECHNOLOGY________</h3>
        <div style={{
          color: "#2E3B5E", marginLeft: '30px', padding: '50px', display: 'flex', alignItems: 'center',
          flexWrap: 'wrap', justifyContent: 'space-around'
        }}></div>

        <div>
          <img style={{ alignContent: 'center', marginLeft: '280px', marginBottom: '100px' }} src={react} />

        </div>
      </div>

      {/*  contact */}
      <div id='contact'>
        <h3 style={{ textAlign: 'center', color: '#2E3B5E' }}>________ contact________</h3>




        <div style={{
          color: "#2E3B5E", marginLeft: '30px', padding: '50px', display: 'flex', alignItems: 'center',
          flexWrap: 'wrap', justifyContent: 'space-around'
        }}>

          <div style={{ backgroundColor: '#2E3B5E', width: '700px', height: '350px', borderRadius: '15px' }}>
            <p style={{ backgroundColor: '#2E3B5E', color: '#F9B03A', marginTop: '25px', marginLeft: '30px' }}>
              <h3>COMPANY</h3>
              Our innovative IT soltion and service pave the way for transformative<br />
              development. Together, let's leverage technology to drive progress,empower<br />
              communities,and create a brighter future.<br />

              <img src={contact} />
            </p>

          </div>

        </div>
      </div>


    </div>



  );
}

export default App;
