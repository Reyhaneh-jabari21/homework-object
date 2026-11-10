let order = {
    customer: "Sara",
    totalPrice: 780000,
    isMember: true
};

if (order.totalPrice > 1000000 || order.isMember === true) {
    console.log("ارسال رایگان است");
} else {
    console.log("هزینه ارسال: 50000 تومان");
}