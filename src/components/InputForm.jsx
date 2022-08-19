import React, { useState } from 'react'
import {nanoid} from 'nanoid'
import {Input,Button,HStack} from '@chakra-ui/react'

function InputForm({handleAdd}) {

    const [text,setText] = useState('')
    console.log(text)

    const textHandle = (e)=>{
        setText(e.target.value);
    }

    const submitHandle = async (e)=>{
        e.preventDefault();
        if(text!==''){
            const newTask = {
                task:text,
                isCompleted:false,
                id:nanoid()
            }
            console.log(newTask)
            handleAdd(newTask)
            setText('')


        }else{

        }

       

    }

  return (
    <div>
        <form onSubmit={submitHandle}>
                <HStack padding={2} >
            <Input fontSize='xl'  variant='filled' placeholder='add some tasks..' value={text} onChange={textHandle} type="text" />
            <Button _hover={{bg:'green'}} isDisabled={text.length===0?true:false} borderRadius='xl' bgGradient='linear(to-r,red.500,pink.300,blue.500)' color='white' type='submit' >Add</Button>
            </HStack>
            
        </form>
    </div>
  )
}

export default InputForm