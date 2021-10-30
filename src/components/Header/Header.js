import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaGoogleDrive } from 'react-icons/fa';
import { GiCardJoker } from 'react-icons/gi';

import {
  Container,
  Span,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href='/'>
        <a
          style={{
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            marginBottom: '20px',
          }}
        >
          <GiCardJoker size='3rem' />
          <Span>
            Rev<sup>Dev</sup>
          </Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#technologies'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons
        href='https://github.com/JesseJ713'
        target='_blank'
        rel='noopener noreferrer'
      >
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons
        href='https://www.linkedin.com/in/jesse-jackson-atx/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
      <SocialIcons
        href='https://docs.google.com/document/d/1OAcNqShun2ll-cHmemCxcgJuECvqdQ0V/edit?usp=sharing&ouid=115416440635836363293&rtpof=true&sd=true'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FaGoogleDrive size='3rem' />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
