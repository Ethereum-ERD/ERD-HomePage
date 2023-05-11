import { observer } from 'mobx-react';

import Discord from 'src/asset/social/discord.svg';
import Twitter from 'src/asset/social/twitter.svg';
import Github from 'src/asset/social/github.svg';

import s from './Main.module.scss';

const SocialList = [
    {
        icon: Twitter,
        place: 'Twitter icon',
        link: 'https://twitter.com/Ethereum_ERD'
    },
    {
        icon: Discord,
        place: 'Discord icon',
        link: 'https://discord.gg/A8heyMV6qC'
    },
    {
        icon: Github,
        place: 'Github icon',
        link: 'https://github.com/Ethereum-ERD'
    }
];

export default observer(function Main() {

    return (
        <div className={s.wrap}>
            <p className={s.name}>Ethereum Reserve Dollar</p>
            <p className={s.slogan}>On Ethereum.By Ethereum.For Ethereum</p>
            <div className={s.socialRow}>
                {SocialList.map(row => {
                    return (
                        <a
                            href={row.link}
                            rel='noreferrer noopenner'
                            target='_blank'
                            key={row.link}
                        >
                            <img src={row.icon} alt={row.place} />
                        </a>
                    );
                })}
            </div>
        </div>
    );
});
