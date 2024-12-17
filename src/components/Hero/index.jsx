import React from 'react'
import {Section, HeroText, Contact, HeroImg} from './styles'
import myImage from '../../assets/me3.jpg'

export default function Hero() {
  return (
    <Section>
      <HeroText>
        Hey, I'm Sven,
        <br />
        Graphic designer and pâtissier on the lookout for exciting new web development and design projects.
        <Contact>
          <div>
            <span className="material-symbols-outlined">mail</span>
            <a href="mailto:hey@svenherzog.com">hey@svenherzog.com</a>
          </div>
          <div>
            <span className="material-symbols-outlined">location_on</span>
            Weil/Rhein
          </div>
        </Contact>
      </HeroText>
      <HeroImg src={myImage} alt={myImage} />
    </Section>
  )
}
