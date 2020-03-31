import React from "react";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Easing,
  StatusBar
} from "react-native";
import styled from "styled-components";
import Card from "../components/Card";
import { NotificationIcon } from "../components/Icons";
import Logo from "../components/Logo";
import Course from "../components/Course";
import Menu from "../components/Menu";
import { connect } from "react-redux";
import Avatar from "../components/Avatar";

function mapStateToProps(state) {
  return { action: state.action, name: state.name };
}

function mapDispatchToProps(dispatch) {
  return {
    openMenu: () =>
      dispatch({
        type: "OPEN_MENU"
      })
  };
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    scale: new Animated.Value(1),
    opacity: new Animated.Value(1)
  };

  componentDidUpdate() {
    this.toggleMenu();
  }

  toggleMenu = () => {
    if (this.props.action == "openMenu") {
      Animated.timing(this.state.scale, {
        toValue: 0.9,
        duration: 300,
        easing: Easing.in()
      }).start();
      Animated.spring(this.state.opacity, {
        toValue: 0.5
      }).start();

      StatusBar.setBarStyle("light-content", true);
    }

    if (this.props.action == "closeMenu") {
      Animated.timing(this.state.scale, {
        toValue: 1,
        duration: 300,
        easing: Easing.in()
      }).start();
      Animated.spring(this.state.opacity, {
        toValue: 1
      }).start();

      StatusBar.setBarStyle("dark-content", true);
    }
  };

  render() {
    return (
      <RootView>
        <Menu />
        <AnimatedContainer
          style={{
            transform: [{ scale: this.state.scale }],
            opacity: this.state.opacity
          }}
        >
          <SafeAreaView>
            <ScrollView style={{ height: "100%" }}>
              <TitleBar>
                <TouchableOpacity
                  onPress={this.props.openMenu}
                  style={{ position: "absolute", top: 0, left: 8 }}
                >
                  <Avatar />
                </TouchableOpacity>
              <Title>Welcome back,</Title>
                <Name>{this.props.name}</Name>
                <NotificationIcon
                  style={{ position: "absolute", right: 20, top: 5 }}
                />
              </TitleBar>
              <ScrollView
                style={{
                  flexDirection: "row",
                  padding: 20,
                  paddingLeft: 12,
                  paddingTop: 20
                }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {logos.map((logo, index) => (
                  <Logo key={index} image={logo.image} text={logo.text} />
                ))}
              </ScrollView>
              <Subtitle>Continue Learning</Subtitle>
              <ScrollView
                horizontal={true}
                style={{ paddingBottom: 20 }}
                showsHorizontalScrollIndicator={false}
              >
                {cards.map((card, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      this.props.navigation.push("Section", {
                        section: card
                      });
                    }}
                  >
                    <Card
                      title={card.title}
                      image={card.image}
                      caption={card.caption}
                      logo={card.logo}
                      subtitle={card.subtitle}
                    />
                  </TouchableOpacity>
                ))}
              </ScrollView>

              <Subtitle>Popular Courses</Subtitle>
              <ScrollView
                vertical={true}
                style={{ paddingBottom: 20 }}
                showsHorizontalScrollIndicator={false}
              >
                {courses.map((course, index) => (
                  <Course
                    key={index}
                    background={course.background}
                    logo={course.logo}
                    section={course.section}
                    title={course.title}
                    image={course.image}
                    subtitle={course.subtitle}
                    instructor={course.instructor}
                  />
                ))}
              </ScrollView>
            </ScrollView>
          </SafeAreaView>
        </AnimatedContainer>
      </RootView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const RootView = styled.View`
  background: black;
  flex: 1;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
  border-radius: 10px;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const logos = [
  {
    image: require("../assets/logo-figma.png"),
    text: "Figma"
  },
  {
    image: require("../assets/logo-framerx.png"),
    text: "Framer X"
  },
  {
    image: require("../assets/logo-invision.png"),
    text: "Invision"
  },
  {
    image: require("../assets/logo-react.png"),
    text: "React"
  },
  {
    image: require("../assets/logo-sketch.png"),
    text: "Sketch"
  },
  {
    image: require("../assets/logo-studio.png"),
    text: "Studio"
  },
  {
    image: require("../assets/logo-swift.png"),
    text: "Swift"
  },
  {
    image: require("../assets/logo-vue.png"),
    text: "Vue"
  },
  {
    image: require("../assets/logo-xcode.png"),
    text: "Xcode"
  },
  {
    image: require("../assets/logo-xd.png"),
    text: "XD"
  }
];

const cards = [
  {
    title: "React",
    image: require("../assets/background2.jpg"),
    caption: "React Native",
    logo: require("../assets/logo-react.png"),
    subtitle: "1 out of 3"
  },
  {
    title: "Invision",
    image: require("../assets/background3.jpg"),
    caption: "Invision Studio",
    logo: require("../assets/logo-invision.png"),
    subtitle: "2 out of 3"
  },
  {
    title: "Swift Programming",
    image: require("../assets/background1.jpg"),
    caption: "Swift",
    logo: require("../assets/logo-swift.png"),
    subtitle: "3 out of 3"
  }
];

const courses = [
  {
    background: require("../assets/background11.jpg"),
    logo: require("../assets/logo-studio.png"),
    section: "10 Selections",
    title: "Prototype in InVision Studio",
    image: require("../assets/avatar.jpg"),
    subtitle: "Learn to design and code a InVision Site",
    instructor: "Taught by Meng"
  },
  {
    background: require("../assets/background12.jpg"),
    logo: require("../assets/logo-react.png"),
    section: "12 Selections",
    title: "React for designers",
    image: require("../assets/avatar.jpg"),
    subtitle: "Learn to design and code a React Site",
    instructor: "Taught by Meng"
  }
];
