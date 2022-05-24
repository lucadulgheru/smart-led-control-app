import { LEDStatus } from "./dataTypes";

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
    color: string
};