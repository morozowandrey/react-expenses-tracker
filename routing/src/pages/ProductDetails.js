import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const routeParams = useParams()

  return (
    <section>
      <h1 className="">Product details</h1>
      <p className="">{routeParams.productId}</p>
    </section>
  )
}

export default ProductDetails
