import type { NextPage } from 'next'
import { Professor } from '../src/@types/professor';
import Lista from '../src/Lista/Lista';
import { useIndex } from '../src/hooks/pages/useIndex';
import { Box, Button, Dialog, DialogActions, Grid, Snackbar, TextField } from '@mui/material';

const Home: NextPage = () => {
  const {
    listaProfessores,
    name,
    setName,
    email,
    setEmail,
    profSelecionado,
    setprofSelecionado,
    marcarAula,
    message,
    setMessage
  } = useIndex();

  return (
    <div>
      <Box sx={{ backgroundColor: "secondary.main" }}>
        <Lista
          professores={listaProfessores}
          onSelect={(professor) => setprofSelecionado(professor)}
        ></Lista>
      </Box>

      <Dialog onClose={() => setprofSelecionado(null)} open={profSelecionado != null} fullWidth PaperProps={{ sx: { p: 5 } }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Digite seu nome"
              type="text"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Digite seu email"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
        </Grid>

        <DialogActions sx={{ mt: 5, mx: 0 }}>
          <Button onClick={() => setprofSelecionado(null)}>Cancelar</Button>
          <Button onClick={() => marcarAula()}>Marcar</Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        message={message}
        open={message.length > 0}
        autoHideDuration={7000}
        onClose={() => setMessage("")}
      />
    </div>
  )
}

export default Home
