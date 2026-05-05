import type {ButtonHTMLAttributes, ReactNode} from "react";

export interface ButtonUIProps extends  ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode
}