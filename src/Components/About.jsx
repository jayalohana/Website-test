import React from "react";
import styled from "styled-components";

const Section = styled.div`

`;

const Container = styled.div`
margin-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 2rem;
  font-weight: 700;
  align-text: center;
  letter-spacing: -0.05em;
`;

const Introduction = styled.p`
  font-size: 1.8rem;
  text-align: center;
  line-height: 1.5;
  letter-spacing: 0.05em;
  font-weight: 400;
  @media screen and (max-width: 600px) {
    text-align: left;
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  text-align: center;
`;

const SkillsTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: -0.05em;
`;

const SkillsList = styled.div`
  column-count: 2;
  text-align: left;
  column-gap: 3rem;
  margin-top: 2rem;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const About = () => {
  return (
    <Section>
    <Container id="About" className="container">
      <Title>about me </Title>
        <Introduction>
          hi, i'm Jaya Lohana, a second year computer science student at york
          university. passionate about coding and technology, i'm excited to
          pursue a career in the tech industry. i enjoy experimenting with new
          programming languages and building websites and applications.
        </Introduction>
        <SkillsContainer>
          <SkillsTitle>technical Skills</SkillsTitle>
          <SkillsList>
            <ul>
              <li>React.js</li>
              <li>Three.js</li>
              <li>Node.js</li>
              <li>JavaScript</li>
              <li>Java</li>
              <li>Python</li>
              <li>REST APIs</li>
              <li>GraphQL</li>
              <li>MUI</li>
              <li>SQL</li>
            </ul>
          </SkillsList>
        </SkillsContainer>
    </Container>
    </Section>
  );
};

export default About;
