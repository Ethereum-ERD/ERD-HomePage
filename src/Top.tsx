import s from './Top.module.scss';

import Poster from 'src/asset/poster.jpg';

export default function Top({ children }: any) {
    return <div className={s.wrap}>
        <div className={s.mask}>
            <img src={Poster} alt='' />
        </div>
        <div className={s.container}>
            {children}
        </div>
    </div>;
}
