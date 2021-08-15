// //console.log("satu"); ini hanya comment
// /*
// ini juga comment
// */
// let greetings = "Selamat pagi"; //ini variabel(pake let) (harus disambung, tidak boleh ada spasi)
// greetings = "Selamat siang"; //ini salah satu cara untuk mengganti isi variabel
// console.log(greetings); //ini memanggil variabel(pake console.log)
// const morningGreetings = "Selamat pagi"; //ini variabel yang isinya tidak bisa diubah(pake const)
// console.log(morningGreetings);

// let num = 90; //tipe data number
// let someString = "Hello World"; //tipe data string
// let bool = true; //tipe data boolean(hanya true dan false)
// let age = null; //variabel ini tidak ada isinya
// let undef; //tipe data undefined(variabel ini belum diisi)

// console.log(2 > 1); //Untuk membandingkan
// console.log(2 == 1);
// console.log(2 != 1);
// console.log("a" > "b"); //a = 1, b = 2, maka hasilnya false
// console.log("egg" > "bird"); //yang dilihat hanya huruf pertama, jika sama baru dilanjut huruf selanjutnya

// const lisfOfNames = ["David", "John", "Luke"];
// const someName = "Someone like you";

// let taken = lisfOfNames.shift(); //Shift mengambil yang di awal
// console.log(lisfOfNames);
// console.log(taken);
// lisfOfNames.unshift("Janet"); //Unshift itu nambah di awal
// const popTaken = listOfName.popTaken(); //Pop mengambil yang di akhir
// lisfOfNames.push("Janet"); //Push itu nambah di akhir
// // let a = 0;
// // while (a <someName.length) {
// //     console.log
// // }

// class User {
//    //    name = "John";
//    //    phoneNumber = "0812345";
//    //    address = "Jl. Setapa";

//    constructor(name, phoneNumber, address) {
//       this.name = name;
//       this.phoneNumber = phoneNumber;
//       this.address = address;
//    }

//    get userName() {
//        return "Nama saya " + this.name;
//    }

//    get userProfile() {
//        return (
//            "Nama saya " +
//            this.name +
//            " tinggal di " +
//            this.address +
//            " bisa dihibungi " +
//            this.phoneNumber
//        );
//    }

//    set userName(value) {
//        if (value.length >5) {
//            console.log("Name is too long")
//        }
//    }

//    sayHi() {
//       console.log("Selamat pagi dari", this.name);
//    }
// }

// let user = new User("David", "123", "Jl. Kenangan");
// let user2 = new User("Janet", "456", "Jl. Setapak");
// let user3 = new User("Alex", "789", "Jl. Kamu");
// // console.log(user.name, user.phoneNumber, user.address);
// console.log(user.name);
// // console.log(user2.phoneNumber);
// // console.log(user3.address);
// // user.sayHi();
// user.name = "Someone else"

// console.log(user.userProfile);
// user.userName = "Som";

// // let user = {
// //     name: "John",
// //     address: "Jl. Kenangan",
// //     phoneNumber
// // }

// class Animal {
//    speed = 5;
//    age = 2;

//    run() {
//       console.log("Running with speed", this.speed);
//    }

//    stop() {
//       console.log("Stop");
//    }
// }

// class Fish extends Animal {
//    run() {
//       console.log("Fish can't run");
//    }

//    swim() {
//       console.log("Swimming with speed", this.speed);
//    }
// }

// let animal = new Animal();
// console.log(animal);

// let fish = new Fish();
// fish.swim();
// fish.run();

class CoffeeMachine {
   #voltage = 10;
   #waterTemperature = 90;
   #waterVolume = 1;
   #time = 2;

   #takeVoltage() {
      console.log("Tking electricity");
   }

   #fillWater() {
      console.log("Filling water with", this.#waterVolume, "litre");
   }

   #boilCoffee() {
      console.log("Heating water until", this.#waterTemperature, "degrees for", this.#time);
   }

   start() {
      this.#takeVoltage();
      this.#fillWater();
      this.#boilCoffee();
   }
}
