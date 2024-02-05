import BlurEffect from './BlurEffect'
import styles from './ProductItem.module.css'

const ProductItem = ({ id, name, status, demo }) => {
  const imgSrc = 'src\\assets\\pic' + id + '.webp'
  const videoSrc = 'src\\assets\\pic' + id + '.mp4'

  return (
    <div className={styles.item}>
      <li>
        {status == 'ready' ? (
          <a href="">
            {demo == 'img' ? (
              <img src={imgSrc} />
            ) : (
              <video
                src={videoSrc}
                autoPlay
                muted
                loop
                playsInline
              />
            )}
            <BlurEffect
              name={name}
              status={status}
            />
          </a>
        ) : (
          <a>
            {demo == 'img' ? (
              <img src={imgSrc} />
            ) : (
              <video
                src={videoSrc}
                autoPlay
                muted
                loop
                playsInline
              />
            )}
            <BlurEffect
              name={name}
              status={status}
            />
          </a>
        )}
      </li>
    </div>
  )
}

export default ProductItem
