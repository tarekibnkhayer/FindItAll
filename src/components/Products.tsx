


const Products = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json();

    return (
        <div className="max-w-7xl mx-auto">
           <div className="grid xl:grid-cols-3 gap-5">
           {
                products.map((product:any) => <div key={product.any} className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={product.image} alt="product pics"  className="h-96" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{product.title.slice(0,20)}</h2>
                  <p>{product.description.slice(0, 100)}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>)
            }
           </div>
        </div>
    );
};

export default Products;