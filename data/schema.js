import { buildSchema } from "graphql";


const schema = buildSchema(`
    type Product {
        id:ID
        name:String
        description: String
        price: Float
        soldout: Soldout
        stores:[Store]!
    }

    type Store {
        store:String
    }
    type Query {
        getProduct(id: ID) : Product
        getAllProduct: [Product]
    }

    input StoreInput {
        store:String
    }

    enum Soldout {
        SOLDOUT
        ONSALE
    }

    input ProductInput {
        id:ID
        name:String
        description: String
        price: Float
        soldout: Soldout
        stores:[StoreInput]!
    }

    type Mutation {
        createProduct(input: ProductInput) : Product
        updateProduct(input: ProductInput) : Product
        deleteProduct(id: ID!) : String    }
        

`);

export default schema;