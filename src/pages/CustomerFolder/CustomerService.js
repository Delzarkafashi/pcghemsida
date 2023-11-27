import "./Customer.css"
import Box from '@mui/material/Box';
import React from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';


export default function CustomerService() {

  
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };



  return (
    <>
      <form>
        <fieldset>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Issue</InputLabel>
            <Select
              className="form-control"
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={age}
              label="Issue"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="other">Other</MenuItem>
              <MenuItem value="refund">Refund</MenuItem>
              <MenuItem value="cancel">Cancel Booking</MenuItem>
              <MenuItem value="return">Return Products</MenuItem>
            </Select>
          </FormControl>

          <div className="form-group">
            <label htmlFor="outlined-required">Service ID</label>
            <TextField
              className="form-input"
              required
              id="outlined-required"
              label="Service ID"
              helperText="Please enter the products or services ID"
            />
            <label htmlFor="name">Name</label>
            <TextField
              className="form-input"
              required
              id="name"
              label="Name"
              helperText="Please enter your first name"
            />
            <label htmlFor="last-name">Last Name</label>
            <TextField
              className="form-input"
              required
              id="last-name"
              label="Last Name"
              helperText="Please enter your last name"
            />
            <label htmlFor="mail">E-mail</label>
            <TextField
              className="form-input"
              required
              id="mail"
              label="Email"
              helperText="Please enter a valid email address"
            />
            <label htmlFor="standard-multiline-static">Description</label>
            <TextField 
              id="standard-multiline-flexible"
              label="Multiline"
              multiline
              maxRows={4}
              variant="standard"
            />
          </div>
          <Button variant="contained" color="success" className="sub-button">
            Submit
          </Button>
        </fieldset>
      </form>
    </>
  );
}

 
  //   <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
  //     <InputLabel id="demo-select-small-label">Age</InputLabel>
  //     <Select
  //       labelId="demo-select-small-label"
  //       id="demo-select-small"
  //       value={age}
  //       label="Age"
  //       onChange={handleChange}
  //     >
  //       <MenuItem value="">
  //         <em>None</em>
  //       </MenuItem>
  //       <MenuItem value={10}>Ten</MenuItem>
  //       <MenuItem value={20}>Twenty</MenuItem>
  //       <MenuItem value={30}>Thirty</MenuItem>
  //     </Select>
  //   </FormControl>
  // );
