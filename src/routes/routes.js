import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from './constant';
import {Alert, Linking, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import PlayIcon from 'react-native-vector-icons/Entypo';
import Clipboard from '@react-native-community/clipboard';

import {RoutesName, urlCommon} from './nameConstant';
import colors from '../assets/colors';

export const Routes = () => {
  const Stack = createNativeStackNavigator();
  const [activeName, setActiveName] = useState('');
  let pathObj = {};
  ROUTES.forEach(({name, path}) => {
    pathObj = {
      ...pathObj,
      [name]: path,
    };
  });

  const playStore = () => {
    let link = 'https://play.google.com/store/apps/developer?id=code-helper';
    Linking.canOpenURL(link).then(
      supported => {
        supported && Linking.openURL(link);
      },
      err => console.log(err),
    );
  };

  const headerOption = (navigation, headerTitle, name, path) => {
    return {
      headerTitle,
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: colors.white,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight: () => {
        if (headerTitle === 'React Native') {
          return (
            <TouchableOpacity
              style={{padding: 16, marginRight: -16}}
              onPress={playStore}>
              <PlayIcon name="google-play" size={25} color={colors.white} />
            </TouchableOpacity>
          );
        }

        if (headerTitle === 'Code') {
          const copyToClipboard = () => {
            Clipboard.setString(urlCommon + pathObj[activeName]);
            Alert.alert('URL copied', 'Visit to browser for code');
          };

          return (
            <TouchableOpacity style={{padding: 16}} onPress={copyToClipboard}>
              <MatIcon name="content-copy" size={25} color={colors.white} />
            </TouchableOpacity>
          );
        }
        return (
          <TouchableOpacity
            style={{padding: 16}}
            onPress={() => {
              if (headerTitle !== 'Code') {
                setActiveName(name);
              }
              navigation.navigate(RoutesName.Git, {
                url: `${urlCommon}${path}`,
                title: `${headerTitle} Code`,
              });
            }}>
            <Icon name="code" size={25} color={colors.white} />
          </TouchableOpacity>
        );
      },
    };
  };

  return (
    <Stack.Navigator>
      {ROUTES.map(({name, component, title, path}) => (
        <Stack.Screen
          name={name}
          component={component}
          options={({navigation}) =>
            headerOption(navigation, title, name, path)
          }
        />
      ))}
    </Stack.Navigator>
  );
};
