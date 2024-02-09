import styles from './ProductList.module.css'
import ProductItem from './ProductItem/ProductItem'

const list = [
  {
    id: 1,
    name: 'Aire',
    status: 'ready',
    demo: 'img',
  },
  {
    id: 2,
    name: 'Correlated',
    status: 'ready',
    demo: 'img',
  },
  {
    id: 3,
    name: 'Channel 5',
    status: 'ready',
    demo: 'img',
  },
  {
    id: 4,
    name: 'Ronal Abram',
    status: 'ready',
    demo: 'img',
  },
  {
    id: 5,
    name: 'Propeller',
    status: 'ready',
    demo: 'video',
  },
  {
    id: 6,
    name: 'Schuh',
    status: 'ready',
    demo: 'img',
  },
  {
    id: 7,
    name: 'Paperstreet',
    status: 'ready',
    demo: 'img',
  },
  {
    id: 8,
    name: 'OH.SUPPLY',
    status: 'ready',
    demo: 'video',
  },
  {
    id: 9,
    name: 'Monokel Eyewear',
    status: 'ready',
    demo: 'img',
  },
  {
    id: 10,
    name: 'Lawtrades',
    status: 'not-ready',
    demo: 'img',
  },
  {
    id: 11,
    name: 'Baselworld',
    status: 'not-ready',
    demo: 'img',
  },
  {
    id: 12,
    name: 'NYCB',
    status: 'ready',
    demo: 'video',
  },
]

const ProductList = () => {
  return (
    <div className={[styles.productList, 'animated', 'third'].join(' ')}>
      <ul>
        {list.map((item) => {
          return (
            <ProductItem
              name={item.name}
              key={item.id}
              id={item.id}
              status={item.status}
              demo={item.demo}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default ProductList
