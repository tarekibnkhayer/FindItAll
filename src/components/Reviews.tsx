/* eslint-disable @next/next/no-img-element */


const Reviews = () => {
    return (
       <div className="my-8 max-w-7xl mx-auto">
        <h2 className="text-center text-3xl mb-2">Customer Reviews</h2>
        <hr />
         <div className="grid lg:grid-cols-3 gap-4 mt-10">
            {/* review 1 */}
            <div className="border p-4"  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                <p className="text-xl">I absolutely love my purchase! The product arrived quickly and was exactly as described. The quality is outstanding, and I will definitely be ordering from this site again.</p>
                <div className="flex justify-center items-center gap-4">
                    <img src="https://i.ibb.co/CPJrdP8/alex-suprun-ZHv-M3-XIOHo-E-unsplash.jpg" alt=""  className="rounded-full w-16 h-16 mt-3"/>
                    <p>Ned Stark</p>
                </div>
            </div>
            {/* review 2 */}
            <div className="border p-4">
                <p className="text-xl">I was a bit hesitant to buy online, but I am so glad I did. The customer service was excellent, and the item exceeded my expectations. I highly recommend shopping here</p>
                <div className="flex justify-center items-center gap-4">
                    <img src="https://i.ibb.co/k5nqNNq/edward-cisneros-H6wpor9mjs-unsplash.jpg" alt=""  className="rounded-full w-16 h-16 mt-3"/>
                    <p>Emilia Clarke</p>
                </div>
            </div>
            {/* review 3 */}
            <div className="border p-4" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <p className="text-xl">This is my third time ordering from this store, and once again, I am impressed. The shipping was fast, the packaging was secure, and the product is fantastic. I am a loyal customer now</p>
                <div className="flex justify-center items-center gap-4">
                    <img src="https://i.ibb.co/fXpFBpT/michael-dam-m-EZ3-Po-FGs-k-unsplash.jpg" alt=""  className="rounded-full w-16 h-16 mt-3"/>
                    <p>Sophie Turner</p>
                </div>
            </div>
           
        </div>
       </div>
    );
};

export default Reviews;