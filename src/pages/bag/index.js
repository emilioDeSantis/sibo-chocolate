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
//     <div style={{ width: "100vw", padding: "4vw" }}>
//       <h1 style={{ fontSize: "6vw", textAlign: "center" }}>Your Shopping Cart</h1>

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
//         <p style={{ fontSize: "4vw", textAlign: "center" }}>Your cart is empty</p>
//       )}

//       <button
//         style={{
//           display: "block",
//           width: "80vw",
//           height: "6vw",
//           margin: "4vw auto",
//           fontSize: "4vw",
//           borderRadius: "1vw",
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
//       <div style={{ display: "flex", justifyContent: "space-between", width: "80vw", margin: "2vw auto", borderBottom: "1px solid #000" }}>
//         <img src={imageUrl} alt={title} style={{ width: "10vw", height: "10vw", objectFit: "cover" }}/>
//         <h2 style={{ fontSize: "4vw" }}>{title}</h2>
//         <p style={{ fontSize: "3vw" }}>{'Quantity: ' + quantity}</p>
//         <p style={{ fontSize: "3vw" }}>{'Price: $' + price}</p>
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
                    marginTop: "10vw",
                    borderBottom: "2px solid #000",
                }}
            >
                <h2 style={{ fontSize: "8vw" }}>{lineItem.title}</h2>
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
                                width: "30vw",
                                height: "30vw",
                                objectFit: "cover",
                            }}
                        />
                    </div>
                    <button
                        onClick={() => handleRemove(lineItem.id)}
                        style={{
                            paddingBlock: "4vw",
                            paddingInline: "7vw",
                            backgroundColor: "#edc",
                            color: "#765",
                            fontSize: "4vw",
                            border: "none",
                            borderRadius: "1vw",
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
                        marginTop: "8vw",
                        marginBottom: '5vw'
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                        }}
                    >
                        <p style={{ fontSize: "5vw" }}>Each</p>
                        <p style={{ fontSize: "5vw", fontWeight: 900 }}>
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
                        <p style={{ fontSize: "6vw" }}>Quantity</p>

                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
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
                                    padding: "2vw",
                                    paddingInline: "4vw",
                                    backgroundColor: "#000",
                                    color: "#fff",
                                    fontSize: "4vw",
                                    border: "none",
                                    borderRadius: "1vw",
                                    cursor: "pointer",
                                    margin: "0 2vw",
                                }}
                            >
                                -
                            </button>
                            <p style={{ fontSize: "6vw" }}>
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
                                    padding: "2vw",
                                    paddingInline: "4vw",
                                    backgroundColor: "#000",
                                    color: "#fff",
                                    fontSize: "4vw",
                                    border: "none",
                                    borderRadius: "1vw",
                                    cursor: "pointer",
                                    margin: "0 2vw",
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
                        <p style={{ fontSize: "5vw" }}>Total</p>
                        <p style={{ fontSize: "5vw", fontWeight: 900 }}>
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
                    padding: "3vw",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    background: "#ffffff",
                    color: "#000000",
                }}
            >
                <h1
                    style={{
                        fontSize: "15vw",
                        textAlign: "center",
                        marginTop: "20vw",
                        // marginBottom: "8vw",
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
                    <p style={{ fontSize: "4vw", textAlign: "center" }}>
                        Your bag is empty
                    </p>
                )}

                {checkout.totalPrice && (
                    <h2 style={{ fontSize: "6vw", textAlign: "center", marginTop: '10vw', }}>
                        Total: ${Number(checkout.totalPrice.amount).toFixed(2)}
                    </h2>
                )}

                <button
                    style={{
                        display: "block",
                        width: "100%",
                        paddingBlock: "3vw",
                        fontSize: "4vw",
                        borderRadius: "1vw",
                        backgroundColor: "black",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                        marginTop: '10vw',
                        marginBottom:'10vw',
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
