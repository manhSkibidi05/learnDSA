// Bài 1 : Quản lý sản phẩm

console.log(`________BÀI 1_________`);

const products = [
    { id: 1, name: "Laptop", price: 15000000, category: "Electronics", stock: 10 },
    { id: 2, name: "Mouse", price: 250000, category: "Electronics", stock: 50 },
    { id: 3, name: "Book JS", price: 300000, category: "Books", stock: 20 },
    { id: 4, name: "Monitor", price: 4000000, category: "Electronics", stock: 5 },
    { id: 5, name: "Book Python", price: 350000, category: "Books", stock: 15 },
    { id: 6, name: "Keyboard", price: 500000, category: "Electronics", stock: 25 },
    { id: 7, name: "Notebook", price: 50000, category: "Stationery", stock: 100 }
];

// 1.1 : lọc sản phẩm có giá trị > 500,000

const expensiveProducts = products.filter(value => value.price > 500000);
console.log("sản phẩm > 500000 : " , expensiveProducts);

// 1.2 : tính tổng giá trị tồn kho 

const lessProducts = products.reduce((sum , value) => sum += (value.price * value.stock),0);
console.log(`tổng giá trị tồn kho là : ${lessProducts} đ`);

// 1.3 : tạo mảng tên sản phẩm viết hoa 

const caplockProducts = products.map(value => value.name.toUpperCase());
console.log(caplockProducts);

// 1.4 : sắp xếp mảng theo giá giảm dần 

const priceDownProducts = products.slice(0).sort((a , b) => b.price - a.price);
console.log(priceDownProducts);

// 1.5 : nhóm sản phẩm theo danh mục 

const groupByProducts = products.reduce((acc , value) =>{
    if(!acc[value.category]){
        acc[value.category] = [];
    }
    acc[value.category].push(value);
    return acc;
}, {})

console.log(groupByProducts);

// 1.6 : lấy 3 sản phẩm đầu tiên 

const threeFirstProduct = products.slice(0,3);
console.log(threeFirstProduct);

// 1.7 : thêm sản phẩm mới vào đầu mảng 


function addNewProduct(arr , product){
    let newArr = [...arr];
    newArr.unshift(product);
    return newArr;
}
console.log(addNewProduct(products, {id : 105 , name : `clock` , price : 150000 , category : `Books` , stock : 20}));

// 1.8 : xóa sản phẩm có id = 3 

function deleteProduct(arr , id){
    let newArr = [...arr];
    let indexDelete = newArr.findIndex(value => value.id === id);
    newArr.splice(indexDelete , 1);
    return newArr;
}   
console.log(deleteProduct(products , 3));

// 1.9 : Tạo báo cáo tổng hợp (reduce nâng cao)

const report = products.reduce((acc, p) => {
    acc.totalProducts++;
    acc.totalValue += p.price * p.stock;
    acc.byCategory[p.category] = (acc.byCategory[p.category] || 0) + (p.price * p.stock);
    if (p.price > acc.mostExpensive.price) {
        acc.mostExpensive = { name: p.name, price: p.price };
    }
    return acc;
}, { totalProducts: 0, totalValue: 0, byCategory: {}, mostExpensive: { price: 0 } });
console.log("9. Báo cáo tổng hợp:", report);