import styles from './ProfilePicture.module.css'

const ProfilePicture = () => {
    return (
        <div className={styles.profilePic}>
            <div className={[styles.pic1, 'animated second'].join(' ')}></div>
            <div className={[styles.pic2, 'animated third'].join(' ')}></div>
        </div>
    )
}

export default ProfilePicture