import React from 'react'
import {Section, HeroText, Contact, HeroImg} from './styles'
import myImage from '../../assets/me-bw.png'
import linkedin from '../../assets/linkedin.svg'
import email from '../../assets/email.svg'
import pen from '../../assets/ink_pen.svg'

export default function Hero() {
  return (
    <Section>
      <HeroText>
        Hi, I'm Sven.
        <br />
        <br />
        With visual design expertise and customer-centered insights, I help create digital experiences that users enjoy while achieving business results.

        <Contact>
          <div>
            <img src={linkedin} alt={linkedin} />
            <a href="https://www.linkedin.com/in/sven-herzog-068b6732a/">LinkedIn</a>
          </div>
          <div>
            <img src={pen} alt={pen} />
            <a href="https://flicker-failing-56b.notion.site/Hey-I-m-Sven-200b8d83087e80e08fe9f0d5f3b55070">UX/UI case study</a>
          </div>
          <div>
            {/* <span className="material-symbols-outlined">mail</span> */}
            <img src={email} alt={email} />
            <a href="mailto:hi@svenherzog.com">hi@svenherzog.com</a>
          </div>
        </Contact>
      </HeroText>
      <HeroImg src={myImage} alt={myImage} />
    </Section>
  )
}
