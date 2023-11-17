import { StyleSheet, Text, View, ScrollView,TextInput, Button } from 'react-native';

const FormData = () => {
    const [name,setName] = useState('') 
    const [email,setEmail] = useState('')
    const [mobile,setMobile] = useState('')
    const [work,setWork] = useState('')
  
    const [toggle,setToggle] =useState(false)
  
    const handleSubmit = ()=>{
        setToggle(true)
    }
    return(
        <ScrollView>
        <View style={styles.body}>
  
          <View style={styles.heading}>
            <Text style={styles.headWord}>Saish Sawants</Text>
          </View>
        
          <Text style={styles.headline}> Get in touch with me</Text>
          
        <View style={styles.form}>
          <Text style={styles.label} >Name</Text>
          <TextInput  style={styles.input} placeholder='Enter Name' placeholderTextColor='#C0C0C0' onChangeText={(name)=>setName(name)}/>
  
          <Text style={styles.label} >Email</Text>
          <TextInput style={styles.input} placeholder='Enter Email' placeholderTextColor='#C0C0C0' onChangeText={(email)=>setEmail(email)}/>
  
          <Text style={styles.label} >Mobile</Text>
          <TextInput style={styles.input} placeholder='Enter Mobile' placeholderTextColor='#C0C0C0' onChangeText={(mobile)=>setMobile(mobile)}/>
  
          <Text style={styles.label} >College/Work Place</Text>
          <TextInput style={styles.input} placeholder='Enter ' placeholderTextColor='#C0C0C0'
          
          onChangeText={(work)=>setWork(work)}/>
  
          <Button title='Submit' onPress={handleSubmit} style={styles.button}/>
        </View>
      
      {toggle ? <View style={styles.c}>
      <Text>{name}</Text>
        <Text>{email}</Text>
        <Text>{mobile} </Text>
        <Text>{work}</Text>
      </View>
      : null
      }
    <Text></Text>
      </View>
      </ScrollView>
    )
}
export default FormData

const styles = StyleSheet.create({
    heading: {
      backgroundColor: 'black',
      color:'white'
    },
    headWord:{
        color:'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
  
    },body:{
      marginTop: 0
    },
    headline:{
      backgroundColor: 'blue',
      color:'white',
      textAlign: 'center',
      fontWeight: '800'
    },form:{
      marginLeft: 30,
      marginTop: 40,
      borderWidth: 2,
      borderColor: 'gray',
      marginRight: 30
    },label:{
      marginTop:5,
      marginLeft:5
    },input:{
      marginTop:3,
      marginLeft:5,
      borderWidth: 2,
      borderColor: 'gray',
      marginBottom:5,
      opacity: 7
    },button:{
        borderRadius:25,
        marginLeft: 10,
        marginBottom:10
  
    }
  });
  