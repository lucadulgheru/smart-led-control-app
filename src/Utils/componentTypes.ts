import { EventType } from "./dataTypes";

export interface GraphEntryType {
    date: string,
    triggers: number
};

export interface ReportType {
    eventType: EventType,
    userAddress: string,
    date: string
};