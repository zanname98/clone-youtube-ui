import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/componnents/Popper';
import MenuItem from './MenuItem';
import HeaderMenu from './HeaderMenu';

const cx = classNames.bind(styles);

function Menu({ children, data = [] }) {
    const [history, setHistory] = useState([{ data: data }]);
    const currentItem = history[history.length - 1];
    const render_menu_items = () => {
        return currentItem.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    items={item}
                    key={index}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            // alert('eo co');
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            interactive
            trigger="click"
            placement="top-end"
            render={(attrs) => (
                <div className={cx('list-menu')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {history.length > 1 && (
                            <HeaderMenu
                                title={currentItem.title}
                                onBack={() => setHistory((prev) => prev.slice(0, prev.length - 1))}
                            />
                        )}

                        {render_menu_items()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
