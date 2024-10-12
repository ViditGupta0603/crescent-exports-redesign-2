import './Bags.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/swiper-bundle.css';

const commonSwiperSettings = {
  className: 'productswiper',
  modules: [Navigation, Pagination, Scrollbar, A11y, EffectCreative],
  spaceBetween: 10,
  slidesPerView: 1,
  navigation: true,
  effect: 'creative',
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ['100%', 0, 0],
    },
  },
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: true,
};

const Bags = () => {
  return (
    <div className="bags" id='bagsection'>
      <h1>Bags</h1>

      <div className="products">

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401447/zsontjrbt5crrtxvd6v0.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401447/zsontjrbt5crrtxvd6v0.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401447/w9aju2l9sshvfclgjhds.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401447/w9aju2l9sshvfclgjhds.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401449/taxzqca6fu11hmwagqpm.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401449/taxzqca6fu11hmwagqpm.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401449/sj17h1jf3mkhgoisrupc.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401449/sj17h1jf3mkhgoisrupc.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>RECTANGLE STORAGE LAMINATED PRINTED</h2>
            <h3>SIZE:- 22L X 11W X 12H</h3>
          </div>

        </div>

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401451/bnroniheqgp0h9esjt3f.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401451/bnroniheqgp0h9esjt3f.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401450/lhay6lm973ji1nmu8cad.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401450/lhay6lm973ji1nmu8cad.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401457/gymjkmyxa8vwj1nk5d5z.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401457/gymjkmyxa8vwj1nk5d5z.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401457/mzs14hf7xnxjp5le3o4b.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401457/mzs14hf7xnxjp5le3o4b.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401462/exjipuh0tsqvvwsqcw6c.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401462/exjipuh0tsqvvwsqcw6c.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401462/fsxpsud6139sht0cki1f.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401462/fsxpsud6139sht0cki1f.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>SQUARE STORAGE LAMINATED PRINTED</h2>
            <h3>SIZE:- 12L X 12W X 12H</h3>
          </div>

        </div>

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401462/enuh02akdziqq7zgv7p3.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401462/enuh02akdziqq7zgv7p3.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401447/yzqph3knzi89s5fxfewy.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401447/yzqph3knzi89s5fxfewy.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>LAMINATED STORAGE ORGANIZER</h2>
            <h3>SIZE:- 10L X 15W X 6H</h3>
          </div>

        </div>

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401445/lcombpz48c9fefqz26i3.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401445/lcombpz48c9fefqz26i3.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401446/h20to2pribqfjfvkdija.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401446/h20to2pribqfjfvkdija.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>SQUARE STORAGE LAMINATED PRINTED WITH FLAP</h2>
            <h3>SIZE:- 16L X 16W X 16H</h3>
          </div>

        </div>

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401446/lqjjtn1xsl6ordp5joog.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401446/lqjjtn1xsl6ordp5joog.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401446/z9wc4vekoxclu4ee1w6d.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401446/z9wc4vekoxclu4ee1w6d.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>SQUARE STORAGE LAMINATED PRINTED</h2>
            <h3>SIZE:- 12L X 12W X 19H</h3>
          </div>

        </div>

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401446/mqxfmepcly3xjbcrdii2.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401446/mqxfmepcly3xjbcrdii2.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401446/ganxkj8ajxo4azzkkkmz.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401446/ganxkj8ajxo4azzkkkmz.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>SQUARE STORAGE HEAVY CANVAS PRINTED</h2>
            <h3>SIZE:- 12L X 12W X 12H</h3>
          </div>

        </div>

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401446/sxl4adhskquisohd7zfc.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401446/sxl4adhskquisohd7zfc.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401446/uz6xcajcw2rky3jlvya9.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401446/uz6xcajcw2rky3jlvya9.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401447/kio2ff8vgu4zjco4e9wj.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401447/kio2ff8vgu4zjco4e9wj.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401447/dauryct9rryt52uyc7u4.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401447/dauryct9rryt52uyc7u4.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401448/lwuljf1dld3vcus3qjoo.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401448/lwuljf1dld3vcus3qjoo.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401449/f1sytblhg4re9sygp0ja.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401449/f1sytblhg4re9sygp0ja.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>RECTANGLE STORAGE LAMINATED </h2>
            <h3>SIZE:- 22L X 11W X 12H</h3>
          </div>

        </div>

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401446/aeyma064x7zikyclsmaq.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401446/aeyma064x7zikyclsmaq.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>RECTANGLE STORAGE SHIMMER LAMINATED </h2>
            <h3>SIZE:- 22L X 11W X 12H</h3>
          </div>

        </div>

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401451/ah38ydwiimhnu2we3cn6.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401451/ah38ydwiimhnu2we3cn6.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401452/ywh8xq7cgiwvv3tsbvzw.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401452/ywh8xq7cgiwvv3tsbvzw.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401451/ovekhintktkbtbazorcr.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401451/ovekhintktkbtbazorcr.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>SUITCASE STORAGE LAMINATED</h2>
            <h3>SIZE:- 20L X 16W X 12H</h3>
          </div>

        </div>
        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401452/rrtvxm7zk3tdpmfjdesw.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401452/rrtvxm7zk3tdpmfjdesw.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401452/askvvrypcmeh76uvmjeq.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401452/askvvrypcmeh76uvmjeq.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>SUITCASE STORAGE LAMINATED PRINTED</h2>
            <h3>SIZE:- 20L X 16W X 12H</h3>
          </div>

        </div>
        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401447/umwor9iqk0yi6uapi3np.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401447/umwor9iqk0yi6uapi3np.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401448/jnnyylvbhrzyqseljnrs.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401448/jnnyylvbhrzyqseljnrs.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>WALL HANGING STORAGE 5 POCKET</h2>
            <h3>SIZE:- 17 X 25</h3>
          </div>

        </div>
        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401448/anyoqqj5gp9lfnpikeej.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401448/anyoqqj5gp9lfnpikeej.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>HANGING BED POCKET </h2>
            <h3>SIZE:- 29 X 10</h3>
          </div>

        </div>
        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401450/xkdiwrnrunaupv7c8imh.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401450/xkdiwrnrunaupv7c8imh.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401450/l9se9jikx7jy0wsddluz.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401450/l9se9jikx7jy0wsddluz.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401450/qgejtu4ypdaitn5y08ug.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401450/qgejtu4ypdaitn5y08ug.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401450/ts7bxc8bnz8vdlkgqgpj.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401450/ts7bxc8bnz8vdlkgqgpj.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>LAMINATED SUITCASE</h2>
            <h3>SIZE:- 24 X 12 X 10 / 24 X 18 X 15, 16 X 12 X 7</h3>
          </div>

        </div>
        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401457/koq3txipfgdchdjipk92.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401457/koq3txipfgdchdjipk92.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401457/fj1cck4fxlrgktz0sdnb.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401457/fj1cck4fxlrgktz0sdnb.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401457/wcm0edczmdn73hz8p4j7.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401457/wcm0edczmdn73hz8p4j7.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>ROUND TAPASTY STORAGE</h2>
            <h3>SIZE:- 13D X 12H, 12D X 12H, 10D X 9H</h3>
          </div>

        </div>
        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401458/hlep2w8yxaygpuwjvtdy.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401458/hlep2w8yxaygpuwjvtdy.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401458/nmh8rmtekqgjigty9pnz.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401458/nmh8rmtekqgjigty9pnz.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>ROUND STORAGE HEAVY CANVAS PRINTED</h2>
            <h3>SIZE:- 16D X 22H</h3>
          </div>

        </div>
        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401458/zonp9kisx9uw9zvkugnk.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401458/zonp9kisx9uw9zvkugnk.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401459/ppk2yotyuujca39hl251.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401459/ppk2yotyuujca39hl251.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401459/htxw9qzmtasvv1d6nenv.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401459/htxw9qzmtasvv1d6nenv.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401459/t9dt8pfgpvfsiumhdsfq.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401459/t9dt8pfgpvfsiumhdsfq.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401460/wor5exzhijfmvosghcy7.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401460/wor5exzhijfmvosghcy7.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401460/jqxm37whvuuh7nisr53h.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401460/jqxm37whvuuh7nisr53h.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401460/c0xpfyqriqkri3lq2im5.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401460/c0xpfyqriqkri3lq2im5.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401454/hgebtbrk5n4nbtlci7vr.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401454/hgebtbrk5n4nbtlci7vr.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>ROUND STORAGE LAMINATED</h2>
            <h3>SIZE:- 16D X 22H</h3>
          </div>

        </div>
        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401454/tmgnienh50qzbhyhbjek.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401454/tmgnienh50qzbhyhbjek.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401454/q9pq1vbm2r9bhrroyy68.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401454/q9pq1vbm2r9bhrroyy68.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>UNDERBED LAMINATED NATURAL</h2>
            <h3>SIZE:- 30L X 18W X 6H</h3>
          </div>

        </div>
        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401454/bonlbfwjyo0wral7yfsa.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401454/bonlbfwjyo0wral7yfsa.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401455/rztiokb6afzf6n6ux3rq.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401455/rztiokb6afzf6n6ux3rq.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>SUITCASE LAMINATED PRINTED</h2>
            <h3>SIZE:- 24 X 12 X 10 / 16 X 12 X 7</h3>
          </div>

        </div>
        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401463/peu9fm9wzelr83uan10z.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401463/peu9fm9wzelr83uan10z.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401463/e1pnavwkwjertvjmywdp.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401463/e1pnavwkwjertvjmywdp.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401456/piqzhpfipgy0th4pkgi8.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401456/piqzhpfipgy0th4pkgi8.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401456/uggdc3pwb7xymab1cpps.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401456/uggdc3pwb7xymab1cpps.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>JUTE STORAGE BASKET</h2>
            <h3>SIZE:- 9D X 10H / 10D X 11H, 11D X 12H, 12D X 13H</h3>
          </div>

        </div>
        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401463/lrga6hynpnxahzbgl2y9.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401463/lrga6hynpnxahzbgl2y9.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401463/dkznwup5drh7uiy8gk8t.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401463/dkznwup5drh7uiy8gk8t.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>WARDROBE SMALL HONEYCOMB DESIGN</h2>
            <h3>SIZE:- 24 X 39</h3>
          </div>

        </div>
        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401464/y3309b9gwqsax80lkxri.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401464/y3309b9gwqsax80lkxri.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401464/zyeb0tuay1lxeldttkox.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401464/zyeb0tuay1lxeldttkox.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401465/md5ppqocnigltggvw6pp.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401465/md5ppqocnigltggvw6pp.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401464/xmu3w2bearjgkafiibo6.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401464/xmu3w2bearjgkafiibo6.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>LUNCH BOX</h2>
            <h3>SIZE:- AVERAGE</h3>
          </div>

        </div>
        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401465/rzw98mu8jls6akmtx44e.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401465/rzw98mu8jls6akmtx44e.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401465/qdmrzcmza6cx2ygicqqq.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401465/qdmrzcmza6cx2ygicqqq.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401465/scchlifbqgh2s3dillkc.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401465/scchlifbqgh2s3dillkc.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>COTTON BAG PACK</h2>
            <h3>SIZE:- 14 X 16</h3>
          </div>

        </div>
        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401466/lutcbsk9ywq02t8prajf.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401466/lutcbsk9ywq02t8prajf.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401466/cfmwfsusrpopb4nlaxm4.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401466/cfmwfsusrpopb4nlaxm4.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401466/l8ln2fozcxuayb7eugu5.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401466/l8ln2fozcxuayb7eugu5.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>HANGING HANDBAG ORGANIZER</h2>
            <h3>SIZE:- 15 X 36</h3>
          </div>

        </div>
        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="hhttps://res.cloudinary.com/dhk9t1bus/image/upload/v1728401461/z6ay3bz4q4oftn333dnc.jpg" target='_blank'><img loading="lazy" src="hhttps://res.cloudinary.com/dhk9t1bus/image/upload/v1728401461/z6ay3bz4q4oftn333dnc.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>STORAGE SET</h2>
            <h3>LAUNDRY BAG, SHOE RACK, COAT COVER, RECTANGLE, HEAVY TOTE BAG, STORAGE BOX, UNDER BED</h3>
          </div>

        </div>
        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401462/yasbuknclk13kxukliko.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401462/yasbuknclk13kxukliko.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401462/rn7rjwscyircxticbugr.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401462/rn7rjwscyircxticbugr.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>HEAVY CANVAS TOTE BAG</h2>
            <h3>SIZE:- 18 X 14 X 22</h3>
          </div>

        </div>
        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401466/bd5lj2jvsn9flkbyhqup.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401466/bd5lj2jvsn9flkbyhqup.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>STORAGE BOX</h2>
            <h3>SIZE:- 12 X 12 X 7</h3>
          </div>

        </div>
        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401466/ysnkz3md2zyg3t9mcxbm.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728401466/ysnkz3md2zyg3t9mcxbm.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>LAMINATED ROLL CRUNCH</h2>
            <h3>SIZE:- 10D X 12H</h3>
          </div>

        </div>
        

      </div>

    </div>
  );
}

export default Bags