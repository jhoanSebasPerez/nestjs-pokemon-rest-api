export interface HttpFetch {
    get<T>(url: string): Promise<T>;
}