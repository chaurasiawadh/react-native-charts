import React, {useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Drawer from 'react-native-drawer';
import {Home} from './home';
import {Profile} from './profile';

import {Routes} from './routes';
import {SideBar} from './sidebar';

export const DrawerRoute = ({navigation}) => {
  const _drawer = useRef();

  const closeDrawer = () => {
    _drawer.current.close();
  };

  const openDrawer = () => {
    _drawer.current.open();
  };

  // const getData = {}

  return (
    <Drawer
      ref={ref => (_drawer.current = ref)}
      type="overlay"
      content={<SideBar closeDrawer={closeDrawer} navigation={navigation} />}
      acceptTap
      styles={styles.main}
      captureGestures={true}
      tweenDuration={300}
      panThreshold={0.08}
      disabled={false}
      openDrawerOffset={0.35}
      closedDrawerOffset={0}
      panOpenMask={0.2}
      negotiatePan>
      <Home />
    </Drawer>
  );
};

const styles = StyleSheet.create({
  main: {
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 15,
  },
});
