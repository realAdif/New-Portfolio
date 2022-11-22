import { createMedia } from "@artsy/fresnel";
import React from "react";
import { render } from "react-dom";
import { Container, Menu, Sidebar } from "semantic-ui-react";
import { Link } from 'react-router-dom';

import '../styles/Navbar.css'

const AppMedia = createMedia({
  breakpoints: {
    mobile: 320,
    tablet: 768,
    computer: 992,
    largeScreen: 1200,
    widescreen: 1920
  }
});
const mediaStyles = AppMedia.createMediaStyle();
const { Media, MediaContextProvider } = AppMedia;

const NavBarMobile = (props) => {
  const {
    children,  
    onPusherClick,
    rightItems,
    visible
  } = props;

  return (
    <Sidebar.Pushable>
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        
        vertical
        visible={visible}
      />
      <Sidebar.Pusher
        dimmed={visible}
        onClick={onPusherClick}
        style={{ minHeight: "100vh" }}
      >
        <Menu fixed="top" inverted>          
         <Menu.Menu position="right">
            {rightItems.map((item) => (
              <Menu.Item {...item} />
            ))}
          </Menu.Menu>
        </Menu>
        {children}
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

const NavBarDesktop = (props) => {
  const { rightItems } = props;

  return (
    <Menu fixed="top" inverted>
      <Menu.Menu position="right">
        {rightItems.map((item) => (
          <Menu.Item {...item} />
        ))}
      </Menu.Menu>
    </Menu>
  );
};



class NavBar extends React.Component {
  state = {
    visible: false
  };

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  render() {
    const { rightItems } = this.props;
    const { visible } = this.state;

    return (
      <div>
        <Media at="mobile">
          <NavBarMobile
            
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            rightItems={rightItems}
            visible={visible}
          >
            
          </NavBarMobile>
        </Media>

        <Media greaterThan="mobile">
          <NavBarDesktop  rightItems={rightItems} />
          
        </Media>
      </div>
    );
  }
}


const rightItems = [
  { as: "a", content: "HOME", key: "Home" },
  { as: "a", content: "SKILLS", key: "Skill" },
  { as: "a", content: "PROJECTS", key: "Project" }
];

export default function Navbar(){
    
    return(  
      <>
    <style>{mediaStyles}</style>

    <MediaContextProvider>
      <NavBar  rightItems={rightItems}>
        
      </NavBar>
    </MediaContextProvider>
  </>
    )
}
