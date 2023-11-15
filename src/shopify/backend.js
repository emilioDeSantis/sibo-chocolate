// import { client } from "./client";

// export const fetchCollectionWithProducts = async (slug) => {
//     // Fetch all collections from Shopify
//     const collections = await client.collection.fetchAllWithProducts();

//     // Find the collection that matches the slug
//     const collection = collections.find(
//         (collection) => collection.handle === slug
//     );

//     if (!collection) return null;

//     // Format the collection to match your existing category structure
//     const formattedCollection = {
//         id: collection.id,
//         name: collection.title,
//         slug: collection.handle,
//         color: "#443322", // Replace with your desired color
//         products: collection.products.map((product) => ({
//             id: product.id,
//             variantId: Buffer.from(product.variants[0].id).toString("base64"),
//             // variantId: btoa(product.variants[0].id),
//             // variantId: product.variants[0].id,
//             name: product.title,
//             price: product.variants[0].price.amount,
//             image: product.images[0]?.src,
//             color: "#D7E4B8", // Replace with your desired color
//         })),
//     };

//     return formattedCollection;
// };

// export const fetchAllCollections = async () => {
//     try {
//         // Fetch all collections from Shopify
//         const collections = await client.collection.fetchAllWithProducts();

//         // Format the collections
//         const formattedCollections = collections.map((collection) => ({
//             id: collection.id,
//             title: collection.title,
//             slug: collection.handle, // I'm assuming that you want to use the handle as the slug
//             backgroundImageUrl: collection.image.src, // Note: This assumes that each collection has an image.
//             color: "#443322",
//         }));

//         return formattedCollections;
//     } catch (error) {
//         console.error("Error fetching collections", error);
//         return [];
//     }
// };

import fetch from "node-fetch";

const url = `https://6fa801.myshopify.com/api/2023-07/graphql.json`;

// Utility function to fetch data from Shopify
const fetchFromShopify = async (query) => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/graphql",
            "X-Shopify-Storefront-Access-Token":
                "36390dda82b5229485d9e92d61831884",
        },
        body: query,
    });

    const jsonResponse = await response.json();
    return jsonResponse.data;
};

export const fetchCollectionWithProducts = async (slug) => {
    const query = `
    {
      collectionByHandle(handle: "${slug}") {
        id
        title
        handle
        image {
            src
          }
          color: metafield(namespace: "custom", key: "color") {
              value
            }
          pattern_color: metafield(namespace: "custom", key: "pattern_color") {
              value
            }
        products(first: 50) {
          edges {
            node {
              id
              title
              handle
              description
              color: metafield(namespace: "custom", key: "color") {
                value
              }
              weight: metafield(namespace: "custom", key: "weight") {
                  value
                }
                cacao: metafield(namespace: "custom", key: "cacao") {
                    value
                  }
                  available_in_us: metafield(namespace: "custom", key: "available_in_us") {
                      value
                    }
                    chocolate_categories: metafield(namespace: "custom", key: "chocolate_categories") {
                      references(first: 10) {
                        edges {
                          node {
                            ... on Metaobject {
                              
                              fields {
                                key
                                type
                                value
                                references(first: 10) {
                                  edges {
                                    node {
                                      ... on Metaobject {
                                        
                                        fields {
                                          key
                                          type
                                          value
                                          
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                      }
              variants(first: 1) {
                edges {
                  node {
                    id
                    priceAmount: priceV2 {
                      amount
                    }

                  }
                }
              }
              images(first: 1) {
                edges {
                  node {
                    src
                  }
                }
              }
           
            }
          }
        }
      }
    }
  `;

    const data = await fetchFromShopify(query);

    // console.log(
    //     data.collectionByHandle.products.edges[0].node.chocolate_categories
    //         .references.edges[0].node.fields[0].references.edges[0].node
    // );
    // console.log(
    //     data.collectionByHandle.products.edges[0].node.chocolate_categories
    //         .references.edges[0].node.fields
    // );

    // Return null if no collection is found
    if (!data.collectionByHandle) {
        return null;
    }

    const collection = data.collectionByHandle;
    const formattedCollection = {
        id: collection.id,
        name: collection.title,
        slug: collection.handle,
        color: collection.color.value,
        pattern_color: collection.pattern_color.value,
        backgroundImageUrl: collection.image.src,
        products: collection.products.edges.map((edge) => {
            const product = edge.node;
            return {
                id: product.id,
                name: product.title,
                description: product.description,
                variantId: Buffer.from(
                    product.variants.edges[0].node.id
                ).toString("base64"),
                price: product.variants.edges[0].node.priceAmount.amount,
                image: product.images.edges[0]?.node.src,
                color: product.color.value,
                weight: product.weight?.value || null,
                cacao: product.cacao?.value || null,
                available_in_us:
                    product.available_in_us.value == "true" ? "true" : null,
                chocolate_categories:
                    product.chocolate_categories?.references.edges.map(
                        (edge) => {
                            const catagory = edge.node;
                            return {
                                title: catagory.fields.find(
                                    (category) => category.key === "title"
                                ).value,
                                description:
                                    catagory.fields.find(
                                        (category) =>
                                            category.key === "description"
                                    )?.value || null,
                                chocolates: catagory.fields
                                    .find(
                                        (category) =>
                                            category.key === "chocolates"
                                    )
                                    .references.edges.map((edge) => {
                                        const chocolate = edge.node;
                                        return {
                                            title: chocolate.fields.find(
                                                (chocolate) =>
                                                    chocolate.key === "title"
                                            ).value,
                                            description: chocolate.fields.find(
                                                (chocolate) =>
                                                    chocolate.key ===
                                                    "description"
                                            ).value,
                                        };
                                    }),
                            };
                        }
                    ) || [],
            };
        }),
    };

    // return {
    //     "id": "dummy_collection_id",
    //     "name": "Dummy Collection Title",
    //     "slug": "dummy-collection-handle",
    //     "color": "#FF5733",
    //     "backgroundImageUrl": "https://example.com/dummy-image.jpg",
    //     "products": [
    //         {
    //             "id": "dummy_product_id_1",
    //             "name": "Dummy Product Title 1",
    //             "variantId": "ZHVtbXlfdmFyaWFudF9pZF8x",
    //             "price": 100.50,
    //             "image": "https://example.com/dummy-product-image1.jpg"
    //         },
    //         {
    //             "id": "dummy_product_id_2",
    //             "name": "Dummy Product Title 2",
    //             "variantId": "ZHVtbXlfdmFyaWFudF9pZF8y",
    //             "price": 200.75,
    //             "image": "https://example.com/dummy-product-image2.jpg"
    //         }
    //         // You can add more dummy products as needed
    //     ]
    // }

    return formattedCollection;
};

export const fetchFeaturedProducts = async () => {
    const query = `
  {
    collections(first: 10) {
      edges {
        node {
          handle
          products(first: 50) {
            edges {
              node {
                id
                title
                handle
                description
                color: metafield(namespace: "custom", key: "color") {
                  value
                }
                featured: metafield(namespace: "custom", key: "featured_product") {
                  value
                }
                available_in_us: metafield(namespace: "custom", key: "available_in_us") {
                  value
                }
                nameAndCategory: metafield(namespace: "custom", key: "nameAndCategory") {
                  value
                }
                variants(first: 1) {
                  edges {
                    node {
                      id
                      priceAmount: priceV2 {
                        amount
                      }
                    }
                  }
                }
                images(first: 1) {
                  edges {
                    node {
                      src
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

    const data = await fetchFromShopify(query);

    let featuredProducts = [];

    data.collections.edges.forEach((collectionEdge) => {
        const collection = collectionEdge.node;
        const collectionTitle = collection.handle; // Capture the collection title

        collection.products.edges.forEach((productEdge) => {
            const product = productEdge.node;

            // Check if the product is featured
            if (product.featured && product.featured.value === "true") {
                featuredProducts.push({
                    collection: collectionTitle, // Include the collection title in the product data
                    id: product.id,
                    name: product.title,
                    nameAndCategory: product.nameAndCategory? product.nameAndCategory.value : null,
                    handle: product.handle,
                    variantId: Buffer.from(
                        product.variants.edges[0].node.id
                    ).toString("base64"),
                    price: product.variants.edges[0].node.priceAmount.amount,
                    image: product.images.edges[0]?.node.src,
                });
            }
        });
    });


    return featuredProducts;
};

export const fetchAllCollections = async () => {
    const test = await fetchCollectionWithProducts("milk-bars");

    const query = `
    {
      collections(first: 20) {
        edges {
          node {
            id
            title
            handle
            image {
              src
            }
            color: metafield(namespace: "custom", key: "color") {
              value
            }
            pattern_color: metafield(namespace: "custom", key: "pattern_color") {
              value
            }
          }
        }
      }
    }
  `;

    const data = await fetchFromShopify(query);

    // console.log("test:", data.collections.edges[0].node);

    const formattedCollections = data.collections.edges.map((edge) => {
        const collection = edge.node;

        return {
            id: collection.id,
            title: collection.title,
            slug: collection.handle,
            color: collection.color.value,
            // pattern_color: collection.pattern_color.value,
            backgroundImageUrl: collection.image.src,
        };
    });
    // console.log(formattedCollections);
    return formattedCollections;
};
