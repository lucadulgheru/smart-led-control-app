export enum EventType {
    LED_CHANGED_COLOR,
    LED_TOGGLE_ON,
    LED_TOGGLE_OFF,
    ENUMERATE_LEDS,
    PING_ESP32_BOARD,
    MOTION_SENSOR_TRIGGER,
    SWITCH_TRIGGER
};

export enum LEDStatus {
    ON,
    OFF
};