import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const AddPatient = () => {
    const [patientId, setPatientId] = useState('');
    const [patientName, setPatientName] = useState('');
    const [patientAge, setPatientAge] = useState('');
    const [patientSex, setPatientSex] = useState('');
    const [patientAddress, setPatientAddress] = useState('');
    
    const [patients, setPatients] = useState([]);
    const [editIndex, setEditIndex] = useState(-1);
  
    const handlePatientIdChange = (event) => {
      setPatientId(event.target.value);
    };
  
    const handlePatientNameChange = (event) => {
      setPatientName(event.target.value);
    };

    const handlePatientAgeChange = (event) => {
        setPatientAge(event.target.value);
    };

    const handlePatientSexChange = (event) => {
        setPatientSex(event.target.value);
    };

    const handlePatientAddressChange = (event) => {
        setPatientAddress(event.target.value);
    };
  
    const handleAddPatient = () => {
      if (editIndex !== -1) {
        // Edit existing patient
        const updatedPatients = [...patients];
        updatedPatients[editIndex] = { patientId, patientName, patientAge, patientSex, patientAddress };
        setPatients(updatedPatients);
        setEditIndex(-1);
      } else {
        // Add new patient
        const newPatient = { patientId, patientName, patientAge, patientSex, patientAddress };
        setPatients([...patients, newPatient]);
      }
      setPatientId('');
      setPatientName('');
      setPatientAge('');
      setPatientSex('');
      setPatientAddress('');
    };
  
    const handleEditPatient = (index) => {
      const patient = patients[index];
      setPatientId(patient.patientId);
      setPatientName(patient.patientName);
      setPatientAge(patient.patientAge);
      setPatientSex(patient.patientSex);
      setPatientAddress(patient.patientAddress);
      setEditIndex(index);
    };
  
    const handleDeletePatient = (index) => {
      const updatedPatients = patients.filter((_, i) => i !== index);
      setPatients(updatedPatients);
    };

    return (
        <div>
            
          <TableContainer component={Paper} style={{ marginTop: '20px' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Patient ID</TableCell>
                  <TableCell>Patient Name</TableCell>
                  <TableCell>Patient Age</TableCell>
                  <TableCell>Sex</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {patients.map((patient, index) => (
                  <TableRow key={index}>
                    <TableCell>{patient.patientId}</TableCell>
                    <TableCell>{patient.patientName}</TableCell>
                    <TableCell>{patient.patientAge}</TableCell>
                    <TableCell>{patient.patientSex}</TableCell>
                    <TableCell>{patient.patientAddress}</TableCell>
                    <TableCell>
                      <IconButton
                        color="primary"
                        onClick={() => handleEditPatient(index)}
                      >
                        <Edit />
                      </IconButton>
                      <IconButton
                        color="secondary"
                        onClick={() => handleDeletePatient(index)}
                      >
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <br />
          <Typography variant="h6">Patient Form</Typography>
      <TextField
        label="Patient ID"
        value={patientId}
        onChange={handlePatientIdChange}
        margin="normal"
        required
      />
      <TextField
        label="Patient Name"
        value={patientName}
        onChange={handlePatientNameChange}
        margin="normal"
        required
      />
      <TextField
        label="Patient Age"
        value={patientAge}
        onChange={handlePatientAgeChange}
        margin="normal"
        required
      />
      <TextField
        label="Sex"
        value={patientSex}
        onChange={handlePatientSexChange}
        margin="normal"
        required
      />
      <TextField
        label="Address"
        value={patientAddress}
        onChange={handlePatientAddressChange}
        margin="normal"
        required
      />
      <Button variant="contained" fullWidth color="primary" onClick={handleAddPatient}>
        {editIndex !== -1 ? 'Update Patient' : 'Add Patient'}
      </Button>

    </div>
  );
};

export default AddPatient;
