import dayjs from 'dayjs';
import utcPlugin from 'dayjs/plugin/utc';

import { useState, useEffect } from 'react';

import { observer } from 'mobx-react';

import Discord from 'src/asset/social/discord.svg';
import Twitter from 'src/asset/social/twitter.svg';
import Github from 'src/asset/social/github.svg';

import s from './Main.module.scss';

dayjs.extend(utcPlugin);

const LAUNCH_TIME_IN_UTC = '2023-12-06 12:00:00';

function formatMilliseconds(milliseconds: number) {
    const seconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    
    return [hours, minutes, remainingSeconds];
}

function timeToLaunch() {
    const now = dayjs();
    const launchTime = dayjs.utc(LAUNCH_TIME_IN_UTC);

    const countdownMilliseconds = launchTime.diff(now);

    if (countdownMilliseconds <= 0) {
        return [0, 0, 0];
    }

    return formatMilliseconds(countdownMilliseconds);
}

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

const uints = ['hours', 'minutes', 'seconds'];

export default observer(function Main() {
    const [isLaunch, setIsLaunch] = useState(false);
    const [timeRemain, setTimeRemain] = useState([0, 0, 0]);

    useEffect(() => {
        const timer = setInterval(() => {
            const [hours, minutes, seconds] = timeToLaunch();

            if (hours + minutes + seconds === 0) {
                setIsLaunch(true);
                clearInterval(timer);
            }
            setTimeRemain([hours, minutes, seconds]);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className={s.wrap}>
            {!isLaunch &&<div className={s.countdown}>
                <p className={s.countdownTitle}>Coming soon</p>
                <div className={s.countdownWrap}>
                    <div className={s.valueList}>
                        {timeRemain.map((n, idx) => {
                            return (
                                <>
                                    <div key={idx}>
                                        <p className={s.value}>{`${n}`.padStart(2, '0')}</p>
                                    </div>
                                    {idx < 2 && <div className={s.colon}>:</div>}
                                </>
                            );
                        })}
                    </div>
                    <div className={s.unitList}>
                        {timeRemain.map((_, idx) => {
                            return (
                                <>
                                    <div className={s.uint}>{uints[idx]}</div>
                                    {idx < 2 && <div className={s.colon} />}
                                </>
                            );
                        })}
                    </div>
                </div>
            </div>}
            <p className={s.name}>Ethereum Reserve Dollar</p>
            <p className={s.slogan}>On Ethereum.{'\u00A0'}By Ethereum.{'\u00A0'}For Ethereum.</p>
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
