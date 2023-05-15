import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/componnents/Popper';
import MenuItem from './MenuItem';


const cx = classNames.bind(styles);

function Menu({ children, data = [] }) {
    const render_menu_items = () => {
        return data.map((item, index) => {
            return <MenuItem
            items={item}
            key={index}
            />;
        });
    };
    return (
        <Tippy
            // visible
            interactive
            trigger="click"
            placement="top-end"
            render={(attrs) => (
                <div className={cx('list-menu')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>{render_menu_items()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
