import axios from "axios";
export function getAllProducts(setProducts) {
  //API Integration
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      setProducts(res.data);
    })
    .catch((error) => {
      alert("Something went wrong");
    });
}

export function getCategorySpecificProducts(setProducts, category) {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      setProducts(() => {
        return res.data.filter((product) => {
          return product.category === category;
        });
      });
    })
    .catch((error) => {
      alert("Something went wrong");
      console.log(error);
    });
}
