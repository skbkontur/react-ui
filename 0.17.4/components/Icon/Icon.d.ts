/// <reference types="react" />
import * as React from 'react';
import * as PropTypes from 'prop-types';
import Icons from './Kontur-Iconic';
export declare type IconName = keyof typeof Icons;
export interface IconProps {
    color?: string;
    name: IconName;
    size?: number | string;
}
declare class Icon extends React.Component<IconProps> {
    static propTypes: {
        color: PropTypes.Requireable<any>;
        name: PropTypes.Requireable<any>;
        size: PropTypes.Requireable<any>;
    };
    static Names: {};
    static getAllNames: () => string[];
    constructor(props: IconProps);
    componentWillReceiveProps(props: IconProps): void;
    render(): JSX.Element;
    _checkDeprecatedName(props: IconProps): void;
}
export default Icon;
