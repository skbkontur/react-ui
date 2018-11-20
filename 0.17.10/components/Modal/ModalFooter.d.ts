/// <reference types="react" />
import * as React from 'react';
export interface FooterProps {
    /**
     * Включает серый цвет в футере
     */
    panel?: boolean;
}
/**
 * Футер модального окна.
 */
export declare class Footer extends React.Component<FooterProps> {
    _scrollbarWidth: number;
    render(): JSX.Element;
}
