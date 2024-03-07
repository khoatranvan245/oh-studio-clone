import styles from './ProductList.module.css'
import ProductItem from './ProductItem/ProductItem'

const list = [
  {
    id: 1,
    name: 'Aire',
    status: 'ready',
    demo: 'img',
    src: 'https://framerusercontent.com/images/kfr022WaJ8YJUyZFmdwCB3pXhs.jpg?scale-down-to=1024',
  },
  {
    id: 2,
    name: 'Correlated',
    status: 'ready',
    demo: 'img',
    src: 'https://framerusercontent.com/images/QVKFKT3dyGxloXfzzpurVKNMM6M.jpg?scale-down-to=1024',
  },
  {
    id: 3,
    name: 'Channel 5',
    status: 'ready',
    demo: 'img',
    src: 'https://framerusercontent.com/images/AX9PukosNfGVcfXw3YapiYpl9g.jpg?scale-down-to=1024',
  },
  {
    id: 4,
    name: 'Ronal Abram',
    status: 'ready',
    demo: 'img',
    src: 'https://framerusercontent.com/images/BAXywubxN8sAhfJg3AgGgFI.jpg?scale-down-to=1024',
  },
  {
    id: 5,
    name: 'Propeller',
    status: 'ready',
    demo: 'video',
    src: 'https://framerusercontent.com/modules/assets/XuzMZ3Z1QQHKltPqRjzGnsWs27M~Jq48dGctHPeHtnn90xE_Aem-3HQJB_aNVwfu2fao5Ok.mp4',
  },
  {
    id: 6,
    name: 'Schuh',
    status: 'ready',
    demo: 'img',
    src: 'https://framerusercontent.com/images/3WALBX7nnuG7p85CLjlVmWPDHw.jpg?scale-down-to=1024',
  },
  {
    id: 7,
    name: 'Paperstreet',
    status: 'ready',
    demo: 'img',
    src: 'https://framerusercontent.com/images/e3moUZXfgtjYQY4ILakIMaz4n7s.jpg?scale-down-to=2048',
  },
  {
    id: 8,
    name: 'OH.SUPPLY',
    status: 'ready',
    demo: 'video',
    src: 'https://framerusercontent.com/modules/assets/SGjFvgcbK7s4yKh0xwuNjriMNII~5SCIlrVv6SNR5PFMjsMv3qAIi3sYsG2gjdlB0qM-tng.mp4',
  },
  {
    id: 9,
    name: 'Monokel Eyewear',
    status: 'ready',
    demo: 'img',
    src: 'https://framerusercontent.com/images/aH1eUgCIIIrbJF7TUlaKAehoI.jpg?scale-down-to=1024',
  },
  {
    id: 10,
    name: 'Lawtrades',
    status: 'not-ready',
    demo: 'img',
    src: 'https://framerusercontent.com/images/UbS7rWmAwWxjtwM7oaWwRuGo.jpg?scale-down-to=1024',
  },
  {
    id: 11,
    name: 'Baselworld',
    status: 'not-ready',
    demo: 'img',
    src: 'https://framerusercontent.com/images/hQVBeiDNGU2TfeDJALuhawlcto.jpg?scale-down-to=1024',
  },
  {
    id: 12,
    name: 'NYCB',
    status: 'ready',
    demo: 'video',
    src: 'https://framerusercontent.com/modules/assets/NieGBlxBdgpz9QCHV5Aj89rWjVg~DPEeC0jYyBwx9c865cOkUi-KzBM-3ukyhpgtPhvYo_U.mp4'
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
              src={item.src}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default ProductList
