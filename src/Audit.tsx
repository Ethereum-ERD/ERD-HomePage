import cx from 'classnames';

import s from './Audit.module.scss';

import PeckShieldMobileImg from 'src/asset/audit/peckshield-mobile.svg';
import PeckShieldPadImg from 'src/asset/audit/peckshield-pad.svg';
import PeckShieldImg from 'src/asset/audit/peckshield.svg';
import HalBurnImg from 'src/asset/audit/halburn.svg';
import HalBurnMobileImg from 'src/asset/audit/halburn-mobile.svg';
import HalBurnPadImg from 'src/asset/audit/halburn-pad.svg';
import QuantStampMobileImg from 'src/asset/audit/quantstamp-mobile.svg';
import QuantStampPadImg from 'src/asset/audit/quantstamp-pad.svg';
import QuantStampImg from 'src/asset/audit/quantstamp.svg';
import MascotImg from 'src/asset/mascot.png';

enum AuditStatus {
    Pending = 1,
    Fulfill
}

const AuditList = [
    {
        padIcon: PeckShieldPadImg,
        icon: PeckShieldImg,
        mobileIcon: PeckShieldMobileImg,
        status: AuditStatus.Fulfill,
        reportTime: 'May 2023',
        width: 209,
        padIconWidth: 137,
        mobileIconWidth: 137,
        link: 'https://github.com/Ethereum-ERD/ERD-Audits/blob/main/PeckShield-Audit-Report-ERD-v1.0.pdf'
    },
    {
        padIcon: HalBurnPadImg,
        icon: HalBurnImg,
        mobileIcon: HalBurnMobileImg,
        status: AuditStatus.Fulfill,
        reportTime: 'Jun 2023',
        padIconWidth: 121,
        width: 215,
        mobileIconWidth: 121,
        link: 'https://github.com/Ethereum-ERD/ERD-Audits/blob/main/ERD_Ethereum_Reserve_Dollar_Smart_Contract_Security_Assessment_Report_Halborn_Final.pdf'
    },
    {
        padIcon: QuantStampPadImg,
        mobileIcon: QuantStampMobileImg,
        icon: QuantStampImg,
        status: AuditStatus.Fulfill,
        reportTime: 'Jul 2023',
        padIconWidth: 122,
        mobileIconWidth: 122,
        width: 206,
        link: 'https://github.com/Ethereum-ERD/ERD-Audits/blob/main/Ethereum%20Reserve%20Dollar%20(ERD)%20-%20Report.pdf'
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
                                    <div className={s.iconWrap}>
                                        <img
                                            src={audit.icon}
                                            alt='audit icon'
                                            style={{ width: audit.width }}
                                        />
                                    </div>
                                    <div className={s.padIconWrap}>
                                        <img
                                            src={audit.padIcon}
                                            alt='audit icon'
                                            style={{ width: audit.padIconWidth }}
                                        />
                                    </div>
                                    <div className={s.mobileIconWrap}>
                                        <img
                                            src={audit.mobileIcon}
                                            alt='audit icon'
                                            style={{ width: audit.mobileIconWidth }}
                                        />
                                    </div>
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
