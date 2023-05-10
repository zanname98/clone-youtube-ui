import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faClose,
    faEllipsisVertical,
    faKeyboard,
    faMicrophone,
    faSearch,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/componnents/Button';
import { Wrapper as PopperWrapper } from '~/componnents/Popper';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo')}>
                <FontAwesomeIcon className={cx('topLeft-menu')} icon={faBars} />
                <img className={cx('logo-icon')} src={images.logo} alt="logo" />
            </div>
            <div className={cx('search')}>
                <Tippy
                    // visible
                    placement="top-end"
                    render={(attrs) => (
                        <div className={cx('result-search')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h3>d</h3>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('form')}>
                        <input type="text" placeholder="Tim Kiem" />
                        <div className={cx('btn')}>
                            <button className={cx('keyboard')}>
                                <FontAwesomeIcon icon={faKeyboard} />
                            </button>
                            <button className={cx('clear')}>
                                <FontAwesomeIcon icon={faClose} />
                            </button>
                        </div>
                        <button className={cx('search')}>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </Tippy>
                <button className={cx('micro')}>
                    <FontAwesomeIcon icon={faMicrophone} />
                </button>
            </div>
            <div className={cx('action')}>
                <FontAwesomeIcon className={cx('topRight-menu')} icon={faEllipsisVertical} />
                <Button href="/login" target="_blank" blue leftIcon onClick={() => alert('clicked')}>
                    Dang nhap
                </Button>
            </div>
        </div>
    );
}

export default Header;
