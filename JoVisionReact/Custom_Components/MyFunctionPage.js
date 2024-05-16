import {View,Text} from 'react-native'
import { useEffect } from 'react'

export default function MyFunctionPage({name,grade,age}){
    useEffect(()=>{
        console.log("MyFunctionPage loaded")
        return()=>{ console.log("MyFunctionPage unloaded")

        }
    });
        
    
return(
<View>
    <Text>Name:{name}</Text>
    <Text>Grade:{grade}</Text>
    <Text>Age:{age}</Text>
    </View>

)
}