import type {HTMLAttributes, ReactNode} from "react";

export interface ButtonCalendarUIProps extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    isActive?: boolean;
    isNavigation?: boolean;
}