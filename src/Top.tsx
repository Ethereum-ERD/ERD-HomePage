import { useState, memo } from 'react';
import s from './Top.module.scss';

import Poster from 'src/asset/poster.jpg';

const Video = 'https://erd-fe-storage.s3.amazonaws.com/erd-2.mp4';
const VideoM = 'https://erd-fe-storage.s3.amazonaws.com/erd-2.webm';

export default memo(function Top({ children }: any) {
    const [hidePoster, setHidePoster] = useState(false);

    return <div className={s.wrap}>
        <div className={s.mask}>
            <img src={Poster} alt='' style={{ opacity: hidePoster ? 0 : 1 }} />
            <video
                loop
                muted
                autoPlay
                playsInline
                preload='none'
                controls={false}
                disableRemotePlayback
                disablePictureInPicture
                onCanPlayThrough={() => setHidePoster(true)}
            >
                <source src={VideoM} type="video/webm" />
                <source src={Video} type='video/mp4' />
            </video>
        </div>
        <div className={s.container}>
            {children}
        </div>
    </div>;
});
