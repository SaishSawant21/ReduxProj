import {SafeAreaView,
ScrollView,
StatusBar,
StyleSheet,
Text,
useColorScheme,
View,
TouchableOpacity,
Image,
Button,
Dimensions
} from 'react-native';




import DocumentPicker from 'react-native-document-picker'
import {types,DocumentPickerResponse} from 'react-native-document-picker'
import React,{useState,useEffect} from 'react'
import Video from 'react-native-video'
import VideoPlayer from 'react-native-video-controls'

const FileManager = () => {
    
  const [file,setFile] = useState([])
  useEffect(()=>{

  },[])

  const openfile = async() => {
    try{
      const res = await DocumentPicker.pick({
        presentationStyle:'fullScreen',
        allowMultiSelection: true,
        type:[types.images,types.video]
      })
      setFile(res)
      console.log(res)


    }
    catch{

    }
  }
  let player = React.useRef(null)
  return(
    <SafeAreaView>
    <ScrollView>
    <View>
      <Text style={{fontSize:30}}>Doc</Text>
      
      {
        
        file.map((item)=>(
          item?.type == "video/mp4" &&
          <Video  
            source={item}                  // the video file
            paused={false}                  // make it start    
            // any style you want
            repeat={false} 
            style={{ width : Dimensions.get('window').width,
                    height: 300,
                    objectFit : 'contain',
                    backgroundColor: "#000",}} 
            controls={true}                 // make it a loop
        />
                                                                                ||
           <View style={{backgroundColor:'white',marginTop:10}}>
            <Image source={item} style={{ width : Dimensions.get('window').width,
            height: 300,
            objectFit : 'contain',
            backgroundColor: "#000",}} />
            </View>
            
        ))
      }
    </View>

      <Button
      // onPress={onPress}
      title="Open Files"
      color="black"
      onPress={openfile}
      />

      <View>
      </View>  
      </ScrollView>  
  </SafeAreaView>
  )
}

var styles = StyleSheet.create({
  backgroundVideo: {
            width : Dimensions.get('window').width,
            height: 300,
            objectFit : 'contain',
            backgroundColor: "#000",
  },
});

export default FileManager