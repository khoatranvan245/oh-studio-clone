import './BlurEffect.css'

const BlurEffect = ({ name, status, isHover }) => {
  return (
    <div className='blurEffect'>
      {status == 'ready' ? (
        <div className="ready">
          <p>{name}</p>
          <span className="material-symbols-outlined">
            arrow_outward
          </span>
        </div>
      ) : (
        <div className="not-ready">
          <div className='des'>
            <p>{name}</p>
            <p>Coming Soon</p>
          </div>
          <span className="material-symbols-outlined">lock</span>
        </div>
      )}
    </div>
  )
}

export default BlurEffect
