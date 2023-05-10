import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function Button({
    children,
    href,
    to,
    onClick,
    leftIcon = false,
    rightIcon = false,
    blue = false,
    disable = false,
    ...passProps
}) {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };
    const classes = cx('wrapper', {
        leftIcon,
        rightIcon,
        blue,
        disable,
    });

    if (href) {
        props.href = href;
        Comp = 'a';
    } else if (to) {
        props.to = to;
        Comp = Link;
    }

    //remove events when disable
    if (disable) {
        Object.keys(props).forEach((key) => {
            console.log(key);
            if ((key.startsWith('on') && typeof props[key] === 'function') || key === 'href' || key === 'to') {
                delete props[key];
            }
        });
    }

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{<FontAwesomeIcon icon={faCircleUser} />}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{<FontAwesomeIcon icon={faCircleUser} />}</span>}
        </Comp>
    );
}

export default Button;
