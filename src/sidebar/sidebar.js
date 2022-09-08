import React, {useState} from 'react';
import {
  View,
  Text,
  Linking,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../assets/color';
import {RoutesName} from '../routes';
import {CHART_LIST} from './constants';

export const SideBar = ({navigation}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const playStore = () => {
    let link = 'https://play.google.com/store/apps/details?id=com.ravi';
    Linking.canOpenURL(link).then(
      supported => {
        supported && Linking.openURL(link);
      },
      err => console.log(err),
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={playStore} style={styles.top}>
          <Text style={styles.reactText}>React Native</Text>
        </TouchableOpacity>

        {CHART_LIST.map((data, index) => (
          <>
            <TouchableOpacity
              // onPress={() => navigation.navigate(RoutesName.Profile)}
              onPress={() =>
                setActiveIndex(preState => (preState === index ? null : index))
              }
              style={styles.card}>
              <View style={styles.sub}>
                <Icon name="home" color={colors.primary} size={20} />
                <Text style={styles.txt}>{data.category}</Text>
              </View>
              {activeIndex === index ? (
                <Icon name="caret-up" color={colors.primary} size={20} />
              ) : (
                <Icon name="caret-down" color={colors.primary} size={20} />
              )}
            </TouchableOpacity>
            {activeIndex === index &&
              data.types.map(item => (
                <TouchableOpacity
                  // onPress={() => navigation.navigate(RoutesName.Profile)}
                  onPress={() => navigation.navigate(RoutesName.D3Area)}
                  style={styles.subCard}>
                  <Icon name="home" color={colors.primary} size={20} />
                  <Text style={styles.txt}>{item.name}</Text>
                </TouchableOpacity>
              ))}
          </>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {paddingBottom: 30},
  top: {
    padding: 50,
    borderRadius: 2,
    backgroundColor: colors.primary,
  },
  // element: {
  //   padding: 10,
  //   flexDirection: 'row',
  //   borderBottomWidth: 0.5,
  //   backgroundColor: colors.white,
  //   justifyContent: 'space-between',
  // },
  reactText: {color: colors.white, fontSize: 22},
  card: {
    padding: 10,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
  },
  subCard: {
    padding: 10,
    paddingLeft: 28,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    backgroundColor: colors.white,
  },
  sub: {
    flexDirection: 'row',
    backgroundColor: colors.white,
  },
  txt: {
    marginLeft: 10,
  },
});
