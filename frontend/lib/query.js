export const PRODUCT_QUERY = `
query{
    products{
      data{
        id
        attributes{
          name
          description
          price
          slug
          image{
             data{
              attributes{
                formats
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_PRODUCTS_QUERY = `
  query getProduct($slug: String!){
    products(filters: {slug: {eq: $slug}}){
      data{
        id
        attributes{
          name
          description
          price
          slug
          image{
             data{
              attributes{
                formats
              }
            }
          }
        }
      }
    }
  }
`;
