
import { Container } from '@mui/material';
import './App.css'
import IPDisplay from './components/IPDisplay'



function App() {
  
  return (
    <>
    <Container maxWidth="sm">
    <h1>What Is MyIp</h1>
      <IPDisplay />
    </Container>
   
    </>
  )
}

export default App