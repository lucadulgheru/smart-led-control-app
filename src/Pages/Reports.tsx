import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import ReportCard from "../Components/ReportCard";
import ReportsContainer from "../Components/ReportsContainer";
import RESTClient from "../Services/restClient";
import { Event } from "../Utils/responseTypes";

const Reports = () => {

    const [eventList, setEventList] = useState([] as Event[]);
    const restClient: RESTClient = RESTClient.getInstance();

    useEffect(() => {
        const fetchEvents = async () => {
            const events: Event[] = await (await restClient.getEvents()).logs;
            setEventList([...events]);
        };

        fetchEvents().catch(console.error);
    }, [restClient])

    return (
        <Box>
            <ReportsContainer>
                {
                    eventList.map((event: Event, index: number) => {
                        return (
                            <ReportCard key={index} eventType={event.event_type} date={event.date} userAddress={event.issuer_address} />
                        );
                    })
                }
            </ReportsContainer>
        </Box>
    );
};

export default Reports;