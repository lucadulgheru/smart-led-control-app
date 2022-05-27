import { EventType, LEDStatus } from "./dataTypes";

export interface PingResponse {
    message: string
};

export interface EnumerateResponse {
    led_count: number,
    leds: LEDResponse[]
};

export interface LEDResponse {
    id: number,
    status: LEDStatus,
    color: number[]
};

export interface EventResponse {
    log_count: number,
    logs: Event[]
};

export interface Event {
    date: string,
    event_type: EventType,
    issuer_address: string
}