// // import React, { useEffect } from "react";
// // import axios from "axios";
// // import { useLocation, useNavigate } from "react-router-dom";

// // const Payment = () => {
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const bookingDetails = location.state?.booking;

// //   useEffect(() => {
// //     if (!bookingDetails) {
// //       navigate("/"); // Redirect if no booking details
// //     }
// //   }, [bookingDetails]);

// //   const handlePayment = async () => {
// //     try {
// //       const { data: order } = await axios.post(
// //         "http://localhost:5015/api/payment/create-order",
// //         { amount: bookingDetails.fee },
// //         {
// //           headers: {
// //             Authorization: `Bearer ${localStorage.getItem("token")}`,
// //           },
// //         }
// //       );

// //       const options = {
// //         key: "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay Key ID
// //         amount: order.amount,
// //         currency: order.currency,
// //         name: "HealthCare App",
// //         description: "Doctor Appointment Booking",
// //         order_id: order.id,
// //         handler: async function (response) {
// //           const verificationData = {
// //             razorpay_order_id: response.razorpay_order_id,
// //             razorpay_payment_id: response.razorpay_payment_id,
// //             razorpay_signature: response.razorpay_signature,
// //           };

// //           const verifyRes = await axios.post(
// //             "http://localhost:5015/api/payment/verify-payment",
// //             verificationData,
// //             {
// //               headers: {
// //                 Authorization: `Bearer ${localStorage.getItem("token")}`,
// //               },
// //             }
// //           );

// //           if (verifyRes.status === 200) {
// //             alert("Payment Successful!");
// //             navigate("/appointment");
// //           } else {
// //             alert("Payment Failed");
// //           }
// //         },
// //         prefill: {
// //           name: bookingDetails.name,
// //           email: bookingDetails.email,
// //         },
// //         theme: {
// //           color: "#0d9488",
// //         },
// //       };

// //       const razorpay = new window.Razorpay(options);
// //       razorpay.open();
// //     } catch (err) {
// //       console.error(err);
// //       alert("Payment failed to initialize");
// //     }
// //   };

// //   return (
// //     <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
// //       <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
// //         <h2 className="text-xl font-semibold mb-4">Confirm Your Payment</h2>
// //         <p><strong>Doctor:</strong> {bookingDetails?.doctorName}</p>
// //         <p><strong>Date:</strong> {bookingDetails?.date}</p>
// //         <p><strong>Time:</strong> {bookingDetails?.time}</p>
// //         <p><strong>Fee:</strong> ₹{bookingDetails?.fee}</p>
// //         <button
// //           onClick={handlePayment}
// //           className="mt-6 bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700"
// //         >
// //           Pay Now
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Payment;


// import React, { useEffect } from "react";
// import axios from "axios";
// import { useLocation } from "react-router-dom";

// const Payment = () => {
//   const location = useLocation();
//   const bookingDetails = location.state?.booking;

//   useEffect(() => {
//     const initiateStripeCheckout = async () => {
//       if (!bookingDetails) return;

//       try {
//         const res = await axios.post(
//           "http://localhost:5015/api/payment/create-checkout-session",
//           { booking: bookingDetails },
//           {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem("token")}`,
//             },
//           }
//         );

//         const stripe = window.Stripe("pk_test_51RLhP14JtYGoPNick2ZzLFBzMb6K7aP9ofhVdM94HfiIJZslUsuHkMVKZwdAWz2RvFEZAW7hQI3kSaSXrrhN4rRU00LBAynJ4x"); // Replace with your actual Stripe key
//         await stripe.redirectToCheckout({ sessionId: res.data.id });
//       } catch (err) {
//         console.error("Stripe Checkout Error:", err);
//         alert("❌ Could not initiate Stripe payment");
//       }
//     };

//     initiateStripeCheckout();
//   }, [bookingDetails]);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
//       <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
//         <h2 className="text-xl font-semibold mb-4">Redirecting to Payment</h2>
//         <p>Please wait while we redirect you to the secure payment page...</p>
//       </div>
//     </div>
//   );
// };

// export default Payment;