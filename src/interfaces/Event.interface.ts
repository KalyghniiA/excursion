import type {Affiche} from "./Affiche.interface.ts";

export interface Event extends Affiche {
    description: string;
    program: string[];
    price: number[];
}