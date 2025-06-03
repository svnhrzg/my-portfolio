import React from 'react'
import {Section, HeroText, Contact, HeroImg} from './styles'
import myImage from '../../assets/me-bw.png'
import linkedin from '../../assets/linkedin_logo.png'

export default function Hero() {
  return (
    <Section>
      <HeroText>
        Hi, I'm Sven.
        <br />
        <br />
        With a diverse creative background in design and pâtisserie, I thrive at the intersection of customer-oriented services and digital product creation.
        <Contact>
          <div>
            <img src={linkedin} alt={linkedin} />
            <a href="https://www.linkedin.com/in/sven-herzog-068b6732a/">LinkedIn</a>
          </div>
          <div>
            <span className="material-symbols-outlined">monitor</span>
            <a href="https://flicker-failing-56b.notion.site/Hey-I-m-Sven-200b8d83087e80e08fe9f0d5f3b55070">UI/UX case study</a>
          </div>
          <div>
            <span className="material-symbols-outlined">mail</span>
            <a href="mailto:hi@svenherzog.com">hi@svenherzog.com</a>
          </div>
        </Contact>
      </HeroText>
      <HeroImg src={myImage} alt={myImage} />
    </Section>
  )
}
