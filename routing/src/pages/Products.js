import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <section>
      <h1>Products page</h1>
      <ul className="">
        <li className="">
          <Link to="/products/book">A book</Link>
        </li>
        <li className="">
          <Link to="/products/film">A film</Link>
        </li>
        <li className="">
          <Link to="/products/carpet">A carpet</Link>
        </li>
      </ul>
    </section>
  )
}

export default Products
