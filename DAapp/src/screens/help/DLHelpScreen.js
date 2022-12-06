import CheckBox from 'expo-checkbox';
import {useEffect, useState} from 'react';
import {
  Button,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS} from '../../assets/style/colors';

export function DLHelpScreen() {
  const onPressSubmit = () => {};
  return (
    <ScrollView style={styles.viewFull}>
      <View style={{height: 30}}></View>

      <Text style={styles.boldLabelStyle}>SUPPORT</Text>

      <View style={{height: 50, marginBottom: 10}}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-evenly',
          }}>
          <View style={{marginTop: 0}}>
            <TouchableOpacity
              style={styles.SubmitButtonStyleSmallBlue}
              activeOpacity={0.5}
              onPress={onPressSubmit}>
              <Text style={styles.whiteTextStyleButton}>CALL </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 0}}>
            <TouchableOpacity
              style={styles.SubmitButtonStyleSmallBlue}
              activeOpacity={0.5}
              onPress={onPressSubmit}>
              <Text style={styles.whiteTextStyleButton}>EMAIL</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: COLORS.black,
          borderBottomWidth: 1,
        }}
      />
      <Text style={styles.boldLabelStyle}>SHARE</Text>
      <View style={{height: 30, marginBottom: 5}}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.normalTextStyle}>
            Invite colleagues to use it for free
          </Text>
          <Image
            style={styles.checkWH}
            source={require('../../assets/images/share.png')}
          />
        </View>
      </View>
      <View
        style={{
          borderBottomColor: COLORS.black,
          borderBottomWidth: 1,
        }}
      />
      <Text style={styles.boldLabelStyle}>DEVICE</Text>

      <View style={styles.tableContainer}>
        <View style={styles.tableRow}>
          <View style={styles.tableColBold}>
            <Text style={styles.textLineItemBold}>ACCOUNT</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.textLineItem}>John Smith</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableColBold}>
            <Text style={styles.textLineItemBold}>LOGIN</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.textLineItem}>doctor@acmehospital.com</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableColBold}>
            <Text style={styles.textLineItemBold}>LAST SYNC</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.textLineItem}>
              22 Nov 17:31, All docs synced
            </Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableColBold}>
            <Text style={styles.textLineItemBold}>APP VERSION</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.textLineItem}>DL 0.42</Text>
          </View>
        </View>
      </View>
      <View style={{height: 50, marginBottom: 5}}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={styles.SubmitButtonStyleGray}
            activeOpacity={0.5}
            onPress={onPressSubmit}>
            <Text style={styles.whiteTextStyleButton}>LOGOUT</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginBottom: 10}}>
        <Text style={styles.grayStyleText}>
          Reset and delete all your personal information
        </Text>
      </View>
      <View
        style={{
          borderBottomColor: COLORS.black,
          borderBottomWidth: 1,
        }}
      />
      <Text style={styles.boldLabelStyle}>ABOUT</Text>
      <View style={{marginBottom: 10}}>
        <Text style={styles.grayStyleText}>
          Doctor Alliance
        </Text>
      </View>
      <View style={{marginBottom: 10}}>
        <Text style={styles.grayStyleText}>
        750 North St.Paul #250
        </Text>
      </View>
      <View style={{marginBottom: 10}}>
        <Text style={styles.grayStyleText}>
        Dallas tx 75201
        </Text>
      </View>
      <View style={{marginBottom: 10}}>
        <Text style={styles.grayStyleText}>
        www.DoctorAlliance.com
        </Text>
      </View>
      <View style={{marginBottom: 10}}>
        <Text style={styles.grayStyleText}>
        800-608-5368
        </Text>
      </View>
      <View style={{marginBottom: 10}}>
        <Text style={styles.grayStyleText}>
        support@doctoralliance.com
        </Text>
      </View>
      
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkWH: {
    width: 24,
    height: 24,
  },
  viewFull: {
    backgroundColor: COLORS.white,
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
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.black,
    textAlign: 'center',
  },
  normalTextStyle: {
    fontSize: 18,
    color: COLORS.black_303030,
    textAlign: 'center',
    marginRight: 10,
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
    fontWeight: 'bold',
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
  grayStyleText: {
    color: COLORS.black_a0a0a0,
    fontSize: 16,
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
  SubmitButtonStyleSmall: {
    color: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 10,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 10,
    paddingRight: 10,
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
    marginTop: 5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: COLORS.app_blue_light,
    borderRadius: 14,
    borderWidth: 0.5,
    borderColor: '#fff',
  },
  SubmitButtonStyleGray: {
    color: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: COLORS.black_a0a0a0,
    borderRadius: 14,
    borderWidth: 0.5,
    borderColor: '#fff',
  },
  tableColumnHeader: {
    alignItems: 'center',
    backgroundColor: '#1FE0A2',
    flex: 5,
    justifyContent: 'center',
  },
  tableColBold: {
    alignItems: 'flex-end',
    fontWeight: 'bold',
    backgroundColor: COLORS.white,
    flex: 2,
    fontSize: 20,
    marginRight: 5,
  },
  tableCol: {
    alignItems: 'flex-start',
    backgroundColor: COLORS.white,
    flex: 3,
    marginLeft: 5,
  },
  tableRow: {
    flex: 5,
    flexDirection: 'row',
    maxHeight: 30,
  },

  tableRowHeader: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: 40,
  },
  tableContainer: {
    minHeight:100,
    maxHeight: 100,
    flex: 1,
    marginTop: 0,
    padding: 0,
    justifyContent: 'flex-start',
  },
  textLineItemBold: {
    textAlign: 'right',
    color: COLORS.black,
    fontWeight: 'bold',
  },
  textLineItem: {
    textAlign: 'left',
    color: COLORS.black,
  },
});
