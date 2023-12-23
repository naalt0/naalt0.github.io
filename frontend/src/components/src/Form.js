import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Dimensions, StyleSheet, Image } from 'react-native';

const { height } = Dimensions.get('window');

export default function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    console.log('Submitted:', { firstName, lastName });
  };

  return (
    <View style={[styles.container, { height }]}>
      {!submitted ? (
        <>
          <TextInput
            style={styles.input}
            placeholder="Etunimi"
            value={firstName}
            onChangeText={setFirstName}
          />
          <TextInput
            style={styles.input}
            placeholder="Sukunimi"
            value={lastName}
            onChangeText={setLastName}
          />
          <TouchableOpacity onPress={handleSubmit}>
            <Image source={require('../img/tulosta.png')} style={styles.print} />
          </TouchableOpacity>
        </>
      ) : (
        <View>
          <Text style={styles.submittedText}>Jihuu! Sinulla on nyt kalastuslupa!</Text>
          <Text style={styles.submittedText}>
            {firstName} {lastName}
          </Text>
          <View style={styles.imageContainer}>
            <Image source={require('../img/hiihtoliitonsuosittelema.png')} style={styles.image} />
            <Image source={require('../img/raittiitkalamiehet.png')} style={styles.image} />
          </View>
          <Text style={styles.submittedText}>Oikean luvan saat myöhemmin :)</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignContent: 'center'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  print: {
    width: 200,
    height: 52,
    alignSelf: 'center',
  },
  submittedText: {
    fontSize: 20,
    textAlign: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 150,
    height: 150,
  }
});