import CheckBox from 'expo-checkbox';
import {useEffect, useState} from 'react';
import {
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS} from '../../assets/style/colors';

export function DLRevenueScreen() {
  const onPressSubmit = () => {};
  return (
    <View style={styles.viewFull}>
      <View style={{marginTop: 30}}></View>
      <Text style={styles.boldLabelStyle}>Account : Standard </Text>
      <View style={{marginTop: 20}}>
        <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity={0.5}
          onPress={onPressSubmit}>
          <Text style={styles.whiteTextStyleButton}> FREE UPGRADE TO ENTERPRISE</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 10}}></View>
      <View style={styles.outerViewStyle}>
        <Image
          style={styles.checkWH}
          source={require('../../assets/images/check.png')}
        />
        <Text style={styles.whiteTextStyleLeft}>Increase revenue by 400%</Text>
      </View>

      <View style={styles.outerViewStyle}>
        <Image
          style={styles.checkWH}
          source={require('../../assets/images/check.png')}
        />
        <Text style={styles.whiteTextStyleLeft}>
          We prefill and prepare documents
        </Text>
      </View>
      <View style={styles.outerViewStyle}>
        <Image
          style={styles.checkWH}
          source={require('../../assets/images/check.png')}
        />
        <Text style={styles.whiteTextStyleLeft}>
          We make all patients 100% billable
        </Text>
      </View>
      <View style={styles.outerViewStyle}>
        <Image
          style={styles.checkWH}
          source={require('../../assets/images/check.png')}
        />
        <Text style={styles.whiteTextStyleLeft}>
          Free accounts for your agencies
        </Text>
      </View>
      <View style={styles.outerViewStyle}>
        <Image
          style={styles.checkWH}
          source={require('../../assets/images/check.png')}
        />
        <Text style={styles.whiteTextStyleLeft}>Automatic EHR sync</Text>
      </View>
      <View style={{flexDirection: 'row', flex: 1, justifyContent:'space-evenly'}}>
        <View style={{marginTop: 20}}>
          <TouchableOpacity
            style={styles.SubmitButtonStyleSmall}
            activeOpacity={0.5}
            onPress={onPressSubmit}>
            <Text style={styles.whiteTextStyleButton}>FREE UPGRADE </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 20}}>
          <TouchableOpacity
            style={styles.SubmitButtonStyleSmallBlue}
            activeOpacity={0.5}
            onPress={onPressSubmit}>
            <Text style={styles.whiteTextStyleButton}>WATCH VIDEO</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkWH: {
    width: 20,
    height: 20,
  },
  viewFull: {
    backgroundColor: COLORS.app_blue_light,
    flex: 1,
  },
  baseText: {
    fontFamily: 'Cochin',
  },
  commonLabelStyle: {
    marginTop: 40,
    fontSize: 20,
    color: COLORS.white,
    textAlign: 'center',
  },
  boldLabelStyle: {
    marginTop: 40,
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.white,
    textAlign: 'center',
  },
  whiteTextStyle: {
    marginStart: 5,
    paddingStart: 5,
    fontSize: 20,
    color: COLORS.white,
    textAlign: 'center',
  },
  whiteTextStyleButton: {
    marginStart: 5,
    paddingStart: 5,
    fontSize: 16,
    fontWeight:'bold',
    color: COLORS.white,
    textAlign: 'center',
  },
  outerViewStyle: {
    marginTop: 0,
    marginLeft: 24,
    marginRight: 24,
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  whiteTextStyleLeft: {
    marginStart: 5,
    paddingStart: 5,
    fontSize: 20,
    color: COLORS.white,
    textAlign: 'left',
  },
  checkboxContainer: {
    marginTop: 30,
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkbox: {
    alignSelf: 'center',
  },
  buttonStyle: {
    color: COLORS.white,
    fontSize: 20,
    padding: 20,
    borderRadius: 20,
  },
  SubmitButtonStyle: {
    color: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: COLORS.teal_700,
    borderRadius: 14,
    borderWidth: 0.5,
    borderColor: '#fff',
  },
  SubmitButtonStyleSmall: {
    color: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 10,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft:10,
    paddingRight:10,
    backgroundColor: COLORS.teal_700,
    borderRadius: 14,
    borderWidth: 0.5,
    borderColor: '#fff',
  },
  SubmitButtonStyleSmallBlue: {
    color: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 10,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft:10,
    paddingRight:10,
    backgroundColor: COLORS.app_blue_light,
    borderRadius: 14,
    borderWidth: 0.5,
    borderColor: '#fff',
  },

});
