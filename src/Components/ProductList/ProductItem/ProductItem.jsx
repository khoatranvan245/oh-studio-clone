import BlurEffect from './BlurEffect'
import styles from './ProductItem.module.css'

const ProductItem = ({ id, name, status, demo, src }) => {
  

  return (
    <div className={styles.item}>
      <li>
        {status == 'ready' ? (
          <a href="">
            {demo == 'img' ? (
              <img src={src} />
            ) : (
              <video
                src={src}
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
              <img src={src} />
            ) : (
              <video
                src={src}
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
