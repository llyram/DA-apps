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

export function DLSignScreen() {
  const [imgWidth, setImgWidth] = useState(0);
  const [imgHeight, setImgHeight] = useState(0);
  const [logoWidth, setLogoWidth] = useState(0);
  const [logoHeight, setLogoHeight] = useState(0);
  const [unsignedDocCount, setUnsignedDocCount] = useState(0);
  const [agencyCount, setAgencyCount] = useState(0);
  const [patientCount, setPatientCount] = useState(0);
  const [isCheckboxSelected, setIsCheckboxSelected] = useState(false);
  const setSelection = () => {};
  const onPressSubmit = () => {};
  const setCheckBoxOnOff = () => {
    setIsCheckboxSelected(!isCheckboxSelected);
  };
  useEffect(() => {
    const screenWidth = Dimensions.get('window').width;
    const {width, height} = Image.resolveAssetSource(
      require('../../assets/images/sign_screen.png'),
    );
    const {lwidth, lheight} = Image.resolveAssetSource(
      require('../../assets/images/logo_full.png'),
    );

    const scaleFactor = width / screenWidth;
    const imageHeight = height / (scaleFactor * 2);
    setImgHeight(imageHeight);
    setImgWidth(screenWidth / 2);

    const lscaleFactor = lwidth / screenWidth;
    const limageHeight = lheight / (lscaleFactor * 2);
    setLogoHeight(30);
    setLogoWidth(screenWidth / 1.5);

    //Test data
    setUnsignedDocCount(34);
    setAgencyCount(10);
    setPatientCount(20);
  }, []);

  return (
    <View style={styles.viewFull}>
      <View style={{marginTop: 60}}></View>
      <View
        style={{
          height: 400,
          width: 500,
          borderRadius: 300,
          backgroundColor: COLORS.white,
          position: 'absolute',
          top: -200,
          left: -50,
          transform: [{scaleY: 1.0}],
        }}
      />

      <View style={styles.container}>
        <Image
          style={{width: logoWidth, height: logoHeight}}
          source={require('../../assets/images/logo_full.png')}
        />
      </View>
      <View style={styles.container}>
        <Image
          style={{width: imgWidth, height: imgHeight}}
          source={require('../../assets/images/sign_screen.png')}
        />
      </View>
      <Text style={styles.commonLabelStyle}>
        {unsignedDocCount} Unsigned Documents
      </Text>
      <Text style={styles.commonLabelStyle}>{agencyCount} Agencies</Text>
      <Text style={styles.commonLabelStyle}>{patientCount} Patients</Text>
      <View style={styles.checkboxContainer}>
        <CheckBox
          offAnimationType="stroke"
          onFillColor={COLORS.app_blue}
          onCheckColor={'white'}
          boxType="square"
          value={isCheckboxSelected}
          onValueChange={setSelection}
        />
        <Text onPress={setCheckBoxOnOff} style={styles.whiteTextStyle}>
          I REVIEWED ALL DOCUMENTS
        </Text>
      </View>
      <TouchableOpacity
        style={styles.SubmitButtonStyle}
        activeOpacity={0.5}
        onPress={onPressSubmit}>
        <Text style={styles.whiteTextStyle}>
          {' '}
          SIGN ALL {unsignedDocCount} DOCUMENTS{' '}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewFull: {
    backgroundColor: COLORS.app_blue_light,
    flex: 1,
  },
  baseText: {
    fontFamily: 'Cochin',
  },
  commonLabelStyle: {
    marginTop: 30,
    fontSize: 20,
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
});
