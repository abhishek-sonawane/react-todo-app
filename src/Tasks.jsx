import React from 'react'
import {FaRegTrashAlt} from 'react-icons/fa'
import {HStack,Spacer,Checkbox,Text} from '@chakra-ui/react'

function Tasks({tasks,check,del}) {


  return (
   
      <HStack className='tasks' >
       <Checkbox  colorScheme='red' onChange={()=>{check(tasks.id)}} type="checkbox" name="" id="box"  ></Checkbox>
       <Text overflowWrap='anywhere' fontSize='xl' style={{textDecoration : tasks.isCompleted ?'line-through':'none'}} >{tasks.task}</Text>
       <label htmlFor="box"></label>
       <Spacer />
       <FaRegTrashAlt onClick={()=>del(tasks.id)} color='gray'/>
       </HStack>

  )
}

export default Tasks