import { ProductHero } from "@/components";
import { useParams } from "react-router-dom";
import BagData from "@/Data/BagData";
import { Error404 } from ".";


const ProductPage = () => {
  const { slug } = useParams();
  const product = BagData.find((item) => item.slug === slug);
  if (!product) {
    return <Error404 />;
  }
  return (
    <div>
      <ProductHero {...product} />
    </div>
  )
}


export default ProductPage;