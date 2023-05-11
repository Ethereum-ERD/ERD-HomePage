import s from './Audit.module.scss';

import PeckShieldImg from 'src/asset/audit/peckshield.png';
import Code4RenaImg from 'src/asset/audit/code4rena.png';
import CoinSpectImg from 'src/asset/audit/coinspect.png';

const AuditList = [
    {
        firmIcon: PeckShieldImg,
        status: 'Auditing...',
        reportTime: 'MAY 2023',
        width: 209,
        height: 51
    },
    {
        firmIcon: Code4RenaImg,
        status: 'Auditing...',
        reportTime: 'MAY 2023',
        width: 288,
        height: 48
    },
    {
        firmIcon: CoinSpectImg,
        status: 'Auditing...',
        reportTime: 'MAY 2023',
        width: 216,
        height: 48
    }
];

export default function Audit() {
    return (
        <div className={s.wrap}>
            <p className={s.title}>Audit</p>
            <section className={s.section}>
                <div>
                    {AuditList.map(audit => {
                        return (
                            <div key={audit.firmIcon} className={s.audit}>
                                <div>
                                    <img
                                        src={audit.firmIcon}
                                        alt='audit firm icon'
                                        style={{ width: audit.width, height: audit.height }}
                                    />
                                    <p className={s.auditTime}>{audit.reportTime}</p>
                                </div>
                                <p className={s.auditStatus}>{audit.status}</p>
                            </div>
                        );
                    })}
                </div>
                <div className={s.auditCard}>
                    <div>
                        <p className={s.auditTitle}>We will do our best to protect your assets</p>
                        <p className={s.auditDesc}>Audited by the world’s leading security firms, security of the ERD Protocol is the highest priority.</p>
                    </div>
                    <div className={s.auditInfo}>
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
