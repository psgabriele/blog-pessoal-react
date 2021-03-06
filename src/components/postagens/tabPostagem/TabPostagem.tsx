import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listaPostagem/ListaPostagem';
import './TabPostagem.css';
import { Box } from '@mui/material';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar className='barra-postagem' position="static">
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            <Tab label="Todas as postagens" value="1"/>
            <Tab label="Sobre Nós" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre GaBee</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify">Blog desenvolvido no bootcamp de Dev Java Full Stack Júnior da Generation Brasil para colocar em prática toda a teoria vista durante o curso. Aqui você pode cadastrar temas e postagens, assim como atualizá-los ou deletá-los sempre que quiser. Sinta-se livre para explorar o blog! E, será de grande ajuda se você fizer uma postagem falando sobre alguma funcionalidade que fará com que ele fique mais legal. Suas dicas irão para o caderninho de implementações futuras e poderão fazer parte dessa aplicação. Obrigada!</Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;