class DataService{
    async loadProductsFromJSONFile(){
        try{
            const response = await fetch('/products-data/products.json');
            const data = await response.json();
            return data;
        }catch(error){
            console.log(error);
        }
    }
}

export default new DataService();