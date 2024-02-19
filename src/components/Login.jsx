import React, { useState } from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


 const handleSubmit = (e) => {
    e.preventDefault();
    // Vérifier les informations d'identification
    if (email === 'nehemiediav@gmail.com' && password === 'admin') {
      // Rediriger vers la page de succès
      navigate('/authentificationSuccess'); // Redirect to the desired page
    } else {
      // Afficher un message d'erreur ou une autre logique en cas d'échec de l'authentification
      console.log('Échec de l\'authentification');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Box sx={{ maxWidth: 400 }}>
        <Typography variant="h5" gutterBottom>
          Connexion
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Adresse e-mail"
            variant="outlined"
            margin="normal"
            fullWidth
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            label="Mot de passe"
            variant="outlined"
            type="password"
            margin="normal"
            fullWidth
            value={password}
            onChange={handlePasswordChange}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Se connecter
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default LoginForm;
