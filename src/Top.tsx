import s from './Top.module.scss';

export default function Top({ children }: any) {
    return <div className={s.wrap}>
        <div className={s.container}>
            {children}
        </div>
    </div>;
}
