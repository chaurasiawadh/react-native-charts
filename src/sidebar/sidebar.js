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

import colors from '../assets/colors';
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
    let link = 'https://play.google.com/store/apps/developer?id=code-helper';
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
        <TouchableOpacity
          onPress={playStore}
          style={styles.top}
          activeOpacity={0.7}>
          <Text style={styles.reactText}>React Native Charts</Text>
        </TouchableOpacity>

        {CHART_LIST.map(({category, icon, type, chartTypes}, index) => (
          <View key={category}>
            <TouchableOpacity
              onPress={() =>
                setActiveIndex(preState => (preState === index ? null : index))
              }
              activeOpacity={0.7}
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
                  key={item.name}
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate(item.route)}
                  style={styles.subCard}>
                  {renderIcons(item)}
                  <Text style={styles.txt}>{item.name}</Text>
                </TouchableOpacity>
              ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  top: {
    padding: 50,
    borderRadius: 2,
    backgroundColor: colors.primary,
  },
  scroll: {
    backgroundColor: 'red',
    flex: 1,
  },
  reactText: {
    color: colors.white,
    fontSize: 22,
    textAlign: 'center',
  },
  card: {
    padding: 10,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.lightPrimary,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
  },
  subCard: {
    padding: 10,
    paddingLeft: 28,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.lightPrimary,
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
