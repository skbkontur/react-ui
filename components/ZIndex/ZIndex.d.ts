/// <reference types="react" />
import * as React from 'react';
export interface ZIndexProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Приращение к z-index
     */
    delta: number;
    render?: boolean;
    children?: React.ReactNode;
    className?: string;
}
export default class ZIndex extends React.Component<ZIndexProps> {
    static defaultProps: {
        render: boolean;
    };
    private zIndex;
    constructor(props: ZIndexProps);
    componentWillUnmount(): void;
    render(): {} | null | undefined;
}
