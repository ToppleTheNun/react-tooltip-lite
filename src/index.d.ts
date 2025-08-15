import type { PureComponent, ReactNode } from 'react';

export interface TooltipProps {
    direction?: string;
    className?: string;
    content: ReactNode;
    children?: ReactNode;
    background?: string;
    color?: string;
    padding?: string;
    distance?: number;
    eventOff?: string;
    eventOn?: string;
    eventToggle?: string;
    useHover?: boolean;
    useDefaultStyles?: boolean;
    isOpen?: boolean;
    hoverDelay?: number;
    tipContentHover?: boolean;
    arrow?: boolean;
    arrowSize?: number;
}

export default class Tooltip extends PureComponent<TooltipProps> {
}
