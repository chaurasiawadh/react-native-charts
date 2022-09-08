import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from './constant';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Routes = ({openDrawer}) => {
  const Stack = createNativeStackNavigator();

  const headerOption = (navigation, headerTitle, path) => {
    console.log('navigation>>>>>>>>', navigation);
    return {
      headerTitle,
      headerStyle: {
        // backgroundColor: colors.primary,
      },
      //   headerTintColor: colors.white,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight: () => {
        if (headerTitle === 'React Native') {
          return <></>;
        }

        if (headerTitle === 'Code') {
          const copyToClipboard = url => {
            // Clipboard.setString(url);
            // Alert.alert('URL copied', 'Visit to browser for code');
          };

          return (
            <TouchableOpacity
              style={{padding: 20, paddingRight: 16}}
              onPress={() => copyToClipboard(path.params.url)}>
              <MatIcon name="content-copy" size={25} color="white" />
            </TouchableOpacity>
          );
        }

        return (
          <TouchableOpacity
            style={{padding: 16}}
            // onPress={() =>
            //   navigation.navigate(RoutesName.Git, {
            //     url: `${urlCommon}${path}`,
            //     title: `${headerTitle} Code`,
            //   })
            // }
          >
            <Icon name="code" size={25} color="blue" />
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
          options={({navigation}) => headerOption(navigation, title, path)}
        />
      ))}
    </Stack.Navigator>
  );
};
