import React, {useRef} from 'react';
import {StyleSheet} from 'react-native';
import Drawer from 'react-native-drawer';

import ControlPanel from './ControlPanel';
import {Routes} from './routes';

export const DrawerRoute = () => {
  const _drawer = useRef();

  const closeDrawer = () => {
    _drawer.current.close();
  };

  const openDrawer = () => {
    _drawer.current.open();
  };

  return (
    <Drawer
      ref={ref => (_drawer.current = ref)}
      type="overlay"
      content={<ControlPanel closeDrawer={closeDrawer} />}
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
      {/* <Main openDrawer={openDrawer} /> */}
      <Routes />
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
