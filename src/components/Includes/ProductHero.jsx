import {
  PriceFormat,
  PercentageFormat,
  NumberCompactFormat,
} from "@/lib/formater";
import { FaRegHeart, FaRegStar, FaStar } from "react-icons/fa";
import { HiArrowUturnLeft, HiOutlineShoppingBag } from "react-icons/hi2";
import { MdOutlineSupportAgent } from "react-icons/md";
import { PiBarcode } from "react-icons/pi";
import { ProductCarousel } from "..";
import { Button } from "../ui/button";
import PropTypes from "prop-types";

const ProductHero = ({
  name,
  images,
  rating,
  originalPrice,
  offerPrice,
  details,
  reviews,
}) => {
  // const star = 4;
  // const originalPrice = 2000;
  // const offerPrice = 1600;
  // const details = [
  //   {
  //     title: "Size",
  //     value: '10" x 10" x 10"',
  //   },
  // ];

  rating = Number(rating);
  originalPrice = Number(originalPrice);
  offerPrice = Number(offerPrice);
  reviews = Number(reviews);

  let imageObjArray;
  if (images) {
    imageObjArray = images.map((image, index) => ({
      id: index,
      name: `${name} ${index + 1}`,
      src : image
    }));
  }

  if(imageObjArray && imageObjArray.length < 4){
    imageObjArray = imageObjArray.concat(imageObjArray)
  }


  return (
    <div className="container mx-auto px-4 py-8 md:py-12 pb-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4">
        <div className="flex justify-center items-center">
          <ProductCarousel data={imageObjArray || productImages} name="Product-Main" orientation="vertical" />
        </div>
        <div className="px-8 md:px-6">
          {/* <h2 className="text-lg ">Brand of Item</h2> */}
          <h1 className="text-3xl font-semibold my-2">
            {name || "Product Name"}
          </h1>
          <div className="flex gap-2 text-2xl my-2 items-center">
            {Array(5)
              .fill()
              .map((_, i) =>
                i + 1 <= rating ? (
                  <FaStar key={i} className="fill-yellow-400" />
                ) : (
                  <FaRegStar key={i} className="fill-yellow-400" />
                )
              )}
            <p className="text-base pt-1">
              {NumberCompactFormat(Number(reviews) || 0)} Reviews
            </p>
          </div>
          {/* <p className="text-5xl font-bold my-4">{formatPrice(2000)}</p> */}
          <div className="mt-4">
            <div>
              <div className="bg--800 flex items-center gap-2 rounded-md px-2 py-1 text-gray-100">
                <span
                  className="text-4xl lg:text-5xl font-light text-red-500"
                  aria-label="Offer"
                >
                  {PercentageFormat(
                    (offerPrice - originalPrice) / originalPrice
                  ) || "20%"}
                </span>

                <span
                  className="text-2xl lg:text-2xl"
                  aria-label="Discounted Price"
                >
                  {PriceFormat(offerPrice)}
                </span>
              </div>
              <div className="flex items-center rounded-md px-2 text-gray-200">
                <span className="text-sm">
                  Orginal Price:{" "}
                  <span className="line-through" aria-label="Original Price">
                    {PriceFormat(originalPrice)}
                  </span>
                </span>
              </div>
            </div>
            <div className="mt-1 flex items-center gap-2">
              <span className="px-2 text-sm">Inclusive of all taxes</span>
            </div>
          </div>

          {details && details.length > 0 ? (
            <div className="my-4">
              {details.map((detail, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-sm font-semibold">{Object.keys(detail)?.at(0).slice(0, 1).toUpperCase() + Object.keys(detail)?.at(0).slice(1)}</span>
                  <span className="text-sm">:</span>
                  <span className="text-sm">{detail[Object.keys(detail)?.at(0)]}</span>
                </div>
              ))}
            </div>
          ) : null}
          <div className="my-4 max-w-sm ">
            <div className="mt-8">
              <Button className="w-full bg-[#f0c14b] text-black hover:bg-[#cc9a2f]/80">
                Buy Now
              </Button>
              <div className="flex gap-4 my-4">
                <Button className="flex-1 text-black px-4 py-2 rounded bg-white hover:bg-gray-400">
                  Add to Cart
                </Button>
                <Button className="text-2xl" size="icon">
                  <FaRegHeart />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-4 my-8 mb-2 mt-4 md:mt-8 lg:mt-12">
        <div className="flex flex-col items-center justify-center px-4 py-2">
          <PiBarcode className="text-3xl md:text-3xl lg:text-4xl" />
          <p className="text-base md:text-lg font-semibold my-2 text-center">
            Guarantee and Authenticity
          </p>
          <p className="text-xs md:text-sm text-center">
            Our products are 100% authentic and genuine. We source our products
            from the best brands and manufacturers.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center px-4 py-2">
          <HiArrowUturnLeft className="text-3xl md:text-3xl lg:text-4xl" />
          <p className="text-base md:text-lg font-semibold my-2 text-center">
            Free Exchange and Return
          </p>
          <p className="text-xs md:text-sm text-center">
            We offer free exchange and return on all products. If you are not
            satisfied with the product, you can return it within 7 days of
            purchase.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center px-4 py-2">
          <HiOutlineShoppingBag className="text-3xl md:text-3xl lg:text-4xl" />
          <p className="text-base md:text-lg font-semibold my-2 text-center">
            Large Selection of Products
          </p>
          <p className="text-xs md:text-sm text-center">
            We have a large selection of products to choose from. You can find
            everything you need for your home and office at our store.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center px-4 py-2">
          <MdOutlineSupportAgent className="text-3xl md:text-3xl lg:text-4xl" />
          <p className="text-base md:text-lg font-semibold my-2 text-center">
            24/7 Customer Support
          </p>
          <p className="text-xs md:text-sm text-center">
            Our customer support team is available 24/7 to help you with any
            questions or concerns you may have. We are here to help you with
            anything you need.
          </p>
        </div>
      </div>
    </div>
  );
};

const productImages = [
  {
    id: 1,
    name: "Product 1",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    id: 2,
    name: "Product 2",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f",
  },
  {
    id: 3,
    name: "Product 3",
    image: "https://images.unsplash.com/photo-1560343090-f0409e92791a",
  },
  {
    id: 4,
    name: "Product 4",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    id: 5,
    name: "Product 5",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f",
  },
  {
    id: 6,
    name: "Product 6",
    image: "https://images.unsplash.com/photo-1560343090-f0409e92791a",
  },
  {
    id: 7,
    name: "Product 7",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    id: 8,
    name: "Product 8",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
  },
  {
    id: 9,
    name: "Product 9",
    image: "https://plus.unsplash.com/premium_photo-1675896084254-dcb626387e1e",
  },
  {
    id: 10,
    name: "Product 10",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    id: 11,
    name: "Product 11",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
  },
  {
    id: 12,
    name: "Product 12",
    image: "https://plus.unsplash.com/premium_photo-1675896084254-dcb626387e1e",
  },
];

ProductHero.propTypes = {
  name: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string),
  rating: PropTypes.number,
  originalPrice: PropTypes.number,
  offerPrice: PropTypes.number,
  details: PropTypes.arrayOf(PropTypes.object),
  reviews: PropTypes.number,
};

export default ProductHero;
