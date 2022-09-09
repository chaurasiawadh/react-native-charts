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
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5Pro';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';

import colors from '../assets/color';
import {CHART_LIST} from './constants';

export const SideBar = ({navigation}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const renderIcons = item => {
    switch (item.type) {
      case 'FontAwesome5':
        return <Icon name={item.icon} color={colors.primary} size={20} />;
      case 'Entypo':
        return <Entypo name={item.icon} color={colors.primary} size={20} />;
      case 'Octicons':
        return <Octicons name={item.icon} color={colors.primary} size={20} />;
      case 'MaterialCommunityIcons':
        return (
          <MaterialIcon name={item.icon} color={colors.primary} size={20} />
        );
      case 'MaterialIcons':
        return (
          <MaterialIcons name={item.icon} color={colors.primary} size={20} />
        );
      case 'SimpleLineIcons':
        return (
          <SimpleLineIcons name={item.icon} color={colors.primary} size={20} />
        );
      case 'Fontisto':
        return <Fontisto name={item.icon} color={colors.primary} size={20} />;
      case 'AntDesign':
        return <AntDesign name={item.icon} color={colors.primary} size={20} />;
      case 'Ionicons':
        return <Ionicons name={item.icon} color={colors.primary} size={20} />;
      case 'Feather':
        return <Feather name={item.icon} color={colors.primary} size={20} />;
      case 'FontAwesome5Brands':
        return (
          <FontAwesome5Brands
            name={item.icon}
            color={colors.primary}
            size={20}
          />
        );
      default:
        return <Icon name={item.icon} color={colors.primary} size={20} />;
    }
  };

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
          <Text style={styles.reactText}>React Native Charts</Text>
        </TouchableOpacity>

        {CHART_LIST.map(({category, icon, type, chartTypes}, index) => (
          <>
            <TouchableOpacity
              // onPress={() => navigation.navigate(RoutesName.Profile)}
              onPress={() =>
                setActiveIndex(preState => (preState === index ? null : index))
              }
              style={styles.card}>
              <View style={styles.sub}>
                {renderIcons({icon, type})}
                <Text style={styles.txt}>{category}</Text>
              </View>
              {activeIndex === index ? (
                <Icon name="caret-up" color={colors.primary} size={20} />
              ) : (
                <Icon name="caret-down" color={colors.primary} size={20} />
              )}
            </TouchableOpacity>
            {activeIndex === index &&
              chartTypes.map(item => (
                <TouchableOpacity
                  // onPress={() => navigation.navigate(RoutesName.Profile)}
                  onPress={() => navigation.navigate(item.route)}
                  style={styles.subCard}>
                  {renderIcons(item)}
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
  reactText: {
    color: colors.white,
    fontSize: 22,
    textAlign: 'center',
  },
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
