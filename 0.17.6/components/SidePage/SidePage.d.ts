/// <reference types="react" />
import * as React from 'react';
export interface SidePageProps {
    /**
     * Добавить блокирующий фон, когда сайдпейдж открыт
     */
    blockBackground?: boolean;
    /**
     * Отключает событие onClose, также дизейблит кнопку закрытия сайдпейджа
     */
    disableClose?: boolean;
    /**
     * Не закрывать сайдпейдж при клике на фон.
     */
    ignoreBackgroundClick?: boolean;
    /**
     * Задать ширину сайдпейджа
     */
    width?: number;
    /**
     * Вызывается, когда пользователь запросил закрытие сайдпейджа (нажал на фон, на
     * Escape или на крестик).
     */
    onClose?: () => void;
}
export interface SidePageState {
    stackPosition?: number;
    hasMarginRight?: boolean;
    hasShadow?: boolean;
    hasBackground?: boolean;
}
/**
 * Сайдпейдж
 *
 * Содержит в себе три компоненты: **SidePage.Header**,
 * **SidePage.Body** и **SidePage.Footer**
 *
 * Для отображения серой плашки в футере в компонент
 * **Footer** необходимо передать пропс **panel**
 */
declare class SidePage extends React.Component<SidePageProps, SidePageState> {
    static Header: typeof Header;
    static Body: typeof Body;
    static Footer: typeof Footer;
    static Container: typeof Container;
    private stackSubscription;
    constructor(props: SidePageProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private handleStackChange;
    private handleClickOutside;
    private handleKeyDown;
    private requestClose;
}
export interface HeaderProps {
    children?: React.ReactNode | ((fixed: boolean) => React.ReactNode);
}
export declare class Header extends React.Component<HeaderProps> {
    render(): JSX.Element;
    renderClose(): JSX.Element;
}
export declare class Body extends React.Component {
    render(): JSX.Element;
}
export interface FooterProps {
    children?: React.ReactNode | ((fixed: boolean) => React.ReactNode);
    /**
     * Включает серый цвет в футере
     */
    panel?: boolean;
}
/**
 * Футер модального окна.
 */
export declare class Footer extends React.Component<FooterProps> {
    render(): JSX.Element;
}
export declare class Container extends React.Component {
    render(): JSX.Element;
}
export default SidePage;
