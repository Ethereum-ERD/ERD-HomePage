import { observer } from "mobx-react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

import MenuIcon from "src/asset/menu.svg";
import Logo from "src/asset/logo.svg";

import s from "./Banner.module.scss";

const MenuList = [
    { title: "Community", link: "https://discord.gg/A8heyMV6qC" },
    { title: "Blog", link: "https://blog.erd.xyz" },
    {
        title: "Contract",
        link: "https://github.com/Ethereum-ERD",
    },
    { title: "Docs", link: "https://docs.erd.xyz/" },
];

export default observer(function Banner() {
    const handleMenuClick = (link: string) => {
        window.open(link, "_blank");
    };

    return (
        <div className={s.wrap} id="Banner">
            <div className={s.container}>
                <div className={s.logo}>
                    <img src={Logo} alt="" />
                </div>
                <div className={s.links}>
                    {MenuList.map((menu) => {
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
                <div className={s.right}>
                    <div
                        className={s.launchBtn}
                        onClick={() => handleMenuClick("https://app.erd.xyz")}
                    >
                        Launch App
                    </div>
                    <PopupState variant="popover" popupId="banner-popup-menu">
                        {(popupState) => (
                            <>
                                <div className={s.mobileMenu} {...bindTrigger(popupState)}>
                                    <img src={MenuIcon} alt="menu icon" />
                                </div>
                                <Menu {...bindMenu(popupState)} classes={{
                                    paper: s.popMenuRoot,
                                    list: s.popMenuList
                                }}>
                                    <div className={s.mobileMenuList}>
                                        {MenuList.map((menu) => {
                                            return (
                                                <MenuItem
                                                    onClick={() => handleMenuClick(menu.link)}
                                                    key={menu.link}
                                                    classes={{
                                                        root: s.mobileMenuItem
                                                    }}
                                                >
                                                    {menu.title}
                                                </MenuItem>
                                            );
                                        })}
                                    </div>
                                </Menu>
                            </>
                        )}
                    </PopupState>
                </div>
            </div>
        </div>
    );
});
