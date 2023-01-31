PENDAHULUAN
Kata Pengantar

Bismillahirrahmannirrahiim.
Assalamu'alaikum Warahmatullahi Wabarakatuh.

Alhamdulillah segala puji bagi allah tuhan semsta alam yang telah memberikan nikmat dan rahmat nya sehingga penulis dapat menyelesaikan buku ini, tak lupa pula sholawat berangkaikan salam ke pada Nabi kita baginda Nabi Muhammad SAW, yang mana telah membawa kita dari jaman jahiliyah hinggal jaman yang sudah di penuhi dengan kemajuan teknologi seperti sekarang ini.
Alhamdulillah Allah masih memberikan Kesehatan dan kelapangan waktu untuk penulis, sehingga masih bisa membagikan ilmu yang bermanfaat dan berguna dunia dan akhirat, alhamdulillah saya sebagai penulis sanggat beryukur, sehingga dapat menyelesaikan Buku yang berjudul membangun Website Absensi Dengan Laravel, Inertia js & React js, di dalam penyusunan buku ini penulis sudah berusaha semaksimal mungkin sesuai dengan kemampuan penulis demi menyelesaikan buku ini dengan baik dan benar.
Penulis menyadari jika masih terdapat kekurangan ataupun kesalahan dalam penyusunan buku ini sehingga penulis mengharapkan kritik ataupun saran yang berbau positif untuk memperbaiki ke salahan dan sehingga tidak terulang lagi di masa mendatang sehingga menghindari dosa jariah akibat kesalahan.
Semoga dengan di terbitkan nya buku  ini akan membawa banyak manfaat dan membawa perubahan besar untuk generasi mendatang dan mudah di pahami bagi orang banyak sehingga bermanfaat bagi pembaca maupun penulis.

Wassalamu'alaikum Warahmatullahi Wabarakatuh.

Raihlah ilmu, dan untuk meraih ilmu belajarlah tenang dan sabar. - Umar bin Khattab



Lisensi Buku

Buku ini menggunakan license personal, yang artinya buku dan isi di dalamnya hanya boleh digunakan dan di baca untuk seseorang yang sudah membelinya. Selain pemilik license dari buku ini tidak diperbolehkan menggunakan apalagi sampai menyebar luaskan tanpa izin
dari penulis.

Dan untuk pemilik license dari buku ini juga tidak di perbolehkan menyebarkan dan memperjual belikan lagi kepada seseorang. 

 




\




Tentang Buku


Di dalam buku ini semua yang membaca nya akan belajar menjadi seorang Fullstuck Website developer dengan cara membangun website Absensi dengan Laravel dan Inertia js & React js .
Tak hanya itu kita akan membangun sebuah system yang cukup complex dimana di dalam aplikasi kita nanti aka ada tiga role dan banyak jabatan dan di saat pembuatan absensi akan di filter user dengan role apa aja yang di perbolehkan absen dan aka nada fitur izin.
Dan di dalam pembauatan website kita nanti aka nada fitur edit absensi yang  hanya bisa di lakukan oleh admin, yang mana hal ini bertujuan untuk memberikan dispensasi bagi siswa yang terkendala dalam jaringan, yang man amenurut penulis hal ini cukup di butuhkan dalam sebuah instansi atau struktur kelas.
Di sini kita akan menggunakan INERTIA.JS yang fungsi nya akan mengantikan perana dari REST API. Dengan menggunakan INERTIA.JS kita akan sanggat terbantu menghubungkan antara LARAVEL & REACT.JS dan karna kita menggunakan REACT.JS aplikasi yang akan kita buat akan menjadi SPA (single page application).
Kenapa harus menjadi website yang SPA (single page application) ?? ya yang sebagai mana kita tahu bahwasanya REACT.JS adalah Bahasa yang di render di CLIENT SIDE, yang mana hal ini akan membuat website kita akan menjadi kencang dan ngebut, dan di kombinasi dengan LARAVEL maka website kita akan mempunyai ELEQUEN dan membuat kita lebih mudah dalam pembuatan nya.
Setelah selesai mempelajarin nya nanti kita akan belajar juga cara mendeploy aplikasi yang sudah kita buat dengan hosting, agara bisa di akses secara public. 










Perancangan

Diagram Aplikasi

Hal pertama sebelum kita membuat sebuah application atau sebuah website tentunya adalah menentukan alur dari application itu sendiri, dengan tujuan agar kita sebagai developer tidak membuang buang waktu karna masih memikirkan alur dari jalanya application tersebut .
Hal seperti ini biasanya di abaikan oleh Sebagian orang, apalagi bagi parang developer yang baru pertama kali belajar, padahal menata alur dari application itu sanggat membantu kita agar cepat dalam pembuatan application itu dan tidak sering terjadi nya bengong dalam masa developer.
Misalkan kita berkerja dengan team alias tidak sendirian, pasti team kita akan sanggat terbantu dengan adanya diagram application, mengapa demikian ?? jelas jawabanya karna setiap developer akan di berikan taks yang berbeda beda dengan developer yang lain nya, yang mana hal ini akan sanggat membingungkan jika tidak adanya diagram application.

Pada studi kasus kali ini kita akan petakan menjadi 2 bagian yaitu :
1.	Admin
2.	User

DIAGRAM ADMIN

 
Dari gambar di atas dapat kita simpulkan bahawa admin akan melakukan login terlebih dahulu dan  jika nanti berhasil login akan masuk ke dalam halam account. Pada halam ini akan di menampilkan beberapa menu yaitu 

1.	Dashboard 

Pada menu ini akan di tampilkan diagram yang menunujukan jumblah jabatan, jumblah kariawan, jumblah hari libur dan Link yang akan mengarah di halaman kehadiran. 

2.	Jabatan

Pada halaman ini akan menampilkan  jumblah jabatan dan nama dari jabatan itu sendiri  yang akan di tampilkan dalam bentuk table.
Dan di setiap colom dari data jabatan itu sendiri akan nada dua action yang menunjukan edit dan delete, yang dari dua action itu sendiri jika di clik akan mengambil id dari setiap jabatan, yang dari id tersebut akan di bawa ke halaman edit jika si admin mengklik tombol edit dan setelah di edit, jika berhasil akan menimbulkan sebuah popup alet, yang mana alert tersebut kita ambil dari SWEETALERT 2.
Ketika tombol delete yang di klik akan menimbukan alert yang berpesan “aryou sure” dan dua tombol yakni yes dan cancele , jika di pejet cancele data yang di pilih berdasarkan id tidak jadi terhapus, dan jika di klik yes maka data yang di pilih berdasarkan id akan terhapus.
Dan di dalam pages JABATAN ada button ADD JABATAN yang mana jika di klik akan redirect ke halaman ADD JABATAN dan jika berhasil menambahakan data maka akan muncul popup alert.

3.	Kariyawan 

Tidak jauh berbeda dengan menu Jabatan, hanya saja menu kariawan iniberfungsi untuk menambahkan Account kariawan yang mana menu di dalam nya ada :

1.	User name 
2.	Email 
3.	Password
4.	No phone 
5.	Posisi => pilih posisi 
6.	Role => pilih role 



4.	Hari Libur 

Menu nya sama saja dengan dua menu yang sudah di jelaskan di awal tadi hanya saja di  menu kali ini menambahakan hari libur untuk kariawan yang bertipekan DATE dan sama seperti  yang lain nya ada dua button ACTION yang di pergunakan untuk CRUD 

5.	Absensi 

Menu yang ini juga sama dengan menu yang lain  nya namun di menu ini yang membuat santri atau user yang dapat melakukan absen di halaman masing masing, dari menu ini lah daftar absensi di build, fitur nya sama seperti yang lain namun hanya di bedakan dengan type nya menjadi dengan type “TIME” dan dari sini jugalah user atau kariawan di filter dengan melalui posisi_id nah jadi cukup complex table dengan banyak nya FK di setiap table.


6.	Kehadiran 

Menu ini cukup berbeda, menu ini adalah menu yang menampilkan apakah user  atau karyawan sudah absen atau belum nah dari menu ini juga kita admin juga bisa merubah user dengan  nama atau id mana  yang di inginkan user untuk di ubah menajadi absen. 
Dengan kata lain admin memiliki kuasa penuh dalam  memanagement website ini.



Diagram Customer
 

Dari gambar di atas dapat di lihat dan di simpulkan bahwasanya user hanya bisa melakukan login  dan absensi saja, lohh kok gitu pak??.
Ya dapat di lihat di table di awal tadi di bagian admin, sudah tertera dengan jelas bahwasanya admin memiliki kuasa penuh atas website in,  jadi secara logic nya admin dapat menghapus dan mengubah password dari user itu sendiri.

Struktur table dan Relasi Database

Setelah mengetahui diagram atau alur dari website yang akan kita buat, maka kita akan lanjutkan membuat struktur table beserta relasinya. Tujuannya agar mempermudah kita dalam proses pengembangan.

Jika kita tidak membuat struktur dan relasi seperti ini, takutnya ditengah-tengah pengembangan akan bingung bahkan bisa berubah-ubah strukturnya. Dan seperti ini tidak direkomendasikan.

Jadi sebelum terjun ke dalam koding atau pengembangan, maka kita harus memastikan bahwa struktur dan relasi database-nya sudah fix dan kita tinggal mengimplementasikan saja di dalam website atau aplikasi.

Untuk struktur table dan relasi database dari website yang akan kita buat nanti kurang lebih seperti berikut ini : 


 


	
Berikut adalah relasi antar table dan table apa aja yang bakal kita butuhkan untuk mendukung pembuatan website absensi.

Untuk relasi antar table kita bakal Bahasa di sini, namun sedikit peringatan dan catatan bahwasanya ada beberapa table yang langsung di generate oleh Laravel itu sendiri dengan memanfaat kan pakage dari Laravel yang  Bernama BREZEE, dengan menggunakan ini kita  langsung di buatakan satu paket lengkap dengan register dan login yang cukup oke menurut saya, namun di sini kita butuh sedikit memodifikasi table nya dengan relasi yang  akan kita berikan, seperti relasi dengan table ROLE dan table POSITIONS.
Kenapa harus ada table positions ?? 
Jelas hal ini di butuhkan untuk memfilter user atau kariawan dengan position apa aja yang akan di berikan absen.




















Fundamental ES6

JavaScript ES6

ES6 merupakan singkatan dari ECMAScript versi 6, yang mana dirilis pada tahun 2015. Jadi jika di internet menemui kata ES 2015 atau ES6 itu sama saja, jadi jangan bingung.

ECMAScript adalah sebuah standarisasi scripting language (Javascript) yang dibuat oleh European Computer Manufacturers Association (ECMA).

Dengan hadirnya ES6, maka di dalam JavaScript kini memiliki fitur baru dan penulisan yang lebih singkat dibandingkan JavaScript versi sebelumnya yaitu ES5 yang dirilis pada tahun 2009.

Jika kita ingin menjalankan baris code  yang kita tulis menggunakan ES6 sebaik nya kita harus menggunakan sebuah tambahan yang Bernama NODE.JS agar kita bisa  menjalankan code yang di tulis menggunakan ES6 kita dapat membuka terminal dan menjalankan baris code yang sudah kita tulis dengan cara seperti ini :

Buat sebuah file bebas nama nya mau  seperti apa yang penting ada .JS di belakang nama nya contoh nya seperti ini “TES-ES6.JS” dan buat code seperti ini :

Const coba = ‘Tes ES6’
Console.log(coba);
	
Jika sudah menuliskan baris code ini maka kita bisa  menjalankan baris code ini di terminal dengan cara 

Node TES-ES6.js
> Tes ES6 => ini adalah hasil dari jalan nya code  yang sudah kita buat 




Sebelum kita memulai bekerja dengan REACT.JS Langkah lebih baik nya kita mengenal atau mengetahui tentang fundamental dari JAVASCRIPT itu sendiri atau setidak nya kita harus tau dasar dasar dalam ES6 itu sendiri , seperti hal nya membuat arrow function , membuat function , oprator dan banyak hal lain nya yang harus kita ketahui agar kita lebih nyaman bekerja dengn REACT.JS ya walau demikian tidak semua yang saya tulis di sini dapat mengcover dari semua yang ada di dalam ES6 itu sendiri.
Namun walau demikian setidak nya cukup untuk mengcover apa yang kita butuhkan dalam keberlangsungan kita dalam membuat website ABSENSI ini, mungkin akan ada banyak yang harus kita bahas di sini dan ini lah yang akan kita perlajari terlebih dahulu :

1.	Variable 
Jika sebelum nya kita sudah belajar JAVASCRIPT maka tidak asing lagi di telinga kita mendengar kata VARIABLE. 
Yang mana sudah kita ketahui bahwasanya dalam JAVASCRIPT untuk membuat sebuah VARIABLE kita bisa  menggunakan keyword VAR. namun di dalam ES6 kita dapat menggunakan keyword baru yang nama nya CONST dan LET.
Keyword CONST
Keyword const adalah variable yang nilai nya tidak dapat di rubah alias bernilai tetap contoh nya sebagai berikut :

//define variable
const name = 'Zaid Al Maghfur';

                //try to change
name = 'Mectechinv';

Jika code ini kita jalan kan  maka secara otomastis kita akan mendapatkan eror seperti ini :


Uncaught TypeError: Assignment to constant variable.

Eror ini timbul karna nama VARIABLE tidak bisa di rubah nilai nya 
Keyword let
Keyword let  ini lebih mirip dengan VAR, dimana dengan menggunakan keyword ini nilai yang ada di dalam nya dapat di ganti sesuai dengan ke inginan contoh nya seperti di bawah ini :

  
 var name = 'Zaid Al Maghfu';

   if (true) {
               var name = 'Saipul';
              console.log(name); //<-- output "Saipul"
      }
           console.log(name); // <-- output "Saipul"


Hasil Dari code di atas akan menghasilkan “Saipul” hal ini di sebabkan oleh VARIABLE Name di dalam If akan mengalami  yang di sebut sebagi “OVERRIDE” yang dapat di sebut dengan “hosting/pengankatan” yang akan menimbullkan seolah olah kode yang tadi akan berumah menjadi seperti ini :


    var name = 'Zaid Al Maghfur';
        var name = 'Saipul';
  if (true) {
          console.log(name); //<-- output "Saipul"
  }
          console.log(name); // <-- output "Saipul"

Nah untuk mengatasi masalah di atas kita dapat menggunakan keyword LET dengan tujuan agar tidaka da hosting jadi variable NAME yang ada di luar dalam bloc if tidak saling bertabrakan.



     var name = 'Zaid Al Maghfur';
            if (true) {
      let name = 'Saipul';
              console.log(name); //<-- output "Saipul"
              }
      console.log(name); // <-- output "Zaid Al Maghfur"

Catatan : jika kita membuat variable dengan const var let, dan tidak di tentukan BLOCK SCOPE-NYA maka secara otomatis akan bisa di akses di mana saja dan akan bersifat GLOBAL.


Default Parameter

Di sini kita akan membuat function yang memiliki parameter yang bersifat opsional, yang mana jika kita tidak menentukan nilai nya maka  kita akan di berika nilai yang bersifat default.
Sebelum ada nya ES6 untuk membuat sebuah parameter yang memiliki sifat opsional di dalam sebuah function kita bia membuat nya dengan cara seperti ini :



       function hello(message) {
            let message = message || 'Hello World!';
   console.log(message);
             }

      //panggil function tanpa parameter

               console.log(hello()); // <-- output "Hello World!"

      //panggil function dengan parameter

      console.log(hello('Belajar ES6')); //<-- output "Belajar ES6"

Nah di atas adalah contoh penulisan nya sebelum adanya ES6, bagaimana ?? cukup ribet dan Panjangkan, nah sekarang sejak adanya ES6 kita bisa mempersingkat nya  sehingga kita menjadi lebih cepat dalam penulsan code dan akan menjadi lebih mudah dalam penulisan nya. 
Berikut adalah contoh penulisan setelah adanya ES6 :



  function hello(message = 'Hello World!') {
      console.log(message);
   }
        //panggil function tanpa parameter
    console.log(hello()); // <-- output "Hello World!"
        //panggil function dengan parameter
     console.log(hello('Belajar ES6')); //<-- output "Belajar ES6"

Nah dari code di atas kita dapat memberikan nilai default dari sebuah parameter yang ada di dalam function nya. 

Template String atau Literal

Template String atau Template Literal  adalah sebuah cara atau Teknik yang di pergunakan untuk memanggil sebuah variable yang berada di dalam STRING, untuk melakukan pemanggilan nya  kita harus menggunakan backtick (``).
Berikut adalah contoh menggabungkan string dan variable tampa menggunakan template string dan berikut adalah contoh code nya :



    let name = 'Zaid Al Maghfur';
    let gender = 'Laki-laki';
    console.log(name + 'memiliki jenis kelamin : ' + gender);

   //output "Zaid Al Maghfur memiliki jenis kelamin : Laki-laki"

Bagaiman, ada yang lebih mudah dalam melakukan penulisan code nya ?? jawabanya jelas ada dong, dengan menggunakan template string makan akan menjadi seperti ini lah penulisan nya :



    let name = 'Zaid Al Maghfur';
    let gender = 'Laki-laki';
    console.log(`${name} memiliki jenis kelamin : ${gender}`);

   //output "Zaid Al Maghfur memiliki jenis kelamin : Laki-laki"

Nah dengan menggunakan code ini secara output akan sama hasil nya namun di sini terjadi yang Namanya sebuah penyingkatan dalam penulisan baris code dan jelasnya akan menajadi lebih mudah, mengapa demikian ??  dengan menggunakan (``) kita akan sanggat mudah dalam menampilkan sebuah variable dengan menggunakan sintaks ${ nama variable nya } yang berada di dalam (``).

Arrow Function

Arrow function sesuai dengan nama nya arrow yang artinya “PANAH” yang mana arrow function ini di gunakan untuk mempersingkat penulisan baris code, dan Arrow function ini merupakan fituur bawaan yang di usung oleh ES6, dan di gunakan untuk mempersingkat penulisan function menjadi =>.
Berikut adalah contoh dalam penulisan function biasanya :



//define function
       const hello = function (name) {
             return `Hello ${name}`;
          }
//panggil function
       hello('Zaid Al Maghfur') //< -- output "Hello Zaid Al Maghfur"

Ini adalah contoh penulisan baris code yang tidak menggunakan “arrow function”, nah jika kita menggunakan “arrow function” maka penulisan nya akan menjadi lebih singkat dan mudah di baca. 
Berikut adalah contoh penulisan baris code dengan menggunakan “arrow function” : 



//define function
       const hello = name => `Hello ${name}`;

//panggil function
        hello('Zaid Al Maghfur') //< -- output "Hello Zaid Al Maghfur"

Di atas adalah baris code yang di tulis menggunakan “arrow function” dan hanya memiliki 1 parameter, bagaimana lebih mudah dan singkat kan jika menggunakan “arrow function”, bagaimana jika dengan lebih dari 1 parameter ??
Berikut adalah contoh baris code jika menggunakan lebih dari 1 parameter :




//define function
        const hello = (name, umur) => `Hello ${name} umur ${umur}`;
//panggil function
        hello('Zaid Al Maghfur', 25) //< -- output "Hello Zaid Al Maghfur umur 25"

Ini adalah contoh penulisan nya dengan lebih dari 1 parameter, lebih mudah dan simple di banding kan jika tidak menggunakan “arrow function” Ini lah yang akan membantu kita menjadi lebih cepat dalam penulisan code.



Rest Parameter

Rest Parameter  biasanya di gunakan jika kita mau membuat sebuah function yang memiliki jumblah parameter yang tak terbatas, “rest parameter” di tandai dengan “…” di dalam sebuah parameter, contoh nya sebagai berikut :


     function sum(...rest) {
         let sum = 0;
     for (let number of rest) sum += number;
         return sum;
        }
     let x = sum(4, 9, 16, 25, 29, 100, 66, 77); // <-- output "326"

Di atas kita dapat memberikan nilai berapun di dalam variable “X” dan akan otomatis di jumblahkan terus dan dalam function “SUM”. Karna di dalam function “sum” yang kita berikan parameter berupa “rest parameter”. 


Destructuring & Restructuring

Destructuring  di gunakan untuk membuat sebuah variable baru dari elemet yang sudah ada di dalam sebuah “array” atau “object”.
Contoh Destructuring  di dalam sebuah array :

//array

      const arr = ['Zaid', 'Saipul', 'Pajajaran'];
//destructuring
     const [name1, name2, name3] = arr;
//print output
    console.log(name1); // <-- "Zaid"
    console.log(name3); // <-- "Saipul"
    console.log(name3); // <-- "Pajajaran"

Di dalam baris code yang berada di atas, petama kali kita membuat sebuah “array” dengan nama “arr” setelah kita membuat sebuah “array” lalu kita Destructuring  atau bisa di sebut di “extract” menjadi sebua variable variable yang baru. 

Selanjutnya kita akan menuliskan baris code Destructuring  yang berada di dalam object :

//object
    const obj = {
        name: 'Zaid Al Maghfur',
        age: 25
    };
//destructuring
      const {name, age} = obj;
//print ouput
      console.log(name); // <-- "Zaid Al Maghfur"
      console.log(age); // <-- "25"

Restructuring Assigment

Nah di dalam Restructuring  merupakan kebalikan dari Destructuring  yaitu untuk membuat sebuah “object” di dalam sebuah “array”.
Berikut adalah contoh code yang menggunakan Restructuring  :



//define variable
     const name = 'Zaid Al Maghfur';
     const age = 20;
//restructuring
    const obj = {name, age};
//print output
    console.log(obj); // <-- {name: 'Zaid Al Maghfur', age: 20}



Array Map

“Array Map” di gunakan untuk membuat sebuah perulangan dari sebuah “array” dengan mengembalikan “array” baru tanpa mengubah “array” sumber nya. 
Di dalam pengerjaan pembuatan website absensi nanti kita akan banyak nmenggunakan “array map” di dalam project kita, mengapa demikian ?? karena di dalam REACT.JS kita akan melakukan perlualangan dengan menggunakan “ARRAY MAP”. 
Berikut adalah contoh penulisan code dengan “ARRAY MAP” :



//define array
      const arr = [1, 2, 3, 4, 5, 6, 7];
//looping
      const number = arr.map( value => {
               return value;
       });
//print output
            console.log(number); // [1, 2, 3, 4, 5, 6, 7]

Pada baris code di atas pertama kita membuat sebuah variable  “ARR” yang di isi dengan angka 1-7, dan kemudian kita looping menggunakan “ARR.MAP () ” dan key yang kita gunakan untuk menangkap datanya adalah value nya .
Kemudian data nya kita cetak dengan memanggil variable “number” maka hasil yang akan keluar akan tetap sama dengan array yang ada sebelum kita Looping. 

Nah sudah selesai nih  pembelajaran tentang ES6 ini, jika sudah paham maka kita bisa melanjutkan pengerjaan website absensi, kerna di selama pengerjaan nanti kita bakal banyak bersentuhan dengan materi materi yang sudah di jelas kan di awal tadi.




Installasi & Persiapan

Persiapan dan Tools Pendukung

Oke saat nya kita mulai membuatsebuah project kan namun sebelum kita mulai, kita butuh beberapa tools pendukung yang kita butuhkan sebagai berikut :
1.	Text editor 
2.	Web server 
3.	Php
4.	Database
5.	Composer 
6.	Node.Js 
Di sini kita akan membahasa satu persatu tentang hal di atas agar kita semua lebih mudah dalam melakukan pengerjaan membangun website absensi dengan Laravel dan React.Js dengan mudah .

Langkah 1 - Installasi Text Editor

Ada banyak sekali text editor yang dapat kita gunakan dalam pengembangan sebuah application, namun untuk saat ini saya akan merekomendasikan untuk menggunakan code editor yang sanggat popular dan sudah banyak dukungan extension yang berada di dalam nya. 
Yups bener sudah pasti dan tidak salah lagi kita akan menggunakan Visual Studio Code. Text editor buatan Microsoft ini sanggat banyak di gunakan oleh para developer, karena banyak nya dukungan terhadap Bahasa pemprograman.
Untuk teman teman yang masih belum mempunyai text editor silahkan bisa mengunduh nya pada link berikut : https://code.visualstudio.com/ silahkan untuk mengunduh nya dan sesuaikan dengan system oprasi nya masing masing. 
Setelah berhasil melakuakan instalasi silahkan teman teman melakuakan instalasi beberapa extension pendukung yang akan memudahkan kita dalam proses development. 


Plugin Visual Studio Code untuk PHP

•	https://marketplace.visualstudio.com/items?itemName=hakcorp.php-awesome-snippets
•	https://marketplace.visualstudio.com/items?itemName=bmewburn.vscode-intelephense-client
•	https://marketplace.visualstudio.com/items?itemName=MehediDracula.php-namespace-resolver
•	https://marketplace.visualstudio.com/items?itemName=rexshi.phpdoc-comment-vscode-plugin
•	https://marketplace.visualstudio.com/items?itemName=ronvanderheijden.phpdoc-generator


Plugin Visual Studio Code untuk Laravel

•	https://marketplace.visualstudio.com/items?itemName=amirmarmul.laravel-blade-vscode
•	https://marketplace.visualstudio.com/items?itemName=austenc.laravel-blade-spacer
•	https://marketplace.visualstudio.com/items?itemName=codingyu.laravel-goto-view
•	https://marketplace.visualstudio.com/items?itemName=stef-k.laravel-goto-controller
•	https://marketplace.visualstudio.com/items?itemName=amiralizadeh9480.laravel-extra-intellisense

Plugin Visual Studio Code untuk JavaScript dan React.js

•	https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel
•	https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify
•	https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html
•	https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets
•	https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
•	https://marketplace.visualstudio.com/items?itemName=skyran.js-jsx-snippets
•	https://marketplace.visualstudio.com/items?itemName=xabikos.ReactSnippets







Langkah 2 - Installasi Web Server

Pilihan untuk tools selanjutnya adalah web server dan di sini ada banyak pilihan untuk web server seperti XAMPP, LARAGON,WAMPP dan lain sebaginya, semua nya dapat di gunakan oleh teman teman yang penting kalian menggunakan nya yang memiliki versi php 8.1.

Untuk laragon kelebihanya adalah dapat mengganti versi php dengan mudah namun di antara kelebihanya pasti ada kekurangan nya masih belum ada PhpMyadmin di dalam nya namun jangan khawatir ada banyak cara nya yang tersedia di internet.

Link Unduh XAMPP

1.	Windows 
https://downloadsapachefriends.global.ssl.fastly.net/8.1.10/xampp-windows-x64-8.1.10-0-VS16-installer.exe?from_af=true

2.	Linux
https://downloadsapachefriends.global.ssl.fastly.net/8.1.10/xampp-linux-x64-8.1.10-0-installer.run?from_af=true

3.	Mac Os 
https://downloadsapachefriends.global.ssl.fastly.net/8.1.6/xampp-osx-8.1.6-0-vm.dmg?from_af=true

Link Unduh Laragon


4.	https://laragon.org/download/



Langkah 3 - Installasi Node.js

Karna kita kan bergelud dengan framework dari JavaScript, maka sudah jeleas kita membutuhkan yang nama nya NODE.JS dan untuk melakukan installasi juga sanggat mudah, kita bisa kunjungi situs resmi nya dan langsung di download saja yang sesui dengan system oprasi nya masing masing.



Setelah berhasil menginstall NODE.JS di OS masing masing maka kita terlebih dahulu mengcek apakah sudah berhasil terinstall dan terbaca di os kita, kita dapat mengcek nya dengan cara menulis kan coment ini di terminal masing masing mau itu di git bash ataupun di cmd, dengan comment seperti ini :

NODE –VERSION
NPM –VERSION

 

langkah 4 - Installasi Composer

COMPOSER defedensi tools milik PHP, yang mana dapat kita gunakan untuk menginstall library dengan lebih mudah, untuk melakukan installasi composer teman teman dapat membuka link di bawah ini :
5.	Installation - Linux / Unix / macOS :
https://getcomposer.org/doc/00-intro.md#installation-linux-unix-macos
6.	Installation - Windows : 
https://getcomposer.org/doc/00-intro.md#installation-windows
untuk memastikan bahwasanya composer sudah terinstall dan berjalan dengan baik di device kita, maka kita bisa menjalankan perintah di terminal kitab isa di git bash maupun di cmd , dengan perintah seperti in :

COMPOSER

 

Jika sudah muncul output seperti ini berarti composer kita sudah terinstall dan berjalan dengan baik di devices kita, maka jika teman teman sudah berhasil mengikuti Langkah demi Langkah maka kita sudah bisa melanjutkan ke pembuatan project nya .


Membuat project Laravel Menggunakan Composer

Setelah semua tools sudah di siapkan maka kita akan memulai project LARAVEL nya dengan menggunakan composer, di dalam Laravel itu sendiri ada beberapa cara dalam membuat project dan di kali ini kita akan menggunakan COMPOSER CREATE-PROJECT, mengapa demikian, jelas dengan tujuan agar kitab isa menginstall Laravel dengan versi yang kita inginkan. 


Membuat project Laravel Menggunakan Composer

Di sini project Laravel dapat di buat di mana saja , namun akan lebih baik jika project laravel kita buat di dalam folder XAMPP dan bisa di letakan di folder folder htdocs, silahkan masuk ke dalam folder nya masing masing dan open folder nya di terminal dan ketikan comment ini di terminal :

composer create-project --prefer-dist laravel/laravel:9.3.8 absensi-app
 
 

Pada comment di atas akan membuat sebuah project Laravel baru dengan versi 9.x.x. dan tuktuk nama project nya adalah absensi-app.

Langkah 2 - Menjalankan Project Laravel

Setelah berhasil teman teman bisa menuju ke folder “absensi-app” dan membuka nya di code editor tercinta kita yaitu vs code, setelah berhasil dan masuk ke dalam vs code, di sini kita bisa memulai menjalankan project kita dengan comment atau perintah dari Laravel yaitu :
php artisan serve

Nah jika berhasil teman teman bisa mmenjalankan project nya di browser yang teman teman pakai, yang di jalankan di dalam localhost dengan port 8000 dan teman teman bisa juga menjalankannya dengan membuka http://localhost:8000.
Atau teman teman juga bisa membuka nya dengan menuliskan “127.0.0.1:8000” di dalam browser masing masing. Yang mana Ketika link itu di buka maka akan tampil seperti ini :

 


Konfigurasi Time Zone

Karna website akan bersentuhan langsung dengan yang nama nya waktu, maka kita perlu melakuakan konfogurasi waktu, tujuan nya agar data time yang ada di dalam database kita secara otomatis di convert ke dalam zona waktu di mana kita berada. 
Silahkan teman teman buka project nya di  code editor nya masing masing kemudian buka di file config/app.php, kemudian cari code berikut :


'timezone' => 'UTC',
'locale' => 'en',

Dan rubah code di atas tadi menjadi code berikut :


'timezone' => 'Asia/Jakarta',
'locale' => 'id',



Konfigurasi Inertia.js

Apa itu Inertia.js ?

 

Jadi apa sih INERTIA.JS itu?? Sederhanya adalah sebuah pendekatan untuk membuat sebuah application web berbasis SPA (single page application), menggunakan react , vue tampa membuat sebuah rest api dan di sinilah kita menyebutnya dengan The Modern Monolith.

Jadi inertia js memungkin kan kita membuat sebuah application  berbasis website dengan SPA  yang mana sepenuh nya di render di halaman CLIENT SIDE. 

Inertia js juga tidak memiliki sebuah route khusus dan juga tidak butuh sebuah rest api, kita cukup dengan membuat sebuh controller dan route yang merendernya melalui INERTIA.JS. 


Inertia.js Bukan Sebuah Framework !

Inertia js bukan lah sebuah faremwork dan juga bukan sebuah pengganti framework dari sisi server dan juga sisi client, namun inertia js berperan sebagai penghubung antar sisi faremwork dan sisi server. 

Di buku ini kita akan megaplikasikan INERTIA.JS di dalam sebuah project Laravel dan nanti kita akan mengguanakan REACt.JS sebagai sisi client nya. 


Langkah 1 - Installasi Inertia.js "server-side"


Silahakan teman teman jalankan perintah berikut di dalam terminal yang terintegrasi dengan vs code :

composer require inertiajs/inertia-laravel:0.5.4

Dan silahkan tunggu proses install nya berjalan sampai selesai , jika sudah selelsai maka akan seperti ini kondisi di terminal anda ;

 


Atau kita juga bisa memakan pakage dari Laravel yang mana jika kita menggunakan pakage ini maka semua akan  tergenerate secara otomatis .
Kita akan menggunakan pakage yang nama nya Laravel BREEZE, jika memaki pakage yang ada di sini maka kita cukup dengan melakukan installasi yang sanggat amat mudah dan bisa saja langsung install react js nya secara langsung dan tampa memerluka konfigurasi lagi . 

Menggunakan laravel breeze 

Apa sih itu Laravel breeze ?? dan apa keuntungan nya menggunakan Laravel breeze ??.
Jadi Laravel breeze itu adalah sebuah pakage yang mana jika kita menginstall nya maka kita sudah bisa menggunakan inertia js dan juga kita jadi lebih mudah dalam melakukan instalasi dengan react nya juga, seta juga sudah terintall tailwind css nya juga, dengan perintah ini kita bisa melakukan installasi nya :

Composer require Laravel/breeze --dev


Jika sudah menjalankan perintah ini maka kita bisa melanjutkan ke perintah selanjut nya :

php artisan breeze:install react


Perintah di atas akan menginstall breeze dan react serta tailwind css secara otomatis maka dengan ini kita sudah bisa memulai project dengan laravel dan react js, dan Ketika kita berhasil melakukan installasi ini maka kita sudah di berikan 1 pakage lengkap dengan fitur  registrasi dan login serta sudah di buat kan component yang bisa menghandle navbar dan layout yang sudah responsive dengan menggunakan tailwind css.





Konfigurasi Koneksi Database

Karna kita akan membuat sebuah website absensi yang  mana website ini membutuhkan sebuah database yang berguna untuk menampusng data user, kariawan, serta menampung jam kehadiran si user. 

Langkah 1 - Konfigurasi Koneksi Database

Silahkan teman teman masuk ke dalam file .ENV kemudian cari kode ini :


DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=


Kemudian silahkan ubah menjadi :


DB_DATABASE=absensi-app
DB_USERNAME=root
DB_PASSWORD=


Berdasarkan kode kita di atas, kita mengatur DB_DATABASE menggunakan absensi-ap, untuk DB_PASSWORD nah untuk password silahakan sesuaikan dengan konfigurasi di XAMPP masing masing .



Langkah 2 - Membuat Database

Setelah berhasil melakukan konfigurasi koneksi database masing masing, Langkah selanjut nya kita akan membuat database nya di dalam XAMPP, dan di sini kita menggunakan phpMyAdmin agar lebih mudah dalam mengelola database kita nanti.
Silahkan buka http://localhost/phpmyadmin kemudian silahkan buat database baru dengan nama absensi-app kurang lebih seperti ini :

 


Membuat Model dan Migration

Model merupakan salah satu bagian penting dalam konsep MVC , apa itu MVC ?? jadi di dalam kebanyakan framework pasti akan menggunakan arsitektur/pola yang bisa di sebut sebagai MVC (Model View Controller).
Dan di sini Laravel juga menggunakan nya, dengan menggunakan konsep ini maka alur pembutaan aplikasi nya akan di pisah pisah dengan berdasarkan fitu fitur nya.



 


1.	Model 
Merupakan bagian yang di gunakan buta menangani masalh quey data yang di ambil dari database.

2.	View 
Merupakan bagian yang menangani bagian yang menampung semua data yang akan di tampilkan 

3.	Controller 
Merupakan bagian yang menangani untuk penghubung antar model dengan view 

Sedangkan migration merupakan fitur yang ada di dalam framework Laravel yang di pergunakn untuk membuat version control, di mana kita bisa membuat sebuah scema database dan dapat membuat kita membagaikan nya dengan mudah .
Jika sebelumnya kita membuat attribute secara manual di dalam database, maka dengan migration kita tidak perlu melakukan hal seperti itu lagi, seperti membuat table,
menambahkan attribute, mengubah tipe data dan lain-lain.

Pada bab perancangan dan materi struktur database, kita sudah melihat beberapa tabletable yang akan kita gunakan nantinya dan kali ini kita akan belajar bagaimana cara membuat Model dan juga Migration untuk melakukan generate table-table tersebut ke dalam database.




Langkah 1 - Membuat Model dan Migration

       Langkah pertama kita akan membuat sebuiah model dan migration, silahkan teman teman jalankan perintah ini di dalam terminal yang sudah terintegrasi dengan vs code.


1.	Make model Holidays 

php artisan make:model Holiday 

Perintah di atas jika di jalankan maka akan mengasilkan file yaitu :
1.	Holiday.php
Dan silahkan masukan code berikut ke dalam vscode anda. 
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Holiday extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'description', 'holiday_date'];
}

Dari perubahan kode di atas, kita menambahkan properti yang bernama $fillable.
Properti tersebut bisa juga disebut dengan Mass Assigment.

2.	Make model User

php artisan make:model user 
 
	Sama hal nya dengan  yang pertama Ketika perintah ini di jalankan maka akan menghasilkan dua file juga yak ni :
1.	User .php




<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens;
    use HasFactory;
    use Notifiable;

    public const ADMIN_ROLE_ID = 1;
    public const OPERATOR_ROLE_ID = 2;
    public const USER_ROLE_ID = 3;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'role_id',
        'position_id',
        'phone',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    public function position()
    {
        return $this->belongsTo(Position::class);
    }

    public function scopeOnlyEmployees($query)
    {
        return $query->where('role_id', self::USER_ROLE_ID);
    }

    public function isAdmin()
    {
        return $this->role_id === self::ADMIN_ROLE_ID;
    }

    public function isUser()
    {
        return $this->role_id === self::USER_ROLE_ID;
    }
}

Bisa di lihat dari file yang ini kita akan banyak menambahakan baris code, namun di sini saya sudah melakuakn pemecahan role  yang nantinya akan mempunyai kuasa nya masing masing. 

3.	Make model Role 

php artisan make:model Role

Jika sudah berhasil membuat model Role silahkan masuk ke dalam file Role.php dan kita akan melakukan perubahan di sini sebagai berikut :



<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;

    protected $fillable = ['name'];
}

Sama hal nya dengan yang holiday di sini saya menggunakan $fillable 

4.	Make model Attendance

php artisan make:model Attendance

Dan jika sudah berhasil membuat model Attendance maka langsung masuk kedalam file nya dan lakukan perubahan sebagai berikut :
<?php

namespace App\Models;

use Carbon\Carbon;
use App\Models\AttendancesPosition;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Attendance extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'start_time',
        'batas_start_time',
        'end_time',
        'batas_end_time',
        'code'
    ];

    protected $appends = ['data'];

    protected function data(): Attribute
    {
        return Attribute::make(
            get: function ($value) {
                $now = now();
                $startTime = Carbon::parse($this->start_time);
                $batasStartTime = Carbon::parse($this->batas_start_time);

                $endTime = Carbon::parse($this->end_time);
                $batasEndTime = Carbon::parse($this->batas_end_time);

                $isHolidayToday = Holiday::query()
                    ->where('holiday_date', now()->toDateString())
                    ->get();

                return (object) [
                    "start_time" => $this->start_time,
                    "batas_start_time" => $this->batas_start_time,
                    "end_time" => $this->end_time,
                    "batas_end_time" => $this->batas_end_time,
                    "now" => $now->format("H:i:s"),
                    "is_start" => $startTime <= $now && $batasStartTime >= $now,
                    "is_end" => $endTime <= $now && $batasEndTime >= $now,
                    'is_using_qrcode' => $this->code ? true : false,
                    'is_holiday_today' => $isHolidayToday->isNotEmpty()
                ];
            },
        );
    }

    public function scopeForCurrentUser($query, $userPositionId)
    {
        $query->whereHas('positions', function ($query) use ($userPositionId) {
            $query->where('position_id', $userPositionId);
        });
    }

    public function positions()
    {
        return $this->belongsToMany(Position::class);
    }

    public function presences()
    {
        return $this->hasMany(Presence::class);
    }

    public function izinposisi(){
        return $this->hasMany(AttendancesPosition::class);
    }
}

Yang mana di sini sudah cukup banyak yang kita tambahkan karna di sini adalah fitur terpenting di dalam website ini 

5.	Make model AttendancesPosition

php artisan make:model AttendancesPosition

Jika sudah berhasil membuat file ini maka masuk ke dalam file AttendancesPosition dan kita akan melakukan perubahan :
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AttendancesPosition extends Model
{
    use HasFactory;

    protected $table = 'attendance_position';

    protected $fillable = [
        'attendance_id',
        'position_id'
    ];
}


Di sini masih sama dengan yang lai yakni saya menggunakan $fillable yang akan menghandle nya. 

6.	Make model Permission

php artisan make:model Permission

Setelah terbuat tanpa adanya kendala maka kita masih bisa menlanjutkanya dengan membuka file nya dan melakukan perubahan pada file ini dengan code berikut :

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Permission extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function attendance()
    {
        return $this->belongsTo(Attendance::class);
    }
}


Di sini sudah selesai kita membuat model permission dan kit akan melanjutakanya untuk membuat model yang lain nya. 

7.	Make model Position 

php artisan make:model Position

dengan menjalankan perintah ini maka akanmenghasilkan sebuah model yang akan klita ubah dengan menambahi baris code ini :

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Position extends Model
{
    use HasFactory;

    protected $guarded = ['id'];
    
}



Jika sudah berhasil tampa adanya kendala maka kita akan memasuki pembuatan model terakhir yang mana setelah model ini sudah selesai maka  kita akan bisa lanjut ke pembuatan migration dan seeder. 

8.	Make model Peresence 

php artisan make:model Peresence

Jika sudah berhasil maka kita akan melakukan  perubahyan pada baris code ini :
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Position extends Model
{
    use HasFactory;

    protected $guarded = ['id'];
    
}
 
Alhamsulillah sudah selesai kita dalam tahapan pembuatan model dan Langkah selanjut nya kita akan bersentuhan dengan migration dan seeder .
PEMBUATAN  MIGRATION DAN SEEDER

       Nah sudah selesai nih tahapan pembuatan model dan tahapan selanjutnya adalah tapaham yang sanngat penting yakni pembuatan migration. Apa sih itu migration ?? jadi semple nya migration adalah pembuatan database kita, giman ga sanggat penting karna di sinilah tahapan pembutan yang akan menampung semua data yang akan kita butuhkan, di sini lah kita akan banyak bermain dengan connection antar table yang saling membutuhkan relasi.
1.	Membuat migration user 

php artisan make:migration CreateUserTable

Dari perintah di atas kita akan mendapatkan sebuah table database yang di buat dengan nama seperti ini :
7.	2014_10_12_000000_create_users_table.php
Yang mana kita akan melakukan perubahan dan penambahan colloumnt yang akan kita butuhkan untuk menampung data user. Teman teman bisa membukanya di dalam folder “database/migration/ 2014_10_12_000000_create_users_table.php” yang mana kita akan melakukan penambahan seperti baris code di bawah ini :
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};


Nah di kondisi ini kita usdah berhasil membuat table user yang mana di dalam table user ada beberapa fillt yang harus di isi da ndi penuhi dengan kriteria sebagai berikut 
1.	Name => dengan tipe data string.
2.	Email => dengan kriteria unique yang artisanya setiap user harus mempunyai email yang berbeda dengan user yang lain nya.
3.	Password => dengan tipe data string
Yang mana seperti yang di ketahui bahwasanya kita harus mempunyai data data tersebut agar lebih mudah dalam memanegemnt user nanti nya. 

2.	Membuat migration Roles 

php artisan make:migration RolesTable

Dari perintah di atas akan terlihat jelas bahwasanya akan ada satu file migration baru yang berfungsi menampung data role yang akan kita butuhkan, yang akan di lihat dengan nama file :
8.	2022_11_22_002712_create_roles_table.php
Seperti biasanya kita akan melakukan penambahan baris code yang berguna untuk membuat sebuah table di database kita yang berfungsi untuk menampung nilai nilai yang akan kita pergunakan nantinya untuk melkukan pembatasan hak akses website nantinya, dan lakukan penambahan code seperti di bawah ini :
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('roles', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('roles');
    }
};

Di sini kita dapat mengidentifikasi bahwasanya kita hanya menambahakan nama yang berungsi sebagai penampung nama dari role nya nanti .
Contoh nya seperti ini :
9.	Table Role => id => 1 name => admin
Ini adalah contoh isi table Role.

3.	Membuat migration add role to table user 
Jadi di sini kita akan menambahakan role ke dalam table user menggunakan “FORIEIGNID” yang mana fungsi nya agar Ketika user nanti login kita akan bisa mengetahui bahwasanya user ini memiliki id role admin, maka Ketika user punya id admin maka akan di bawa ke dalam dashboard admin, namun Ketika user memiliki id sebagai user maka user tidak berhak dan memiliki akses buat ke admin. Maka dengan ini kita akan mudah memfilter untuk admin agar memiliki akses penuh dalam website kita. 
php artisan make:migration AddRoleToTableUser

Nah jika kita menjalankan perintah di atas akan menghasilkan sebuah file yang Bernama :
10.	2022_11_22_002836_add_roles_id_to_users_table.php
Seperti biasanya kita akan melakukan penambahan baris code yang berfungsi memberikan akses ke table user, dengan code berikut :
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->foreignId('role_id')->after('password')->constrained();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropForeign(['role_id']);
            $table->dropColumn('role_id');
        });
    }
};

Nah di sini kita menggunakan “foreingn” untuk menghubungkan table user dengan table role_id, maka secara otomatis table user sudah memiliki colount role_id yang sudah bisa di isi dengan isian yang sudah ada di table role.



4.	Membuat migration position 
Jadi selain role kita juga mempunyai table yang akan memfilter berdasarkan jabatan, kenapa  kita butuh dua kali validasi untuk melakukan filter?? Ya sudah jelas bahawanya di setiap instansi pasti memiliki jabatan, nah di sinilah fungsinya table jabatan yang kita buat,  tujuan nya agar memfilter user yang dengan id jabatan apa nih yang di perbolehkan melakukan absensi, oleh sebab itu kita memerlukan nya, cara membuat nya cukup dengan menjalankan perintah 

php artisan make:migration PositionTable

Jika perintah ini berhasil maka akan menghasikan sebuah file yang berada di dalam folder “database/migration/ 2022_11_22_003124_create_posision_table.php” langskah selanjutnya kita akan menambahakan beberapa baris code di dalam nya sebagai berikut :
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('positions', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posision');
    }
};
Di sini kita hanya menambahakan tipe coloumnt name ya hanya untuk menampung nama dari jabatan itu sendiri, yang memiliki tipe data “string”

5.	Membuat migration add phone and position_id to table user
Ya di sini kita butuh menambahakan coloumnt ini ke dalam table user , mengapa demikian ?? sudah jelas dan sudah pasti kita memerlukan position_id aghar  bisa memfilter user dengan id berpa yang memiliki position_id berapa, dan kenapa harus ada no telephone di dalam nya, agar memudahakan admin untuk mengkonvirmasi bahwasanya user ini izin atau sebagai nya .

Php artisan make:migration AddPhoneAndPosition_idToTableUser

Di sini sama hal nya seperti add Role_id to table user, namun hanya di bedakan dengan nama dan fungsi nya sebagai apa, kita cukup menambahakan baris code berikut ke dalam file yang berdirectoy “database/migration/nama file yang baru di buat tadi” 2022_11_22_003332_add_phone_and_position_id_to_users_table.php

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->after('password', function (Blueprint $table) {
                $table->string('phone')->unique()->nullable();
                $table->foreignId('position_id')->constrained();
            });
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropForeign(['position_id']);
            $table->dropColumn(['phone', 'position_id']);
        });
    }
};


Di sin kita juga menggunakan “foreign” untuk memasukan table yang kita inginkan ke dalam table yang kita mau.


6.	Membuat migration Holidays
Fungsi dari table yang ini adalah untuk memasukan data hari libur ataupun jadwal hari libur, yang mana fungsi nya adalah sebagai management hari libur apa saja dan tanggal berapa. 
Cara membuat nya sama seperti yang tadi cukup dengan perintah berikut ini:

php artisan make:migration Holidays

Jika sudah tidak ada kendala dalam pembuatan table nya maka  kita sudah bisa melanjtkan membuat table yang ini , yang mana table yang ini lumayan banyak data yang harus kita tambahakan, silahakan buka file nya dan masukan baris code berikut ini:

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('holidays', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('description');
            $table->date('holiday_date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('holidays');
    }
};

Bisa di lihat di sini kita menggunakan tipe data “DATE” yang mana tipe data ini belum pernah kita bahas sebelum nya, jadi kalua kita menggunakan tipe data ini maka seara otomatis si database akan menyimpanya dalam bentuk tanggal. 
7.	Membuat migration Attandance 
Ya ini adalah table yang sanggat penting yakni table “Attandance” yang mana di table ini akan menampung data absensi yang di buat oleh admin, yang bisa di bilang bawasanya table ini ckup banyak data yang harus kita penhi, cara membuat nya cukup dengan memasukan perintah berikut ini di terminal :

php artisan make:migration Attandance

Jika sudah berhasil maka kita akan memulai mmeasukan data data yang kita butuhkan untuk membuat table Attandance, berikut adalah baris code yang ahrus di masukan :

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('attendances', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('description', 500)->required();
            $table->time('start_time'); // mulai absen masuk
            $table->time('batas_start_time'); // akhir absen masuk
            $table->time('end_time'); // mulai absen pulang
            $table->time('batas_end_time'); // akhir absen pulang
            $table->string('code')->nullable(); // for qrcode kalau kosong berarti hanya pakai button
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('attendances');
    }
};

Bisa di lihat di sini kita banyak menambahakan data data yang akan menjadi coloumnt di databse kita nanti, dan karna kita berhubungan dengan absensi maka kita menggunakan tipe data “time” yang mana hal ini di pergunakan agar data yang di isi ke databse bersifat waktu .


8.	Membuat migration attendance position 

Mengapa kita perlu membuat table database yang ini ?? ya sudah jelas bahwasanya id dari si attdandance dan id dari position akan di tamping di table ini agar memudahkan kita untuk melakukan validasi bahwasanya user yang dengan id posisi apa yang di perbolehkan absensi, sekarang kamu bisa menjalankan perintah berikut ini :
php artisan make:migration attdandance_position

Setelah perintah ini selesai di jalankan maka saat nya kita masuk ke dalam file nya dan melakukan penambahan code sebagai berikut :
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('attendance_position', function (Blueprint $table) {
            $table->id();
            $table->foreignId('attendance_id')->constrained()->cascadeOnDelete();
            $table->foreignId('position_id')->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('attendance_position');
    }
};

Nah dari sini kitab isa melihat bahawasanya table yang ini hanya menyimpan id dari si attendance dan id dari position id , dan dengan ini kita akan melakukan pemfilteran dengan cara melalui position_id yang di ambil saat penginmputan absensi dan kita bisa mengetahui bahawa di id attandace yang mana yang menggunakan posisi tersebut buat absensi.
9.	Membuat migration presence 

Nah di table ini akan kita gunakan untuk menampung data user yang sudah absensi dan data yang akan terkirim itu adalah sebuah id dari si user yang sudah melakukan abseni, untuk lebih mudah dalam memahami nya kita langsung saja terjun ke dalam pembutan nya.

php artisan make:migration presence

Nah setelah berhasil dalam membuat table yang ini maka silahkan langsung kita langsung melkukan perubahan yang mana perubahan ini bisa kalian ikuti sebagai berikut :

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('presences', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained();
            $table->foreignId('attendance_id')->constrained()->cascadeOnDelete();
            $table->date("presence_date");
            $table->time("presence_enter_time");
            $table->time("presence_out_time")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('presences');
    }
};

Yang man dari isi table ini nantinya adalah sebuah time atau waktu user mengklik absen mauk maupun absen pulang yang dari time itu lengkap beserta jam menit dan detik. 

10.	Membuat migration permission 

Nah di migration yang ini berguna untuk menghandle semua permission, alias Ketika admin sudah menambahakan absensi maka hal ini harus di filter terlebih dahulu dengan permission yang akan di lakukan, untuk membuat migration yang ini cukup dengan menjalankan perintah ini  di dalam terminal yang sudah terintegrasi dengan vs code , dengan perintah berikut :

php artisan make:migration Permission

Nah jika sudah berhasil menjalankan perintah tersebut maka silahkan masuk kedalam file nya dan lakukan perubahan sesuai dengan apa yang saya berikan berikut ini :

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('permissions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained();
            $table->foreignId('attendance_id')->constrained()->cascadeOnDelete();
            $table->string('title');
            $table->string('description', 500);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('permissions');
    }
};


Di sini nantinya akan kita gunakan untuk mengambil data user_id dan datattandance_id yang mana dengan hal ini kita akan  bisa memberikan sebuah perizinan yang akan memberikan absenya dengan user id yang mana dan dengan attendance_id yang mana.

11.	Membuat migration add permission to table presence 
Nah hal ini terjadi di sebabkan kita memerlukan permission di dalam table attendance yang mana hal ini untuk memastikan bahwasanya permission yang kita lakukan sudah berjalan dengan baik, untuk melakukan hal ini kiita perlu menjalankan perintah berikut ini : 
php artisan make:migration AddPermisionToTablePresence

Jika sudah berjalan dengan baik dan tampa adanya eror maka kita bisa melanjutkan proses nya dengan memasukan code yang akan saya berikan berikut ini :

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('presences', function (Blueprint $table) {
            $table->boolean('is_permission')->after('presence_out_time')->default(0);
            $table->string('presence_enter_time')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('presences', function (Blueprint $table) {
            $table->dropColumn('is_permission');
        });
    }
};


Di table ini saya hanya menambahakan peresence time_out atau bisa di billang dengan absen pulang yang mana hal ini juga kita sanggat kita perlukan, mengapa demikian hal ini terjadi karna nantinya bakal menjadi sebuah validasi agar bisa di buat user yang sudah melakukan absen datang dan absen pulang maka akan berstatus hadir.

12.	Membuat migration add permission_date to permission Table

Ya lagi lagi saya masih melupakan hal ini , hal ini juga harus  kita isi agar kit amengetahui bahwasanya permission ini terjadi pada tanggal berapa, dan untuk melakukan hal ini kita perlu membuat migration baru, kita cukup menjalankan perintah di terminal yang sudah terintegrasi dengan vs code, dan jalankan perintah berikut ini:

php artisan make:migration add Permision_data To Table Permision

Jika sudah berhasil maka tambahakan baris code berikut ini :
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('permissions', function (Blueprint $table) {
            $table->date("permission_date")->after('description');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('permissions', function (Blueprint $table) {
            $table->dropColumn('permission_date');
        });
    }
};

Dengan begini kita sudah berhasil memasukan permission_date ke dalam table permission, maka jika sudah kita bisa melanjutkan nya ke tahap selanjutmya.

13.	Membuat migration add accepted to table permission 

Hal ini  juga perlu kita lakukan agar si admin bisa melakuakn acc kepada user yang ingin melakukan absen, dan kiat bisa memasukan perntah berikut ini agar bisa melakukakan tahapan terakhir dalam membuat sebuah migration ini: 

php artisan make:migration add Accepted to table Permission

Setelah berhasil maka kita akan melakukan penambahan baris code brikut ini agar kita bisa menyelesasikan proses pembautan migration databse kita :

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('permissions', function (Blueprint $table) {
            $table->boolean('is_accepted')->default(0)->after('permission_date');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('permissions', function (Blueprint $table) {
            $table->dropColumn('is_accepted');
        });
    }
};


 Nah dengan begini kita sudah berhasil menambahakan is accepted ke dalam table permission yang man dengan ini sudah selesai tahapan pembuatan migration database dan kita akan bisa melanjutkan ke dalam pembuatan seeder. 




Membuat seeder

Seeder adalah sebuah class bawaan dari Laravel yang di pergunakan untuk mengisi data ke dalam table database yang kita inginkan, biasanya class ini di pergunakan utuk mengisi data awal seperti data user dan juga data role, kita dapat membuat seeder sendiri ataupun dapat menggunakan seeder bawaan dari Laravel itu, data yang akan di isikan juga dapat kita atur dengan kebutuhan seperi jumblah data yang akan di isikan dan kondisi tertentu juga, nah di dalam tahapan pembuatan website application kita ini kita akan menggunakan 3 databse seeder yang mana dari 3 seeder yasng kita pakai akan berisi seperti ini :
1.	User Seeder 
Yang mana dari seeder ini kita akan melakukan seeder secara acak dan random atau bisa di bilang dengan data dummy.

2.	Role Seeder
Di Role seeder ini di fungsikan untuk melakukan pengisian data ke dalam table Role.

3.	Position Seeder
Di sseder yang yang ini kita juga akan melakukan pengisian data position ke dalam table position.
Nah di atas adalah 3 seeder yang akan kita lakukan dan di tahapan ini yang pertama akan kita lakukan adalah membuat seeder Role sebagai berikut :

1.	Membuat seeder Role :

php artisan make:seeder RoleSeeder

Jika sudah berhasil melakukan perintah di atas maka kita bisa melakukan penambahan baris code sebagai berikut :
<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Role::create([
            'name' => 'admin',
        ]);
        Role::create([
            'name' => 'user', // karyawaan
        ]);
    }
}

Nah di sini kitab isa melakukan pemantauan bahwasanya  kita melakukan pengisian data ke dalam table Role yang mana dari isi data tersebut dapat di lihat ada “admin” dan ada juga “User” , dari data yang sudah kita isi , kita bisa mengguakanya untuk melakukan pemisahan user apakah user itu admin atau user itu adalah kariawan. 

2.	Membuat position seeder 
Nantinya dengan posisi seeder kiata akan mencoba memasukan posisition ke dalam table posisi, yang man jika sudah lengkap ada role dan position maka kita akan bisa menambahakan data user yang lengkap dengan adanya role dan position.
php artisan make:seeder PositionSeeder

Dengan berhasil nya menjalan perintah berikut ini maka kita akan melakukan penambahan baris code seperti di bawah ini:
<?php

namespace Database\Seeders;

use App\Models\Position;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class PositionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Position::create([
            'name' => 'Operator',
        ]);
        Position::create([
            'name' => 'Ketua kelas',
        ]);
        Position::create([
            'name' => 'Guru',
        ]);
        Position::create([
            'name' => 'Siswa',
        ]);
    }
}

Nah jika kita perhatikan  disini kita melakukan pendaftaran position ke dalam table posisi, nah dari posisi ini lah yang akan menentukan jabatan si user sebagai apa, dan user yang mana aja yang akan di berikan permission oleh admin. 

3.	Membuat User Seeder
Nah ini adalah hal terpenting dari semua seeder yang akan kitalakukan, ini lah initi dari seeder yang kita lakukan du di awal tadi.

php artisan make:seeder UserSeeder


Jika usdah berhasil maka kita akan melkukan penambahan baris code sebagai berikut ini:

<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Role;
use App\Models\Position;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(RoleSeeder::class);
        $this->call(PositionSeeder::class);

        \App\Models\User::factory()->create([
            'name' => 'Zaid al maghfur (Admin)',
            'email' => 'admin@gmail.com',
            'role_id' => Role::where('name', 'admin')->first('id'),
            'position_id' => Position::where('name', 'Operator')->first('id'),
        ]);
        \App\Models\User::factory(10)->create([
            'role_id' => Role::where('name', 'user')->first('id'), // user === employee
            'position_id' => Position::select('id')->inRandomOrder()->first()->id
        ]);
    }
}


Bisa di lihat di sini kita melakukan penambahan data yang pertama adalah data yang kita inginkan dan selebih nya dalah data dummy, fungsi dari melakukan hal ini adalah agar kita melakukan penambahan dat admin secara mudah, karna di tahapan yang ini kita belum mempunyai sebuah pages login, dan Langkah selanjutnya adalah [embauatan login pages dengan menggunakn react js .

Oke semua teman teman kita sudah berhasil dalam membuat struktur database dan migration nya maka Langkah selanjutanya adalah memasukan table kita ke phpMyAdmin agar bisa kita melakukan akses dan melakukan penginputan melalui front end nya tamoa harus input manual dari seeder taupun memasukan nya secara manual lewat phpMyAdmin, lantas hal apa yang harus kita lakukan?? Hal ini sanggat lah mudah dan gampang, yang pertama masuk ke dalam phpMyAdmin melalui http://localhost/phpmyadmin dan buat table database yang baru dan jangan lupa untuk menyamakan nama databse nya dengan “.env”  yang ada di dalam project Laravel kita, sebagai contoh berikut :

 
Ini adalah contoh dari hasil migrate nya, harap perhatikan nama table yang ada dan samakan dengan yang ada di “.env” sebagai berikut :

 


Perhatikan di bagian DB_DATABASE=larac-app”
Yang mana jika sudah sama maka kita tinggal melakukan perintah berikut : 
php artisan migrate --seed

Perintah di atas akan menjalankan 2 aksi sekaligus yang mana dia akan melakukan pemindatan table ke dalam phpMyAdmin dan  yang ke dua dia akan melakukan pengisian data yang sudah kita buat melalui seeder . 



Authentication

        Oke di sini kita akan membuat sebuah authentication, yups karena kita menggunaakn breeze  maka kita tidak perlu ribet ribet lagi untuk membuat authentication, mengapa demikian ??   ya hal ini disebabkan karena setelah melakukan installasi  menggunakan breeze kita sudah di berikan pakage lengkap dengan fitur register dan juga login serta simple dashboard, yang mana jika sudah ada hal itu maka kit ahanya perlu melakukan pengolahanya. 
        Di sini saya btidak bantak melakukan perubahanya yang sanggat banyak namun cukup untuk menghilangkan jejak bahawasanya di proses yang ini  kita menggunakan Laravel breeze, kalian bisa mengikuti Langkah berikut ini :

1.	Menghapus component applicationlogo
2.	Menghapus pages register 

Jika kedua hal  ini sdah di lakukan maka kita sudah berhasil untuk mengurangi jejak dari penggunakan Laravel breeze, namun pasti masih ada yang bertanya begini, 
Bang controller login nya mana bang ??   maka kita bisa menjawabanya begini , coba perhatikan di folder “app/http/controller/auth” di situ terdapat 9 controller, yang mana dari sinilah semua proses auth dapat terhendle, yang mana begini lah code controller nya :

1.	AuthenticatedSessionController.php

<?php

namespace App\Http\Controllers\Auth;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Providers\RouteServiceProvider;
use Illuminate\Support\Facades\Session;
use App\Http\Requests\Auth\LoginRequest;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     *
     * @return \Inertia\Response
     */

    public function create()
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     *
     * @param  \App\Http\Requests\Auth\LoginRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(LoginRequest $request)
    {
        $request->authenticate();

        $request->session()->regenerate();

        return redirect()->intended(RouteServiceProvider::HOME);
    }

    /**
     * Destroy an authenticated session.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}




2.	ConfirmablePasswordController.php

3.	<?php
4.	
5.	namespace App\Http\Controllers\Auth;
6.	
7.	use App\Http\Controllers\Controller;
8.	use App\Providers\RouteServiceProvider;
9.	use Illuminate\Http\Request;
10.	use Illuminate\Support\Facades\Auth;
11.	use Illuminate\Validation\ValidationException;
12.	use Inertia\Inertia;
13.	
14.	class ConfirmablePasswordController extends Controller
15.	{
16.	    /**
17.	     * Show the confirm password view.
18.	     *
19.	     * @return \Inertia\Response
20.	     */
21.	    public function show()
22.	    {
23.	        return Inertia::render('Auth/ConfirmPassword');
24.	    }
25.	
26.	    /**
27.	     * Confirm the user's password.
28.	     *
29.	     * @param  \Illuminate\Http\Request  $request
30.	     * @return mixed
31.	     */
32.	    public function store(Request $request)
33.	    {
34.	        if (! Auth::guard('web')->validate([
35.	            'email' => $request->user()->email,
36.	            'password' => $request->password,
37.	        ])) {
38.	            throw ValidationException::withMessages([
39.	                'password' => __('auth.password'),
40.	            ]);
41.	        }
42.	
43.	        $request->session()->put('auth.password_confirmed_at', time());
44.	
45.	        return redirect()->intended(RouteServiceProvider::HOME);
46.	    }
47.	}
48.	


3.	EmailVerificationNotificationController.php

4.	<?php
5.	
6.	namespace App\Http\Controllers\Auth;
7.	
8.	use App\Http\Controllers\Controller;
9.	use App\Providers\RouteServiceProvider;
10.	use Illuminate\Http\Request;
11.	
12.	class EmailVerificationNotificationController extends Controller
13.	{
14.	    /**
15.	     * Send a new email verification notification.
16.	     *
17.	     * @param  \Illuminate\Http\Request  $request
18.	     * @return \Illuminate\Http\RedirectResponse
19.	     */
20.	    public function store(Request $request)
21.	    {
22.	        if ($request->user()->hasVerifiedEmail()) {
23.	            return redirect()->intended(RouteServiceProvider::HOME);
24.	        }
25.	
26.	        $request->user()->sendEmailVerificationNotification();
27.	
28.	        return back()->with('status', 'verification-link-sent');
29.	    }
30.	}
31.	

4.	EmailVerificationPromptController.php

5.	<?php
6.	
7.	namespace App\Http\Controllers\Auth;
8.	
9.	use App\Http\Controllers\Controller;
10.	use App\Providers\RouteServiceProvider;
11.	use Illuminate\Http\Request;
12.	use Inertia\Inertia;
13.	
14.	class EmailVerificationPromptController extends Controller
15.	{
16.	    /**
17.	     * Display the email verification prompt.
18.	     *
19.	     * @param  \Illuminate\Http\Request  $request
20.	     * @return mixed
21.	     */
22.	    public function __invoke(Request $request)
23.	    {
24.	        return $request->user()->hasVerifiedEmail()
25.	                    ? redirect()->intended(RouteServiceProvider::HOME)
26.	                    : Inertia::render('Auth/VerifyEmail', ['status' => session('status')]);
27.	    }
28.	}
29.	


5.  NewPasswordController.php

<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;
use Illuminate\Validation\Rules;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class NewPasswordController extends Controller
{
    /**
     * Display the password reset view.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Inertia\Response
     */
    public function create(Request $request)
    {
        return Inertia::render('Auth/ResetPassword', [
            'email' => $request->email,
            'token' => $request->route('token'),
        ]);
    }

    /**
     * Handle an incoming new password request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $request->validate([
            'token' => 'required',
            'email' => 'required|email',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        // Here we will attempt to reset the user's password. If it is successful we
        // will update the password on an actual user model and persist it to the
        // database. Otherwise we will parse the error and return the response.
        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user) use ($request) {
                $user->forceFill([
                    'password' => Hash::make($request->password),
                    'remember_token' => Str::random(60),
                ])->save();

                event(new PasswordReset($user));
            }
        );

        // If the password was successfully reset, we will redirect the user back to
        // the application's home authenticated view. If there is an error we can
        // redirect them back to where they came from with their error message.
        if ($status == Password::PASSWORD_RESET) {
            return redirect()->route('login')->with('status', __($status));
        }

        throw ValidationException::withMessages([
            'email' => [trans($status)],
        ]);
    }
}




6.  PasswordController.php
<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class PasswordController extends Controller
{
    /**
     * Update the user's password.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(Request $request)
    {
        $validated = $request->validate([
            'current_password' => ['required', 'current_password'],
            'password' => ['required', Password::defaults(), 'confirmed'],
        ]);

        $request->user()->update([
            'password' => Hash::make($validated['password']),
        ]);

        return back();
    }
}



7.	PasswordResetLinkController.php

8.	<?php
9.	
10.	namespace App\Http\Controllers\Auth;
11.	
12.	use App\Http\Controllers\Controller;
13.	use Illuminate\Http\Request;
14.	use Illuminate\Support\Facades\Password;
15.	use Illuminate\Validation\ValidationException;
16.	use Inertia\Inertia;
17.	
18.	class PasswordResetLinkController extends Controller
19.	{
20.	    /**
21.	     * Display the password reset link request view.
22.	     *
23.	     * @return \Inertia\Response
24.	     */
25.	    public function create()
26.	    {
27.	        return Inertia::render('Auth/ForgotPassword', [
28.	            'status' => session('status'),
29.	        ]);
30.	    }
31.	
32.	    /**
33.	     * Handle an incoming password reset link request.
34.	     *
35.	     * @param  \Illuminate\Http\Request  $request
36.	     * @return \Illuminate\Http\RedirectResponse
37.	     *
38.	     * @throws \Illuminate\Validation\ValidationException
39.	     */
40.	    public function store(Request $request)
41.	    {
42.	        $request->validate([
43.	            'email' => 'required|email',
44.	        ]);
45.	
46.	        // We will send the password reset link to this user. Once we have attempted
47.	        // to send the link, we will examine the response then see the message we
48.	        // need to show to the user. Finally, we'll send out a proper response.
49.	        $status = Password::sendResetLink(
50.	            $request->only('email')
51.	        );
52.	
53.	        if ($status == Password::RESET_LINK_SENT) {
54.	            return back()->with('status', __($status));
55.	        }
56.	
57.	        throw ValidationException::withMessages([
58.	            'email' => [trans($status)],
59.	        ]);
60.	    }
61.	}
62.	

8.  RegisteredUserController.php

<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role_id' => '3',
            'position_id' => '4',
            'phone' => $request->phone,
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }
}

9.	VerifyEmailController.php

<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Verified;
use Illuminate\Foundation\Auth\EmailVerificationRequest;

class VerifyEmailController extends Controller
{
    /**
     * Mark the authenticated user's email address as verified.
     *
     * @param  \Illuminate\Foundation\Auth\EmailVerificationRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function __invoke(EmailVerificationRequest $request)
    {
        if ($request->user()->hasVerifiedEmail()) {
            return redirect()->intended(RouteServiceProvider::HOME.'?verified=1');
        }

        if ($request->user()->markEmailAsVerified()) {
            event(new Verified($request->user()));
        }

        return redirect()->intended(RouteServiceProvider::HOME.'?verified=1');
    }
}




 
ini adalah controller yang menhandle semua progress Authentication yang mana dengan menggunakan ini kita sudah pasti akan  bisa melakukan semua progrees login maka dengan ini  kita juga harus memberikan route yang mengarah ke pada pages login , namun hal ini tidak lah kita pergunakan di sini, karena kita menggunakan “Laravel spaty” yang man ahal ini sudah di buatkan untuk meangani auth tersebut, kita cukup buat route menuju ke profile, namun kita tambahakan middleware auth maka dengan menggunakan hal ini secara otomatis akan di bawqakan ke dalam route login.


 

Dengan begini maka secara otomatis akan di bawakan ke dalam halam login yang mana jika sudah berhasil login maka akan di redirect ke dashboard masing masing sesuai dengan role yang sudah di miliki .

Membuat ahalam login

Di sini kita akan menggunakan bawaan milik breeze yang mana file itu berada di dalam folder berikut ini : 

 
Yang mana sudah di berikan langsung oleh Laravel nya, namun saya di sini melakukan sedikit perubahan di halaman login sebagai berikut :
1.	Perubahan di file LOGIN.JSX

import React, { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />
            <div>
                <h1 className='text-3xl font-extrabold flex justify-center text-white'>hallo again!</h1>
                <p className='m-4 text-white font-semibold text-xl flex justify-center'>welcome back to the absence website</p>
            </div>
            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
            <form onSubmit={submit}>
                <div>
                    <label className='text-white' forInput="email" value="Email">Email</label>
                    <TextInput
                        type="text"
                        name="email"
                        value={data.email}
                        className="rounded-lg bg-gray-700 mt-2 p-2   focus:border-blue-500 focus:bg-gray-800 focus:outline-none  w-[20rem] xl:w-[25rem] text-white"
                        autoComplete="username"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <label className='text-white' forInput="password" value="Password">Password</label>

                    <TextInput
                        type="password"
                        name="password"
                        value={data.password}
                        className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none w-[20rem] xl:w-[25rem] text-white"
                        autoComplete="current-password"
                        handleChange={onHandleChange}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox name="remember" value={data.remember} handleChange={onHandleChange} />
                        <span className="ml-2 text-sm text-white">Remember me</span>
                    </label>
                </div>

                <div className="flex items-center justify-between mt-4">
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className=" text-sm text-white hover:text-teal-500 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ">
                            Forgot your password?
                        </Link>
                    )}

                    <PrimaryButton className="ml-4 bg-teal-500 " processing={processing}>
                        Log in
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}


Nah beginilah perubahan yang saja lakukan sehingga mendapatkan hasil yang cukup oke dan akan meghilangkan sedikit jejak dari si Laravel breeze, yang mana hasil dari code di atas adalah sebagai berikut :

 

Bagaimana ?? cukup oke bukan, dengan begini pages login sudah tidak terlalu menyerupai dari milik nya si Laravel breeze, yang mana begnilah yang di punya oleh Laravel breeze :

 

Yups bagaiman ?? sudah terlihat bukan bedanya, dengan yang sudah kita lakukan modivikasi dengan yang di miiki oleh Laravel breeze. 
Maka dengan ini kitab isa melanjutakan nya dengan melakukan pembuatan dashboard untuk admin yang mana di dalam dashboard ini lah kita akan melakukan controller penuh dalam website kita nanti, yang mana di dalam dashboard kita nanti aka nada beberapa fitur yakni sebagai berikut :
1.	Dashboard => menampilkan sebagai berikut 
o	Data jumlah user
o	Data jumlah jabatan 
o	Data jumlah hari libur
o	Data jam 

2.	Jabatan => akan memiliki akses sebagai berikut 
o	Menampilkan data jabatan
o	Menambahakan data jabatan
o	Mengedit jabatan
o	Menghapus jabatan

3.	Karyawan => akan memiliki akses sebagai berikut 
o	Menampilkan data karyawan
o	Menambahakan data karyawan
o	Mengedit data jabatan
o	Menghapus data jabatan

4.	Hari libur => memiliki akses sebagai berikut 
o	Menampilkan hari libur 
o	Menambahakan hari libur 
o	Mengedit hari libur 
o	Menghapus hari libur 

5.	Absensi => memiliki akses sebagai berikut 
o	Menampilkan absensi 
o	Menambahakan absensi 
o	Mengedit absensi
o	Menghapus absensi 
6.	Kehadiran => memiliki akses untuk melihat user yag sudah melakukan absensi dan yang belum melakukan absensi
o	Menampilkan data user yang sudah absensi 
o	Menampilkan data user yang izin 
o	Menampilkan data user yang tidakhadir 
o	Membuat user yang tidak hadir menjadi hadir 
Berikut adalh fitur fitur yang akan kita berikan terhadap admin, jika sudah paham maka kitab isa melanjutkan pembuatan dashboard admin nya sebasgai berikut.


Halaman Dashboard

Oke teman teman setelah sudah memahami alur yang akan kita pakai untuk membuat admin maka kita akan melakukannya denganlangkah pertama membuat controller untuk dashboard yang akan mengarahkan admin ke dalam dashboard nya, setelah itu kita akan memberikan akses terhadap admin untuk mempunyai kuasa penuh terhadap si website yang akan di mantanance. 
Oke Langkah pertama silahakan buka terminal yang terintegrasi dengan vs code, dan pastikan sudah menjalankan server nya , dan setelah sudah di jalankan maka kitab isa memasukan perntah berikut ini :

php artisan make:controller DashboardController
Setelah berhasil membuat controller tersebut, silahkana buka dan kita akan melakukan pembautan code di dalam nya, dengan code sebagai berikut :

<?php

namespace App\Http\Controllers;

use inertia;
use App\Models\User;
use App\Models\Holiday;
use App\Models\Position;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $user = User::all()->count();
        $positions = Position::all()->count();
        $Holiday = Holiday::all()->count();
        // dd($user);
        return inertia('Admin/Dashboard', [
            'user' => $user, 
            'positions' => $positions,
            'Holiday' => $Holiday,
    ]);
    }
}



Jika sudah seperti ini maka kita butuh melakukan nya seperti ini maka silahakn buka file yang berdirectory sebagai berikut “app/http/request/auth/ LoginRequest.php” yang mana di dalam sinilah kita akan melakuakn pemisahan dashboard admin, silahkan buka dan lakukan penambahan  code sebagai berikut ini :

<?php

namespace App\Http\Requests\Auth;

use Illuminate\Auth\Events\Lockout;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class LoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'email' => ['required', 'string', 'email'],
            'password' => ['required', 'string'],
        ];
    }

    /**
     * Attempt to authenticate the request's credentials.
     *
     * @return void
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function authenticate()
    {
        $this->ensureIsNotRateLimited();

        if (! Auth::attempt($this->only('email', 'password'), $this->boolean('remember'))) {
            RateLimiter::hit($this->throttleKey());

            throw ValidationException::withMessages([
                'email' => trans('auth.failed'),
            ]);
        }

        RateLimiter::clear($this->throttleKey());
    }

    /**
     * Ensure the login request is not rate limited.
     *
     * @return void
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function ensureIsNotRateLimited()
    {
        if (! RateLimiter::tooManyAttempts($this->throttleKey(), 5)) {
            return;
        }

        event(new Lockout($this));

        $seconds = RateLimiter::availableIn($this->throttleKey());

        throw ValidationException::withMessages([
            'email' => trans('auth.throttle', [
                'seconds' => $seconds,
                'minutes' => ceil($seconds / 60),
            ]),
        ]);
    }

    /**
     * Get the rate limiting throttle key for the request.
     *
     * @return string
     */
    public function throttleKey()
    {
        return Str::transliterate(Str::lower($this->input('email')).'|'.$this->ip());
    }
}


Dan jika sudah berhasil kita melakuakn penambahan seperti ini maka ini belum bisa melakukan pemisahan role antar dashboard admin dan dashboard user, maka Langkah selanjutanya adalah melakukan perubahan di bagian middleware yang Bernama “RedirectIfAuthenticated.php” dan di sini kita akan melakukanpenambahan sebagai berikut 
<?php

namespace App\Http\Middleware;

use App\Providers\RouteServiceProvider;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RedirectIfAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @param  string|null  ...$guards
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next, ...$guards)
    {
        $guards = empty($guards) ? [null] : $guards;

        foreach ($guards as $guard) {
            if (Auth::guard($guard)->check()) {
                if (auth()->user()->role_id == 1) {
                    return redirect(RouteServiceProvider::HOME);
                } else {
                    return redirect('/login');
                }
            }
        }

        return $next($request);
    }
}


Nah sudah seperti ini maka kita perlu membuat 1 middleware lagi yang Bernama “OnlyAdmin” maka jika sudah melakukan pembuatan middleware “OnlyAdmin” maka kita perlu menambahakan code seperti ini : 
<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class OnlyAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */

    public function handle(Request $request, Closure $next)
    {
        if (auth()->user() &&  auth()->user()->role_id == 1) {
            return $next($request);
        }
        return back()->with("error", "Opps, You're not Admin");
    }
}

Nah jika sudah berhasil maka kita  perlu melakukan pembuatan routing di bagian Web.php yang mana di sini kita akan mengimplementasikan middleware yang sudah kita buat tadi sebagai berikut :

 

	Nah jika sudah berhasil membuat ini maka kita perlu melakukan pembuatan file dashboard yang akan menggunakan jsx yang mana di bagian dashboardController tadi kita sudah mengarahkan nya ke dalam folder “Admin” dan menggunakan file “Dashboard”, nah teman teman silahkan buka dan kita akan melakukan perubahan di bagian ini, silahkan ikuti code yang akan saya berikan di sini dan jika kalian ingin melakukan perbaikan styling maka silahkan, dan ingat kita di sini menggunakan framework dari tailwind css, maka kita akan menambahakan code sebagai berikut :



import React, { useState } from 'react';
import 'boxicons';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';

export default function Dashboard(props) {
    // console.log(props.positions)
    const getDate = new window.Date();

    let time = getDate.toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(time);

    function updateTime() {
        let getDate = new window.Date();
        let time = getDate.toLocaleTimeString();
        setCurrentTime(time);
    }

    setInterval(updateTime, 1000);
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >

            <Head title="Dashboard Admin" />
            <div className="p-10 xl:flex">
                <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                    <div
                        className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                        <div className="flex-auto p-4">
                            <div className="flex flex-row -mx-3">
                                <div className="flex-none w-2/3 max-w-full px-3">
                                    <div>
                                        <p
                                            className="mb-0 font-sans text-sm font-semibold leading-normal uppercase text-black dark:opacity-60">Total
                                            Users</p>
                                        <h5 className="mb-2 font-bold text-black"> {props.user} users</h5>
                                        <p className="mb-0 text-black dark:opacity-60">
                                            <span className="text-sm font-bold leading-normal text-emerald-500">All Users </span>
                                            This Website
                                        </p>
                                    </div>
                                </div>
                                <div className="px-3 text-right basis-1/3">
                                    <div className="inline-block w-12 h-12 text-center pt-3 rounded-full bg-gradient-to-tl from-blue-500 to-violet-500">
                                        <box-icon name='user' color='#ffffff' ></box-icon>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                    <div
                        className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                        <div className="flex-auto p-4">
                            <div className="flex flex-row -mx-3">
                                <div className="flex-none w-2/3 max-w-full px-3">
                                    <div>
                                        <p
                                            className="mb-0 font-sans text-sm font-semibold leading-normal uppercase text-black dark:opacity-60">
                                            total jabatan</p>
                                        <h5 className="mb-2 font-bold text-black">{props.positions} Jabatan</h5>
                                        <p className="mb-0 text-black dark:opacity-60">
                                            <span className="text-sm font-bold leading-normal text-emerald-500">All </span>
                                            This Website
                                        </p>
                                    </div>
                                </div>
                                <div className="px-3 text-right basis-1/3">
                                    <div className="inline-block w-12 h-12 text-center pt-3 rounded-full bg-gradient-to-tl from-cyan-700 to-blue-500">
                                        <box-icon name='food-menu' color='#ffffff' ></box-icon>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                    <div
                        className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                        <div className="flex-auto p-4">
                            <div className="flex flex-row -mx-3">
                                <div className="flex-none w-2/3 max-w-full px-3">
                                    <div>
                                        <p
                                            className="mb-0 font-sans text-sm font-semibold leading-normal uppercase text-black dark:opacity-60">
                                            total Hari libur</p>
                                        <h5 className="mb-2 font-bold text-black">{props.Holiday} Hari Libur</h5>
                                        <p className="mb-0 text-black dark:opacity-60">
                                            <span className="text-sm font-bold leading-normal text-emerald-500">All </span>
                                            This Website
                                        </p>
                                    </div>
                                </div>
                                <div className="px-3 text-right basis-1/3">
                                    <div className="inline-block w-12 h-12 text-center pt-3 rounded-full bg-gradient-to-tl from-red-600 to-orange-600">
                                        <box-icon name='landscape' color='#ffffff' ></box-icon>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                    <div
                        className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                        <div className="flex-auto p-4">
                            <div className="flex flex-row -mx-3">
                                <div className="flex-none w-2/3 max-w-full px-3">
                                    <div>
                                        <p
                                            className="mb-0 font-sans text-sm font-semibold leading-normal uppercase text-black dark:opacity-60">
                                            Jam  saat ini</p>
                                        {
                                            currentTime
                                        }
                                        <p className="mb-0 text-black dark:opacity-60">
                                            <span className="text-sm font-bold leading-normal text-emerald-500">All </span>
                                            This Website
                                        </p>

                                    </div>
                                </div>
                                <div className="px-3 text-right basis-1/3">
                                    <div className="inline-block w-12 h-12 text-center pt-3 rounded-full bg-gradient-to-tl from-blue-600 to-purple-600">
                                        <box-icon type='solid' name='hourglass-bottom' color='#ffffff'></box-icon>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}



Nah dari baris code di atas akan menghasilkan sebuah tampilan dashboard yang akan menampilkan data sebagai berikut :
1.	Total user yang ada di dalam website kita 
2.	Total jabatan yang ada di dalam website kita 
3.	Total hari libur yang ada di website kita 
4.	Dan menampilkan jam 
Dan ini adalah hasil dari code di atas jika teman teman tidak ada mengalami kendala dan eror saat coding.

 

Bisa terlihat dengan jelas bahwasanya kita sudah berhassil mengambil data yang ada di dalam database, teman teman pasti  masih bingugkan mengapa demikian ?? ya hal ini di sebabkan perulangan yang kita pakai dengan kata lain kita mengambil data yang ada di database dan melakukan looping di bagaian fornt end menggunakan “MAP” berikut adalah contoh nya :

 

Langkah awal kita haru memasukan props yang sudah di sedikan oleh “INERTIA.JS” yang mana props ini akan menampung semua data yang ada di dalam database, mengapa hal ini  bisa terjadi?? Hal ini di sebabkan kita melakukan pengiriman data dari controller sebagai berikut.

 

Bisa di lihat di sini bahwasanya kita mengirim sebuah parameter yang langsung di ambil melalui model, yang mana kita ketahui bahwasanya model ini bersentuhan langsung dengan databse, maka jika console tadi kita lihat akan menghasilkan data yang di kirim melalui model sebagai berikut.

 

Bisa di perhatikan di sini langsung di tampilkan bahwasanya data yang kita kirim melalui controller berupa 
1.	User 
2.	Position 
3.	Holiday
Yang mana jika sudah di tampilkan data nya di dalam sebuah console maka secara otomatis kita bisa melakukan pemanggilan data nya dari belakang menjadi ke depan dengan cara sebagai berikut.

 

Di sni kita dapat menggunakan {props.user} yang mana dengan code ini kita akan memanggil data yang ada di belakang menajadi maju ke depan. 



Halaman Jabatan


Oke guys selanjut nya kita akan membuat halaman jabatan yang mana di sini kita akan menggunakan beberapa fitur di dalam halaman ini berikut adalah list fitur yang akan kita gunakan 
1.	Show data jabatan 
2.	Menambahakan data jabatan 
3.	Mengupdate data jabatan
4.	Mengdelete data jabatan
Oke kita akan masuk kedalam fitu yang pertama yakni fitue show data jabatan, dan sekaligus akan menampung beberapa fitur kita yang lain nya seperti add jabatan edit jabatan dan delete jabatan. 
Yang pertama harus kita lakukan adalah membuat tampilan pertama yang akan menampilkan data jabatan yang sudah ada di dalam databse.
Untuk membuat nya silahkan pergi ke file AuthenticatedLayout.jsx, disini kita akan membuat route terlebih dahulu agar kita bisa berpindah halaman dengan mudah, silahakan ikuti code berikut ini.



import React, { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/inertia-react";

export default function Authenticated({
    auth,
    header,
    children,
    ilang,
    ganampak,
}) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <div className="mt-5">
                                    <NavLink
                                        href={route("dashboard")}
                                        active={route().current("dashboard")}
                                    >
                                        Dashboard
                                    </NavLink>
                                </div>
                                <div className={`pt-5 ${ilang}`}>
                                    <NavLink
                                        href={route("jabatan")}
                                        active={route().current("jabatan")}
                                    >
                                        Jabatan/posisi
                                    </NavLink>
                                </div>
                                <div className={`pt-5 ${ilang}`}>
                                    <NavLink
                                        href={route("kariawan")}
                                        active={route().current("kariawan")}
                                    >
                                        karyawan
                                    </NavLink>
                                </div>
                                <div className={`pt-5 ${ilang}`}>
                                    <NavLink
                                        href={route("harilibur")}
                                        active={route().current("harilibur")}
                                    >
                                        Hari Libur
                                    </NavLink>
                                </div>
                                <div className={`pt-5 ${ilang}`}>
                                    <NavLink
                                        href={route("absensi")}
                                        active={route().current("absensi")}
                                    >
                                        Absensi
                                    </NavLink>
                                </div>
                                <div className={`pt-5 ${ilang}`}>
                                    <NavLink
                                        href={route("presences.index")}
                                        active={route().current(
                                            "presences.index"
                                        )}
                                    >
                                        Kehadiran
                                    </NavLink>
                                </div>
                            </div>
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            <div className="ml-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-800 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {auth.user.name}

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route("profile.edit")}
                                        >
                                            Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState
                                    )
                                }
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " sm:hidden"
                    }
                >
                    <div className="pt-2 pb-3 space-y-1">
                        <div className="mt-5">
                            <ResponsiveNavLink
                                href={route("dashboard")}
                                active={route().current("dashboard")}
                            >
                                Dashboard
                            </ResponsiveNavLink>
                        </div>
                        <div className={`pt-5 ${ilang}`}>
                            <ResponsiveNavLink
                                href={route("jabatan")}
                                active={route().current("jabatan")}
                            >
                                Jabatan/posisi
                            </ResponsiveNavLink>
                        </div>
                        <div className={`pt-5 ${ilang}`}>
                            <ResponsiveNavLink
                                href={route("kariawan")}
                                active={route().current("kariawan")}
                            >
                                karyawan
                            </ResponsiveNavLink>
                        </div>
                        <div className={`pt-5 ${ilang}`}>
                            <ResponsiveNavLink
                                href={route("harilibur")}
                                active={route().current("harilibur")}
                            >
                                Hari Libur
                            </ResponsiveNavLink>
                        </div>
                        <div className={`pt-5 ${ilang}`}>
                            <ResponsiveNavLink
                                href={route("absensi")}
                                active={route().current("absensi")}
                            >
                                Absensi
                            </ResponsiveNavLink>
                        </div>
                        <div className={`pt-5 ${ilang}`}>
                            <ResponsiveNavLink
                                href={route("presences.index")}
                                active={route().current("presences.index")}
                            >
                                Kehadiran
                            </ResponsiveNavLink>
                        </div>
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            <div className="font-medium text-base text-gray-800">
                                {auth.user.name}
                            </div>
                            <div className="font-medium text-sm text-gray-500">
                                {auth.user.email}
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route("profile.edit")}>
                                Profile
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                method="post"
                                href={route("logout")}
                                as="button"
                            >
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}


Nah di bagain ini silahkan perhatikan cara pembutan route nya , saya akan meperjelas nya sebagai berikut 

 

Nah di sini kitab isa melihat bahwasanya kita menggunakan sebuah component yang Bernama “NavLink” yang mana untuk membuat component ini kit amembutuhkan code sebagai berikut 
import React from 'react';
import { Link } from '@inertiajs/inertia-react';

export default function NavLink({ href, active, children }) {
    return (
        <Link
            href={href}
            className={
                active
                    ? 'inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out'
                    : 'inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out'
            }
        >
            {children}
        </Link>
    );
}


Jika sudah berhasil maka route kita sudah bisa di kunjugi, namun jika kita langsung mengunjugin nya pasti kita akan mendapatkan pesan “404” ya benar, yang man hal ini terjadi di sebabkan oleh belum adanya file dan route yang menjuju kedalam file itu, maka karna dari itu kita haru smembuat file nya terlebih dahulu, silahkan buat dan jika sudah berhasil maka Langkah selanjut nya adalah membuat controller nya yang mana dalam hal ini kita akan menggunakan perintah yangsudah di miliki oleh Laravel yakni dengan menajalankan perintah ini di dalam terminal yang sudah terintegrasi dengan vs code 

php artisan make:controller JabatanController

Jika sudah berhasil maka akan menghasilkan sebuah file yang Bernama “JabatanController” silahakan teman teman buka dan kita akan menabahakan beberapa function yang akan menghandle kebutuhan kita sebagai berikut 

<?php

namespace App\Http\Controllers;

use App\Models\Position;
use App\Models\positions;
use Illuminate\Http\Request;

class JabatanController extends Controller
{
    public function index()
    {
        $position = Position::all();
        // dd($Position);
        return inertia('Admin/jabatan',[
            'Position' => $position,
        ]);
    }

    public function addjabatan()
    {
        return inertia('Admin/addjabatan');
    }

    public function store(Request $request)
    {
        $position = new Position();
        $position->name = $request->name;
        $position->save();
        return redirect()->back();
    }

    public function edit(Position $position, $id )
    {
        $position = Position::find($id);
        return inertia('Admin/editjabatan',[
            'alljabatan' => $position,
        ]);
    }

    public function update(Request $request, $id)
    {
        $position = Position::find($id);
        $position->name = $request->name;
        $position->save();
        return redirect()->route('jabatan');
    }

    public function destroy($id)
    {
        $position = Position::find($id);
        $position->delete();
        return redirect()->route('jabatan');
    }
}

 
Nah jika sudah melakukan penamabahan di dalam file “JabatanController”  langakah selanjut nya kita akan membuat sebuah route di dalam file “web.php” sebagai berikut ini.

 
Nah di dalam route ini, kita hanya menampilkan file yang sudah kita buat tadi, namun Ketika kita buka masih belum ada apa apa di dalam nya, oleh karena itu kita harus menambahakan code ini di dalam file “Jabatan.jsx” 

import React from 'react';
import 'boxicons';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/inertia-react';
import Delete from '../../Components/Deleteku';

export default function Jabatan(props) {
    console.log(props.Position)
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Jabatan</h2>}
        >
            <Head title="Jabatan" />
            <div className='m-10  text- font-bold flex justify-between xl:text-4xl xl:m-[5rem]'>
                <h1>Tambahakan Posisi Jabatan</h1>
                <a href="/addjabatan"><button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Tambahakan Jabatan</button></a>
            </div>

            <div>
                <div className='xl:m-[5rem]'>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 whitespace-nowrap">
                                    <th scope="col" className="px-6 py-3 border">No</th>
                                    <th scope="col" className="px-6 py-3">Name</th>
                                    <th scope="col" className="px-6 py-3">created at</th>
                                    <th scope="col" className="px-6 py-3">Edit</th>
                                    <th scope="col" className="px-6 py-3">Delete</th>
                                </tr>
                            </thead>
                            {props.Position ? props.Position.map((data, i) => {
                                return (
                                    <tbody key={i}>
                                        <tr className="bg-white dark:bg-gray-800 whitespace-nowrap" key={i}>
                                            <td className="px-6 py-4 border">{i + 1}</td>
                                            <td className="px-6 py-4 border-b">{data.name}</td>
                                            <td className="px-6 py-4 border-b">{data.created_at}</td>
                                            <td className="px-6 py-4 border-b">

                                                <Link href={`/editjabatan/${data.id}`}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-400" fill="none"
                                                        viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                    </svg>
                                                </Link>
                                            </td>

                                            <td className="px-6 py-4 border-b">
                                                <Delete URL={'/deletejabatan'} id={data.id} />
                                            </td>
                                        </tr>
                                    </tbody>
                                )
                            }) : ""}
                        </table>
                    </div>
                </div>
                <div className='p-20'>
                    <h1>Nb</h1>
                    <p><span>1</span>. Pastikan tidak ada yang menggunakan data di atas untuk menghapus nya</p>
                    <p> <span>2</span>. Posisi di atas datap di  gunakan untu menentukan jabatan apa sja yang di perboleh kan absensi</p>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
Ini adalah code yang akan kita gunakan, namun teman teman pasti masih bingung dengan adanya “map” yang mana, berikut adalah hasil yang akan di tampilkan

 

Bisa di lihat di sini bahwasanya sudah dapat di tampilkanya data yang ada di dalam databse menjadi keluar, bagaimana nih cara menampilkannya ?? yups kita harus menggunakan looping yang di sedikan oleh react js bagaimana tuh caranya, begini caranya .

 
Bisa  di lihat di sini kita menggunakan looping, yang mana kita menggunakan “map” maka secara otomatis akan mengulangi semua data yang sudah kita pasing dari controller untuk masuk kedalam console, yang mana jika datanya sudah masuk di dalam console maka secara otomatis kita akan bisa mengambil data tersebut dengan menggunakan tag “{data.name}” yang mana dengan ini kita akan berhasil memanggil semua name yag ada di database untuk naik keatas bersaam front end .

Halaman add Jabatan
	Oke Ketika kita sudah berhasil menampilkan semua data yang ada di dalam database maka secara otomatis kita memerlukan proses penambahan data, yang mana pada proses ini kita akan berpindah halaman , bisa kalian perhatikan pada hasil dari pembuatan halaman jabatan, kita sudah membuat sebuah button yang akan menuju ke halaman “add jabatan” namun kita belum bisa langsung menggunakan button itu, mengapa demikian?? Ya hal ini di sebabkan kita masih belum membuat sebuah view yang akana menampung proses add jabatan.
	Oleh karena itu kita akan melakukan pembuatan file view nya, silahakan teman teman melakukan pembutan file view nya dengan mana “addjabatan.jsx” dengan penamaan seperti ini kita akan lebih mudah untuk memanagement nya nanti Ketika memerelukan perbaikan, jika sudah maka Langkah selanjutnya adalah membut menambahakan code ini yang akan menghubungkan view nya nanti, silahakan buka file “JabatanController” dan lakukan penambahan file berikut ini.

 

Nah jika sudah melakukan penambahan seperti ini maka kita perlu menambahakan route nya, ya teman teman silahkan buka file “web.php” dan lakukanpenambahan sebagai berikut ini.
 

Yups di sini kita masih menggunakan methot get, mengapa demikian ??  ya sudah jelas karna di dalam proses ini kita hanya menampilkan view yang membawa tampilan untuk melakukan proses add jabatan, oke kita akan membuat sebuah view nya terlebih dahulu, silahakan buka file “addjabatan.jsx” dan kita akan melakukan penambahan baris code sebagi berikut ini.
import React, { useState } from 'react';
import 'boxicons';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import Swal from 'sweetalert2'

export default function addJabatan(props) {

    const [name, setName] = useState('');
    const handleSubmit = () => {
        const data = {
            name
        }

        Swal.fire({
            icon: 'success',
            title: 'Data Jabatan berhasil di tambahkan!',
            showConfirmButton: true,
        })

        Inertia.post('/storejabatan', data)
        setName('')
    }

    // console.log('props last: ',props)
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Add Jabatan</h2>}
        >
            <Head title="Jabatan" />
            <div className='m-10  text- font-bold flex justify-between xl:text-4xl xl:m-[5rem]'>
                <h1>Tambahakan Posisi Jabatan</h1>
            </div>

            <div className='flex justify-center'>
                <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form className="space-y-6" action="#">
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Add Position in website</h5>
                        <div>
                            <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name Position</label>
                            <input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Manager" onChange={(name) => setName(name.target.value)} value={name} />
                        </div>
                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => handleSubmit()}>Add Position</button>
                    </form>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}

Oke jika teman teman sudah berhasil melakukan penambahan seperti ini, maka berikut adalah hasil dari code di atas.
 

Bisa dilihat di sini, bahawasanya kita sudah berhasil melakukan pembuatn view addjabatan, maka dengan ini kita harus melakukan pengiriman data dari depan ke database sebagai berikut ini.
1.	Kita akan menggunakan ustate
2.	Menmanggil inertia post
Langkah pertama kita akan menggunakan ustatte untuk menampung semua nilai yang di isikan melalui frontend, kita akan menggunakan sintag sebagai berikut.
 
Di sini kita akan menggunakan ustate yang akan menampung semua nilai inputan dari halaman depan, yang mana kita perlu menamabahakan tag seperti berikut di bagian form.

 

Bisa di lihat kita memerlukan penamabahan sintag di bagaian pengisian data, yang mana kita menggunakan tag berikut.
“onChange={(name) => setName(name.target.value)} value={name}”
Dan untuk melakukan pengiriman data nya kedalam databse kita memerlukan sebuiah post melalui inertia sebagai berikut.

 
Di sini kita memerlukan pembuatan sebuah function baru, silahakan teman teman membuka file “JabatanController” dan lakukan penamabahan code sebagai berikut 
 

Dan setelah berhasil melakukan penambahan code ini, maka kita perlu melakukan pembutan route yang berada di dalam web.php sebagai berikut.

 
Di dalam route yang ini kita menggunakan method “POST” yang mana method ini di sediakan langsung oleh si Laravel. Dengan menggunakan method ini maka secara otomatis data yang sudah kita tamping tadi di dalam sebuah usetate, secara otomatis akan terkirim ke dalam databse.
	Langakah selanjutanya kita memerlukan sebuah sweetalet2 yang mana hal ini adalah optional, namun di sini saya mengguanaknya agar membuat website nya lebih terlihat intraktif, silahakan teman teman lakukan instalasi sebagai berikut 
Npm install sweetalet 2

Nah jika sudah berhasil maka kita sudah bisa menggunakan nya sebagai berikut .

 

Silahkan lakukan import sweet alert nya dan kita akan memanggil nya di dalam handlesumit. Sebagai  berikut ini.
 

Jika sudah maka kita akan mendapatkan hasil sebagai berikut ini.
 

Bagaimana ?? bisa di lihat disini kita berhasil meggunakan nya. Oke dengan begini proses memasukan data ke dalam databse sudah berhasil, dengan begini kita sudah bisa melakukan proses update data yang sudah tersedia .

Halaman Edit Jabatan
Oke di proses kali ini kita akan melakukan proses mengupdate data jabatan yang sudah tersedia berdasarkan find “id” yang mana dalam hal ini kita menambahakan button edit di setiap jabatan, untuk mempermudah nya kita menggunakn looping di awal jadi kita tidak perlu menbuat banyak button login.
	Teman teman silahkan buat url untuk menuju ke halaman login yang di ambil berdasarkan id nya sebagai berikut.
 
	
Nah di sini kita akan menuju ke url pages edit yang sama sambal menuju ke halaman itu kita juga ikut mengambil  id dari yang akan kita edit.
     Silahkan untuk membuat pages login nya sebagai berikut ini.
import React, { useState } from 'react';
import 'boxicons';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import { Inertia } from "@inertiajs/inertia";
import Swal from 'sweetalert2'

export default function editjabatan(props) {

    //state
    const [name, setName] = useState(props.alljabatan.name);
    
    //method "updateCategory"
    const updatePosition = async (e) => {
        e.preventDefault();
        //sending data
        Inertia.post(`/updatejabatan/${props.alljabatan.id}`, {

            //data
            name: name,
            _method: "PUT"
        },{
            onSuccess: () => {

                //show alert
                Swal.fire({
                    title: 'Success!',
                    text: 'Data updated successfully!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        });
    }
    console.log(props.alljabatan.id);
    return (

        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Jabatan</h2>}
        >
            <Head title="Jabatan" />
            <div className='m-10  text- font-bold flex justify-between xl:text-4xl xl:m-[5rem]'>
                <h1>Edit Posisi Jabatan</h1>
            </div>

            <div className='flex justify-center'>
                <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form className="space-y-6" onSubmit={updatePosition}>
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Edit Position in website</h5>
                        <div>
                            <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name Position</label>
                            <input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Manager" value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update Position</button>
                    </form>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}



Berikut adalah code dari pages login, yang mana di sini kita melakukan import data dari boxicon dan sweetalet2 dan jika sudah melakukan penambahan code di sini maka Langkah selanjutanya adalah menambahakan controller yangakan meretrunt si edit jaabatan sebagai berikut.
 

Dari sini kita dapat melihat bahwasanya kita mengambil id dari si jabatan, yang mana id tersebut kita terrukan dan inisialisai sebagai alljabatan, jika sudah berhasil melakukan penamabahan di sini Langkah selanjutany adalah menambahakan route di dalam file web.php sebagai berikut.
 
Jika sudah maka kita sudah berhasil melakukan pengeditan data yang di ambil find id. Jika sudah berhasil melakukan nya maka akan menghasilakan tampilan sebagai berikut 



 

Di sini kita akan melakukan pengiriman data dari depan ke belakang yang man kita memerlu kan controller sebagai berikut.
 
Di sini kita menambahakan request untuk melakukan update jika sudah membuat nya maka  kita kan menambahakan rote dengan method “put” agar bisa melakukan update bisa di ikuti sebagai berikut.
 
Jika sudah menamabahkan route berikut  maka kita akan melakukan pengeiriman data nya sebagai berikut.
 
Di sini kita menggunakan update yang mana di bagain inertia.post, akan kita berikan url yang mengarah ke method “put” dan disini kita juga langsung memberikan sweetalert 2, yang mana jika datanya berhasil di update  maka akan menampilkan sweetaler2 sebagai berikut.
 
Berikut adalh hasil yang akan kita dapatkan jika sudah berhasil dalam melakukan semua tahapan nya.

Delete Jabatan

Oke teman teman Langkah selanjutanya adalah membuat fitur delete, yang mana kita ketahui bahwasanya kita memerlukan penghapusan data, bilamana jabatan tersepbut sudah tidak di pakai lagi.
	Namun dalam hal ini akan sedikit berbeda yang man abisasanya kita membuat sebuah pages baru untuk mendukung semua yang di butuhkan, namun kali ini kita akan membuat sebuah component, sebagaimana kiota ketahui bahwasanya kalua component itu dapat di pakai di semua pages, maka Ketika kita menggunakan fitur delete kita tidak perlu melakukan pengulangan yang sanggat banyak, tetapi kita hanya perlu memanggil component nya, nagaimana menarik bukan ?? mari kita coba sekarang. 
	Langkah pertama yang mesti di lakukan adalah membuat sebuah component, dengan kriteria sebagai berikut.
1.	Di mulai dengan huruf kapital’
2.	Di masukan di dalam folder component 
Dengan demikian kita akan memulainya dengan membuat sebuah component delete sebagai berikut saya membuat component dengan nama “Deleteku.jsx” yang mana isi dari component ini adalah sebagai berikut 


//import react  
import React from "react";

//import inertia adapter
import { Inertia } from '@inertiajs/inertia';

//import Sweet Alert
import Swal from 'sweetalert2';


export default function Delete({ URL, id }) {

    //method destroy
    const destroy = async (id) => {

        //show sweet alert
        Swal.fire({
            title: 'Are you sure?',
            text: "Kamu yakin memilih ini!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                //delete
                Inertia.delete(`${URL}/${id}`)

                Swal.fire({
                    title: 'Success!',
                    text: 'Data deleted successfully!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }

    return (
        <>
            <button onClick={() => destroy(id)} className="btn btn-danger btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-400" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </button>
        </>
    )

}

Berikut adalah contoh component delete yang mana jika ini di jalankan akan mendelet data, namun sebelum terdelet akan menimbulkan peringatan menggunakan sweet alert 2 , sebelum ke hasil kita harus tauhu dulu nih cara mengambil id yang akan di delete jika menggunakan sebuah component.

 

Di atas adalah cara mengambil id yangingin kita delete namun menggunakan sebuah component, maka jika code dan cara di atas di jalankan maka akan menimbulkan hasil sebagai berikut 

 
Di sini akan menimbulkan sebuah alert yang mana dalam hal ini data yangkita pilih tidak langsung terdelete namun akan terdelet jika kita menekan tombil yes delete it dan jika kita menekan cancel maka data tidak jadi terhapus. Berikut adalah contoh hasil Ketika menekan tombol yes delete it 

 
Setelah menekan tombol yes delet it maka data yang kita pilih akan terhaspus secara otomatis dan jika delet nya berhasil maka akan menimbulkan pesan delete suscessfully.

Halaman karyawan

Okeh setelah kita berhasil memmbuat fitur jabatan yang mana di dalam fitur jabatan tersebut kita menginplemmentasikan fungsi “CRUD” yang mana di dalam nya kita bisa melakukan penambahan dan penghapusan pengeditan data, maka dengan ini kita bisa  melanjutkan ke fitur “karyawan” yang mana fitur ini juga akan mengimplementasikan fungsi dari “CRUD” yang bisa kita ambil kesimpulan bahwasanya fitur ini tidak jauh berbeda dengan fitur sebelum nya. Maka Langkah pertama yang akankita lakukan juga tidaklah jauh berbeda dengan fitur sebelum nya yang pertama akan kita lakukanakan adalah membuat sebuah controller dengan menggunakan perintah berikut
php artisan make:controller KariawanController

	Maka dengan menajalankan perintah berikut di terminal yang terintegrasi dengan vs code maka akan menghasilakan sebuah file yang berada di dalam directory “app/http/controller/ KariawanController.php” maka kita akan melakukan penammabahn code di dalam nya sebagai berikut

<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use App\Models\Position;
use Illuminate\Http\Request;
use Termwind\Components\Dd;

class KariawanController extends Controller
{
    public function index()
    {
        $user = User::all();
        $positions = Position::all();
        $role  = Role::all();
        return inertia('Admin/kariawan', [
            'user' => $user, 
            'positions' => $positions,
            'role' => $role,
        ]);
    }

    public function addkariawan(Position $position, Role $role)
    {
        // dd($position);
        $position = Position::all();
        $role  = Role::all();
        return inertia('Admin/addkariawan', [
            'positions' => $position,
            'role' => $role,
        ]);
    }

    public function store(Request $request)
    {
        // dd($request->all());
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->phone = $request->phone;
        $user->position_id = $request->position_id;
        $user->role_id = $request->role_id;
        $user->save();
        return redirect()->back()->with('massage', 'Data Kariawan Berhasil Ditambahkan');
    }

    public function edit(User $user, $id)
    {
        $user = User::find($id);
        $position = Position::all();
        $role  = Role::all();
        return inertia('Admin/editkariawan', [
            'allkariawan' => $user,
            'positions' => $position,
            'role' => $role,
        ]);
    }

    public function update(Request $request, $id)
    {
        $user = User::find($id);
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->phone = $request->phone;
        $user->position_id = $request->position_id;
        $user->role_id = $request->role_id;
        $user->save();
        return redirect()->route('kariawan')->with('massage', 'Data Kariawan Berhasil Diupdate');
    }

    public function destroy( User $user, $id)
    {
        $user = User::find($id);
        $user->delete();
        return redirect()->route('kariawan')->with('massage', 'Data Kariawan Berhasil Dihapus');
    }
}


Jika sudah berhasil melakukan penammmbahan code di dalam controller nya maka Langkah selanjutany yang akan kita lkukan adalalah memmbuat sebuah view yang akan berderectoy di dalam folder “resource/js/pagses/admin/karyawan.jsx” di dalam file ini kita akan melakukan penambahan code yang akan menampilkan semua data keryawan yang ada di dalam databse, maka silahakan tambahakan code sebagai berikut 
import React from 'react';
import 'boxicons';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/inertia-react';
import Delete from '../../Components/Deleteku';

export default function Kariawan(props) {
    console.log(props)

    
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">karyawan</h2>}
        >
            <Head title="karyawan" />

            <div className='m-10  text- font-bold flex justify-between xl:text-4xl xl:m-[5rem]'>
                <h1>Tambahakan Karyawan</h1>
                <a href="/addkariawan"><button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Tambahakan karyawan</button></a>
            </div>

            <div>
                <div className='xl:m-[5rem]'>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="col" className="px-6 py-3 border">No</th>
                                    <th scope="col" className="px-6 py-3">Name</th>
                                    <th scope="col" className="px-6 py-3">Email</th>
                                    <th scope="col" className="px-6 py-3">No.Telphone</th>
                                    <th scope="col" className="px-6 py-3">Role</th>
                                    <th scope="col" className="px-6 py-3">Jabatan</th>
                                    <th scope="col" className="px-6 py-3">Edit</th>
                                    <th scope="col" className="px-6 py-3">Delete</th>
                                </tr>
                            </thead>
                            {props.user ? props.user.map((data, i) => {
                                return(
                                    <tbody key={i}>
                                        <tr className="bg-white dark:bg-gray-800" key={i}>
                                            <td className="px-6 py-4 border">{i + 1 }</td>
                                            <td className="px-6 py-4 border-b">{data.name}</td>
                                            <td className="px-6 py-4 border-b">{data.email}</td>
                                            <td className="px-6 py-4 border-b">{data.phone}</td>
                                            <td className="px-6 py-4 border-b">
                                            {props.role ? props.role.map((data2, i) => {
                                                    return (
                                                        <>
                                                            {
                                                                data.role_id == data2.id ? data2.name : ""
                                                            }
                                                        </>
                                                    )
                                                }) : ""}
                                            </td>
                                            <td className="px-6 py-4 border-b">

                                            {props.positions ? props.positions.map((data3, i) => {
                                                    return (
                                                        <>
                                                            {
                                                                data.position_id == data3.id ? data3.name : ""
                                                            }
                                                        </>
                                                    )
                                                }) : ""}

                                            </td>
                                            <td className="px-6 py-4 border-b">
                                                    <Link href={`/editkariawan/${data.id}` }>
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-400" fill="none"
                                                                viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                            </svg>
                                                    </Link>
                                            </td>

                                            <td className="px-6 py-4 border-b">
                                                <Delete URL={'/deletekariawan'} id={data.id} />
                                            </td>
                                        </tr>
                                    </tbody>    
                                )
                            }): ""}
                        </table>
                    </div>
                </div>
                <div className='p-20'>
                    <h1>Nb</h1>
                    <p><span>1</span>. Pastikan tidak ada yang menggunakan data di atas untuk menghapus nya</p>
                    <p> <span>2</span>. Posisi di atas datap di  gunakan untu menentukan jabatan apa sja yang di perboleh kan absensi</p>
                </div>
            </div>
            
        </AuthenticatedLayout>
    );
}

Jika sudah berhasil melakukanpenamabahn sebagai berikut maka kita belumm bisa melakukan akses ke dalam pagses karyawan, maka kita akan menambahakan route yang akan menghubungkan pages nya sebagai berikut

 
Jika sudah begini maka kita juga perlu memperhatikan bahwasanya di dalam controller sudah benar seperti berikut
 
Dengan begini kita sudah bisa melakukan akses dengan cara mengetikan secara manual, namun hal ini bukanalah hal yang kita inginkan oleh karna itu kita akan menambahakan menu baru di dalam navabar sebagai berikut 
 
Jika sudah selesai dengan semua yang kita butuhkan maka kita sudah bisa melakukan akses untuk menuju ke halaman “karyawan” yang mana hasil dari code di atas adalah sebagai berikut 

 
Bisa di lihat di sini kita sudah bisa melakukan tampilan data yang di kirim dari databse, lantas bagaiman hal itu terjadi ?? hal ini di sebabkan karena di dalam controller yang berclasskan index sebagai berikut 
 
Kita sudah melakukan pengiriman data. Yang mana data tersebut kita panggil ke halamman depan dengan cara melakukan looping sebagai berikut 
{props.user ? props.user.map((data, i) => {
                                return(
                                    <tbody key={i}>
                                        <tr className="bg-white dark:bg-gray-800" key={i}>
                                            <td className="px-6 py-4 border">{i + 1 }</td>
                                            <td className="px-6 py-4 border-b">{data.name}</td>
                                            <td className="px-6 py-4 border-b">{data.email}</td>
                                            <td className="px-6 py-4 border-b">{data.phone}</td>
                                            <td className="px-6 py-4 border-b">
                                            {props.role ? props.role.map((data2, i) => {
                                                    return (
                                                        <>
                                                            {
                                                                data.role_id == data2.id ? data2.name : ""
                                                            }
                                                        </>
                                                    )
                                                }) : ""}
                                            </td>
                                            <td className="px-6 py-4 border-b">

                                            {props.positions ? props.positions.map((data3, i) => {
                                                    return (
                                                        <>
                                                            {
                                                                data.position_id == data3.id ? data3.name : ""
                                                            }
                                                        </>
                                                    )
                                                }) : ""}

                                            </td>
                                            <td className="px-6 py-4 border-b">
                                                    <Link href={`/editkariawan/${data.id}` }>
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-400" fill="none"
                                                                viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                            </svg>
                                                    </Link>
                                            </td>

                                            <td className="px-6 py-4 border-b">
                                                <Delete URL={'/deletekariawan'} id={data.id} />
                                            </td>
                                        </tr>
                                    </tbody>    
                                )
                            }): ""}

Dengan melakukan hal ini maka secara otomatis akan menampilkan semua data yang ada di dalamm table user dan di sini data nya sudah bersifat otomatis bertambah jika admin melakukan penambahan data. 

Halaman Add karyawan


	Okeh Langkah selanjutanya adalah melkukan penambahan data karyawan, yang mana di sini kita memerlukan sebuah pages baru yang mana di dalam pages ini kita akan melakukan pembuatan sebuah file yang Bernama “Addkaryawan” yang mana di dalam pages ini akan menampilkan pages seperti login yang mana di dalam nya akan ada meminta semua data yang di perlukan. Maka dengan begini kita bisa mmenambahanakn code berikut di dalam file “addkaryawan” 

import React, { useState } from 'react';
// import { usePage } from '@inertiajs/inertia-react';
import 'boxicons';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import Swal from 'sweetalert2';

export default function addJabatan(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [position_id, setPosition_id] = useState('');
    const [role_id, setRole_id] = useState('');

    const handleSubmit = () => {
        const data = {
            name,
            email,
            password,
            phone,
            position_id,
            role_id
        }

        Swal.fire({
            icon: 'success',
            title: 'Data Kariawan berhasil di tambahkan!',
            showConfirmButton: true,
        })

        Inertia.post('/storekariawan', data)
        setName('')
        setEmail('')
        setPassword('')
        setPhone('')
        setPosition_id('')
        setRole_id('')
    }

    console.log('props last: ', props)
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Add karyawan</h2>}
        >
            <Head title="Kariawan" />
            <div className='m-10  text- font-bold flex justify-between xl:text-4xl xl:m-[5rem]'>
                <h1>Tambahakan karyawan</h1>
            </div>

            <div>
                <div className='flex justify-center'>
                    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <form className="space-y-6" action="#">
                            <h5 className="text-xl font-medium text-gray-900 dark:text-white">Tambah karyawan in website</h5>
                            <div>

                                {/* nama */}
                                <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Name</label>
                                <input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="nama" onChange={(name) => setName(name.target.value)} value={name} />

                                {/* email */}
                                <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="saipul@gmail.com" onChange={(email) => setEmail(email.target.value)} value={email} />

                                {/* password */}
                                <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" onChange={(password) => setPassword(password.target.value)} value={password} />

                                {/* no telphone */}
                                <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">No Phone</label>
                                <input type="text" name="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="8021657782" onChange={(phone) => setPhone(phone.target.value)} value={phone} />

                                {/* Jabatan */}
                                <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Position</label>
                                <select name="jabatan" id="jabatan" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" onChange={(event) => setPosition_id(event.target.value)} value={position_id}>
                                    {props.positions.map((position, index) => {
                                        return (
                                            <option key={index} value={position.id}>
                                                {position.name}
                                            </option>
                                        )
                                    })}
                                </select>
                                <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role</label>
                                <select name="jabatan" id="jabatan" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" onChange={(event) => setRole_id(event.target.value)} value={role_id}>
                                    {props.role.map((role, index) => {
                                        return (
                                            <option key={index + 6} value={role.id}>
                                                {role.name}
                                            </option>
                                        )
                                    })}
                                </select>
                            </div>
                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => handleSubmit()}>Tambah karyawan</button>
                        </form>
                    </div>
                </div>
                <div className='p-[3rem]'>
                    <h1>NB</h1>
                    <p>1. Password harus lebih dari 8 karakter</p>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}


	Oek jika sudah memasukan code berikut di dalam file “addjabatan” maka dengan begini kita sudah berhasil membuat sebuah halaman add karyawan yang di sini kita masih belum bisa melakukan penambahan data karyawan, dan bahaklan kita masih belum bisa melakukan akses  ke dalam pages “addkaryawan” maka dengan begini kita  perlu melakukan penambahan code di bagain controller yang akan berfungsi sebagai penghubung ke button yang ada di dalam pages karyawan. Maka kita perlu menamabahkan code berikut ini. 
 
Maka jika kita sudah melakukan penambahan sebagi berikut maka kita akan melakukan routing di bagaian web.php sebagai berikut.

 
Jika sudah begini maka kita sudah bisa melakukan asks kedalam nya, yang mana jika sudah berhasil akan manghasilkan seperti ini 

 
Maka ini adalah hasil dari semua code yang sudah kita buat tadi, maka dengan ini kita masih belum bisa melakukan penamabahan data, mangapa demikian ?? hal ini di sebabakan karena kita masih belum menamabahkan controller yang akan menangani atau menghandle semua data yang kita isi, maka kita bisa melakukan penambahan sebagai berikut.

 
	
	Nah jika sudah melakukan penamabahan sebagai berikut, kita bisa melakukan penambahan di bagain  web.php, dan kita akan melakukan handle summit di bagain front end nya, yang mana fungsi dari penambahan handlesummit berfungsi untuk mengirim data kedalam database. Maka dengan begini kita harus menambahakan route di dalam web.php sebagai berikut.
 
	Jika sudah berhasil maka kita akan melkukan penambahan “handlesummit” di bagian front end sebagai berikut.

 
Bisa di lihat sebagaimana di sini kita akan melakukan post atau pengiriman data melalui inertia js yang akan di kirim melalu function “handlesumit” jika sudah begini maka kita sudah bisa melkukan penambahan data yang akan di ikuti oleh sweetaler 2 sebagai berikut.
 
Bisa di lihat di sini kita sudah berhasil melakukan penambahan data yang di lakukan oleh admin. Maka jika sudah seperti ini account yang sudah di daftarkan tadi oleh admin akan bisa melakukan register.
Setelah sudah berhasil melakukan semua nyam aka kita akan melanjutkan ke fitur selanjutn nya yaitu fitur edit yang mana fitur ini akan mengambil id yang di pilih oleh admin atau lebih singkatnya berdasarkan find id, jika kita sudah bermainan dengan id atau data yang cukup sensitif maka kita akan melakukan pengiriman data dari bagaian belakang yang akan di tangkap oleh bagian depan nya.


Halaman Edit karyawan

Oke di sini kita akan melakukan edit data karyawan yang mana fungsi dari fitur ni adalah untuk menghandle user yang lupa dengan password mereka maka dengan fitur ini kita bisa melakukan edit password mereka, di fitur ini konsep nya sama saja dengan fitur edit jabatan namun bedanya nya si sini saat mmelakukan update pada posisi dan role maka di sini kita bisa elakukan handle kepada karyawan yang beralasan tidak bisa melakukan absensi, yang dengan alasan password lupa dan segala macam.
Maka Langkah pertama yang akan kita lakukan adalah mmemmmbuat button edit yang akan mengarah ke bagain halaman edit, di sini kita akan menggunakan fungsi dari id, yang mana kita akan mengambil id dari user yang akan kita pilih dan kita akan melakukan penampilan data user yag sudah kita ambil maka jika sudah tammpil data user nya kita akan melakukan perubahan dan mmmelakukan update,
Langkah pertama yang harus kita lakukan adalam membuat sebuah halaan edit yang mana halaman ini akan kita gunakan untuk melakukan penginputan data user yang baru, untuk melakukan pemmbutan halaman tersebut kita akan menggunakan code sebagai berikut.
import React, { useState } from 'react';
import 'boxicons';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import Swal from 'sweetalert2'

export default function addJabatan(props) {
    const [name, setName] = useState(props.allkariawan.name);
    const [email, setEmail] = useState(props.allkariawan.email);
    const [password, setPassword] = useState(props.allkariawan.password);
    const [phone, setPhone] = useState(props.allkariawan.phone);
    const [positions, setPositions] = useState([]);
    const [position_id, setPosition_id] = useState(props.allkariawan.position_id);
    const [role_id, setRole_id] = useState(props.allkariawan.role_id);

    const updateUser = async (e) => {
        e.preventDefault();
        //sending data
        Inertia.post(`/updatekariawan/${props.allkariawan.id}`, {

            //data
            name: name,
            email: email,
            password: password,
            phone: phone,
            position_id: position_id,
            role_id: role_id,
            _method: "PUT"
        },{
            onSuccess: () => {

                //show alert
                Swal.fire({
                    title: 'Success!',
                    text: 'Data updated successfully!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
            
    });
    }

    
    console.log('props last: ',props)
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit karyawan</h2>}
        >
            <Head title="Kariawan" />
            <div className='m-10  text- font-bold flex justify-between xl:text-4xl xl:m-[5rem]'>
                <h1>Edit karyawan</h1>
            </div>

            <div>
                <div className='flex justify-center'>
                    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <form className="space-y-6" onSubmit={updateUser}>
                            <h5 className="text-xl font-medium text-gray-900 dark:text-white">Edit karyawan in website</h5>
                            <div>
                                {/* nama */}
                                <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Name</label>
                                <input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="nama" required value={name} onChange={(e) => setName(e.target.value)}/>

                                {/* email */}
                                <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="saipul@gmail.com" required onChange={(e) => setEmail(e.target.value)} value={email}/>

                                {/* password */}
                                <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required onChange={(e) => setPassword(e.target.value)} value={password}/>

                                {/* no telphone */}
                                <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">No Phone</label>
                                <input type="text" name="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="8021657782" required onChange={(e) => setPhone(e.target.value)} value={phone}/>
                                
                                {/* Jabatan */}
                                <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Position</label>
                                <select name="jabatan" id="jabatan"className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"required onChange={(e) => setPosition_id(e.target.value)}value={position_id}> 
                                {props.positions.map((position, index) => {
                                    return(
                                        <option key={index} value={position.id}>
                                            {position.name}
                                        </option>
                                        )})}
                                </select>
                                <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role</label>
                                <select name="jabatan" id="jabatan"className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"required onChange={(e) => setRole_id(e.target.value)}value={role_id}>
                                {props.role.map((role, index) => {
                                    return(
                                        <option key={index + 6} value={role.id}>
                                            {role.name}
                                        </option>
                                        )})}
                                </select>
                            </div>
                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit karyawan</button>
                        </form>
                    </div>
                </div>
                    <div className='p-[3rem]'>
                        <h1>NB</h1>
                        <p>1. Password harus lebih dari 8 karakter</p>
                    </div>
            </div>

        </AuthenticatedLayout>
    );
}


	Jika sudah menambahkan code berikut ini mmaka Langkah selanjutnya adalah membuat sebuah controller yang akan menampilkan view ini, yang mman akita memerlukan code sebagai berikut ini, yang mana dengan code berikut ini kita akan merender pagses nya dan akan di kirimm ke dalam controller, yang mana di dalam controller akan menampilkan semua yang ada di dalam pages  ini, 
  

Ketika kita sudah berhasil dalam mmmenambahakan code di atas maka Langkah selanjutanya kita akan menampilkan atau membuatkan sebuah route yang akan menuju ke dalam pasges, namun sebelum itu kita akan meembahas di sini bahwasanay kita akan mengirimkan banyak variable yang akan bersentuhan langsung dengan model, yang mana fungsi dari variable yang kita kirimkan di dalam controller, kita akan mengelola datayang di kirimkan untuk mendukung proses kita dalam melakukan pengeditan data karyawan, maka jika akan melakukan route di dalam web.php sebagai berikut.

 
Di dalam route ini kita akan menjalankan atau menampilkan pages edit yang mana nanti kita akan melakukan pengiriman data yang di ambil berdasarkan id yang di piliholeh admin, maka dengan itu kita perlu menammbahakan button edit seperti code sebagai berikut 
 
Dengan menggunakan code di atas kita akan mengambil id secara otomatis berdasarkan data yang di  pilih oleh admin, maka kita akan sanggat di mudahkan sekali dalam melakukan hal edit di sini. 
Kita hanya perlu menambahakan controller yang akan memasukan data yang sudah di isi oleh admin ke dalam database, maka kita perlu menambahakan code sebagi berikut

 
Jika sudah berhasil menambahakan code seperti di atas maka kita sudah berhasil melakukan pembutan post data ke dalam databse, namun Ketika kita memperbaharui nya kita mmemerlukan sebuah route yang akan mengirim data dari view ke dalam controller, dan dari controller akan mengirim data nya ke dalam database, maka kita perlu menambahakan sebuah route seperti berikut ini.
 
Setelah berhasil menambahakan code sebagai berikut maka kita akan membuat sebuah function yang akan menangani request data yang di ambil dari front end dan akan di kirim ke database yang mana fungsi dari function “handleUpdate” akan menampung semua data yang di ambil dari request  di depan, kita perlu menamabahkan code sebagai berikut.

 

Maka jika code ini sudah berhasil di tambahakan kita sudah bisa melakukan update data, yang mana jika berhasil memperbaharui data maka akan menampilkan seperti berikut ini.


 

Maka hasil yang akan kita dapatkan adalah seperti di atas, jika sudah seperti ini maka kita sudah berhasil dalam melakukan hal update data karyawan, dengan hal ini kita sudah bisa menangani jika ada hal yang tidak di inginkan, jika ada user yang lupa dengan password mereka.
Nah jika kita sudah berhasil dalam melakukan update maka kita akan melakukan penambahan fitur delete, yang mana dengan fitur ini kita bisa mendelete data user yang sudah tidak aktif lagi atau sudah tidak bekerja di perusahaan kita lagi maka kita akan menambahkan fitur delete.


Delete karyawan

Fitur ini akan sanggat berguna jika kita akan sering melakukan maintenance di website kita, yang mana jika ada user yang sudah tidak aktif lagi atau sudah tidak bekerja di perusahaan kita lagi, maka kita perlu melakukan pembersihan data karyawan yang sudah tidak bekerja di perusahaan kita, maka kita akan selalu melakukan management data user, untuk membuat fitur ini kita akan memerlukan compent delete, namun component ini sudah kita miliki, nah hal ini lah yang akan memmbuat kita lebih mudah dalam menegerjakan application kita, maka jika sudah ad akita hanya perlu mmelakukan pemanggilan component nya dan menambahakan fitur delete, serta mamasukan nya di dalam route kita, Langkah pertama adalah membuat controller dwelete sebagi berikut.
 

Jika kita sudah berhasil menambahakan code di atas maka Langkah selanjutnya adalah membuat dan memanggil component delete yang sudah kita punya sebagai berikut.

 

Jika sudah melakukan pemanggilan sebagai di atas maka kita perlu melakukan pembuatan route di dalam bagian web.php sebagai berikut.

 
Jika sudah berhasil menamabah kan fitur delete yang menggunakan component maka kita akan mendapatkan hasil sebagi berikut ini.
 
Di sini kita akan melakukan falidasi lagar Ketika admin ingin melakukan delete maka admin bisa melihat lagi siapa yang akan di delete nya, dan hal ini di tujukan untuk mengurangi resiko terdelet akibat tidak sengaja menekan tombol delete. Maka setelah kita menekan tombol cancle data yang tadi kita pilih tidak adkan terdelet, namun jika kta menekan tombol yes maka data akan terhapus dan akan menghasilkan seperti ini.

 
Maka dengan ini fitur karyawan sudah selesai kita kerjakan, dan langakah selanjutnya adalah membuat fitur hari libur.

Halaman Hari Libur

	Oke setelah beres melakukan penambahan dua fitur sebelum nya maka di sini kita akan melakukan penambahan fitur lagi di sini yang mana dengan fitur ini kita membuat hari libur, yang mana nanti karyawan bisa melihat nya di halaman dashboard karyawan namun untuk saat ini kita masih focus terlebih dahulu di bagiaan adimin nanti saya akan mmenunjukan hasil jika hari libur ini di buat dan apa yang akan terjadi di bagaian halaman user.
	Jadi singkat nya dengan fitur ini apa bila si admin melakukan pebuatan hari libur maka secara otomatis di bagian halaman user yang login ke dalam dashboard akan secara otomatis menampilkan teks “hari ini adalah hari libur” maka secara otomatis user tidak bisa melkukan absensi, yang mana hasil nya di halaman user sebagai berikut.

 
	Di atas adalah tampilan dari halaman user, jika di perhatikan user tidak akan bisa melakukan absensi di karnakan hari libur dan absensi secar otomatis akan menjadi tutup untuk membuat nya kita akan melakukan nya via admin, Langkah pertama yang harus kita lakukan adalah membuat sebauh halaman index dari si hari libur, yang mana halaman ini di gunakan untuk menampilakan semua data hari libur yang ada di dalam website kita. Maka kita akan menggunakan halaman nya, silahakan di buat dan setelah berhasil kita akan menambahakan code sebagai berikut ini.
import React from 'react';
import 'boxicons';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/inertia-react';
import Delete from '../../Components/Deleteku';

export default function HariLibur(props) {
    // console.log(props.holiday)
    return (

        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Hari Libur</h2>}>

            <Head title="Jabatan" />
            <div className='m-10  text- font-bold flex justify-between xl:text-4xl xl:m-[5rem]'>
                <h1>Tambahkan Hari Libur</h1>
                <a href="/addharilibur"><button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Tambahakan Hari Libur</button></a>
            </div>

            <div>
                    <div className='xl:m-[5rem]'>
                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 whitespace-nowrap">
                                            <th scope="col" className="px-6 py-3 border">No</th>
                                            <th scope="col" className="px-6 py-3">NAMA HARI LIBUR</th>
                                            <th scope="col" className="px-6 py-3">KETERANGAN</th>
                                            <th scope="col" className="px-6 py-3">TANGGAL LIBUR</th>
                                            <th scope="col" className="px-6 py-3">EDIT</th>
                                            <th scope="col" className="px-6 py-3">DELETE</th>
                                        </tr>
                                    </thead>
                                    {props.holiday ? props.holiday.map((data, i) => {
                                            return(
                                                <tbody key={i}>
                                                    <tr className="bg-white dark:bg-gray-800 whitespace-nowrap" key={i}>
                                                        <td className="px-6 py-4 border">{i + 1 }</td>
                                                        <td className="px-6 py-4 border-b">{data.title}</td>
                                                        <td className="px-6 py-4 border-b">{data.description}</td>
                                                        <td className="px-6 py-4 border-b">{data.holiday_date}</td>
                                                        <td className="px-6 py-4 border-b">

                                                                <Link href={`/editharilibur/${data.id}` }>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-400" fill="none"
                                                                        viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                                    </svg>
                                                                </Link>
                                                        </td>

                                                        <td className="px-6 py-4 border-b">
                                                            <Delete URL={'/deleteharilibur'} id={data.id} />
                                                        </td>
                                                    </tr>
                                                </tbody>    
                                            )
                                        }): ""}
                                </table>
                            </div>
                    </div>
            </div>
        </AuthenticatedLayout>
    );
}


Jika sudah berhasil melakukan penambahan code untuk halaman depan nya maka akan kita akan mendapatakan tampilan seperti ini.

 
Berikut adalah tampilan dari halaman hari libur, namuan di sini kita masih belum bisa melakukan akses terhadap halaman ini, hal ini di sebabkan kita masih belum melakukan pemanggilan view di bagaian controller nya dan kita juga masih belumm melakukan pembuatan routing, maka Langkah selanjutnya adalah melakukan pemmbuatan controller, jika sudah berhasil melakukanpembutan controller maka kita akan melakukan penammbahan code sebagai berikut.
<?php

namespace App\Http\Controllers;

use App\Models\Holiday;
use Illuminate\Http\Request;

class HariliburController extends Controller
{
    public function index()
    {
        $holiday = Holiday::all();
        // dd($holiday);
        return inertia('Admin/harilibur', [
            'holiday' => $holiday,
        ]);
    }

    public function addharilibur()
    {
        return inertia('Admin/addharilibur');
    }

    public function store(Request $request)
    {
        // dd($request->all());
        $holiday = new Holiday();
        $holiday->title = $request->title;
        $holiday->description = $request->description;
        $holiday->holiday_date = $request->holiday_date;
        $holiday->save();
        return redirect()->back();
    }

    public function edit(Holiday $holiday, $id)
    {
        $holiday = Holiday::find($id);
        return inertia('Admin/editharilibur', [
            'allharilibur' => $holiday,
        ]);
    }

    public function update(Request $request, $id)
    {
        $holiday = Holiday::find($id);
        $holiday->title = $request->title;
        $holiday->description = $request->description;
        $holiday->holiday_date = $request->holiday_date;
        $holiday->save();
        return redirect()->route('harilibur');
    }

    public function destroy($id)
    {
        $holiday = Holiday::find($id);
        $holiday->delete();
        return redirect()->route('harilibur');
    }
}

Jika sudah melakukan penamabahan code seperti di atas maka kita akan melakukan pemanggilan routing di file web.php. maka kita perlu melakukan penambahan code sebagi berikut.
 
Nah jika kita sudah berhasil melakukan penambahan route seperti ini maka kita sudah bisa melakukan akses ke dalam halaman karyawan, maka Langkah selanjutnya adalah kita membuat halaman add hari libur.


	
Halaman Add Hari Libur

      Oke Ketika kita sudah berhasil menampilkan semua data yang ada di dalam database maka secara otomatis kita memerlukan proses penambahan data, yang mana pada proses ini kita akan berpindah halaman , bisa kalian perhatikan pada hasil dari pembuatan halaman jabatan, kita sudah membuat sebuah button yang akan menuju ke halaman “add Hari Libur” namun kita belum bisa langsung menggunakan button itu, mengapa demikian?? Ya hal ini di sebabkan kita masih belum membuat sebuah view yang akana menampung proses add jabatan.
	Oleh karena itu kita akan melakukan pembuatan file view nya, silahakan teman teman melakukan pembutan file view nya dengan mana “addharilibur.jsx” dengan penamaan seperti ini kita akan lebih mudah untuk memanagement nya nanti Ketika memerelukan perbaikan, jika sudah maka Langkah selanjutnya adalah membut menambahakan code ini yang akan menghubungkan view nya nanti, silahakan buka file “HariLiburController” dan lakukan penambahan file berikut ini.
  
Jika kita sudah berhasil melakukan penammbahan code di atas di dalam controller maka kita akan melakukan pembuatan view sebagai berikut.
import React, { useState } from 'react';
import 'boxicons';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import Swal from 'sweetalert2'

export default function addHarilibur(props) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [holiday_date, setHoliday_date] = useState('');
    const handleSubmit = () => {
        const data = {
            title,
            description,
            holiday_date
        }

        Swal.fire({
            icon: 'success',
            title: 'Hari libur berhasil di tambahkan!',
            showConfirmButton: true,
        })

        Inertia.post('/storeharilibur', data)
        setTitle('')
        setDescription('')
        setHoliday_date('')
    }

    console.log('props last: ', props)
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Add Hari Libur</h2>}
        >
            <Head title="Jabatan" />
            <div className='m-10  text- font-bold flex justify-between xl:text-4xl xl:m-[5rem]'>
                <h1>Tambahakan Hari Libur</h1>
            </div>

            <div className='flex justify-center'>
                <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form className="space-y-6" action="#">
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Add Hari Libur</h5>
                        <div>
                            <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama/Judul Hari Libur</label>
                            <input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Hari Ahad" onChange={(title) => setTitle(title.target.value)} value={title} />
                        </div>
                        <div>
                            <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">keterangan</label>
                            <textarea type="keterangan" name="keterangan" id="keterangan" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Hari Ahad" onChange={(description) => setDescription(description.target.value)} value={description} />
                        </div>
                        <div>
                            <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tanggal</label>
                            <input type="date" name="keterangan" id="keterangan" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" onChange={(holiday_date) => setHoliday_date(holiday_date.target.value)} value={holiday_date} />
                        </div>
                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => handleSubmit()}>Add Hari Libur</button>
                    </form>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}

Berikut adalah code yang akan menampilkan halaman “addharilibur” nah kita akan melakukan pendaftaran view di dalama file “web.php” yang mana fungsi dari penambahan ini agara kita bisa pergi ke halaman “addharilibur” dengan mudah hanya menggunakan button, maka kita bisa menambahkan route sebagai berikut.
 
Setelah berhasil melakukan penambahan code seperti di atas maka kita bisa mengakses halaman addharilibur, namun di sini kita masih belum bisa melakukan penambahan hari libur, hal ini di sebabkan oleh belum kita buat nya controller yang akan menangani data yang di isi melalui font end, maka kita akan melakukan penambahan code untuk menangani data yang di kirim,  kita bisa melakukan penambahan seperti berikut.
 

Jika kita sudah berhasil melakukan penambahan code seperti di atas, maka kita sudah bisa mmelakukan penambahan data, yang mana kita butuh melakukan handle request yang akan di kirm melalui route yang akan menuju ke function store, maka kita harus melakukan penambahan code di bagian web.php seperti berikut.
 
Nah jika kita sudah berhasil melakukan penambahan code di atas maka kita sudah bisa melakukan pengiriman data ke dalam database.

Halaman Edit Hari Libur
Oke setelah kita berhasil melakukan penambahan data hari libur maka Langkah selanjutnya adalah melakukan edit, yang mana  fitur ini di gunakan untuk mmengubah data, bila mana ada kesalahan dalamm melakukan inputan data, maka fitur ini juga sanggat lah penting dalam sebuah website yang harus berisi informasi yang sanggat penting seperti web aplocation yang sedang kita kerjakan ini, sebagaimana yang sudah kita kerjakan sebelum nya bahwasanya fitur edit ini akan memerlukan sebuah id, yang mana id tersebut yang akan kita pergunakan untuk menentukan yang mana yang akan kita berikan sebuah perubahan. 
	Maka Langkah pertama yang kita perlukan adalah menambahakan link yang akan di pergunakan untuk mengambil id dari setiap data yang di pilih oleh admin, maka kita memerlukan code sebagai berikut.

 

Maka dengan kita menambahakan code di atas kita akan melakukan pengambilan id dari setiap data yang di pilih oleh admin, namun hal ini masih belum bis akita lakukan karena kita harus menambahkan code di dalam controller sebagai berikut.

 
Jika kita sudah berhasil menambahkan code di atas maka langkah selanjutanya yang akan kita lakukan adalah membuat sebuah view yang akan menangani proses update, silahakan teman temman buat sebauh file yang akan menghandle proses update, setelah sudah di buat maka kita akan menambahkan code sebagia berikut.

import React, { useState } from 'react';
import 'boxicons';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import { Inertia } from "@inertiajs/inertia";
import Swal from 'sweetalert2'

export default function editharilibur(props) {

    //state
    const [title, setTitle] = useState(props.allharilibur.title);
    const [description, setDescription] = useState(props.allharilibur.description);
    const [holiday_date, setHoliday_date] = useState(props.allharilibur.holiday_date);

    
    //method "updateCategory"
    const updateHoliday = async (e) => {
        e.preventDefault();

        //sending data to backend
        Inertia.post(`/updateharilibur/${props.allharilibur.id}`, {

            //data
            title: title,
            description: description,
            holiday_date: holiday_date,
            _method: "PUT"
        },{
            onSuccess: () => {

                //show alert
                Swal.fire({
                    title: 'Success!',
                    text: 'Data updated successfully!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
            
    });
    }
    console.log(props.allharilibur.id);
    return (

        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Hari Libur</h2>}
        >
            <Head title="Jabatan" />
            <div className='m-10  text- font-bold flex justify-between xl:text-4xl xl:m-[5rem]'>
                <h1>Edit Hari Libur</h1>
            </div>

            <div className='flex justify-center'>
                <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form className="space-y-6" onSubmit={updateHoliday}>
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Edit Hari Libur</h5>
                        <div>
                            <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name Position</label>
                            <input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Manager" value={title} onChange={(e) => setTitle(e.target.value)}/>
                        </div>
                        <div>
                            <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name Position</label>
                            <textarea type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Manager" value={description} onChange={(e) => setDescription(e.target.value)}/>
                        </div>
                        <div>
                            <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name Position</label>
                            <input type="date" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Manager" value={holiday_date} onChange={(e) => setHoliday_date(e.target.value)}/>
                        </div>
                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Update Hari Libur</button>
                    </form>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}


Nah dengan menggunakan code di atas kita akan melakukan proses edit namun hal ini masih belum bisa kita lakukan maka kita harus melakukan penamabahan route di dalam web.php sebagi berikut.
 
Nah jika sudah berhasil melakukan rout6ing tersebut maka kita sudah berhasil mengambil id dari data yang sudah di pilih maka tampilanya akan seperti ini.
 
Nah berikut adalah tampilan yang kita dapatakan bisa di perhatikan di dalam url nya bahwasanya kita mendapatkan id dari si hari libur 3 maka data yang akan di tampilkan adalah data hari libur yang meiliki id 3, namun di sini kita belum bisa melakukan update, mengapa demikian ?? hal ini di sebabkan karena kita masih belum menambahakan function update maka kita akan menambahakan function tersebut, silahakan buka controller nya, dan lakukan penambahan sebagai berikut .
 
Nah jika kita sudah berhasil menambahakan code di atas maka kita akan melakukan routing di dalam web.php sebagai berikut.
 
Nah Ketika kita sudah berhasil menambahakan route tersebut,maka kita memerlukan sebuah variable yang akan menghandle update nya, silahakan teman  temman buka file view nya dan kita akan melakukan penambahakn function yang akan melakukan handle terhadap data yang di isi dan nanti data tersebut akan di kirim melalui url update yang sudah kita buat tadi, silahkan tambahakan code sebagai berikut di dalam halaman view.
 

Nah jika sudah berhasil menammbahkan seperti ini maka kita sudah bisa melakukan update, yang man di dalam nya sudah inqlude sweet alet 2 maka hasil dari code yang sudah kita buat tadi adalah sebagai berikut.
 

Nah jika sudah berhasil melakukan pembaharuan data yang sudah ada  maka kita akan melakukan sebuah fitur delete, yang mana kita ketahui bahwasanya kita sudah memiliki component delete maka kita tinggal melakukan pemanggilan.

Delete Hari Libur

Di fitur ini kita akan bisa melakukan delete yang mana kita akan menggunakan component yang sudah kita buat maka, kita akan menambahkan code di bagaian controller sebagai berikut 
 
Yang mana jika kita sudah berhasil melakukan penamabahan code di atas maka kita akan memanggil component delete yang sudah kita buat sebagai berikut.

 

Maka dengan begini kita sudah berhasil melakukan delet dengan Langkah terakhir yakni menambahakan route di dalam web.php sebagi berikut.
 
Maka dengan begini kita sudah berhasil membuat fitur delete. 


Halaman Absensi

	Oke teman teman sekarang saat nya kita membuat fitur utama dalam website ini yang mana fitur ini lah yang akan banyak bekerja dan malakukan query data.  Yang mana di dalm fitu ini lah yang akan melakukan pengiriman data terhadap user yang di pilih untuk melakukan absensi. Maka  sudah jelas bahwasanya fitur ini yang akan mengendalikan website kita. 
	Langkah pertama yang harus kita lakukan adalah pembutan controller nya terlebih dahulu yang mana dengan controller ini yang akan menangani semua yang akan kita lakukan dan kita buat untuk menghandle semua keinginan kita. Sikahkan teman teman buat terlebih dahulu untuk controller nya, jika sudah berhasil melakukan pembutan controller nya silahkan buka dan lakukan penambahan code sebagai berikut ini.

<?php

namespace App\Http\Controllers;

use App\Models\Position;
use App\Models\Attendance;
use Illuminate\Http\Request;

class AbsensiController extends Controller
{
    public function index()
    {
        $position = Position::all();
        $Attendance = Attendance::all();
        // dd($position);
        return inertia('Admin/absensi',[
            'Attendance' => $Attendance,
            'Position' => $position,
        ]);
    }

    public function AddAbsensi()
    {
        $position = Position::all();
        return inertia('Admin/AddAbsensi',[
            'Position' => $position,
        ]);
    }

    public function store(Request $request)
    {

        $Attendance = new Attendance();
        $Attendance->title = $request->title;
        $Attendance->description = $request->description;
        $Attendance->start_time = $request->start_time;
        $Attendance->batas_start_time = $request->batas_start_time;
        $Attendance->end_time = $request->end_time;
        $Attendance->batas_end_time = $request->batas_end_time;
        // $Attendance->position_id = $request->position_id;
        $Attendance->save();
        // dd($Attendance);
        $array = [];
            foreach((array)$request->position_id as $key => $value) {
                $array[] = [
                    'attendance_id' => $Attendance->id,
                    'position_id' => $value
                ];
            }
            $Attendance->izinposisi()->insert($array);
        return redirect()->back();
    }

    public function edit($id)
    {
        $Attendance = Attendance::find($id);
        $position = Position::all();
        return inertia('Admin/editabsensi',[
            'allabsensi' => $Attendance,
            'Position' => $position,
        ]);
    }

    public function update(Request $request, $id)
    {

        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'start_time' => 'required',
            'batas_start_time' => 'required',
            'end_time' => 'required',
            'batas_end_time' => 'required',
            'position_id' => 'required',
        
        ]);

        $Attendance = Attendance::find($id);
        $Attendance->title = $request->title;
        $Attendance->description = $request->description;
        $Attendance->start_time = $request->start_time;
        $Attendance->batas_start_time = $request->batas_start_time;
        $Attendance->end_time = $request->end_time;
        $Attendance->batas_end_time = $request->batas_end_time;
        // $Attendance->position_id = $request->position_id;
        $Attendance->save();
        $array = [];
            foreach((array)$request->position_id as $key => $value) {
                $array[] = [
                    'attendance_id' => $Attendance->id,
                    'position_id' => $value
                ];
            }
            $Attendance->izinposisi()->insert($array);
        return redirect()->route('absensi');
    }

    public function destroy($id)
    {
        $Attendance = Attendance::find($id);
        $Attendance->delete();
        return redirect()->route('absensi');
    }
}


Nah jika sudah berhasil melakukan penambahan controller seperti di atas maka kita akan melakukan tahapan selanjutnya yakni melakukan pembuatan view yang akan menampilkan semua data absensi yang ada di dalam database. Silahkan buat dan jika sudah berhasil membuat nya maka kita akan melakukan penamabahan sebagai berikut.
import React from 'react';
import 'boxicons';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/inertia-react';
import Delete from '../../Components/Deleteku';

export default function HariLibur(props) {
    console.log(props.Attendance)
    return (

        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Absensi</h2>}>

            <Head title="Jabatan" />
            <div className='m-10  text- font-bold flex justify-between xl:text-4xl xl:m-[5rem]'>
                <h1>Tambahkan Absensi</h1>
                <a href="/AddAbsensi"><button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Tambahakan Absensi</button></a>
            </div>

            <div>
                    <div className='xl:m-[5rem]'>
                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 whitespace-nowrap">
                                            <th scope="col" className="px-6 py-3 border">No</th>
                                            <th scope="col" className="px-6 py-3">NAMA Absensi</th>
                                            <th scope="col" className="px-6 py-3">KETERANGAN</th>
                                            <th scope="col" className="px-6 py-3">Waktu Absen Masuk</th>
                                            <th scope="col" className="px-6 py-3">Waktu batas Absen Masuk</th>
                                            <th scope="col" className="px-6 py-3">Waktu Absen Keluar</th>
                                            <th scope="col" className="px-6 py-3">Waktu Batas Absen Keluar</th>
                                            <th scope="col" className="px-6 py-3">EDIT</th>
                                            <th scope="col" className="px-6 py-3">DELETE</th>
                                        </tr>
                                    </thead>
                                    {props.Attendance ? props.Attendance.map((data, i) => {
                                            return(
                                                <tbody key={i}>
                                                    <tr className="bg-white dark:bg-gray-800 whitespace-nowrap" key={i}>
                                                        <td className="px-6 py-4 border">{i + 1 }</td>
                                                        <td className="px-6 py-4 border-b">{data.title}</td>
                                                        <td className="px-6 py-4 border-b">{data.description}</td>
                                                        <td className="px-6 py-4 border-b">{data.start_time}</td>
                                                        <td className="px-6 py-4 border-b">{data.batas_start_time}</td>
                                                        <td className="px-6 py-4 border-b">{data.end_time}</td>
                                                        <td className="px-6 py-4 border-b">{data.batas_end_time}</td>
                                                        <td className="px-6 py-4 border-b">

                                                                <Link href={`/editabsensi/${data.id}` }>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-400" fill="none"
                                                                        viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                                    </svg>
                                                                </Link>
                                                        </td>

                                                        <td className="px-6 py-4 border-b">
                                                            <Delete URL={'/deleteabsensi'} id={data.id} />
                                                        </td>
                                                    </tr>
                                                </tbody>    
                                            )
                                        }): ""}
                                </table>
                            </div>
                    </div>
            </div>
        </AuthenticatedLayout>
    );
}



Nah kita sudah berhasil melakukan pembutan halama view yang akan menampilkan semua data yang ada di dalam database namun di sini kita masih belum bisa melakukan akses terhadap halaman ini, mengapa demikian ?? hal ini di sebabkan kita masih belum membuat route di dalam file web.php dan kita masih belum melakukan penambahan navlink yang akan membawa kita ke halaman absensi dengan mudah, maka kita bisa melakukan penambahan navlink sebagai berikut.
  
Nah jika kita sudah berhasil melakukan penambahan sebagai berikut maka kita harus membuat route di dalam file web.php yang mana fungsi dari route ini akan membawa kita ke halaman nya  ke depan dengan menggunakan nav link dan di bantu dengan route yang di atur di dalam web.php, silahakan teman teman lakukan penamabahan sebagai berikut.

 
Nah di sini kita sudah  berhasil melakukan penambahan route yang mana di dalam route ini kita menggunakan controller dari absensicontroller yang memanggil class index, yang mana kalua kita buka di dalam controller AbsensiController yang menggunakan class index akan menjalan view dari si absensi, bisa kita lihat di dalam controller nya sebagai berikut.

 

Di sini kita juga melakukan pemanggilan beberapa model, yang mana model yang kita panggil sudah bersentihan langsung dengan database maka secaar otomatis semua data yang ada di dalam database bisa kita panggil dan kita tampilkan di dalam halaman view, menggunakan perulangan di dalam javascript dengan menggunakan map. 
	Maka kita akan mendapatkan tampilan seperti berikut ini.
 
Nah gammbar di atas adalah hasil dari penampilan data yang ada di database dan jika kita sudah berhasil melakukan pembuatan tampilan yang akan menampilakan semua data yang ada di table absensi.


Halaman Add Absensi

Nah yang selanjutnya akan kita buat adalah fitur add absensi, ya jelas di sini bahwasanya kita perlu membuat sebuah fitur add absensi yang mana guananya untuk melakukan penambahan absensi yang akan di lakukan setiap hari nya, maka dengan begini kita sanggat butuh dengan fitur yang satu  ini.
Nah apa aja yang perlu kita persiapkan?? Yang pertama adalah sebuah file untuk meletakakan code yang akan di gunakan untuk melakukan add absensi, yang ke dua kita memerlukan sebuah controller yang akan menangai pengiriman data yang di ambil melalui fornt end atau bisa di bilang data yang di isi oleh admin akan kita kirim ke database melalui sebuah controller. Selanjutanyta kita memerlukan sebuah route yang akan menanganai connectsi antara tampilan dan controller, jika sudah bisa di pahamai maka kita perlu membuat sebuah file add absensi yang di gunaakn untuk menangani sebuah view, jika sudah di buat maka kita perlu menambahakan code berikut ini.
import React, { useState } from "react";
import "boxicons";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import Swal from "sweetalert2";
import Select from 'react-select';

export default function addAbsensi(props) {

    const data = props.Position.map(val => val.name);
    const options = data.map((val, index) => {
        return {
            value: props.Position[index].id,
            label: val,
        };
    });
    console.log(options);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [start_time, setStart_time] = useState("");
    const [batas_start_time, setBatas_start_time] = useState("");
    const [end_time, setEnd_time] = useState("");
    const [batas_end_time, setBatas_end_time] = useState("");
    const [attendance_id, setAttendance_id] = useState("");
    const [position_id, setPosition_id] = useState([]);

    /** Only get the id */
    const selectedPositionId = position_id.map((item) => item.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            title,
            description,
            start_time,
            batas_start_time,
            end_time,
            batas_end_time,
            attendance_id,
            position_id: selectedPositionId,
        };

        console.log(data);
        Swal.fire({
            icon: "success",
            title: "Absensi berhasil di tambahkan!",
            showConfirmButton: true,
        });

        Inertia.post("/storeabsensi", data);
        setTitle("");
        setDescription("");
        setStart_time("");
        setBatas_start_time("");
        setEnd_time("");
        setBatas_end_time("");
        setAttendance_id("");
        setPosition_id([]);
    };


    const handleJabatanChange = (position_id) => {
        setPosition_id(position_id)
    }
    
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Add Absensi
                </h2>
            }
        >
            <Head title="Jabatan" />
            <div className="m-10  text- font-bold flex justify-between xl:text-4xl xl:m-[5rem]">
                <h1>Tambahkan Absensi</h1>
            </div>

            <div className="flex justify-center">
                <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                            Add Absensi
                        </h5>
                        <div>
                            <label
                                type="name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Nama/Judul Absensi
                            </label>
                            <input
                                type="name"
                                name="name"
                                id="name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                placeholder="Hari Senin" required
                                onChange={(title) =>
                                    setTitle(title.target.value)
                                }
                                value={title}
                            />
                        </div>
                        <div>
                            <label
                                type="name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                keterangan
                            </label>
                            <textarea
                                type="keterangan"
                                name="keterangan"
                                id="keterangan"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                                placeholder="Hari Ahad" required
                                onChange={(description) =>
                                    setDescription(description.target.value)
                                }
                                value={description}
                            />
                        </div>
                        <div>
                            <label
                                type="name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                start time
                            </label>
                            <input
                                type="time"
                                name="keterangan"
                                id="keterangan"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " required
                                onChange={(start_time) =>
                                    setStart_time(start_time.target.value)
                                }
                                value={start_time}
                            />
                        </div>
                        <div>
                            <label
                                type="name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                batas start time
                            </label>
                            <input
                                type="time"
                                name="keterangan"
                                id="keterangan"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "required
                                onChange={(batas_start_time) =>
                                    setBatas_start_time(
                                        batas_start_time.target.value
                                    )
                                }
                                value={batas_start_time}
                            />
                        </div>
                        <div>
                            <label
                                type="name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                end time
                            </label>
                            <input
                                type="time"
                                name="keterangan"
                                id="keterangan"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "required
                                onChange={(end_time) =>
                                    setEnd_time(end_time.target.value)
                                }
                                value={end_time}
                            />
                        </div>
                        <div>
                            <label
                                type="name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                batas end ime
                            </label>
                            <input
                                type="time"
                                name="keterangan"
                                id="keterangan"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "required
                                onChange={(batas_end_time) =>
                                    setBatas_end_time(
                                        batas_end_time.target.value
                                    )
                                }
                                value={batas_end_time}
                            />
                        </div>
                        <label
                            type="name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                            posisi
                        </label>
                        <Select
                            isMulti
                            name="jabatan[]"
                            options={options}
                            className="basic-multi-select"
                            classNamePrefix="select" required
                            onChange={handleJabatanChange}
                            value={position_id}
                        />
                        
                        <input
                            type="submit"
                            className="cursor-pointer w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            value="Add Absensi"
                        />
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}


Nah jika sudah berhasil kita melakukanpenamabahan seperti di atas maka kita perlu menambahan kan controller yang akan menangani view yang ini, maka kita bisa menambahakan nya seperti berikut.

 
Nah dari controller di atas kita bisa melihat bahwasanya view yang ini akan di kirim dan kita harus membuatkanya sebuah route di dalam file web.php yang mana di sini kita akan melakukan pengiriman dan kita juga akan melakukan rendering yang di kirim maka kita akan melakukan penamabahan sebagai berikut.
 
Bisa di lihat bahwasanya di sini kita menggunakan method get yang mana kita ketahui bahwasanya jika kita menggunakan method get, kita hanya bisa menampilkan dan maka di kondisi ini kita perlu melakukan penamabahan route di dalam nya namun dsebelum itu berikut adalah hasil dari code di atas.

 
Nah gamabar di atas adalah hasil dari code yang kita jadikan untuk melakukan add absensi nah di sini kita masih belum bisa melakukan add absen hal ini sdi sebabkan oleh tidak adanya route yang akan menangani data yang sudah di isi dan akan di kirim ke dalam database, maka kita perlu menambahakan controller sebagai berikut.

 
Nah jika kita sudah  melakukan penamabahan di sini maka kita akan melakukan penamabhaan di dalam route nya, namun di sini saya akan menjelaskan sedikit tentang controller yang ini bisa di lihat di sini bahwasanya kita melakukan perulangan, hal ini di sebabkan oleh table kita yang mempunya dua yang mana seperti yang teman temana ketahui  bahwasanya absensi kita di filter dengan posisi, yang mana admin akan melakukn pengisian data absensi dan akan meilih posisi mana saja yang akan di beri izin untuk melakukan absen. Maka kita memerlukan dua table yang mana table yang pertama akan menampung data absensi yang memiliki id absensi, dan kita mempunyai table yang akan menampung data dari id dari table absensi dan akan mengabungkanya dengan table posisi, maka isi dari table yang ini hanya menampung data id absensi dan id dari posisi maka jika ada id absensi akan di lihat id posisi mana yang terisi di dalam nya, dengan begini kita bisa melakukan pemisahan dari posisi mana yang bisa melakukan absensi. Dengan begini kita sudah berhasil melakukan pemisahan dan memberikan posisi mana saja yang di perbolehkaan melakukan absensi. Oke Langkah selanjut nya adalah membuat route tang bermethodkan post yang mana dengan route ini akan melakukan handle dari data yang di kirim dari halaman depan dan akan di isi ke dalam database. Maka kita perlu melakukan penamabahan route sebagi berikut.

 
Nah dengan menggunakan route ini maka kita akan bisa melakukan pengisian data ke dalam database. Namun di sini kita memerlukan function yang akan menangani isi dari apa yang di isikan oleh admin maka kita perlu membuat function handlerequest  dan handleposition sebagai berikut.
Dan di sini kita menggunakan multipleselect  yang mana fungsi ini kita pakai untuk menangani permintaan yang ingin membuat absensi lebih dari 1 posis maka kita perlu melakukan penamabahan dan pembuatan sebagi berikut.

 


Nah di bawah ini adalah function yang akan menangai semua permintaan yang sudah di jelaskan di atas tadi.
 

Nah jika kita sudah memenuhi semua yang ada di atas maka kita sudah bisa melakukan penambahan data yang mana di sini kita juga menggunakan sweetalert2 untuk membuat semua nya menjadi lebih cantik dan teratur dalam website.



Halaman Edit Absensi
	
	Nah di fitur yang ini  kita akan melakukan edit terhadap data absensi yang mana fitur ini di pergunakan untuk melakukan perubahan bisa hal nya terjadi kesalan dalam melakukan pengisian data maka fitur yang satu ini sanggat di perlukan. Untuk melakukan pembuatan fitur ini kita perlu menyiapkan beberapa hal untuk melakukan pembutan fitur ini, maka kita perlu menyiapkan hal ini :
1.	File yang akan menangai fitur edit 
2.	Controller 
3.	Route 
Nah jika hal ini sudah di penuhi maka kita akan bisa membuat fitur edit Langkah pertama yakni melakukan pembutan view di dalam file yang sudah kita buat sebagai berikut.
import React, { useState } from "react";
import "boxicons";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import Swal from "sweetalert2";
import Select from "react-select";

export default function editabsensi(props) {
    const data = props.Position.map((val) => val.name);
    const options = data.map((val, index) => {
        return {
            value: props.Position[index].id,
            label: val,
        };
    });

    //state
    const [title, setTitle] = useState(props.allabsensi.title);
    const [description, setDescription] = useState(
        props.allabsensi.description
    );
    const [start_time, setStart_time] = useState(props.allabsensi.start_time);
    const [batas_start_time, setBatas_start_time] = useState(
        props.allabsensi.batas_start_time
    );
    const [end_time, setEnd_time] = useState(props.allabsensi.end_time);
    const [batas_end_time, setBatas_end_time] = useState(
        props.allabsensi.batas_end_time
    );
    const [attendance_id, setAttendance_id] = useState(
        props.allabsensi.attendance_id
    );
    const [position_id, setPosition_id] = useState(
        props.allabsensi.position_id
    );

    const selectedPositionId = position_id?.map((item) => item.value);

    //method "updateCategory"
    const updatePosition = async (e) => {
        e.preventDefault();
        //sending data
        Inertia.post(
            `/updateabsensi/${props.allabsensi.id}`,
            {
                //data
                title: title,
                description: description,
                start_time: start_time,
                batas_start_time: batas_start_time,
                end_time: end_time,
                batas_end_time: batas_end_time,
                attendance_id: attendance_id,
                position_id: selectedPositionId,
                _method: "PUT",
            },
            {
                onSuccess: () => {
                    //show alert
                    Swal.fire({
                        title: "Success!",
                        text: "Data updated successfully!",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                },
            }
        );
    };

    const handleJabatanChange = (position_id) => {
        setPosition_id(position_id);
    };

    console.log(props);
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit Absensi
                </h2>
            }
        >
            <Head title="Jabatan" />
            <div className="m-10  text- font-bold flex justify-between xl:text-4xl xl:m-[5rem]">
                <h1>Edit Posisi Jabatan</h1>
            </div>

            <div className="flex justify-center">
                <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form className="space-y-6" onSubmit={updatePosition}>
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                            Edit Absensi in website
                        </h5>
                        <div>
                            <label
                                type="name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Name Absensi
                            </label>
                            <input
                                type="name"
                                name="name"
                                id="name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "required
                                placeholder="Manager"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div>
                            <label
                                type="name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Description
                            </label>
                            <input
                                type="name"
                                name="name"
                                id="name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "required
                                placeholder="Manager"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div>
                            <label
                                type="name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Jam masuk
                            </label>
                            <input
                                type="time"
                                name="name"
                                id="name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "required
                                placeholder="Manager"
                                value={start_time}
                                onChange={(e) => setStart_time(e.target.value)}
                            />
                        </div>
                        <div>
                            <label
                                type="name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Batas Jam Masuk
                            </label>
                            <input
                                type="time"
                                name="name"
                                id="name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "required
                                placeholder="Manager"
                                value={batas_start_time}
                                onChange={(e) =>
                                    setBatas_start_time(e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <label
                                type="name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Jam Keluar
                            </label>
                            <input
                                type="time"
                                name="name"
                                id="name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "required
                                placeholder="Manager"
                                value={end_time}
                                onChange={(e) => setEnd_time(e.target.value)}
                            />
                        </div>
                        <div>
                            <label
                                type="name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Batas Jam Keluar
                            </label>
                            <input
                                type="time"
                                name="name"
                                id="name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "required
                                placeholder="Manager"
                                value={batas_end_time}
                                onChange={(e) =>
                                    setBatas_end_time(e.target.value)
                                }
                            />
                        </div>
                        <Select
                            isMulti
                            name="jabatan[]"
                            options={options}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            onChange={handleJabatanChange}
                            value={position_id}
                        />
                        <button
                            type="submit"
                            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Update Absensi
                        </button>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}


Nah dengan begini kita sudah berhasil membuat sebuah view yang akan menangani masalah view untuk ahalaman edit, maka dengan begini tugas kita tinggal melakukan pengiriman data nya berdasarkan id maka kita bisa menambahakan code berikut di dalam controller.

 

Nah dengan begini kita sudah bisa melakukan akses ke dalam halaman nya dengan cara menabahakan route nya sebagai berikut. 

 
Nah jika sudah begin maka kita harus melakukan pemanggilan data nya berdasarkan id yang di pilih oleh admin maka untuk melakukan hal ini kita perlu menamabahkan link di dalam perulangan sebagai berikut.
 
Nah dengan menggunakan link ini maka kita sudah bisa mengambil id dan data yang di pilih oleh admin, dan di sini kita juga bisa melakukan update, namun di sini belum bisa karna kita belum menambahakan controller sebagai berikut.
 

Nah jika kita sudah berhasil melakukan penambahan seperti ini maka kita hanya kurang satu Langkah lagi untuk bisa melakukan update yakni kita perlu melakukan penamabahan route di dalam file web.php sebagai berikut.

 
Nah di sini kita menggunakan method put untuk melakukan update terhadap data yang sudah ada, maka dengan ini kita sudah bisa melakukan update , Ketika du update maka kita sudah bisa menggunakan sweetalert2.

Delete Absensi
Oke di fitur kali ini kita akan melakukan delete terhadap absensi yang sudah jadul atau ada kesalan dan si admin malas melakukan update terhadap data absensi nya, nah sebagai mana kita ketahui bahawasanya kita sudah memiliki component delete yang mana jika kita sudah memiliki component tersebut kita menjadi lebih mudah dalam melakukan pembuatan fitur delete. 
Langkah pertama yang harus kita lakukan adalah melakukan pemanggilan component tersebut yang di pilih melalui id dari data yang di pilih sebagai berikut.
 
Nah dengan pemanggilan component di atas maka kita tinggal membuat sebuah controller dan kita membuat sebuah route yang akan menangani route yang ini , yang pertama kita buat adalah controller delete sebagai berikut.

 

Nah dengan begini data dan id yang ada di dalam table database sudah terkirim namun di sini kita belum bisa melakukan delete hal ini di sebabkan oleh route yang belum kita atur, maka dengan begini kita harus melakukan penamabahn route sebagai berikut.
 
Nah dengan di tambahkanya route ini kita sudah bisa melakukan delete yang mana data yang di delete ada di dalam dua table , yakni di dalam table absensi dan table yang menghandle permission posisi, dengan begini kita jauh lebih mudah dalam menggunakan component yang mana dengan menggunakan component kita dapat menegerjakan nya jadi lebih mudah dan jadi lebih simple.




Halaman Kehadiran
	
	Oke di halaman yang ini akan kita gumana untuk melakukan show data user yang di pilih melalui posisi, apakah sudah melakukan absen atau belum melakukan absen atau melakukan izin, maka dengan ini kita memerlukan beberapa hal yang harus di persiapkan sebagai berikut :
1.	File yang akan menangani data yang akan di tampilkan 
2.	Controller 
3.	Route view 
Nah setelah kita sudah berhasil melakukan pembutan dan persiapan maka kita akan melakukan pemanggilan view terlebih dahulu yang mana kita akan melakukan penamabahan file view seperti berikut ini.
import React from "react";
import "boxicons";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/inertia-react";
import AttendanceBadges from "@/Pages/Home/Partials/AttendanceBadges";

export default function Index(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Kehadiran
                </h2>
            }
        >
            <Head title={props.title} />

            <div>
                <div className="xl:m-[5rem]">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4 p-10">
                            <div>
                                <h3 className="text-3xl font-bold mb-4 text-black">
                                    Daftar Absensi Dengan Kehadiran
                                </h3>
                                {props.attendances &&
                                    Object.keys(props.attendances).map(
                                        (key, i) => {
                                            let attendance =
                                                props.attendances[key];
                                            return (
                                                <Link
                                                    href={route(
                                                        "presences.show",
                                                        attendance
                                                    )}
                                                    key={i}
                                                    className="card w-full bg-primary text-white mb-4"
                                                >
                                                    <div className="card-body">
                                                        <h2 className="card-title">
                                                            {attendance.title}
                                                        </h2>
                                                        <p>
                                                            {
                                                                attendance.description
                                                            }
                                                        </p>

                                                        <AttendanceBadges
                                                            attendance={
                                                                attendance
                                                            }
                                                        />
                                                    </div>
                                                </Link>
                                            );
                                        }
                                    )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}



Nah setelah kita berhasil melakukanpenammabahan code di atas maka kita sudah bisa menampilkan view yang mana kita masih perlu melakukan penamabahan file di dalam controller sebagai berikut.
<?php

namespace App\Http\Controllers;

use App\Models\Attendance;
use App\Models\Permission;
use App\Models\Presence;
use App\Models\User;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class PresenceController extends Controller
{
    public function index()
    {
        $attendances = Attendance::all()->sortByDesc('data.is_end')->sortByDesc('data.is_start');
        return inertia('Admin/Presences/Index', [
            "title" => "Daftar Absensi Dengan Kehadiran",
            "attendances" => $attendances->toArray()
        ]);
    }

    public function show(Attendance $attendance)
    {
        $attendance->load(['positions', 'presences', 'presences.user']);
        // dd($qrcode);
        return inertia('Admin/Presences/Show', [
            "title" => "Data Detail Kehadiran",
            "attendance" => $attendance,
        ]);
    }

    public function notPresent(Attendance $attendance)
    {
        $byDate = now()->toDateString();
        if (request('display-by-date')) {
            $byDate = request('display-by-date');
        }

        $presences = Presence::query()
            ->where('attendance_id', $attendance->id)
            ->where('presence_date', $byDate)
            ->get(['presence_date', 'user_id']);

        // jika semua karyawan tidak hadir
        if ($presences->isEmpty()) {
            $notPresentData[] =
                [
                    "not_presence_date" => $byDate,
                    "users" => User::query()
                        ->with('position')
                        ->onlyEmployees()
                        ->get()
                        ->toArray()
                ];
        } else {
            $notPresentData = $this->getNotPresentEmployees($presences);
        }

        return inertia('Admin/Presences/NotPresent', [
            "title" => "Data Karyawan Tidak Hadir",
            "attendance" => $attendance,
            "notPresentData" => $notPresentData,
            'displayByDate' => request('display-by-date')
        ]);
    }

    public function permissions(Attendance $attendance)
    {
        $byDate = now()->toDateString();
        if (request('display-by-date')) {
            $byDate = request('display-by-date');
        }

        $permissions = Permission::query()
            ->with(['user', 'user.position'])
            ->where('attendance_id', $attendance->id)
            ->where('permission_date', $byDate)
            ->get();

        return inertia('Admin/Presences/Izin', [
            "title" => "Data Karyawan Izin",
            "attendance" => $attendance,
            "permissions" => $permissions,
            "date" => $byDate
        ]);
    }

    public function presentUser(Request $request, Attendance $attendance)
    {
        $validated = $request->validate([
            'user_id' => 'required|numeric',
            "presence_date" => "required|date"
        ]);

        $user = User::findOrFail($validated['user_id']);

        $presence = Presence::query()
            ->where('attendance_id', $attendance->id)
            ->where('user_id', $user->id)
            ->where('presence_date', $validated['presence_date'])
            ->first();

        // jika data user yang didapatkan dari request user_id, presence_date, sudah absen atau sudah ada ditable presences
        if ($presence || !$user) {
            return back()->with('failed', 'Request tidak diterima.');
        }

        Presence::create([
            "attendance_id" => $attendance->id,
            "user_id" => $user->id,
            "presence_date" => $validated['presence_date'],
            "presence_enter_time" => now()->toTimeString(),
            "presence_out_time" => now()->toTimeString()
        ]);
        return back()
            ->with('success', "Berhasil menyimpan data hadir atas nama \"$user->name\".");
    }

    public function acceptPermission(Request $request, Attendance $attendance)
    {
        $validated = $request->validate([
            'user_id' => 'required|numeric',
            "permission_date" => "required|date"
        ]);

        $user = User::findOrFail($validated['user_id']);

        $permission = Permission::query()
            ->where('attendance_id', $attendance->id)
            ->where('user_id', $user->id)
            ->where('permission_date', $validated['permission_date'])
            ->first();

        $presence = Presence::query()
            ->where('attendance_id', $attendance->id)
            ->where('user_id', $user->id)
            ->where('presence_date', $validated['permission_date'])
            ->first();

        // jika data user yang didapatkan dari request user_id, presence_date, sudah absen atau sudah ada ditable presences
        if ($presence || !$user) {
            return back()->with('failed', 'Request tidak diterima.');
        }

        Presence::create([
            "attendance_id" => $attendance->id,
            "user_id" => $user->id,
            "presence_date" => $validated['permission_date'],
            "presence_enter_time" => now()->toTimeString(),
            "presence_out_time" => now()->toTimeString(),
            'is_permission' => true
        ]);

        $permission->update([
            'is_accepted' => 1
        ]);

        return back()
            ->with('success', "Berhasil menerima data izin karyawan atas nama \"$user->name\".");
    }

    private function getNotPresentEmployees($presences)
    {
        $uniquePresenceDates = $presences->unique("presence_date")->pluck('presence_date');
        $uniquePresenceDatesAndCompactTheUserIds = $uniquePresenceDates->map(function ($date) use ($presences) {
            return [
                "presence_date" => $date,
                "user_ids" => $presences->where('presence_date', $date)->pluck('user_id')->toArray()
            ];
        });
        $notPresentData = [];
        foreach ($uniquePresenceDatesAndCompactTheUserIds as $presence) {
            $notPresentData[] =
                [
                    "not_presence_date" => $presence['presence_date'],
                    "users" => User::query()
                        ->with('position')
                        ->onlyEmployees()
                        ->whereNotIn('id', $presence['user_ids'])
                        ->get()
                        ->toArray()
                ];
        }
        return $notPresentData;
    }
}

Nah jika kita sudah berhasil melakukan penamabahan code seperti di atas maka kita perlu melakukan sebuah routing di dalam file web.php sebagai berikut.

 
Nah di sini kita menggunakan middleware secara grup yang mana dengan menggunakan ini code yang sudah kita tulis akan menjadi lebih rapi dan mudah di baca, seperti yang di lihat kita melakukan pemanggilan terhadap controller yang class nya adalah index yang mana di dalam controller tersebut kita melakukan call terhadap file yang Bernama index =, berikut adalah code controller nya.
 
Bisa di lihat di  sini kita akan melakukan pemanggilan file yang Bernama index dan di sini kita merender dan memberikan jalur nya dengan menggunakan routing di dalam file web.php maka secara otomatis semua function yang kita panggil di dalam halaman lihat absensi maka akan terpenuhi, dan berikut adalah hasil dari code di atas.

 
Nah di sini kita sudah memiliki 1 absensi yang mana dengan kriteria tutup hal ini di sebabkan oleh waktu yang sudah melewati batas waktu yang sudah di tentukan oleh admin. 

	Selanjutnya kita harus membuat dulu fitur absen untuk user yang mana kita baru bisa melanjutkan fungsi dari lihat kehadiran oleh 	admin setelah kita membuat halaman dan fitur untuk user, berikut adalah data yang perlu di siapkan :
1.	File untuk menangani fungsi dan tampilan user 
2.	Controller yang akan di gunakan untuk mengirim data 
3.	Route 
Jika semua perispan yang sudah di tentukan sudah terpenuhi maka kita akan bisa melanjutkan pembutan fitur absensi oleh user, yang mana di sini ada beberapa fitur yang akan bisa di pergunakan oleh user, berikut adalah fitur dari user :
1.	Melakukan absen hadir 
2.	Melakukan absen pulang
3.	Melakukan izin 
4.	Melakukan izin dengan keterangan 
5.	Logout 
Oke di atas adalah beberapa fitu yang akan di pergunakan untuk user maka Langkah pertama yang akan kita membuat halam view dengan code berikut :
import HomeLayout from "@/Layouts/HomeLayout";
import { Link } from "@inertiajs/inertia-react";
import React from "react";
import AttendanceBadges from "./Partials/AttendanceBadges";

function Index(props) {

    let attendances = props.attendances;
    let attendancesArray = Object.values(attendances);

    console.log(typeof props.attendances)
    return (
        <HomeLayout>
            <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4">
                <div>
                    <h3 className="text-3xl font-bold mb-4">
                        Daftar Absensi Hari Ini
                    </h3>

                    {attendancesArray.map((attendance, i) => (
                        <Link
                            href={route("home.show", attendance)}
                            key={i}
                            className="card w-full bg-base-100 shadow-xl mb-4 border border-slate-500"
                        >
                            <div className="card-body">
                                <h2 className="card-title">
                                    {attendance.title}
                                </h2>
                                <p>{attendance.description}</p>

                                <AttendanceBadges attendance={attendance} />
                            </div>
                        </Link>
                    ))}

                    {/* {props.attendances.map((attendance, i) => (
                        <Link
                            href={route("home.show", attendance)}
                            key={i}
                            className="card w-full bg-base-100 shadow-xl mb-4 border border-slate-500"
                        >
                            <div className="card-body">
                                <h2 className="card-title">
                                    {attendance.title}
                                </h2>
                                <p>{attendance.description}</p>

                                <AttendanceBadges attendance={attendance} />
                            </div>
                        </Link>
                    ))} */}


                    {/* {Array.isArray(props.attendances) && props.attendances.length ?
                                        props.attendances.map((attendance, i) => (
                                            <Link
                                                href={route("home.show", attendance)}
                                                key={i}
                                                className="card w-full bg-base-100 shadow-xl mb-4 border border-slate-500"
                                            >
                                                <div className="card-body">
                                                    <h2 className="card-title">
                                                        {attendance.title}
                                                    </h2>
                                                    <p>{attendance.description}</p>

                                                    <AttendanceBadges attendance={attendance} />
                                                </div>
                                            </Link>
                                        )) : <div>Data tidak tersedia</div>
                    } */}
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <tbody>
                                <tr>
                                    <th>Nama</th>
                                    <td>{props.auth.user.name}</td>
                                </tr>
                                <tr>
                                    <th>Email</th>
                                    <td>{props.auth.user.email}</td>
                                </tr>
                                <tr>
                                    <th>No. Telp</th>
                                    <td>{props.auth.user.phone}</td>
                                </tr>
                                <tr>
                                    <th>Bergabung Pada</th>
                                    <td>{props.auth.user.created_at}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
}

export default Index;


Nah di atas kita melihat bahwasanya kita melakukan import yang mana kita juga harus membuat pages inport nya sebagai beriikut 
import React from "react";

export default function AttendanceBadges({ attendance }) {
    return (
        <>
            {attendance.data.is_holiday_today && (
                <span className="badge badge-success">Hari Libur</span>
            )}

            {attendance.data.is_start && (
                <span className="badge badge-primary">Jam Masuk</span>
            )}
            {attendance.data.is_end && (
                <span className="badge badge-warning">Jam Pulang</span>
            )}
            {!attendance.data.is_end && !attendance.data.is_start && (
                <span className="badge badge-error">Tutup</span>
            )}
        </>
    );
}


Maka dengan begini kita sudah bisa melihathasil dari tampilan yang akan di lihat oleh user namun kita harus melakukan satu lagi yak ni membuat sebuah controller yang akan menangani user yang akan melakukan absensi  maka kita perlu menambahakan code dalam controller sebagai berikut 
<?php

namespace App\Http\Controllers;

use App\Models\Attendance;
use App\Models\Holiday;
use App\Models\Permission;
use App\Models\Presence;
use Carbon\CarbonPeriod;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $attendances = Attendance::query()
            // ->with('positions')
            ->forCurrentUser(auth()->user()->position_id)
            ->get()
            ->sortByDesc('data.is_end')
            ->sortByDesc('data.is_start');

            return inertia('Home/Index', [
            "title" => "Beranda",
            "attendances" => $attendances
        ]);
    }

    public function show(Attendance $attendance)
    {
        $presences = Presence::query()
            ->where('attendance_id', $attendance->id)
            ->where('user_id', auth()->user()->id)
            ->get();

        $isHasEnterToday = $presences
            ->where('presence_date', now()->toDateString())
            ->isNotEmpty();

        $isTherePermission = Permission::query()
            ->where('permission_date', now()->toDateString())
            ->where('attendance_id', $attendance->id)
            ->where('user_id', auth()->user()->id)
            ->first();

        $data = [
            'is_has_enter_today' => $isHasEnterToday, // sudah absen masuk
            'is_not_out_yet' => $presences->where('presence_out_time', null)->isNotEmpty(), // belum absen pulang
            'is_there_permission' => (bool) $isTherePermission,
            'is_permission_accepted' => $isTherePermission?->is_accepted ?? false
        ];

        $holiday = $attendance->data->is_holiday_today ? Holiday::query()
            ->where('holiday_date', now()->toDateString())
            ->first() : false;

        $history = Presence::query()
            ->where('user_id', auth()->user()->id)
            ->where('attendance_id', $attendance->id)
            ->get();

        // untuku melihat karyawan yang tidak hadir
        $priodDate = CarbonPeriod::create($attendance->created_at->toDateString(), now()->toDateString())
            ->toArray();

        foreach ($priodDate as $i => $date) { // get only stringdate
            $priodDate[$i] = $date->toDateString();
        }

        $priodDate = array_slice(array_reverse($priodDate), 0, 30);

        $tableHistory = '';

        $no = 1;
        foreach ($priodDate as $date) {
            $histo =
                $history->where(
                    'presence_date',
                    $date
                )->first();

            if (!$histo) {
                $tableHistory .= '<tr>';
                $tableHistory .= '<td>' . $no++ . '</td>';
                $tableHistory .= '<td>' . $date . '</td>';
                $tableHistory .= '<td colspan="3">' . ($date == now()->toDateString() ? '<div className="badge text-bg-info">Belum Hadir</div>'  :    '<div className="badge text-bg-danger">Tidak Hadir</div>') . '</td></tr>';
            } else {
                $tableHistory .= '<tr>';
                $tableHistory .= '<td>' . $no++ . '</td>';
                $tableHistory .= '<td>' . $histo->presence_date . '</td>';
                $tableHistory .= '<td>' . $histo->presence_enter_time . '</td>';
                $tableHistory .= '<td>' . ($histo->presence_out_time ? $histo->presence_out_time : '<span className="badge text-bg-danger">Belum Absensi Pulang</span>') . '</td>';
                $tableHistory .= '<td>' . ($histo->is_permission ?
                    '<div className="badge text-bg-warning">Izin</div>' :
                    '<div className="badge text-bg-success">Hadir</div>') . '</td>';
                $tableHistory .= '</tr>';
            }
        }

        return inertia('Home/Show', [
            "title" => "Informasi Absensi Kehadiran",
            "attendance" => $attendance,
            "data" => $data,
            "holiday" => $holiday,
            'history' => $history,
            'priodDate' => $priodDate,
            'tableHistory' => $tableHistory
        ]);
    }

    public function permission(Attendance $attendance)
    {
        return view('home.permission', [
            "title" => "Form Permintaan Izin",
            "attendance" => $attendance
        ]);
    }

    public function requestPermission(Request $request, Attendance $attendance)
    {
        $validated = $this->validate($request, [
            'title' => 'required',
            'description' => 'required'
        ]);
        Permission::create([
            "user_id" => auth()->user()->id,
            "attendance_id" => $attendance->id,
            "title" => $validated['title'],
            "description" => $validated['description'],
            "permission_date" => now()->toDateString()
        ]);

        return redirect()->route('home.show', $attendance->id)->with('success', 'Permintaan izin sedang diproses. Silahkan tunggu...');
    }

    public function sendEnterPresence(Attendance $attendance)
    {
        if ($attendance->data->is_start && !$attendance->data->is_using_qrcode) { // sama (harus) dengan view
            Presence::create([
                "user_id" => auth()->user()->id,
                "attendance_id" => $attendance->id,
                "presence_date" => now()->toDateString(),
                "presence_enter_time" => now()->toTimeString(),
                "presence_out_time" => null
            ]);

            return back()->with('message', ['success' => true, 'message' => "Kehadiran atas nama '" . auth()->user()->name . "' berhasil dikirim."]);
        }
    }

    public function sendOutPresence(Attendance $attendance)
    {
        // jika absensi sudah jam pulang (is_end) dan tidak menggunakan qrcode (kebalikan)
        if (!$attendance->data->is_end && $attendance->data->is_using_qrcode) // sama (harus) dengan view
            return false;

        $presence = Presence::query()
            ->where('user_id', auth()->user()->id)
            ->where('attendance_id', $attendance->id)
            ->where('presence_date', now()->toDateString())
            ->where('presence_out_time', null)
            ->first();

        if (!$presence) // hanya untuk sekedar keamanan (kemungkinan)
            return back()->with('message', ['success' => false, 'message' => "Terjadi masalah pada saat melakukan absensi."]);

        $presence->update(['presence_out_time' => now()->toTimeString()]);

        return back()->with('message', ['success' => true, 'message' => "Atas nama '" . auth()->user()->name . "' berhasil melakukan absensi pulang."]);
    }
}

Nah jika kita sudah melakukan penambahan code di atas di dalam controller maka kita harus membuatkan route nya sebagai berikut.
 
Nah di sini kita akan menambahakan code ini di dalam controller maka kita sudah bisa melakukan akses terhadap dashboard user yang mana tampilan nya seperti berikut.
 
Nah kita sudah berhasil melakukan show data yang ada di dalam database maka kita akan  membuat sebuah view lagi untuk menangani user yang akan melakukan absensi maka kita akan membuat sebuah  view lagi, maka kita akan menambahakan baris  code sebagai berikut.
import HomeLayout from "@/Layouts/HomeLayout";
import { Link } from "@inertiajs/inertia-react";
import React from "react";
import Alert from "./Partials/Alert";
import AttendanceBadges from "./Partials/AttendanceBadges";
import PresenceForm from "./Partials/PresenceForm";

export default function Show(props) {
    const { attendance } = props;
    return (
        <HomeLayout>
            <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4">
                <div>
                    <div className="mb-2">
                        <AttendanceBadges attendance={props.attendance} />
                    </div>
                    {/* @include('partials.alerts') */}

                    <h1 className="text-2xl my-2">{attendance.title}</h1>
                    <p className="mb-5">{attendance.description}</p>

                    <div className="mb-4">
                        <span className="badge badge-info border shadow-sm">
                            Masuk : {attendance.data.start_time.substring(0, 5)}{" "}
                            - {attendance.data.batas_start_time.substring(0, 5)}
                        </span>
                        <span className="badge badge-info border shadow-sm">
                            Pulang : {attendance.data.end_time.substring(0, 5)}{" "}
                            - {attendance.data.batas_end_time.substring(0, 5)}
                        </span>
                    </div>

                    {!attendance.data.is_using_qrcode ? (
                        <>
                            <PresenceForm
                                attendance={attendance}
                                holiday={props.holiday}
                                data={props.data}
                            />
                        </>
                    ) : (
                        // <livewire:presence-form :attendance="attendance" :data="$data" :holiday="$holiday">
                        // @include('home.partials.qrcode-presence')
                        <></>
                    )}
                </div>
                <div>
                    <h5 className="mb-3">Histori 30 Hari Terakhir</h5>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Tanggal</th>
                                    <th scope="col">Jam Masuk</th>
                                    <th scope="col">Jam Pulang</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody
                                dangerouslySetInnerHTML={{
                                    __html: props.tableHistory,
                                }}
                            >
                                {/* {props.priodDate.map((date, i) => (
                                    <tr key={i} dangerouslySetInnerHTML={{__html: }}>
                                        
                                    </tr>
                                ))} */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
}


Nah bisa kita lihat lagi bahwasanya kita melakukan import, maka kita harus membuat view lagi yang akan menangani component tersebut, maka kita akan melakukan penambahan code sebagai berikut.
import { Inertia } from "@inertiajs/inertia";
import { Link, useForm } from "@inertiajs/inertia-react";
import React, { useState } from "react";

export default function PresenceForm({ attendance, holiday, data }) {
    const {
        data: values,
        setData: setValues,
        post,
        processing,
        errors,
    } = useForm({
        title: "",
        description: "",
    });

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        post(route("home.minta-izin", attendance), values);
    }

    return (
        <>
            <div>
                {holiday ? (
                    <div className="alert alert-success mb-5">
                        <small className="font-bold">
                            Hari ini adalah hari libur.
                        </small>
                    </div>
                ) : (
                    <>
                        {/* {{-- jika tidak menggunakan qrcode (button) dan karyawan saat ini tidak menekan tombol izin --}} */}
                        {!attendance.data.is_using_qrcode &&
                        !data["is_there_permission"] ? (
                            <>
                                {/* {{-- jika belum absen dan absen masuk sudah dimulai --}} */}
                                {attendance.data.is_start &&
                                    !data["is_has_enter_today"] && (
                                        <>
                                            {/*wire:click="sendEnterPresence"
        wire:loading.attr="disabled" wire:target="sendEnterPresence"*/}
                                            <Link
                                                href={route(
                                                    "home.sendEnterPresence",
                                                    { attendance: attendance }
                                                )}
                                                method="POST"
                                                className="btn btn-primary px-3 py-2 btn-sm font-bold block w-full mb-2"
                                            >
                                                Masuk
                                            </Link>
                                            {/* <a
                                            href="{{ route('home.permission', attendance.id) }}"
                                            className="btn btn-info px-3 py-2 btn-sm font-bold block w-full"
                                        >
                                            Izin
                                        </a> */}
                                            {/* The button to open modal */}
                                            <label
                                                htmlFor="izin-modal"
                                                className="btn w-full"
                                            >
                                                Izin
                                            </label>

                                            {/* Put this part before </body> tag */}
                                            <input
                                                type="checkbox"
                                                id="izin-modal"
                                                className="modal-toggle"
                                            />
                                            <div className="modal">
                                                <div className="modal-box">
                                                    <form
                                                        onSubmit={handleSubmit}
                                                    >
                                                        <div>
                                                            <input
                                                                type="text"
                                                                placeholder="Alasan"
                                                                value={
                                                                    values.title
                                                                }
                                                                id="title"
                                                                onChange={
                                                                    handleChange
                                                                }
                                                                className="input w-full mb-4 border border-success"
                                                            />
                                                            {errors.title && (
                                                                <small className="text-red-600">
                                                                    {
                                                                        errors.title
                                                                    }
                                                                </small>
                                                            )}
                                                            <textarea
                                                                className="textarea w-full border border-success"
                                                                id="description"
                                                                value={
                                                                    values.description
                                                                }
                                                                onChange={
                                                                    handleChange
                                                                }
                                                                placeholder="Alasan detail..."
                                                            ></textarea>
                                                            {errors.description && (
                                                                <small className="text-red-600">
                                                                    {
                                                                        errors.description
                                                                    }
                                                                </small>
                                                            )}
                                                        </div>
                                                        <div className="modal-action">
                                                            <button
                                                                disabled={
                                                                    processing
                                                                }
                                                                type="submit"
                                                                className="btn btn-primary"
                                                            >
                                                                Minta Izin
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </>
                                    )}

                                {data["is_has_enter_today"] && (
                                    <div className="alert alert-success mb-5">
                                        <small className="block font-bold">
                                            Anda sudah berhasil mengirim absensi
                                            masuk.
                                        </small>
                                    </div>
                                )}

                                {/* // {{-- jika absen pulang sudah dimulai, dan karyawan sudah absen masuk dan belum absen pulang --}} */}
                                {attendance.data.is_end &&
                                    data["is_has_enter_today"] &&
                                    data["is_not_out_yet"] && (
                                        <>
                                            {/*wire:click="sendOutPresence"
wire:loading.attr="disabled" wire:target="sendOutPresence"*/}
                                            <Link
                                                href={route(
                                                    "home.sendOutPresence",
                                                    { attendance: attendance }
                                                )}
                                                method="POST"
                                                className="btn btn-primary px-3 py-2 btn-sm font-bold block w-full"
                                            >
                                                Pulang
                                            </Link>
                                        </>
                                    )}

                                {/* // {{-- sudah absen masuk dan absen pulang --}} */}
                                {data["is_has_enter_today"] &&
                                    !data["is_not_out_yet"] && (
                                        <div className="alert alert-success mb-5">
                                            <small className="block font-bold">
                                                Anda sudah melakukan absen masuk
                                                dan absen pulang.
                                            </small>
                                        </div>
                                    )}

                                {/* // {{-- jika sudah absen masuk dan belum saatnya absen pulang --}} */}
                                {data["is_has_enter_today"] &&
                                    !attendance.data.is_end && (
                                        <div className="alert alert-danger">
                                            <small className="font-bold">
                                                Belum saatnya melakukan absensi
                                                pulang.
                                            </small>
                                        </div>
                                    )}
                            </>
                        ) : (
                            <>
                                {
                                    /* prettier-ignore */ (
                                    data["is_there_permission"] &&
                                        !data["is_permission_accepted"]
                                ) && (
                                    <div className="alert alert-info">
                                        <small className="font-bold">
                                            Permintaan izin sedang diproses
                                            (atau masih belum di terima).
                                        </small>
                                    </div>
                                )
                                }
                                {
                                    /* prettier-ignore */ (
                                    data["is_there_permission"] &&
                                        data["is_permission_accepted"]
                                ) ? (
                                    <div className="alert alert-success mb-5">
                                        <small className="font-bold">
                                            Permintaan izin sudah diterima.
                                        </small>
                                    </div>
                                ) : (
                                    <></>
                                )
                                }
                            </>
                        )}
                    </>
                )}
            </div>
        </>
    );
}


Nah jika sudah seperti ini maka kita akan mendapatkan sebuah view seperti ini

 

Nah di sini  kita sudah bisa melakukan absensi yang mana absensi nya akan bergantung kepada admin, maka secara otomatis jika admin tidak melakukan penambahan absensi maka user tidak akan mendapatkan akses absensi.




	

Halaman Show Absen User 

	Nah di sini kita akan melakukan show data user yang melakukan absen dan user yang melakukan izin dan juga user yang tidak melakukan absen, maka ada beberapa hal yang harus kita siapkan terlebih dahulu yaitu sebagai berikut :
1.	Halaman show data absensi find id absen 
2.	Halaman show user tidak abses
3.	Halaman show user absen 
4.	Halaman show user izin 
Nah hal ini yang harus kita seiap kan, di awal kita sudah berhasil menampilkan absensi nah sekarang tinggal kita find id absensi nya dan akan kita buatkan table yang akan menangani data user yang sudah melakukan absensi dan tidak absensi serta user yang izin, Langkah pertama kita buatkan halaman user yang melakukan absen dan dan nanti di dalam nya kita akan melakukan penambahan halaman show data user yang tidak absen dan user yang meminta izin, berikut adalah code untuk melakukan pembuatan tampilan user yang melakukan absen, 
import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/inertia-react";
import AttendanceBadges from "@/Pages/Home/Partials/AttendanceBadges";

export default function Show(props) {
    const { attendance } = props;
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Kehadiran
                </h2>
            }
        >
            <Head title={props.title} />

            <div>
                <div className="xl:m-[5rem]">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-5">
                        <div className="card mb-3 p-5 bg-white">
                            <div className="card-body">
                                <div className="mb-3 mb-md-0">
                                    <h5 className="card-title">
                                        {attendance.title}
                                    </h5>
                                    <h6 className="card-subtitle mb-2 text-gray-800">
                                        {attendance.description}
                                    </h6>
                                    <div className="d-flex align-items-center gap-2">
                                        <AttendanceBadges
                                            attendance={attendance}
                                        />
                                        <a
                                            href={route(
                                                "presences.permissions",
                                                attendance.id
                                            )}
                                            className="badge text-bg-info"
                                        >
                                            Karyawaan Izin
                                        </a>
                                        <a
                                            href={route(
                                                "presences.not-present",
                                                attendance.id
                                            )}
                                            className="badge text-bg-danger"
                                        >
                                            Belum Absen
                                        </a>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        <div>
                                            <div className="mb-2">
                                                <small className="font-bold text-gray-800 block">
                                                    Range Jam Masuk
                                                </small>
                                                <span>
                                                    {attendance.start_time} -{" "}
                                                    {
                                                        attendance.batas_start_time
                                                    }
                                                </span>
                                            </div>
                                            <div className="mb-2">
                                                <small className="font-bold text-gray-800 block">
                                                    Range Jam Pulang
                                                </small>
                                                <span>
                                                    {attendance.end_time} -{" "}
                                                    {attendance.batas_end_time}
                                                </span>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="mb-2">
                                                <small className="font-bold text-gray-800 block">
                                                    Jabatan / Posisi
                                                </small>
                                                <div>
                                                    {attendance.positions.map(
                                                        (position, i) => (
                                                            <span
                                                                key={i}
                                                                className="badge badge-success inline-block mr-1"
                                                            >
                                                                {position.name}
                                                            </span>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 whitespace-nowrap">
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 border"
                                                >
                                                    No
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3"
                                                >
                                                    User
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3"
                                                >
                                                    Tanggal Absensi
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3"
                                                >
                                                    Waktu Absen Masuk
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3"
                                                >
                                                    Waktu Absen Keluar
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3"
                                                >
                                                    Status
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3"
                                                >
                                                    Aksi
                                                </th>
                                            </tr>
                                        </thead>
                                        {attendance.presences
                                            ? attendance.presences.map(
                                                  (data, i) => {
                                                      return (
                                                          <tbody key={i}>
                                                              <tr
                                                                  className="bg-white dark:bg-gray-800 whitespace-nowrap"
                                                                  key={i}
                                                              >
                                                                  <td className="px-6 py-4 border">
                                                                      {i + 1}
                                                                  </td>
                                                                  <td className="px-6 py-4 border-b">
                                                                      {
                                                                          data
                                                                              .user
                                                                              .name
                                                                      }
                                                                  </td>
                                                                  <td className="px-6 py-4 border-b">
                                                                      {
                                                                          data.presence_date
                                                                      }
                                                                  </td>
                                                                  <td className="px-6 py-4 border-b">
                                                                      {
                                                                          data.presence_enter_time
                                                                      }
                                                                  </td>
                                                                  <td className="px-6 py-4 border-b">
                                                                      {data.presence_out_time ? (
                                                                          data.presence_out_time
                                                                      ) : (
                                                                          <span class="badge text-bg-danger">
                                                                              Belum
                                                                              Absensi
                                                                              Pulang
                                                                          </span>
                                                                      )}
                                                                  </td>
                                                                  <td className="px-6 py-4 border-b">
                                                                      {data.is_permission ? (
                                                                          <span class="badge text-bg-warning">
                                                                              Izin
                                                                          </span>
                                                                      ) : (
                                                                          <span class="badge text-bg-success">
                                                                              Hadir
                                                                          </span>
                                                                      )}
                                                                  </td>
                                                                  <td className="px-6 py-4 border-b">
                                                                      asd
                                                                  </td>
                                                              </tr>
                                                          </tbody>
                                                      );
                                                  }
                                              )
                                            : ""}
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}


Nah berikut adalah code tampilan yang akan menangani user yang melakukan absen, jika kita sudah berhasil melakukan penampilan data user yang sudah melakukan absen dan di dalam nya kita sudah membuta button yang akan menjadi link untuk menuju ke pages user yang tidak melakukan absen dan user yang melakukan izin, maka kita juga harus menambahakan controller untuk menghandle data yang sudah di tampilkan di halam depan tadi maka kita harus menammbahakan controller berikut ini.
 
Nah di sini kita sudah berhasil mengirim data yang ada di dalam database 
