import {Text,View} from 'react-native'
import styles from '../styles'
const SignIn = () => {
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

export default SignIn