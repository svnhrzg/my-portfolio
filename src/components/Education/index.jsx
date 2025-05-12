import React from 'react'
import {Section, Column, Ul, DotOutline, DotWhite } from './styles'

export default function Education() {
  return (
    <Section>
      <Column>
        <div>
          <DotWhite>
            <h3>Recent courses</h3>
          </DotWhite>
          <Ul>
            <DotOutline>
              <li>Certified User Experience Designer</li>
            </DotOutline>
            <Ul>
              <li>— All phases of theoretical user experience design, relevant methodologies and methods</li>
              <li>— Practical application through real-world projects with the support of an experienced mentor</li>
            </Ul>
          </Ul>
          <Ul>
            <DotOutline>
              <li>The Ultimate React Course 2024</li>
            </DotOutline>
            <Ul>
              <li>— React Fundamentals: Components, props, JSX, state, events and forms</li>
              <li>— Intermediate React: Component composition and reusability</li>
            </Ul>
            <DotOutline>
              <li>The Complete JavaScript Course</li>
            </DotOutline>
            <Ul>
              <li>— JavaScript Fundamentals, DOM and events</li>
              <li>— Data structures, modern operators, strings and working with arrays</li>
            </Ul>
          </Ul>
        </div>
        <div>
          <DotWhite>
            <h3>Education</h3>
          </DotWhite>
          <Ul>
            <DotOutline>
              <li>Master Typografie</li>
            </DotOutline>
            <DotOutline>
              <li>BA(Hons) Graphic and Media Design</li>
            </DotOutline>
          </Ul>
        </div>
      </Column>

      <Column>
        <DotWhite>
          <h3>Skills</h3>
        </DotWhite>
        <Ul>
          <DotOutline>
            <li>UI Design <i>— intermediate</i></li>
          </DotOutline>
          <DotOutline>
            <li>UX Design <i>— fundamentals</i></li>
          </DotOutline>
          <DotOutline>
            <li>Figma <i>— intermediate</i></li>
          </DotOutline>
          <DotOutline>
            <li>Photoshop <i>— intermediate</i></li>
          </DotOutline>
          <DotOutline>
            <li>InDesign <i>— intermediate</i></li>
          </DotOutline>
          <DotOutline>
            <li>HTML5, CSS3 <i>— intermediate</i></li>
          </DotOutline>
          <DotOutline>
            <li>JavaScript <i>— intermediate</i></li>
          </DotOutline>
          <DotOutline>
            <li>ReactJS <i>— fundamentals</i></li>
          </DotOutline>
          </Ul>
        <div>
          <Ul>
          <DotWhite>
          <li>
          <a href="https://github.com/svnhrzg/my-portfolio/tree/881d8010b16daf16da45125df2d61ea9f166ff36/src" target='_blank' rel="noreferrer">view code on github</a>
          </li>
          </DotWhite>
          </Ul>

        </div>
      </Column>
    </Section>
  )
 }