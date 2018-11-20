/// <reference types="react" />
import * as React from 'react';
export declare type HorizontalAlign = 'left' | 'center' | 'right';
export interface CenterProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Горизонтальное выравнивание контента.
     */
    align?: HorizontalAlign;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
export interface CenterState {
}
/**
 * Контейнер для вертикального центрирования. В компонент можно передавать
 * свойства как в любой div.
 */
export default class Center extends React.Component<CenterProps, CenterState> {
    static defaultProps: {
        align: string;
    };
    render(): React.ReactNode;
}
