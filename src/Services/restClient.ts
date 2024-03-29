import axios, { AxiosInstance } from "axios";
import { ACTION_COLOR, ACTION_TOGGLE, API_GATEWAY_LOCAL, ENDPOINT_ENUMERATE, ENDPOINT_EVENTS, ENDPOINT_LED, ENDPOINT_PING } from "../Utils/constants";
import { EnumerateResponse, EventResponse, LEDResponse, PingResponse } from "../Utils/responseTypes";

class RESTClient {
    private static instance: RESTClient;
    private static axiosInstance: AxiosInstance;

    private constructor() { }

    public static getInstance(): RESTClient {
        if (!RESTClient.instance) {
            RESTClient.axiosInstance = axios.create({
                baseURL: API_GATEWAY_LOCAL
            });
            RESTClient.instance = new RESTClient();
        }

        return RESTClient.instance;
    }

    public async test(): Promise<any> {
        const response: any = await (await RESTClient.axiosInstance.get("")).data;
        return response;
    }

    public async pingBoard(): Promise<PingResponse> {
        const response: PingResponse = await (await RESTClient.axiosInstance.get(ENDPOINT_PING)).data;
        return response;
    }

    public async getLEDs(): Promise<EnumerateResponse> {
        const response: EnumerateResponse = await (await RESTClient.axiosInstance.get(ENDPOINT_ENUMERATE)).data;
        return response;
    }

    public async toggleLED(ledId: number): Promise<LEDResponse> {
        const response: LEDResponse = await (await RESTClient.axiosInstance.get(`${ENDPOINT_LED}/${ACTION_TOGGLE}/${ledId}`)).data;
        return response;
    }

    public async changeColor(ledId: number, colorCode: string): Promise<LEDResponse> {
        const response: LEDResponse = await (await RESTClient.axiosInstance.get(`${ENDPOINT_LED}/${ACTION_COLOR}/${ledId}`, {
            params: {
                color_code: colorCode
            }
        })).data;
        return response;
    }

    public async getEvents(): Promise<EventResponse> {
        const response: EventResponse = await (await RESTClient.axiosInstance.get(ENDPOINT_EVENTS)).data;
        return response;
    }
}

export default RESTClient;