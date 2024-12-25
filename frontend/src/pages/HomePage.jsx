import React, { useEffect } from "react";
import { useProductStore } from "../stores/ProductStore.jsx";

function Homepage() {
  const products = useProductStore((state) => state.products);
  const fetchProducts = useProductStore((state) => state.fetchProducts);

  useEffect(() => {
    fetchProducts(); // Fetch products when the component mounts
  }, [fetchProducts]);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero bg-light text-center py-5">
        <div className="container">
          <h1 className="display-4">Welcome to E-Shop</h1>
          <p className="lead">
            Your one-stop destination for the best products at unbeatable prices.
          </p>
          <a href="/products" className="btn btn-primary btn-lg mt-3">
            Shop Now
          </a>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products py-5">
        <div className="container">
          <h2 className="text-center mb-4">Featured Products</h2>
          <div className="row">
            {products.length > 0 ? (
              products.map((product) => (
                <div className="col-md-4" key={product._id}>
                  <div className="card">
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt={product.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">${product.price.toFixed(2)}</p>
                      <a href={`/product/${product._id}`} className="btn btn-outline-primary">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">No products available</p>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta bg-primary text-white text-center py-5">
        <div className="container">
          <h2>Don't miss our exclusive deals!</h2>
          <p className="lead">
            Sign up for our newsletter to stay updated on the latest offers.
          </p>
          <a href="/signup" className="btn btn-light btn-lg mt-3">
            Sign Up Now
          </a>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
