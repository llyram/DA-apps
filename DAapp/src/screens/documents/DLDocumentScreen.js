import CheckBox from 'expo-checkbox';
import {useEffect, useState} from 'react';
import {
  Button,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {COLORS} from '../../assets/style/colors';
export function DLDocumentScreen() {
  const [images, setimages] = useState([
    'https://via.placeholder.com/400X600.png/ffaa00',
    'https://via.placeholder.com/400X600.png/00ffaa',
    'https://via.placeholder.com/400X600.png/ff00aa',
    'https://via.placeholder.com/400X600.png/aacf44',
  ]);
  const onPressSubmit = () => {};
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={{flex: 0.5, backgroundColor: COLORS.app_blue_light}}></View>
      <View style={{flex: 3, backgroundColor: COLORS.app_blue_light}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              flex: 4,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <CheckBox
              offAnimationType="stroke"
              onFillColor={COLORS.app_blue}
              onCheckColor={'white'}
              boxType="square"
            />

            <Text style={[{color: COLORS.white, marginLeft: 6}]}>
              I REVIEWED ALL DOCUMENTS
            </Text>
          </View>
          <View
            style={{
              flex: 5,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                style={styles.SubmitButtonStyle}
                activeOpacity={0.5}
                onPress={onPressSubmit}>
                <Text style={[styles.whiteTextStyle]}>
                  {' '}
                  SIGN ALL DOCUMENTS{' '}
                </Text>
              </TouchableOpacity>
              <Text
                style={[
                  styles.whiteTextStyle,
                  {
                    marginTop: 3,
                  },
                ]}>
                {' '}
                SIGN 32, REJECT 0{' '}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{flex: 16, backgroundColor: COLORS.white}}>
        <FlatList
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          data={images}
          renderItem={({item, index}) => (
            <View style={{flex:1}}>
              
            <Image
              source={{uri: item}}
              url={item} /* Use item to set the image source */
              key={index} /* Important to set a key for list items,
                       but it's wrong to use indexes as keys, see below */
              style={{
                flex: 1,
                width: 420,
                height: 600,
                margin: 0,
              }}
            />
            </View>
          )}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  SubmitButtonStyle: {
    color: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: COLORS.teal_700,
    borderRadius: 14,
    borderWidth: 0.5,
    borderColor: '#fff',
    padding: 10,
  },
  whiteTextStyle: {
    fontSize: 14,
    color: COLORS.white,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
