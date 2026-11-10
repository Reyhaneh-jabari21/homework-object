let products = {
 bread: 25000,
 milk: 45000,
 cheese: 180000,
 rice: 950000,
 oil: 220000
};
let cont = 0;
for(let item in products ){
    let price = products[item];
    if(price < 50000){
        console.log(item +":ارزان است");
    }if (price>500000){
        console.log(item + ": گران است");
        cont ++;
    }
    
}
console.log(cont + ": تغدا محصولات گرانتر از 500 هزار تومان");