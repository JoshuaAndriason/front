<<<<<<< HEAD
import React from 'react';

import { Button, TextInput, View } from 'react-native';

// import { Formik } from 'formik';



export const MenuScreen = props => (

  <View></View>
  // <Formik

  //   initialValues={{ email: '' }}

  //   onSubmit={values => console.log(values)}

  // >

  //   {({ handleChange, handleBlur, handleSubmit, values }) => (

  //     <View>

  //       <TextInput

  //         onChangeText={handleChange('email')}

  //         onBlur={handleBlur('email')}

  //         value={values.email}

  //       />

  //       <Button onPress={handleSubmit} title="Submit" />

  //     </View>

  //   )}

  // </Formik>

);
=======
import React, {useState} from 'react';
import { Button, TextInput, View, Text} from 'react-native';




export default function MenuScreen(props){
  const [checked, setChecked] = useState('');

  return(
  <Formik
    initialValues={{ email: '', heure:":"}}

    onSubmit={values =>  {
      valueModified = {...values,checked}
      console.log(valueModified);
    }}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View>
        <RadioButton
        value='second'
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
        
      />
     
       <RadioButton
        value='first'
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      
      />
      
      <TextInput
      onChangeText={handleChange('email')}
           onBlur={handleBlur('email')}
           value={values.email}>
      </TextInput>
        <Button onPress={handleSubmit} title="Submit" />
    
        <TextInput
              style={{ height: 30, borderColor: '#AADEC0', borderWidth: 1, width: 80, textAlign:'center'}}
              onChangeText={handleChange("heure")}
              placeholder={"ex: 9:30"}
              value={values.heure}
              keyboardType={'numeric'}
            
            />
            <Text>Heure</Text>

    </View>
    )}

     
   
  </Formik>

  
)};
>>>>>>> 6059f260095b36dad1d315cd46bd73aad0698b07
