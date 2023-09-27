class DataService{
    async loadProductsFromJSONFile(){
        try{
            //lokalno
             const response = await fetch('/products-data/products.json');
            //kada deploy na gh-pages, mada ne radi!!
            // const response = await fetch('internship-studio-present-react/products-data/products.json');
            const data = await response.json();
            return data;
        }catch(error){
            console.log(error);
        }
    }
}

export default new DataService();