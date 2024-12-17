import React from 'react'
import {Section, Ul, H3} from './styles'

export default function Education() {
  return (
    <Section>
      <div>
        <H3>Kurse</H3>
        <Ul>
          <li>• The Ultimate React Course 2024</li>
            <Ul>
              <li>— React Fundamentals: Components, props, JSX, state, events and forms</li>
              <li>— Intermediate React: Component composition and reusability</li>
            </Ul>
          <li>• The Complete JavaScript Course</li>
           <Ul>
              <li>— JavaScript Fundamentals, DOM and events</li>
              <li>— Data structures, modern operators, strings and working with arrays</li>
            </Ul>
          <li>• Visual Design and Branding</li>
          <Ul>
              <li>— Foundations in responsive web design, user interfaces and branding</li>
            </Ul>
        </Ul>
      </div>
      <div>
        <H3>Ausbildung</H3>
        <Ul>
          <li>• Master Typografie</li>
          <li>• BA(Hons) Graphic and Media Design</li>
        </Ul>
      </div>
    </Section>
  )
}