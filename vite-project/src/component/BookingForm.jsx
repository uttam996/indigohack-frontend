import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
    Paper,Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
  } from "@mui/material";
  
  import moment from "moment";
  import axios from "axios"
import { baseUrl } from "../bashUrl";

export default function BookingForm() {
  const state = [
    "Delhi",
    "Mumbai",
    "Kolkata",
    "Chennai",
    "Bangalore",
    "Hyderabad",
    "Ahmedabad",
  ];

  const [StartLocation, setStartLoaction] = useState(null);
  const [destination, setdestination] = useState(null);
  const [list,setlist] =useState(false)

  const handleSearch = () => {
    setlist(true)
  };

  return (
    <>
    <Box
      sx={{
        width: "80vw",
        margin: "auto",
        
        mt: "30px",
      }}
    >

        <Typography variant="h6" >Wlecome to Indigo , Search Flight </Typography>
      <Stack direction="row" spacing={2} align="center">
        <FormControl variant="filled" sx={{ minWidth: 200 }}>
          <InputLabel id="demo-simple-select-filled-label">
            StartLocation
          </InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={StartLocation}
            onChange={(e) => {
              setStartLoaction(e.target.value);
            }}
          >
            {state.map((item) => (
              <MenuItem value={item}>{item}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl variant="filled" sx={{ minWidth: 200 }}>
          <InputLabel id="demo-simple-select-filled-label">
            Destination
          </InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={destination}
            onChange={(e) => {
              setdestination(e.target.value);
            }}
          >
            {state.map((item) => (
              <MenuItem value={item}>{item}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button
          variant="contained"
          onClick={() => {
            handleSearch()
          }}
        >
          Search Flight
        </Button>
      </Stack>
    </Box>


   
    {
        list && 
        <Box sx={{
            width:"80vw",
            margin:'auto'
        }}>
            <ListFlight />
    
            
    
        </Box>
    }
    </>
  );
}

 function ListFlight() {
    const GenrateDummyArray = () => {
      let arr = [];
      for (let i = 0; i < 6; i++) {
        let obj = {
          flighNo: "INDIGO" + 234 + i,
          Date: moment().format(),
          seats: Math.random() * 20,
        };
        arr.push(obj);
      }
  
      return arr;
    };


    const handleBook  =async(el)=>{
        try {

            let data ={
                name:"Uttam Singh",
                to:"Delhi",
                destination:"Mumbai",
                travelDate:moment().valueOf(),
                amt:"6653"
            }
            const ticket =await axios.post(baseUrl+'/mybooking/create', data)
            alert("Booked Succes")
            
        } catch (error) {
            alert("Sommething went wrong")
            
        }

    }
  
    return (
      <Box
        sx={{
          width: "100%"
        }}
        component={Paper}
      >
        <TableContainer>
          <Table>
            <TableHead>
              {["Flight No", "Date", "Seats", "Book"].map((el) => (
                <TableCell>{el}</TableCell>
              ))}
            </TableHead>
            <TableBody>
              {GenrateDummyArray().map((el) => (
                <TableRow>
                  <TableCell>{el?.flighNo}</TableCell>
                  <TableCell>{el?.Date}</TableCell>
  
                  <TableCell>{
                    Math.floor(el?.seats)
                    
                    } </TableCell>
  
                  <TableCell>
                    <Button variant="outlined" 
                     onClick={()=>{
                        handleBook(el)
                     }}
                    >Book</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
  }
  
