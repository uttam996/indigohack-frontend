

import { Box, Paper, Table, TableContainer,TableHead,TableBody,TableCell, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../bashUrl'
import moment from 'moment'


 function MyBooking() {

    const [mybooking,setmybooking] =useState([])

 useEffect(()=>{
    const fetchData = async()=>{
        try {
            const data =await axios.get(baseUrl+"/mybooking" )
            setmybooking(data?.data)
            
            
        } catch (error) {
            console.log(error)
            
        }

        

    }

    fetchData()

 },[])

  return (
    <Box
    sx={{
      width: "80vw",
      margin:"auto",
      mt:'30px'
    }}
    component={Paper}
  >
    <TableContainer>
      <Table>
        <TableHead>
          {["Departure","Destination","Price","Flight No", "Flight Date", "Booking Time", "Status"].map((el) => (
            <TableCell>{el}</TableCell>
          ))}
        </TableHead>
        <TableBody>
            {
                mybooking.map((el)=>(
                    <TableRow>
                        <TableCell>{el?.to}</TableCell>
                        <TableCell>{el?.destination}</TableCell>
                        <TableCell>{el?.amt}</TableCell>
                        <TableCell>{el?.flightno}</TableCell>
                        <TableCell>{
                            moment(el?.travelDate).format("DD-MM-YYYY hh:mm")
                            }</TableCell>
                        <TableCell>{moment(el?.createdAt).format("DD-MM-YYYY")}</TableCell>
                        <TableCell>
                            Confirmed
                        </TableCell>
                    </TableRow>
                ))
            }
         
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
  )
}


// "_id": "64857c283ec14840426ca0b8",
// "name": "Uttam Singh",
// "to": "Delhi",
// "destination": "Mumbai",
// "travelDate": 1686469672628,
// "amt": 6653,
// "createdAt": "2023-06-11T07:47:52.685Z",
// "updatedAt": "2023-06-11T07:47:52.685Z",
// "__v": 0

export default MyBooking
