import { ReactNode } from "react";

export interface INav {
    icon?: ReactNode;
    name: string;
    path?: string;
    id?: number;
}

export interface INavs {
    icon?: ReactNode;
    name?: string;
    path: string;
    id: number;
    children?: INav[]
}