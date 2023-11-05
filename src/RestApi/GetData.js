import axios from 'axios'
import {useState,useEffect} from 'react'
const { View, Text } = require('react-native');

 

/** // Optionally the request above could also be done as
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // always executed
  });  

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
**/

const GetData = () =>{
  const [post,setPost] = useState({})

  const getTodos = async ()=>{
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(function (response) {
      // handle success
        setPost(response.data)
        console.log(response.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  }
 
  // Make a request for a user with a given ID
  
  useEffect(() => {
    
    getTodos()
    
  }, [])
  
  axios.post('https://jsonplaceholder.typicode.com/posts', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

    return(
        <View style={{color:'black'}}>
            <Text>{post.title}</Text>
        </View>
    )
}

export default GetData