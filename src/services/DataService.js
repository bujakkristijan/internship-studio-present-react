class DataService{
    async loadProductsFromJSONFile(){
        try{
            //lokalno
            // const response = await fetch('/products-data/products.json');
            //otkad sam deploy na gh-pages, mora ova putanja da bi radilo i lokalno i na gh-pages!!
             const response = await fetch('/internship-studio-present-react/products-data/products.json');
            const data = await response.json();
            return data;
        }catch(error){
            console.log(error);
        }
    }

    async loadBrandsFromJSONFile(){
        try{
            //lokalno
            // const response = await fetch('/products-data/products.json');
            //otkad sam deploy na gh-pages, mora ova putanja da bi radilo i lokalno i na gh-pages!!
             const response = await fetch('/internship-studio-present-react/brands-data/brands.json');
            const data = await response.json();
            return data;
        }catch(error){
            console.log(error);
        }
    }
}

const dataServiceInstance = new DataService();

export default dataServiceInstance;

// export default new DataService();