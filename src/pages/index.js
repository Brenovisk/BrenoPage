import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'
import LabelBottomNavigation from '../components/Menu/index.js'

const HomeIndex = () => {
  const siteTitle = 'BrenoLucas'
  const siteDescription = 'Site pessoal de Breno Lucas'

  var Scroll = require('react-scroll')
  var Element = Scroll.Element

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>
      <LabelBottomNavigation />

      <div id="main">
        <Element name="about">
          <section id="one">
            <header className="major">
              <h2>Um pouco sobre mim...</h2>
            </header>
            <p>
              Sou Desenvolvedor Web FrontEnd fascinado por UI/UX design e novas
              tecnologias. Com criatividade e empenho desenvolvo interfaces
              funcionais e minimalistas com foco total na necessidade do
              cliente.
            </p>

            <b>Empresa atual: </b>
          </section>
        </Element>

        <Element name="projects">
          <section id="two">
            <header className="major">
              <h2>Projetos</h2>
            </header>

            <Gallery />

            <ul className="actions">
              <li>
                <a href="#" className="button">
                  Full Portfolio
                </a>
              </li>
            </ul>
          </section>
        </Element>

        <Element name="historic">
          <section id="one">
            <header className="major">
              <h2>Histórico</h2>
            </header>
            <p>
              Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc
              nisi lorem vulputate lorem neque cubilia ac in adipiscing in curae
              lobortis tortor primis integer massa adipiscing id nisi accumsan
              pellentesque commodo blandit enim arcu non at amet id arcu magna.
              Accumsan orci faucibus id eu lorem semper nunc nisi lorem
              vulputate lorem neque cubilia.
            </p>
            <ul className="actions">
              <li>
                <a href="#" className="button">
                  Learn More
                </a>
              </li>
            </ul>
          </section>
        </Element>

        <Element name="contact">
          <section id="three">
            <header className="major">
              <h2>Contato</h2>
            </header>
            <p>
              Accumsan pellentesque commodo blandit enim arcu non at amet id
              arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi
              lorem vulputate lorem neque lorem ipsum dolor.
            </p>
            <div className="row">
              <div className="8u 12u$(small)">
                <form method="post" action="#">
                  <div className="row uniform 50%">
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="12u">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>
                  <ul className="actions" style={{ marginTop: 30 }}>
                    <li>
                      <input type="submit" value="Send Message" />
                    </li>
                  </ul>
                </form>
              </div>
              <div className="4u 12u$(small)">
                <ul className="labeled-icons">
                  <li>
                    <h3 className="icon fa-home">
                      <span className="label">Address</span>
                    </h3>
                    1234 Somewhere Rd.
                    <br />
                    Nashville, TN 00000
                    <br />
                    United States
                  </li>
                  <li>
                    <h3 className="icon fa-mobile">
                      <span className="label">Phone</span>
                    </h3>
                    000-000-0000
                  </li>
                  <li>
                    <h3 className="icon fa-envelope-o">
                      <span className="label">Email</span>
                    </h3>
                    <a href="#">hello@untitled.tld</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </Element>
      </div>
    </Layout>
  )
}

export default HomeIndex
