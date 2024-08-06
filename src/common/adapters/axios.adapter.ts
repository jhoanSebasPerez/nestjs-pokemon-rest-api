import axios, { AxiosInstance } from "axios";
import { HttpFetch } from "../interfaces/http.interface";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AxiosAdapter implements HttpFetch {

    private readonly axios: AxiosInstance = axios;

    async get<T>(url: string): Promise<T> {
        const response = await axios.get<T>(url);
        return response.data;
    }
}