export const productDetailLoader = async ({ params }) => {
    const response = await fetch('../data/shoesData.json');
    if (!response.ok) {
      throw new Error('Failed to fetch product details');
    }
    const products = await response.json();
    return products.find(product => product.id === parseInt(params.id));
  };
  