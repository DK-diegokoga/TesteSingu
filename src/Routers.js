import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import Splash from './Splash';
import Home from './Home';

export const Components = () => {
    return (
      <Router>

        <Stack key="root" hideNavBar>
  
            <Scene key="main" hideNavBar>
              <Scene
                key="splashScene"
                component={Splash}
                initial
              />
              <Scene
                key="homeScene"
                component={Home}
              />
            </Scene>
        </Stack>
      </Router>
    );
  };