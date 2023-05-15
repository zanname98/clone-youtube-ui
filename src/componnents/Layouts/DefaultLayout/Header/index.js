import { useEffect, useState } from 'react';
import TippyHeadLess from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faClose,
    faEllipsisVertical,
    faKeyboard,
    faLanguage,
    faLocation,
    faMicrophone,
    faSearch,
    faShield,
    faCircleUser,
    faGear,
    faCircleQuestion,
    faExclamation,
    faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/componnents/Button';
import { Wrapper as PopperWrapper } from '~/componnents/Popper';
import Menu from '~/componnents/Popper/Menu';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    { title: 'Your data in Youtube', LeftIcon: <FontAwesomeIcon icon={faCircleUser} /> },
    {
        title: 'Appearance: Device theme',
        LeftIcon: <FontAwesomeIcon icon={faMoon} />,
        rightIcon: <FontAwesomeIcon icon={faAngleRight} />,
        despenser: true,
        children: {
            title: 'Appearance: Device theme',
            data: [
                { id: 1, titile: 'Use device theme' },
                { id: 2, titile: 'Dark theme' },
                { id: 3, titile: 'Light theme' },
            ],
        },
    },
    {
        title: 'Language:English',
        LeftIcon: <FontAwesomeIcon icon={faLanguage} />,
        rightIcon: <FontAwesomeIcon icon={faAngleRight} />,
    },
    {
        title: 'Restricted Mode: Off',
        LeftIcon: <FontAwesomeIcon icon={faShield} />,
        rightIcon: <FontAwesomeIcon icon={faAngleRight} />,
    },
    {
        title: 'Location',
        LeftIcon: <FontAwesomeIcon icon={faLocation} />,
        rightIcon: <FontAwesomeIcon icon={faAngleRight} />,
    },
    { title: 'Keyboad shortcus', LeftIcon: <FontAwesomeIcon icon={faKeyboard} />, despenser: false },
    { title: 'Setting', LeftIcon: <FontAwesomeIcon icon={faGear} />, despenser: true },
    { title: 'Help', LeftIcon: <FontAwesomeIcon icon={faCircleQuestion} />, despenser: true },
    { title: 'Send Feedback', LeftIcon: <FontAwesomeIcon icon={faExclamation} /> },
];
function Header() {
    const [result, setResult] = useState([]);
    // useEffect(() => {
    //     setTimeout(() => {
    //         setResult((prev) => [...prev, 12]);
    //     }, 3000);
    // }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo')}>
                <FontAwesomeIcon className={cx('topLeft-menu')} icon={faBars} />
                <img className={cx('logo-icon')} src={images.logo} alt="logo" />
            </div>
            <div className={cx('search')}>
                <div className={cx('form')}>
                    <TippyHeadLess
                        // visible
                        placement="top-end"
                        render={(attrs) => (
                            <div className={cx('result-box')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h2>dsadadso</h2>
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={cx('form-input')}>
                            <button className={cx('search-input')}>
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                            <input type="text" placeholder="Tim Kiem" />
                            <div className={cx('btn')}>
                                <button className={cx('keyboard')}>
                                    <FontAwesomeIcon icon={faKeyboard} />
                                </button>
                                <button className={cx('clear')}>
                                    <FontAwesomeIcon icon={faClose} />
                                </button>
                            </div>
                        </div>
                    </TippyHeadLess>
                    <Tippy content={'Tim kiem'} delay={(0, 300)}>
                        <button className={cx('search')}>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </Tippy>
                </div>

                <Tippy content={'Tim kiem bang giong noi'} delay={(0, 300)}>
                    <button className={cx('micro')}>
                        <FontAwesomeIcon icon={faMicrophone} />
                    </button>
                </Tippy>
            </div>
            <div className={cx('action')}>
                <Menu data={MENU_ITEMS}>
                    <button className={cx('topRight-menu')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </button>
                </Menu>
                {/* <Tippy content={'Cai dat'} delay={(0, 300)}>
                    <button className={cx('topRight-menu')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </button>
                </Tippy> */}
                <Button
                    href="/login"
                    target="_blank"
                    blue
                    leftIcon={<FontAwesomeIcon icon={faCircleUser} />}
                    onClick={() => alert('clicked')}
                >
                    Dang nhap
                </Button>
            </div>
        </div>
    );
}

export default Header;
