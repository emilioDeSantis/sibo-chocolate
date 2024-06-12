// import React, { useEffect, useState } from "react";
// import { client } from "@/client";

// const Bag = () => {
//   const [checkout, setCheckout] = useState(null);

// useEffect(() => {
//   const checkoutId = localStorage.getItem('checkoutId');
//   if (checkoutId) {
//     client.checkout.fetch(checkoutId)
//       .then((checkout) => {
//     console.log(checkout.lineItems[0].quantity);
//         setCheckout(checkout);
//       });
//   }
// }, []);

//   if (!checkout) return <div>Loading...</div>;

//   return (
//     <div style={{ width: "100vw", padding: "1rem" }}>
//       <h1 style={{ fontSize: "1.4rem", textAlign: "center" }}>Your Shopping Cart</h1>

//       {checkout.lineItems.length ? (
//         checkout.lineItems.map((lineItem) => (
//           <CartItem
//             key={lineItem.id}
//             title={lineItem.title}
//             quantity={lineItem.quantity}
//             price={lineItem.variant.price.amount}
//             imageUrl={lineItem.variant.image.src}
//           />
//         ))
//       ) : (
//         <p style={{ fontSize: "1rem", textAlign: "center" }}>Your cart is empty</p>
//       )}

//       <button
//         style={{
//           display: "block",
//           width: "80vw",
//           height: "1.4rem",
//           margin: "1rem auto",
//           fontSize: "1rem",
//           borderRadius: "0.2rem",
//           backgroundColor: "black",
//           color: "white",
//           border: "none",
//           cursor: "pointer"
//         }}
//         onClick={() => window.location.href = checkout.webUrl}
//       >
//         Proceed to Checkout
//       </button>
//     </div>
//   );
// };

// const CartItem = ({ title, quantity, price, imageUrl }) => {
//     return (
//       <div style={{ display: "flex", justifyContent: "space-between", width: "80vw", margin: "1.5remrem auto", borderBottom: "1px solid #000" }}>
//         <img src={imageUrl} alt={title} style={{ width: "2.4rem", height: "2.4rem", objectFit: "cover" }}/>
//         <h2 style={{ fontSize: "1rem" }}>{title}</h2>
//         <p style={{ fontSize: "0.7rem" }}>{'Quantity: ' + quantity}</p>
//         <p style={{ fontSize: "0.7rem" }}>{'Price: $' + price}</p>
//       </div>
//     );
//   };

// export default Bag;

import React, { useEffect, useState } from "react";
import { client } from "@/shopify/client";
import Layout from "@/components/Layout";
import { useColor } from "@/components/Providers/ColorProvider";

const Bag = () => {
    const [checkout, setCheckout] = useState(null);

    const { color, setColor } = useColor();

    useEffect(() => {
        const checkoutId = localStorage.getItem("checkoutId");
        if (checkoutId) {
            client.checkout.fetch(checkoutId).then((checkout) => {
                setCheckout(checkout);
                console.log(checkout.totalPrice);
            });
        }
        setColor("#ffffff");
    }, []);

    const handleRemove = (lineItemId) => {
        client.checkout
            .removeLineItems(checkout.id, [lineItemId])
            .then((newCheckout) => {
                setCheckout(newCheckout);
            });
    };

    const handleQuantityChange = (lineItemId, newQuantity) => {
        const lineItemsToUpdate = [{ id: lineItemId, quantity: newQuantity }];

        client.checkout
            .updateLineItems(checkout.id, lineItemsToUpdate)
            .then((newCheckout) => {
                setCheckout(newCheckout);
            });
    };

    if (!checkout) return <div>Loading...</div>;



    const CartItem = ({ lineItem }) => {

        useEffect(() => {
            console.log('test',lineItem);
        },[])
        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    width: "100%",
                    marginTop: "2.4rem",
                    borderBottom: "2px solid #000",
                }}
            >
                <h2 style={{ fontSize: "2rem" }}>{lineItem.title}</h2>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <img
                            src={lineItem.variant.image.src}
                            alt={lineItem.title}
                            style={{
                                width: "7rem",
                                height: "7rem",
                                objectFit: "cover",
                            }}
                        />
                    </div>
                    <button
                        onClick={() => handleRemove(lineItem.id)}
                        style={{
                            paddingBlock: "1rem",
                            paddingInline: "1.6rem",
                            backgroundColor: "#edc",
                            color: "#765",
                            fontSize: "1rem",
                            border: "none",
                            borderRadius: "0.2rem",
                            cursor: "pointer",
                            height: "6",
                        }}
                    >
                        Remove
                    </button>
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "2rem",
                        marginBottom: '1.2rem'
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                        }}
                    >
                        <p style={{ fontSize: "1.2rem" }}>Each</p>
                        <p style={{ fontSize: "1.2rem", fontWeight: 900 }}>
                        ${Number(lineItem.variant.price.amount).toFixed(2)}
                        </p>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                        }}
                    >
                        <p style={{ fontSize: "1.4rem" }}>Quantity</p>

                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "0.5rem",
                            }}
                        >
                            <button
                                onClick={() =>
                                    handleQuantityChange(
                                        lineItem.id,
                                        lineItem.quantity - 1
                                    )
                                }
                                style={{
                                    padding: "1.5remrem",
                                    paddingInline: "1rem",
                                    backgroundColor: "#000",
                                    color: "#fff",
                                    fontSize: "1rem",
                                    border: "none",
                                    borderRadius: "0.2rem",
                                    cursor: "pointer",
                                    margin: "0 1.5remrem",
                                }}
                            >
                                -
                            </button>
                            <p style={{ fontSize: "1.4rem" }}>
                                {lineItem.quantity}
                            </p>
                            <button
                                onClick={() =>
                                    handleQuantityChange(
                                        lineItem.id,
                                        lineItem.quantity + 1
                                    )
                                }
                                style={{
                                    padding: "1.5remrem",
                                    paddingInline: "1rem",
                                    backgroundColor: "#000",
                                    color: "#fff",
                                    fontSize: "1rem",
                                    border: "none",
                                    borderRadius: "0.2rem",
                                    cursor: "pointer",
                                    margin: "0 1.5remrem",
                                }}
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                        }}
                    >
                        <p style={{ fontSize: "1.2rem" }}>Total</p>
                        <p style={{ fontSize: "1.2rem", fontWeight: 900 }}>
                        ${(Number(lineItem.variant.price.amount) * Number(lineItem.quantity)).toFixed(2)}
                        </p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <Layout showBanner={true}>
            <div
                style={{
                    width: "100vw",
                    padding: "4vw",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    background: "#ffffff",
                    color: "#000000",
                }}
            >
                <h1
                    style={{
                        fontSize: "1.2rem",
                        textAlign: "center",
                        marginTop: "8rem",
                        // marginBottom: "2rem",
                        fontWeight: 900,
                    }}
                >
                    YOUR BAG
                </h1>

                {checkout.lineItems.length ? (
                    checkout.lineItems.map((lineItem) => (
                        <CartItem key={lineItem.id} lineItem={lineItem} />
                    ))
                ) : (
                    <p style={{ fontSize: "1rem", textAlign: "center" }}>
                        Your bag is empty
                    </p>
                )}

                {checkout.totalPrice && (
                    <h2 style={{ fontSize: "1.4rem", textAlign: "center", marginTop: '2.4rem', }}>
                        Total: ${Number(checkout.totalPrice.amount).toFixed(2)}
                    </h2>
                )}

                <button
                    style={{
                        display: "block",
                        width: "100%",
                        paddingBlock: "0.7rem",
                        fontSize: "1rem",
                        borderRadius: "0.2rem",
                        backgroundColor: "black",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                        marginTop: '2.4rem',
                        marginBottom:'2.4rem',
                    }}
                    onClick={() => (window.location.href = checkout.webUrl)}
                >
                    Proceed to Checkout
                </button>
            </div>
        </Layout>
    );
};

export default Bag;
