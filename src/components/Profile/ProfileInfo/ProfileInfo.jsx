import React from 'react';
import Preloader from '../../common/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {

    if(!props.profile) {
        return <div className={s.preloaderDiv}><Preloader /></div>
    }
    
    return (
        <div>
            <div>
                <img
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={ props.profile.photos.large } alt='' />

                <h3 className={s.fullName}>
                    { props.profile.fullName }
                </h3>

                <div className={s.text}>
                    { props.profile.aboutMe }
                </div>

            </div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
        </div>
    )
}

export default ProfileInfo