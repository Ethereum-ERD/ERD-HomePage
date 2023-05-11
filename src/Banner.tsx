import { observer } from "mobx-react";

import Logo from 'src/asset/logo.svg';

import s from "./Banner.module.scss";

const Menu = [
    { title: "Community", link: "https://discord.gg/A8heyMV6qC" },
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
                <div className={s.launchBtnWrap} onClick={() => handleMenuClick('https://app.erd.xyz')}>
                    <div className={s.launchBtn}>
                        Launch App
                    </div>
                </div>
            </div>
        </div>
    );
});
