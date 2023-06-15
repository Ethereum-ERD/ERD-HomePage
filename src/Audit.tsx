import cx from 'classnames';

import s from './Audit.module.scss';

import PeckShieldPadImg from 'src/asset/audit/peckshield-pad.png';
import Code4RenaPadImg from 'src/asset/audit/code4rena-pad.png';
import PeckShieldImg from 'src/asset/audit/peckshield.png';
import Code4RenaImg from 'src/asset/audit/code4rena.png';
import HalBurnImg from 'src/asset/audit/halburn.svg';
import MascotImg from 'src/asset/mascot.png';

enum AuditStatus {
    Pending = 1,
    Fulfill
}

const AuditList = [
    {
        padIcon: PeckShieldPadImg,
        icon: PeckShieldImg,
        status: AuditStatus.Fulfill,
        reportTime: 'May 2023',
        width: 209,
        height: 51,
        padIconWidth: 137,
        padIconHeight: 29,
        link: 'https://github.com/Ethereum-ERD/ERD-Audits/blob/main/PeckShield-Audit-Report-ERD-v1.0.pdf'
    },
    {
        padIcon: HalBurnImg,
        icon: HalBurnImg,
        status: AuditStatus.Pending,
        reportTime: 'Jun 2023',
        padIconWidth: 117,
        padIconHeight: 12,
        width: 233,
        height: 24,
        link: ''
    },
    {
        padIcon: Code4RenaPadImg,
        icon: Code4RenaImg,
        status: AuditStatus.Pending,
        reportTime: 'Jun 2023',
        padIconWidth: 144,
        padIconHeight: 24,
        width: 288,
        height: 48,
        link: ''
    }
];

export default function Audit() {

    const handleReadMore = () => {
        window.open('https://docs.erd.xyz', "_blank");
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
                                {audit.status === AuditStatus.Pending && (
                                    <p className={s.auditStatus}>Auditing...</p>
                                )}
                                {audit.status === AuditStatus.Fulfill && (
                                    <a
                                        target="_blank"
                                        href={`${audit.link}`}
                                        rel="noreferrer noopenner"
                                        className={cx(s.auditStatus, s.fulfill)}
                                    >
                                        View report
                                    </a>
                                )}
                            </div>
                        );
                    })}
                </div>
                <div className={s.auditCard}>
                    <img className={s.mascot} src={MascotImg} alt='mascot img' />
                    <div style={{ position: 'relative' }}>
                        <p className={s.auditTitle}>Sleep soundly knowing your assets are safe</p>
                        <p className={s.auditDesc}>ERD protocol security is our top priority. We're working with top audit companies to ensure your assets are never at risk.</p>
                    </div>
                    <div className={s.auditBtn} onClick={handleReadMore}>
                        Learn more
                        <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.2314 2.96206L6.23148 7.48018L7.87976 7.48018L7.87968 0.999994C7.87968 0.723854 7.65582 0.5 7.37968 0.5L0.46243 0.499999L0.46243 1.94224L5.0659 1.94224L5.51797e-05 7.48018L1.16556 8.5L6.2314 2.96206Z" fill="white" fillOpacity="0.7"/>
                        </svg>
                    </div>
                </div>
            </section>
        </div>
    );
}
