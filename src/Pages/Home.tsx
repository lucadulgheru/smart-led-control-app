import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import Layout from '../Components/Layout';
import LEDCard from '../Components/LEDCard';
import RefreshPingButtons from '../Components/RefreshPingButtons';
import RESTClient from '../Services/restClient';
import { EnumerateResponse, LEDResponse } from '../Utils/responseTypes';

const Home = () => {

    const [ledList, setLedList] = useState([] as LEDResponse[]);
    const restClient: RESTClient = RESTClient.getInstance();

    useEffect(() => {
        const fetchLEDs = async () => {
            const enumeratedLeds: EnumerateResponse = await restClient.getLEDs();
            setLedList([...enumeratedLeds.leds]);
        };

        fetchLEDs().catch(console.error);
    }, [restClient])

    return (
        <Box>
            <RefreshPingButtons />
            <Layout>
                {
                    ledList.map((led: LEDResponse, index: number) => {
                        return (<LEDCard id={led.id} status={led.status} color={led.color} key={index} />);
                    })
                }
            </Layout>
        </Box>
    );
};

export default Home;