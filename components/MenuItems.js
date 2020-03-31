import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";

const MenuItems = props => (
  <Container>
    <IconView>
      <Ionicons name={props.icon} size={24} color="#546BFB" />
    </IconView>
    <Content>
      <Title>{props.title}</Title>
      <Subtitle>{props.subtitle}</Subtitle>
    </Content>
  </Container>
);

export default MenuItems;

const Container = styled.View`
  flex-direction: row;
  margin: 15px 0;
`;

const IconView = styled.View`
  width: 32;
  height: 32;
  justify-content: center;
  align-items: center;
`;

const Content = styled.View`
  padding-left: 20;
`;

const Title = styled.Text`
  color: #3c4560;
  font-size: 24;
  font-weight: 600;
`;

const Subtitle = styled.Text`
  color: #3c4560;
  font-weight: 600;
  opacity: 0.6;
  margin-top: 5px;
`;
