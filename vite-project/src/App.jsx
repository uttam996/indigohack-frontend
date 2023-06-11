import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BookingForm from './component/BookingForm'

import { Box } from '@mui/material'
import MyBooking from './component/MyBooking'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Box sx={{
      
    }}>

    <BookingForm />
    <MyBooking/>
    
    </Box>
    
    </>
  )
}

export default App



