export const productsLoader = async () => {
    try {
        const res = await fetch('../data/shoesData.json');
       // alert("first");
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        return data;
      } catch (error) {
        //alert("error");
        console.error("Error fetching or parsing JSON:", error);
        return { error: "Failed to load data" };
      }
  };
  