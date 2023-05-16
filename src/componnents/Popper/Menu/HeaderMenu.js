import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function HeaderMenu({ title, onBack }) {
    return (
        <div className={cx('header-menu')}>
            <button className={cx('icon-black')}>
                <FontAwesomeIcon onClick={onBack} icon={faArrowLeft} />
            </button>
            <div className={cx('menu-title')}>{title}</div>
        </div>
    );
}

export default HeaderMenu;
