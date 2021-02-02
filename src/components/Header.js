import React from 'react'
import Footer from './Footer'
import avatar from '../assets/images/FotoPerfil.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'

const Header = () => (
  <header id="header">
    <ul className="icons">
      <li>
        <a href="#" className="icon  fa-instagram">
          <span className="label">Instagram</span>
        </a>
      </li>
      <li>
        <a href="#" className="icon fa-github">
          <span className="label">Github</span>
        </a>
      </li>
      <li>
        <a href="#" className="icon fa-envelope-o">
          <span className="label">Email</span>
        </a>
      </li>
    </ul>
    <h1>
      Desenvolvedor Web
      <strong>Breno Lucas</strong>
    </h1>

    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <FontAwesomeIcon icon={faMapPin} className="icon" />
      <p>Fortaleza-Ce</p>
    </div>

    <svg
      className="waves"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#F27059"
        className="wave1"
        fill-opacity="1"
        d="M0,224L48,202.7C96,181,192,139,288,112C384,85,480,75,576,90.7C672,107,768,149,864,170.7C960,192,1056,192,1152,181.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        // d="M0,128L40,117.3C80,107,160,85,240,112C320,139,400,213,480,229.3C560,245,640,203,720,160C800,117,880,75,960,90.7C1040,107,1120,181,1200,213.3C1280,245,1360,235,1400,229.3L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
      ></path>
      <path
        fill="#F4845F"
        className="wave2"
        fill-opacity="1"
        d="M0,192L48,181.3C96,171,192,149,288,133.3C384,117,480,107,576,128C672,149,768,203,864,197.3C960,192,1056,128,1152,112C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
      <path
        fill="#F79D65"
        className="wave3"
        fill-opacity="1"
        d="M0,160L40,149.3C80,139,160,117,240,122.7C320,128,400,160,480,149.3C560,139,640,85,720,64C800,43,880,53,960,69.3C1040,85,1120,107,1200,101.3C1280,96,1360,64,1400,48L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
      ></path>
    </svg>
    <Footer />
  </header>
)

export default Header
