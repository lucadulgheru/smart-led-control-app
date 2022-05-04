import './App.css';
import Layout from './Components/Layout';
import LEDCard from './Components/LEDCard';
import RefreshPingButtons from './Components/RefreshPingButtons';
import ResponsiveAppBar from './Components/ResponsiveAppbar';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <RefreshPingButtons/>
      <Layout>
        <LEDCard ledID={0}></LEDCard>
        <LEDCard ledID={1}></LEDCard>
        <LEDCard ledID={2}></LEDCard>
        <LEDCard ledID={3}></LEDCard>
        <LEDCard ledID={4}></LEDCard>
        <LEDCard ledID={5}></LEDCard>
        <LEDCard ledID={6}></LEDCard>
        <LEDCard ledID={7}></LEDCard>
        <LEDCard ledID={8}></LEDCard>
      </Layout>
    </div>
  );
}

export default App;
