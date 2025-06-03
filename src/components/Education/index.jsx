import React from 'react'
import {Section, Column, Ul, DotOutline, DotWhite } from './styles'
import booksImage from '../../assets/books.jpg'

export default function Education() {
  return (
    <Section>
      <Column>
        <div>
          <DotWhite>
            <h3>Design Work Experience</h3>
          </DotWhite>
          <Ul>
            <DotOutline>
             <li>Certification: User Experience Designer</li>
            </DotOutline>
            <DotOutline>
             <li>7+years print design work experience at design agencies in London and Arnhem</li>
            </DotOutline>
            <DotOutline>
             <li>Freelance Graphic Designer for various companies</li>
            </DotOutline>
            <br /> 
             <li><img src={booksImage} alt={booksImage}/></li>
          </Ul>
        </div>
      </Column>

      <Column>
        <DotWhite>
          <h3>Education</h3>
        </DotWhite>
        <Ul>
          <DotOutline>
            <li>MA Graphic Design/Typography</li>
          </DotOutline>
          <DotOutline>
            <li>BA Graphic and Media Design</li>
          </DotOutline>

          </Ul>
        <div>
          <Ul>
          <DotWhite>
          <li>
          <a href="https://github.com/svnhrzg/my-portfolio/tree/881d8010b16daf16da45125df2d61ea9f166ff36/src" target='_blank' rel="noreferrer">View code on github</a>
          </li>
          </DotWhite>
          </Ul>

        </div>
      </Column>
    </Section>
  )
 }