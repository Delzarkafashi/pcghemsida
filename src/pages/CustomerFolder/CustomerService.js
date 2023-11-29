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

  const handleSubmit = () => {
    alert("Tack för att du har kontaktat oss!");
  };

  return (
    <>
      <form>
        <fieldset>
        <h1>Kundtjänst</h1>
          <FormControl>
            <InputLabel id="demo-select-small-label">Ärende</InputLabel>
            <Select
              className="form-control"
              title="Klicka för att välja kategori"
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={age}
              label="Ärende"
              onChange={handleChange}
              
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="other">Övrigt</MenuItem>
              <MenuItem value="refund">Återbetalning</MenuItem>
              <MenuItem value="cancel">Avboka</MenuItem>
              <MenuItem value="return">Returnera Produkter</MenuItem>
            </Select>
          </FormControl>

          <div className="form-group">
            {/* <label htmlFor="outlined-required">Service ID</label>
            <TextField
              className="form-input"
              title=""
              required
              id="outlined-required"
              label="Service ID"
              helperText="Please enter the products or services ID"
            /> */}
            <label htmlFor="name">Namn</label>
            <TextField
              className="form-input"
              required
              id="name"
              label="Name"
              helperText="Skriv ditt namn"
            />
            <label htmlFor="last-name">Efternamn</label>
            <TextField
              className="form-input"
              required
              id="last-name"
              label="Last Name"
              helperText="Skriv ditt efternamn"
            />
            <label htmlFor="mail">E-mail</label>
            <TextField
              className="form-input"
              required
              id="mail"
              label="Email"
              helperText="Skriv en giltig email-address"
            />
            <label htmlFor="standard-multiline-static">Beskrivning</label>
            <TextField 
              id="standard-multiline-flexible"
              label="Kommentarer"
              multiline
              maxRows={4}
            />
          </div>
          <Button 
          variant="contained" 
          color="success" 
          className="sub-button"
          onClick={handleSubmit}
          >
            Skicka
          </Button>
        </fieldset>
      </form>
    </>
  );
}
