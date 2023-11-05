import {View,Text,TextInput, Button, StyleSheet} from 'react-native'
import styles from './styles'

const SignUp = () => {
    return(
        <View>
            <Text >Sign Up</Text>
            <View >
                <TextInput placeholder='Your Email' style={styles.inputbox} />
                <TextInput placeholder='Your Password' style={styles.inputbox}/>
                <Button></Button>
            </View>
        </View>
    )
}

export default SignUp