import s from './Audit.module.scss';

import PeckShieldPadImg from 'src/asset/audit/peckshield-pad.png';
import Code4RenaPadImg from 'src/asset/audit/code4rena-pad.png';
import CoinSpectPadImg from 'src/asset/audit/coinspect-pad.png';
import PeckShieldImg from 'src/asset/audit/peckshield.png';
import Code4RenaImg from 'src/asset/audit/code4rena.png';
import CoinSpectImg from 'src/asset/audit/coinspect.png';
import MascotImg from 'src/asset/mascot.png';

const AuditList = [
    {
        padIcon: PeckShieldPadImg,
        icon: PeckShieldImg,
        status: 'Auditing...',
        reportTime: 'May 2023',
        width: 209,
        height: 51,
        padIconWidth: 137,
        padIconHeight: 29
    },
    {
        padIcon: Code4RenaPadImg,
        icon: Code4RenaImg,
        status: 'Auditing...',
        reportTime: 'Jun 2023',
        padIconWidth: 144,
        padIconHeight: 24,
        width: 288,
        height: 48
    },
    {
        padIcon: CoinSpectPadImg,
        icon: CoinSpectImg,
        status: 'Auditing...',
        reportTime: 'Jul 2023',
        padIconWidth: 130,
        padIconHeight: 28,
        width: 216,
        height: 48
    }
];

export default function Audit() {

    const handleReadMore = () => {
        window.open('https://docs.erd.xyz', "_target");
    };

    return (
        <div className={s.wrap}>
            <p className={s.title}>Audit</p>
            <section className={s.section}>
                <div className={s.auditList}>
                    {AuditList.map(audit => {
                        return (
                            <div key={audit.icon} className={s.audit}>
                                <div>
                                    <img
                                        src={audit.icon}
                                        alt='audit icon'
                                        className={s.auditIcon}
                                        style={{ width: audit.width, height: audit.height }}
                                    />
                                    <img
                                        src={audit.padIcon}
                                        alt='audit icon'
                                        className={s.auditPadIcon}
                                        style={{ width: audit.padIconWidth, height: audit.padIconHeight }}
                                    />
                                    <p className={s.auditTime}>{audit.reportTime}</p>
                                </div>
                                <p className={s.auditStatus}>{audit.status}</p>
                            </div>
                        );
                    })}
                </div>
                <div className={s.auditCard}>
                    <img className={s.mascot} src={MascotImg} alt='mascot img' />
                    <div style={{ position: 'relative' }}>
                        <p className={s.auditTitle}>We will do our best to protect your assets</p>
                        <p className={s.auditDesc}>Following the audit by the world-leading security companies, the security of the ERD protocol is of the highest priority.</p>
                    </div>
                    <div className={s.auditBtn} onClick={handleReadMore}>
                        Read more
                        <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.2314 2.96206L6.23148 7.48018L7.87976 7.48018L7.87968 0.999994C7.87968 0.723854 7.65582 0.5 7.37968 0.5L0.46243 0.499999L0.46243 1.94224L5.0659 1.94224L5.51797e-05 7.48018L1.16556 8.5L6.2314 2.96206Z" fill="white" fillOpacity="0.7"/>
                        </svg>
                    </div>
                </div>
            </section>
        </div>
    );
}
