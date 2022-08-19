import React, { useEffect, useState } from 'react'
import Tasks from './Tasks'
import {VStack,StackDivider} from '@chakra-ui/react'

function Tasklist({todos,check,del}) {

    // console.log(todos)
  return (
  <div>
    <VStack 
       divider={<StackDivider />}
       borderColor='gray.100'
       borderWidth='2px'
       p='4'
       borderRadius='lg'
       w='100%'
       maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
       alignItems='stretch'
    >

    {
        todos.map((item)=>(
            // console.log(item.task)
            
            <Tasks del={del} check={check} tasks ={item} />

            // <>
           
            // <h1>{item.task}</h1>
            // <p>{item.isCompleted ? 'done':'none'}</p>
            // </>
        ))
    }

    </VStack>
  </div>
  )
}

export default Tasklist