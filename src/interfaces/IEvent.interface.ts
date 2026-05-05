import type {IAffiche} from "./IAffiche.interface.ts";

export interface IEvent extends IAffiche {
    description: string;
    program: string[];
    price: number[];
}