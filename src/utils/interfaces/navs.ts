import { ReactNode } from "react";
import { IconType } from "react-icons/lib";

export interface INav {
    icon?: ReactNode | IconType
    name: string;
    path?: string;
    id?: number;
}

export interface INavs {
    icon?: ReactNode | IconType;
    name?: string;
    path: string;
    id: number;
    children?: INav[]
}