import { View, Text , Image} from 'react-native'
import React from 'react'

const index = () => {
  return (
    <View>
      <Text className='text-red-500'>index</Text>

      <Image style={{width: 100, height: 100}} source={require("../../assets/images/icon.png")}></Image>
    </View>
  )
}

export default index