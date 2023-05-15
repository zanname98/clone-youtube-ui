import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '~/componnents/Button';

const cx = classNames.bind(styles);

function MenuItem({ items }) {
    const classes = cx('menu-item', {despenser:items.despenser
    });
    console.log(classes)
    return (
        <Button className={classes} leftIcon={items.LeftIcon} rightIcon={items.rightIcon}>
            {items.title}
        </Button>
    );
}

export default MenuItem;
