import { useState } from 'react';
import s from './Top.module.scss';

import Poster from 'src/asset/poster.jpg';

const Video = 'https://erd-fe-storage.s3.amazonaws.com/erd.mp4';

export default function Top({ children }: any) {
    const [hidePoster, setHidePoster] = useState(false);

    return <div className={s.wrap}>
        <div className={s.mask}>
            <img src={Poster} alt='' style={{ opacity: hidePoster ? 0 : 1 }} />
            <video
                loop
                muted
                autoPlay
                src={Video}
                playsInline
                preload='auto'
                controls={false}
                disableRemotePlayback
                disablePictureInPicture
                onCanPlayThrough={() => setHidePoster(true)}
            />
        </div>
        <div className={s.container}>
            {children}
        </div>
    </div>;
}
