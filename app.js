// let product = [
//     {
//         // id: 1,
//         name: 'Xiaomi portable charger 20000mah',
//         brand: 'Xiaomi',
//         price: '428',
//         color: 'White',
//         category: 'Charger'

//     },
//     {
//         // id: 2,
//         name: 'VSmart Active 1',
//         brand: 'VSmart',
//         price: '5478',
//         color: 'Black',
//         category: 'Phone'

//     },
//     {
//         // id: 3,
//         name: 'IPhone X',
//         brand: 'Apple',
//         price: '21490',
//         color: 'Gray',
//         category: 'Phone'

//     },
//     {
//         // id: 4,
//         name: 'SamSung Galaxy A9',
//         brand: 'Samsung',
//         price: '8490',
//         color: 'Blue',
//         category: 'Phone'

//     }
// ];
// /**1 .1  */

// // for (let i = 0; i < product.length; i++) {
// //     console.log('--------------------------');
// //     console.log(`Name: ${product[i].name}`);
// //     console.log(`Price: ${product[i].price}`);
// // }

// /**1.2 */

// // for (let i = 0; i < product.length; i++) {
// //     console.log(`#${i + 1}. ${product[i].name}`);
// //     console.log(`    Price :${product[i].price}`);
// // }
// // let inputNumber = Number(prompt('Enter product position:'));



// // console.clear()
// // let indexProduct = inputNumber - 1;
// // for (let i = 0; i < product.length; i++) {
// //     if (i === indexProduct) {
// //         for( let key in product[i]) {
// //             console.log(`${key} : ${product[i][key]}`);
// //         }
// //     }
// // }

// /**1.3 */

// // let getCategory = prompt('Enter ur Category :');
// // for (let i = 0; i < product.length; i++) {
// //     if (getCategory === product[i].category) {
// //         console.log('-----------------');
// //         console.log(`Name : ${product[i].name}`);
// //         console.log(`Price : ${product[i].price}`);
// //     };

// // };

// /**1.4 */

// for (let i = 0; i < product.length; i++) {
//     if (i === 0) {
//         product[i].providers = 'Phukienzero Dientuccc';
//     } else {
//         product[i].providers = 'Tgdd';
//     }

//     console.log(`#${i + 1}. ${product[i].name}`);
//     console.log(`Price: ${product[i].price}`);
//     console.log(`Providers: ${product[i].providers}`);

//     console.clear();

// };
// /**1.5 */

// let getProviders = prompt('Enter providers:');
// for (let i = 0; i < product.length; i++) {

//     if (getProviders === product[i].providers) {
//         console.log('===================================');
//         for (let key in product[i]) {
//             console.log(`${key} : ${product[i][key]}`);
//         };
//     };
// };

////////////////bai 2 

let sayHi = 'Hi there, this is your learning tasks to front-end developer career:';
let course = [
    {
        name: 'HTML',
        complete: false
    },
    {
        name: 'CSS',
        complete: false
    },
    {
        name: 'Basis of JavaScript',
        complete: false
    },
    {
        name: 'Node Package Manager (nps)',
        complete: false
    },
    {
        name: 'Git',
        complete: false
    }
];
console.log(sayHi);
// for (let i = 0; i < course.length; i++) {
//     console.log(`${i + 1}. ${course[i].name}`);
//     console.log(`Complete : ${course[i].complete}`);

// };
let getCommand = prompt('Enter your Command(New , Delete, Update, Complete)');
if (getCommand === 'New' || getCommand === 'new') {
    let getNewCourse = prompt('Enter new Task');
    let newObj = {
        name: getNewCourse,
        complete: false
    };
    course.push(newObj);
    for (let i = 0; i < course.length; i++) {
        console.log(`${i + 1}. ${course[i].name}`);
        console.log(`Complete : ${course[i].complete}`);
    };


} else if (getCommand === 'update' || getCommand === 'Update') {
    let position = Number(prompt('Enter position:'));
    let valueIndex = position - 1;
    for (let i = 0; i < course.length; i++) {
        if (valueIndex === course.indexOf(course[i])) {
            let newTitle = prompt('enter New title:');
            course[i].name = newTitle;
        };
        console.log(`${i + 1}. ${course[i].name}`);
        console.log(`Complete : ${course[i].complete}`);
    };



} else if (getCommand === 'complete' || getCommand === 'Complete') {
    let position = Number(prompt('Enter position:'));
    let valueIndex = position - 1;
    for (let i = 0; i < course.length; i++) {
        if (valueIndex === course.indexOf(course[i])) {
            course[i].complete = true;
        };
        console.log(`${i + 1}. ${course[i].name}`);
        console.log(`Complete : ${course[i].complete}`);
    }

} else if (getCommand === 'delete' || getCommand === 'Delete') {
    let position = Number(prompt('Enter position:'));
    let valueIndex = position - 1;
    for (let i = 0; i < course.length; i++) {

        if (valueIndex === course.indexOf(course[i])) {
            console.log(`${i + 1}.[x] ${course[i].name}`);
            console.log(`Complete : ${course[i].complete}`);
        } else {
            console.log(`${i + 1}.[ ] ${course[i].name}`);
            console.log(`Complete : ${course[i].complete}`);
        }
    }
};



console.log('-------------------------------------------------------------------------');