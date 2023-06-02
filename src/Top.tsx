import s from './Top.module.scss';

import Poster from 'src/asset/poster.jpg';

const Video = 'https://erd-fe-storage.s3.amazonaws.com/erd.mp4';

export default function Top({ children }: any) {
    return <div className={s.wrap}>
        <div className={s.mask}>
            <video
                loop
                muted
                autoPlay
                src={Video}
                playsInline
                preload='auto'
                poster={Poster}
                controls={false}
                disableRemotePlayback
                disablePictureInPicture
            />
        </div>
        <div className={s.container}>
            {children}
        </div>
    </div>;
}
