import axios, { AxiosInstance } from "axios";
import { API_GATEWAY_LOCAL } from "../Utils/constants";

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

    // TODO replace hardcoded values with constants
    // TODO replace response types with types

    public async test(): Promise<any> {
        const response: any = await (await RESTClient.axiosInstance.get("")).data;
        return response;
    }

    public async pingBoard(): Promise<any> {
        const response: any = await (await RESTClient.axiosInstance.get("/ping")).data;
        return response;
    }

    public async getLEDs(): Promise<any> {
        const response: any = await (await RESTClient.axiosInstance.get("/enumerate")).data;
        return response;
    }

    public async toggleOn(ledId: number): Promise<any> {
        const response: any = await (await RESTClient.axiosInstance.get(`/led/${ledId}/on`)).data;
        return response;
    }

    public async toggleOff(ledId: number): Promise<any> {
        const response: any = await (await RESTClient.axiosInstance.get(`/led/${ledId}/off`)).data;
        return response;
    }

    public async changeColor(ledId: number, colorCode: string): Promise<any> {
        const response: any = await (await RESTClient.axiosInstance.get(`/led/${ledId}/color`)).data;
        return response;
    }
}

export default RESTClient;