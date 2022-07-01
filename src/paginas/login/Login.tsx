import React from "react";
import './Login.css';
import {Grid, TextField, Typography, Button} from '@material-ui/core';
import {Box} from '@mui/material';
import {Link} from 'react-router-dom';
import background from '../../assets/img/sunset.png';

function Login() {
    return(
        <Grid container direction='row' justifyContent="center" alignItems="center">
            <Grid alignItems="center" xs={6}>
                <Box paddingX={18}>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className="text-title">Entrar</Typography>
                        <TextField id="usuario" label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField id="senha" label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/home' className='text-decorator-none'>
                                <Button className="botao" type='submit' variant='contained' color='primary'>Logar</Button>
                            </Link>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastro'><Typography variant='subtitle1' gutterBottom align='center' className="textos">Cadastre-se</Typography></Link>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='imagem' justifyContent="center" alignItems="center">
                <Box p={2} className = 'img-login'>
                    <img src={require('../../assets/img/star.png')} alt="Estrela dando joinha" />
                </Box>
            </Grid>
        </Grid>
    );
}

export default Login;