import axios from "axios";
export function senddata(json) {
  var today = new Date();

  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  // const getLocation = () => {
  //   if (!navigator.geolocation) {
  //     setStatus("Geolocation is not supported by your browser");
  //   } else {
  //     setStatus("Locating...");
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         setStatus(null);
  //         setLat(position.coords.latitude);
  //         setLng(position.coords.longitude);
  //       },
  //       () => {
  //         setStatus("Unable to retrieve your location");
  //       }
  //     );
  //   }
  // };

  // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition(
  //     function (position) {
  //       var Lat = position.coords.latitude;
  //       var Long = position.coords.longitude;
  //       getGeoLocation(Lat, Long);
  //     },
  //     function () {
  //       //error
  //     }
  //   );
  // }

  let pickUpDetails = {
    pickup_details: [
      {
        reference_id: `${json.userid_id}.${paymentid}.${json.product_id}`,
        address: {
          street_address_1: localStorage.getItem("street"),
          landmark: localStorage.getItem("landmark"),
          city: "Bangalore",
          state: "Karnataka",
          pincode: "560017",
          country: localStorage.getItem("country"),
          lng: 77.67211,
          lat: 12.96722,
          contact_details: {
            name: localStorage.getItem("name"),
            phone_number: localStorage.getItem("mobile"),
          },
        },
        otp_required: true,
      },
    ],
  };

  const address = JSON.stringify(pickUpDetails);

  // let address =
  //   localStorage.getItem("street") +
  //   " " +
  //   localStorage.getItem("street") +
  //   " " +
  //   localStorage.getItem("city") +
  //   " " +
  //   localStorage.getItem("state") +
  //   " " +
  //   localStorage.getItem("country");

  console.log("inside send.jsx", json);
  console.log("inside send.jsx price", json.productPrice);

  let paymentid = localStorage.getItem("browser_tahelka");

  axios
    .post("http://api.rjwada.com/items/inventory", {
      id: `${json.userid_id}.${paymentid}.${json.product_id}`,
      status: "published",
      sort: null,
      user_created: null,
      date_created: "2022-08-21T17:49:07.109Z",
      user_updated: null,
      date_updated: null,
      payment_id: `${paymentid}`,
      customer_id: `${json.userid_id}`,
      price: `${json.productPrice}`,
      category: `${json.categoryId}`,
      image_of_design: `${json.banner}`,
      color: "black",
      size: `${json.size}`,
      ordered_on: `${date}T${time}`,
      in_progress_status: false,
      order_completed_status: false,
      address_of_delivery: `${address}`,
      dispatch_date: "2022-08-30T11:49:00",
      dispatch_status: false,
      order_delivered_on: "2022-08-31",
      seller_id: "10001seller1001",
      cancel_status: false,
      return_status: false,
      date_of_cancel: "2022-08-31",
      date_of_return: "2022-08-31",
      date_of_refund: "2022-08-31",
      quantity: `${json.quantity}`,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}