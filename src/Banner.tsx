import { useState } from "react";

import { observer } from "mobx-react";
import Popover from "@mui/material/Popover";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulletedOutlined";

import Logo from 'src/asset/logo.svg';

import s from "./Banner.module.scss";

const anchorOrigin: any = {
    vertical: "bottom",
    horizontal: "left",
};

const Menu = [
    { title: "Product", link: "https://app.erd.xyz" },
    {
        title: "Contract",
        link: "https://github.com/Ethereum-ERD",
    },
    { title: "FAQ", link: "https://docs.erd.xyz/" },
];

export default observer(function Banner() {
    const [showMenu, setShowMenu] = useState(false);
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setShowMenu((x) => !x);
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClick = (link: string) => {
        window.open(link, "_target");
    };

    return (
        <div className={s.wrap} id="Banner">
            <div className={s.container}>
                <div className={s.logo}>
                    <img src={Logo} alt="" />
                </div>
                <div className={s.links}>
                    {Menu.map((menu) => {
                        return (
                            <p
                                onClick={() => handleMenuClick(menu.link)}
                                key={menu.link}
                            >
                                {menu.title}
                            </p>
                        );
                    })}
                </div>
                <div className={s.menuWrap} onClick={handleClick}>
                    <FormatListBulletedIcon
                        fontSize="medium"
                        className={s.menuIcon}
                    />
                </div>
                <Popover
                    open={showMenu}
                    id={showMenu ? "simple-popover" : undefined}
                    anchorEl={anchorEl}
                    className={s.popover}
                    onClose={() => setShowMenu(false)}
                    anchorOrigin={anchorOrigin}
                >
                    <div className={s.popMenu}>
                        {Menu.map((menu) => {
                            return (
                                <p
                                    key={menu.link}
                                    className={s.popMenuItem}
                                    onClick={() => handleMenuClick(menu.link)}
                                >
                                    {menu.title}
                                </p>
                            );
                        })}
                    </div>
                </Popover>
            </div>
        </div>
    );
});
