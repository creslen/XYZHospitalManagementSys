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

const DischargedForm = () => {
  const [patientId, setPatientId] = useState('');
  const [dischargeDate, setDischargeDate] = useState('');
  const [patients, setPatients] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handlePatientIdChange = (event) => {
    setPatientId(event.target.value);
  };

  const handleDischargeDateChange = (event) => {
    setDischargeDate(event.target.value);
  };

  const handleAddPatient = () => {
    if (editIndex !== -1) {
      // Edit existing patient
      const updatedPatients = [...patients];
      updatedPatients[editIndex] = { patientId, dischargeDate };
      setPatients(updatedPatients);
      setEditIndex(-1);
    } else {
      // Add new patient
      const newPatient = { patientId, dischargeDate };
      setPatients([...patients, newPatient]);
    }
    setPatientId('');
    setDischargeDate('');
  };

  const handleEditPatient = (index) => {
    const patient = patients[index];
    setPatientId(patient.patientId);
    setDischargeDate(patient.dischargeDate);
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
              <TableCell>Discharge Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patients.map((patient, index) => (
              <TableRow key={index}>
                <TableCell>{patient.patientId}</TableCell>
                <TableCell>{patient.dischargeDate}</TableCell>
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
        label="Discharge Date"
        value={dischargeDate}
        onChange={handleDischargeDateChange}
        margin="normal"
        required
      />
      <Button variant="contained" fullWidth color="primary" onClick={handleAddPatient}>
        {editIndex !== -1 ? 'Update Patient' : 'Add Patient'}
      </Button>

    </div>
  );
};

export default DischargedForm;
