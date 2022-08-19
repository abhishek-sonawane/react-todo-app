import React from 'react'
import todos from './TodoData'
import { useState } from 'react'
import Tasklist from './Tasklist'
import InputForm from './components/InputForm'
import {ChakraProvider,VStack,HStack,Heading,Text,Box,Link} from '@chakra-ui/react'




function App() {

  

    const [todolist,setTodolist] = useState(todos)

    const AddFeedback = (newTask)=>{
        setTodolist([newTask,...todolist])
    }

    const handledel =(id)=>{
        setTodolist(todolist.filter((item)=>item.id !==id))
    }

    const handleCheck = async (id)=>{
    const mapped = todolist.map((tasks)=>tasks.id ==id?{...tasks,isCompleted:!tasks.isCompleted}:{...tasks})
    // await updateDoc(doc(db,'todos',todo.id),)

      setTodolist(mapped)
    }

  return (
    <ChakraProvider >
    <div>
       {/* head */}
       <VStack padding={8} >
       <Heading size='xl' mb='10' >add task</Heading>
        <>
         <InputForm handleAdd = {AddFeedback} />
          <HStack>
          <Tasklist del ={handledel} check ={handleCheck} todos = {todolist} />
          </HStack>
        </>
        
        </VStack>
       {/* taskslist that contain each task and ability to check them*/}
       <div className="footer">
       <Box  >
            <Text >
               made with  <Link color='#61dad9' target='_blank' href='https://reactjs.org'  >React  </Link> &  <Link color='#63cacc' target='_blank' href='https://chakra-ui.com' >
              Chakra UI
              </Link>
              <br />
              coded by <Link color='#e62a6c' >abhishek</Link>
            </Text>
          </Box>
       </div>
    </div>
    </ChakraProvider>
  )
}

export default App