import {useEffect,useState} from 'react'

// There will be a bunch of values in localst
const PREFIX_VALUE='WebEditor'
export default function useLocal_storage(key,initialValue) {
    const prefixedKey=PREFIX_VALUE+key

    const  [value, setValue] = useState(()=>{
        const jsonValue=localStorage.getItem(prefixedKey)

        if(jsonValue!=null) return JSON.parse(jsonValue)

        if(initialValue==='function'){
            return initialValue()
        }else{
            return initialValue
        }
    })

    
    useEffect(()=>{
        localStorage.setItem(prefixedKey,JSON.stringify(value))
    },[prefixedKey,value])
    return [value,setValue]
}
