import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import Chart from "../Components/Chart";
import RESTClient from "../Services/restClient";
import { GraphEntryType } from "../Utils/componentTypes";
import { Event } from "../Utils/responseTypes";

const Metrics = () => {

    const [motionSensorData, setMotionSensorData] = useState([] as GraphEntryType[]);
    const [toggleData, setToggleData] = useState([] as GraphEntryType[]);
    const restClient: RESTClient = RESTClient.getInstance();

    useEffect(() => {
        const fetchEvents = async () => {
            const events: Event[] = await (await restClient.getEvents()).logs;
            events.forEach(event => {
                event.date = event.date.split(" ")[0];
            });
            const dates = Array.from(new Set(events.map(event => event.date)));

            var toggleEvents: GraphEntryType[] = [];
            var motionSensorEvents: GraphEntryType[] = [];

            dates.forEach(date => {
                toggleEvents.push({ date: date, triggers: events.filter((event) => event.date === date && event.event_type.toString() === "LED_TOGGLE").length });
                motionSensorEvents.push({ date: date, triggers: events.filter((event) => event.date === date && event.event_type.toString() === "SENSOR_TRIGGER").length });
            });
            setToggleData(toggleEvents);
            setMotionSensorData(motionSensorEvents);
        };

        fetchEvents().catch(console.error);
    }, [restClient])

    return (
        <Box>
            <Chart title={"Motion Sensor Triggers"} data={motionSensorData} />
            <Chart title={"Toggle Triggers"} data={toggleData} />
        </Box>
    );
};

export default Metrics;