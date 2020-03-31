import React from "react";
import styled from "styled-components";

const Course = props => (
  <Container>
    <Cover source={props.background} />
    <Logo source={props.logo} />
    <Section>{props.section}</Section>
    <Title>{props.title}</Title>
    <Wrapper>
      <Image source={props.image} />
      <Subtitle>{props.subtitle}</Subtitle>
      <Instructor>{props.instructor}</Instructor>
    </Wrapper>
  </Container>
);

export default Course;

const Container = styled.View`
  background: white;
  height: 335px;
  width: 375px;
  border-radius: 14px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;
const Cover = styled.Image`
  height: 260px;
  width: 100%;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

const Logo = styled.Image`
  height: 50px;
  width: 48px;
  align-content: center;
  position: absolute;
  top: 30px;
  left: 155px;
`;

const Section = styled.Text`
  color: #b8bece;
  text-transform: uppercase;
  font-size: 15px;
  position: absolute;
  top: 153px;
  left: 22px;
`;

const Title = styled.Text`
  color: white;
  font-size: 25px;
  width: 190px;
  position: absolute;
  top: 181px;
  left: 20px;
  font-weight: bold;
`;

const Wrapper = styled.View`
  height: 75px;
  width: 100%;
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
`;

const Image = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin-left: 20px;
  margin-top: 20px;
`;

const Subtitle = styled.Text`
  color: #3c4560;
  width: 100%;
  position: absolute;
  left: 80px;
  top: 20px;
  font-size: 15px;
`;

const Instructor = styled.Text`
  color: #b8bece;
  position: absolute;
  left: 80px;
  top: 45px;
  font-size: 13px;
`;
