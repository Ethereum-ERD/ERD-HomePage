import s from './Experience.module.scss';

import LiquidateImg from 'src/asset/functions/liquidate.png';
import DepositImg from 'src/asset/functions/deposit.png';
import RedeemImg from 'src/asset/functions/redeem.png';
import MintImg from 'src/asset/functions/mint.png';
import MascotImg from 'src/asset/top-mascot.png';

const Functions = [
    {
        icon: MintImg,
        name: 'Mint',
        desc: 'Deposit collateral on ERD to mint USDE'
    },
    {
        icon: DepositImg,
        name: 'Deposit-SP',
        desc: 'Deposit USDE to earn interest'
    },
    {
        icon: LiquidateImg,
        name: 'Liquidate',
        desc: 'Earn rewards by liquidating existing troves'
    },
    {
        icon: RedeemImg,
        name: 'Redeem',
        desc: 'Redeem USDE for LSDs at any time'
    }
];

export default function Experience() {
    const handleExplore = () => {
        window.open('https://app.erd.xyz', "_target");
    };

    return (
        <div className={s.wrap}>
            <p className={s.title}>
                Experience
                <span onClick={handleExplore}>
                    <svg width="26" height="13" viewBox="0 0 26 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.2969 10.3215L-2.34166e-07 10.3215L0 13L24.5006 13C25.8338 13 26.5014 11.4708 25.5587 10.5765L14.4098 6.47599e-07L12.4135 1.89406L21.2969 10.3215Z" fill="#3083FF"/>
                    </svg>
                </span>
            </p>
            <section className={s.section}>
                <div className={s.exploreCard}>
                    <img className={s.mascot} src={MascotImg} alt='mascot img' />
                    <div style={{ position: 'relative' }}>
                        <p className={s.exploreTitle}>Mint, deposit, and earn on the ERD decentralized stablecoin protocol.</p>
                        <p className={s.exploreDesc}>We offer support for a diverse range of collaterals, enabling maximum liquidity release at a rate of 0.25%. Try it now.</p>
                    </div>
                    <div className={s.exploreBtn} onClick={handleExplore}>
                        Try it out
                        <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.2314 2.96206L6.23148 7.48018L7.87976 7.48018L7.87968 0.999994C7.87968 0.723854 7.65582 0.5 7.37968 0.5L0.46243 0.499999L0.46243 1.94224L5.0659 1.94224L5.51797e-05 7.48018L1.16556 8.5L6.2314 2.96206Z" fill="white" fillOpacity="0.7"/>
                        </svg>
                    </div>
                </div>
                <div className={s.functions}>
                    {Functions.map(f => {
                        return (
                            <div key={f.name} className={s.function}>
                                <img className={s.functionIcon} src={f.icon} alt='' />
                                <p className={s.functionName}>{f.name}</p>
                                <p className={s.functionDesc}>{f.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}
