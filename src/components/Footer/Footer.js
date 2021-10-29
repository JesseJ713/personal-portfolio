import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaGoogleDrive } from 'react-icons/fa';

import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:501-691-9272'>501-691-9272</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:jesse.jackson.c@gmail.com'>
            jesse.jackson.c@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>LOREM IPSUM</Slogan>
        </CompanyContainer>
        <SocialContainer>
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
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
