/*
    Versi 2

    Upgrade:
    a. Tambah kolom path gambar pada tabel user
    b. Tambah GetJmlAkun
    c. Tambah GetPicture
    d. Penyesuaian Halaman Pendaftaran   ==> EntryUser()
    e. Penyesuaian Halaman Utama  ==> HalamanUtama(), dan hitungUmur dan GetPicture
    f. Penyesuaian Halaman Terapi  ==> penambahan fitur pilihan (penyesuaian dengan pilihan)
    g. Penyesuaian Halaman evaluasi    ==> tesEvaluasi()
    h. Penyesuaian Halaman Display Evaluasi   ==> DisplayEvaluasi()
    i. Penyesuaian Halaman Pengaturan
    j. Penyesuaian Halaman Login
    
*/

      var db;
	    var shortName = 'Cakra';
	    var version = '1.0';
	    var displayName = 'CakraDB';
	    var maxSize = 65535;
	    var flagevaluasi = 0;
      var linkPT;
      var areaChartData, flagChar=0;
      var pathimage, indexbulan;
      var rowTotal, rowWaktu, panjangdat, arrMonth = [], arrYear = [], arrTotal = [], arrLabel = [], arrKomunikasi = [], arrSosial = [], arrKognitif = [], arrKebiasaan = [], arrDataBulan = [[]];

//============================================= notification error =======================================================

	    // this is called when an error happens in a transaction
	      function errorHandler(transaction, error) {
	         alert('Error: ' + error.message + ' code: ' + error.code);
	       
	      }

	      // this is called when a successful transaction happens
	      function successCallBack() {
	         alert("DEBUGGING: success");
	       
	      }
	       
	      function nullHandler(){};



//================================================ buat database ==================================================
	    function RunBody () {
	    	
	    	alert("DEBUGGING: we are in the onBodyLoad() function");

	    	if (!window.openDatabase) {
	           alert('Databases are not supported in this browser.');
	           return;
         	}


         	db = openDatabase(shortName, version, displayName,maxSize);

         	db.transaction(function(tx){
				

				tx.executeSql('create table if not exists AKUN( ID integer primary key autoincrement, NAMA varchar(30) not null, TTL datetime not null, JK char(1) not null, LINKFOTO varchar(40))', [],nullHandler,errorHandler);

	            tx.executeSql('CREATE TABLE IF NOT EXISTS CATATAN(ID_CATATAN integer, tanggal DATETIME not null, catatanku text, countcatatan integer, FOREIGN KEY (ID_CATATAN) REFERENCES AKUN (ID))', [],nullHandler,errorHandler);

	            tx.executeSql('CREATE TABLE IF NOT EXISTS LAPORAN(ID_LAPORAN INTEGER PRIMARY KEY autoincrement, waktu date not null, komunikasi integer, sosial integer, kognitif integer, kebiasaan integer, total integer, countlaporan integer)', [],nullHandler,errorHandler);

	            tx.executeSql('create table if not exists NILAI(ID_NILAI INTEGER PRIMARY KEY autoincrement, ID_AKUN REFERENCES AKUN(ID), BENAR integer not null, SALAH integer not null, DATA varchar(30) not null,TANGGAL date, COUNTNILAI integer)', [],nullHandler,errorHandler);
	            
	            tx.executeSql('create table if not exists PERTANYAAN (ID_PERTANYAAN integer primary key autoincrement, KATEGORI_TANYA varchar(50) not null, SOAL varchar(100) not null)', [],nullHandler,errorHandler);

	            tx.executeSql('create table if not exists TERAPI(ID_TERAPI integer primary key autoincrement, LEVEL integer, PILIHAN varchar(15), KATEGORI_TANYATERAPI varchar(50), ASPEK1 varchar(100), ASPEK2 varchar(100) )', [],nullHandler,errorHandler);

	            tx.executeSql('create table if not exists REWARD( ID_REW INTEGER PRIMARY KEY autoincrement, VIDEO_BENAR varchar(150), VIDEO_SALAH varchar(150), SUARA_BENAR varchar(150),SUARA_SALAH varchar(150))', [],nullHandler,errorHandler);

	            
	            /* Masih Ragu bisa atau gak
         		tx.executeSql('create table if not exists AKUN( ID integer primary key autoincrement, NAMA varchar(30) not null, TTL datetime not null, JK char(1) not null)', [],nullHandler,errorHandler);

         		tx.executeSql('CREATE TABLE IF NOT EXISTS CATATAN(ID_CATATAN integer primary key autoincrement, tanggal DATETIME not null, catatanku text, countcatatan integer autoincrement)', [],nullHandler,errorHandler);

         		tx.executeSql('CREATE TABLE IF NOT EXISTS LAPORAN(ID_LAPORAN integer primary key autoincrement, waktu integer not null, komunikasi integer, sosial integer, kognitif integer, kebiasaan integer, total integer, countlaporan integer autoincrement)', [],nullHandler,errorHandler);

         		tx.executeSql('create table if not exists NILAI(ID_NILAI integer primary key autoincrement, BENAR integer not null, SALAH integer not null, DATA varchar(30) not null,TANGGAL date, COUNTNILAI integer)', [],nullHandler,errorHandler);
         		
         		tx.executeSql('create table if not exists PERTANYAAN (ID_PERTANYAAN integer primary key autoincrement, KATEGORI_TANYA varchar(50) not null, SOAL varchar(100) not null)', [],nullHandler,errorHandler);

         		tx.executeSql('create table if not exists TERAPI(ID_TERAPI integer primary key autoincrement, LEVEL integer, KATEGORI_TANYATERAPI varchar(50), PILIHAN varchar(15), ASPEK1 varchar(100), ASPEK2 varchar(100) )', [],nullHandler,errorHandler);

         		tx.executeSql('create table if not exists REWARD( ID_REW integer primary key autoincrement, VIDEO_BENAR varchar(150), VIDEO_SALAH varchar(150), SUARA_BENAR varchar(150),SUARA_SALAH varchar(150)', [],nullHandler,errorHandler);*/

         	});

			filterquery();
	    }


//=============================================== filter query ======================================================

function filterquery(){

          db.transaction(function(transaction) {
             transaction.executeSql('SELECT * FROM TERAPI;', [],
               function(transaction, result) {
                //alert(result.rows.length);
               
                if (result.rows.length == 0) {
                  EntryTerapi();
                }
               },errorHandler);
           },errorHandler,nullHandler);

        }



//================================================= masukkan user baru =================================================

		function EntryUser(){

			alert("DEBUGGING: we are in the EntryUser() function");

	    	if (!window.openDatabase) {
	           alert('Databases are not supported in this browser.');
	           return;
         	}

         	/*type date tidak bisa berjalan di semua android, maka pakai cara berikut (pisah antara tanggal, bulan dan tahun)

         	var tanggal = document.getElementById('tanggal').value;
	        var bul = document.getElementById('bul').value;
	        var tah = document.getElementById('tah').value;

	        var getYear = tanggal + ' - ' + bul + ' - '+ tah;
			
    			db.transaction(function(transaction) {

    			   transaction.executeSql('INSERT INTO AKUN(NAMA, TTL, JK) VALUES (?,?,?)',[$('#name').val(), getYear, $('#jk').val()],nullHandler,errorHandler);
         	
         	});


	        */

          //beri nama field pengisian dengan id name, ttl dan jk

          var tanggal = document.getElementById('tanggal').value;
          var bul = document.getElementById('bul').value;
          var tah = document.getElementById('tah').value;

          var getBirth = tanggal + ' - ' + bul + ' - '+ tah;
          var link = pathimage;
          alert("Aku adalah link " + link);
          sessionStorage.setItem('BirthDate', getBirth);


         	db.transaction(function(transaction){
         		transaction.executeSql('INSERT INTO AKUN(NAMA, TTL, JK, LINKFOTO) VALUES (?,?,?,?)',[$('#name').val(), getBirth, $('#jk').val(),link ],nullHandler,errorHandler);
           // window.location.href = "index.html";
         	});
		}


//=============================================== login ================================================================

    /* Beri nama id inputnya = username
    */

    function login(){

      if (!window.openDatabase) {
        alert('Databases are not supported in this browser.');
        return;
      }

      //var value = document.getElementById('username').innerText;
      var val = document.getElementById('username').value;

      db.transaction(function(transaction) {
         transaction.executeSql('SELECT NAMA FROM AKUN WHERE NAMA=?;', [val],
           function(transaction, result) {
            var jml = result.rows.length;
            alert(jml);
            if (jml == 1) {
              window.location.href = "utama.html";
            }
            else{
              alert("Nama tidak sesuai, silahkan isi nama yang sesuai");
            }
           },errorHandler);
       },errorHandler,nullHandler);



    }

//=========================================== Hitung Umur ========================================================

    //dokumentasi = pada form tanggal, beri id = 'tanggal'
    //silahkan pilih alert atau innerHTML(id = age) pada baris paling akhir

    function hitungumur(){

        var jml, thnlahir;
        db.transaction(function(transaction) {
         transaction.executeSql('SELECT TTL FROM AKUN;', [],
           function(transaction, result) {
            jml = result.rows.item(0);
            thnlahir = jml.TTL;
            var panjang = thnlahir.length;
            
            var monthBirth = parseInt(thnlahir[panjang-9] + thnlahir[panjang-8]);
            var yearBirth = parseInt(thnlahir[panjang-4] + thnlahir[panjang-3] + thnlahir[panjang-2] + thnlahir[panjang-1]);

            var now = new Date();
            var monthNow = now.getMonth()+1;
            var yearNow = now.getFullYear();

            
            if (monthBirth >= monthNow) {
              age = yearNow - yearBirth -1;    
            }
            else{
              age = yearNow - yearBirth;
            }
            

            alert(age + ' Tahun');
            document.getElementById('umurText').innerHTML = age + ' Tahun';



           },errorHandler);
       },errorHandler,nullHandler);

/*
        var data = sessionStorage.getItem('BirthDate');
        var yearBirth = parseInt(data[jml-3] + data[jml-2] + data[jml-1] + data[jml]);
        //alert(yearBirth);

        var now = new Date();
        var monthNow = now.getMonth();
        var yearNow = now.getFullYear();

        age = yearNow - yearBirth;

        alert(age + ' Tahun');
        document.getElementById('umurText').innerHTML = age + ' Tahun';*/
      }

//=============================================== Get Nama User ======================================================

  //beri nama tempat nama dimunculkan dengan id hasil

  function getNama(){

       if (!window.openDatabase) {
        alert('Databases are not supported in this browser.');
        return;
      }

      RunBody();
      $('#hasil').html('');
       
       db.transaction(function(transaction) {

         transaction.executeSql('SELECT NAMA FROM AKUN ;',  [],
           function(transaction, result) {

            if (result != null && result.rows != null) {
                var row = result.rows.item(0);
                $('#hasil').append(row.NAMA );
            }
           },errorHandler);
       },errorHandler,nullHandler);
  }




//=================================================== Get Jumlah Akun ==========================================================
  //Untuk mengambil jumlah akun, kegunaan saat ada di halaman pengaturan dan lock daftar jika sudah pernah mendaftar (akun > 0).

var row;
  function GetJmlAkun(){
      if (!window.openDatabase) {
        alert('Databases are not supported in this browser.');
        return;
      }

       
      RunBody();
      $('#jumlahakun').html('');

      db.transaction(function(transaction) {

         transaction.executeSql('SELECT NAMA FROM AKUN ;',  [],
           function(transaction, result) {

            if (result != null && result.rows != null) {
                row = result.rows.length;
                $('#jumlahakun').append(row +' Anak');
            }
           },errorHandler);
       },errorHandler,nullHandler);

      
      
  }


//=================================================== Get Picture =============================================================

function GetPicture(){

      
       if (!window.openDatabase) {
        alert('Databases are not supported in this browser.');
        return;
      }

      RunBody();
      //$("#gambar").css("");
       
       db.transaction(function(transaction) {
        alert('masuk picture lebih dalam');
         transaction.executeSql('SELECT LINKFOTO FROM AKUN ;',  [],
           function(transaction, result) {

            if (result != null && result.rows != null) {
                var row = result.rows.item(0);
                alert('Aku adalah link di dalam '+row.LINKFOTO);
                $('#gambar').css('background-image', 'url("' + row.LINKFOTO +'")');
            }
           },errorHandler);
       },errorHandler,nullHandler);
  }




//============================================= Get terakhir melakukan evaluasi ================================================

  //untuk mengetahui terakhir melakukan evaluasi, jadi untuk menentukan bulan tersebut harus evaluasi atau tidak
  //hasil disimpan dalam variabel bulantes

  function getTimeEvaluasi(){

        

        db.transaction(function(transaction) {
        transaction.executeSql('SELECT waktu FROM LAPORAN ;',  [],
           function(transaction, result) {

            if (result != null && result.rows != null) {
              var waktutes = result.rows.length;
              if (waktutes >0) {
                var row = result.rows.item(waktutes-1);
                var hasil = row.waktu;
                var bulantes = parseInt(hasil[3] + hasil[4]);
              }
              else{

                 alert('Anda Belum Melakukan Evaluasi, silahkan lakukan evaluasi')
              }

            }
            
             
            
           },errorHandler);
       },errorHandler,nullHandler);

  }

//=============================================== Halaman Utama ======================================================
  //kumpulan fungsi yang ada di halaman utama, ada getnama, getumur, get waktu terakhir evaluasi

  function HalamanUtama(){
    RunBody();
    getNama();
    hitungumur();
    getTimeEvaluasi();
    GetPicture();
  }

//============================================== Halaman Evaluasi =====================================================

//untuk menampilkan hasil dari evaluasi, berupa nama, nilai komunikasi, sosial, kognitif dan kebiasaan
//sistem kerjanya pake passing parameter, jadi parameter variable hasil evaluasi di pass ke fungsinya.
//nanti hasil dari evaluasi di simpan dulu dan di tampilkan .

  function tesEvaluasi(kom, sos, kog, keb, tot){

      var now = new Date();
      var monthNow = now.getMonth()+1;
      var yearNow = now.getFullYear();
      var dateNow = now.getDate();

      var waktu = dateNow + '-' + monthNow + '-' + yearNow;

      db.transaction(function(transaction){

          

          transaction.executeSql('INSERT INTO LAPORAN(waktu, komunikasi, sosial, kognitif, kebiasaan, total) VALUES (?,?,?,?,?,?)',[waktu, kom, sos, kog, keb, tot],nullHandler,errorHandler);

          
      });
  }

//===================================================== Display Evaluasi=================================================

function DisplayEval(){
  
  getNama();
 $('#hasilKom').html('');
 $('#hasilSos').html('');
 $('#hasilKog').html('');
 $('#hasilKeb').html('');
 
 db.transaction(function(transaction) {
  transaction.executeSql('SELECT komunikasi, sosial, kognitif, kebiasaan, total  FROM LAPORAN ;',  [],
               function(transaction, result) {

                if (result != null && result.rows != null) {
                  var last = result.rows.length;
                    var row = result.rows.item(last-1);
                    var komResult = row.komunikasi;
                    var sosResult = row.sosial;
                    var kogResult = row.kognitif;
                    var kebResult = row.kebiasaan;

                    $('#hasilKom').append(parseInt(100-row.komunikasi*100/28) + '%');
                    $('#hasilSos').append(parseInt(100-row.sosial*100/40) + '%');
                    $('#hasilKog').append(parseInt(100-row.kognitif*100/36) + '%');
                    $('#hasilKeb').append(parseInt(100-row.kebiasaan*100/75) + '%');
                }
               },errorHandler);
  },errorHandler,nullHandler);
}




//=================================================== Terapi =========================================================================

  function terapi(bro){
      var bre = bro;
      
       RunBody();

        
        document.getElementById("tabel1").style.display = 'none';
        document.getElementById("tabel2").style.display = 'none';
        document.getElementById("tabel3").style.display = 'none';
        document.getElementById("tabel4").style.display = 'none';
        document.getElementById("tabel5").style.display = 'none';

        var node = document.getElementById('tabel1');
        while(node.hasChildNodes()){
          node.removeChild(node.firstChild);
        }

        var node = document.getElementById('tabel2');
        while(node.hasChildNodes()){
          node.removeChild(node.firstChild);
        }

        var node = document.getElementById('tabel3');
        while(node.hasChildNodes()){
          node.removeChild(node.firstChild);
        }

        var node = document.getElementById('tabel4');
        while(node.hasChildNodes()){
          node.removeChild(node.firstChild);
        }

        var node = document.getElementById('tabel5');
        while(node.hasChildNodes()){
          node.removeChild(node.firstChild);
        }
        

       if(bre==1){
        document.getElementById("tabel1").style.display = '';
       db.transaction(function(transaction) {
         transaction.executeSql('SELECT ID_TERAPI,LEVEL,PILIHAN,KATEGORI_TANYATERAPI FROM TERAPI WHERE KATEGORI_TANYATERAPI="Belajar" And LEVEL="Dasar"  ;',  [],
           function(transaction, result) {
              flag++;

              if (result != null && result.rows != null) {
                  for (var i = 0; i < result.rows.length; i++) {
                    var row = result.rows.item(i);
                    $('#tabel1').append('<tr><td onClick="linkPetTerapi(\''+row.LEVEL+row.KATEGORI_TANYATERAPI+row.PILIHAN+'\')">' + row.PILIHAN + '</td><td><img src="img/menu/'+  row.PILIHAN+'.png"></td></tr>');
                  }
                }
           },errorHandler);
       },errorHandler,nullHandler);

        }

       if(bre==2){
        document.getElementById("tabel2").style.display = '';
       db.transaction(function(transaction) {
         transaction.executeSql('SELECT ID_TERAPI,LEVEL,PILIHAN,KATEGORI_TANYATERAPI FROM TERAPI WHERE KATEGORI_TANYATERAPI="Identifikasi(1)" And LEVEL="Dasar" ;',  [],
           function(transaction, result) {

              if (result != null && result.rows != null) {
                  for (var i = 0; i < result.rows.length; i++) {
                    var row = result.rows.item(i);
                    $('#tabel2').append('<tr><td onClick="linkPetTerapi(\''+row.LEVEL+row.KATEGORI_TANYATERAPI+row.PILIHAN+'\')">' + row.PILIHAN + '</td><td><img src="img/menu/'+  row.PILIHAN+'.png"></td></tr>');
                  }
                }
           },errorHandler);
       },errorHandler,nullHandler);
     }

       if(bre==3){
        document.getElementById("tabel3").style.display = '';
       db.transaction(function(transaction) {
         transaction.executeSql('SELECT ID_TERAPI,LEVEL,PILIHAN,KATEGORI_TANYATERAPI FROM TERAPI WHERE KATEGORI_TANYATERAPI="Identifikasi(2)" And LEVEL="Dasar" ;',  [],
           function(transaction, result) {

              if (result != null && result.rows != null) {
                  for (var i = 0; i < result.rows.length; i++) {
                    var row = result.rows.item(i);
                    $('#tabel3').append('<tr><td onClick="linkPetTerapi(\''+row.LEVEL+row.KATEGORI_TANYATERAPI+row.PILIHAN+'\')">' + row.PILIHAN + '</td><td><img src="img/menu/'+  row.PILIHAN+'.png"></td></tr>');
                  }
                }
           },errorHandler);
       },errorHandler,nullHandler);
     }

       if(bre==4){
        document.getElementById("tabel4").style.display = '';
       db.transaction(function(transaction) {
         transaction.executeSql('SELECT ID_TERAPI,LEVEL,PILIHAN,KATEGORI_TANYATERAPI FROM TERAPI WHERE KATEGORI_TANYATERAPI="Melabel" And LEVEL="Dasar" ;',  [],
           function(transaction, result) {

              if (result != null && result.rows != null) {
                  for (var i = 0; i < result.rows.length; i++) {
                    var row = result.rows.item(i);
                    $('#tabel4').append('<tr><td onClick="linkPetTerapi(\''+row.LEVEL+row.KATEGORI_TANYATERAPI+row.PILIHAN+'\')">' + row.PILIHAN + '</td><td><img src="img/menu/'+  row.PILIHAN+'.png"></td></tr>');
                  }
                }
           },errorHandler);
       },errorHandler,nullHandler);
     }

       if(bre==5){
        document.getElementById("tabel5").style.display = '';
       db.transaction(function(transaction) {
         transaction.executeSql('SELECT ID_TERAPI,LEVEL,PILIHAN,KATEGORI_TANYATERAPI FROM TERAPI WHERE KATEGORI_TANYATERAPI="Matching" And LEVEL="Dasar" ;',  [],
           function(transaction, result) {

              if (result != null && result.rows != null) {
                  for (var i = 0; i < result.rows.length; i++) {
                    var row = result.rows.item(i);
                    $('#tabel5').append('<tr><td onClick="linkPetTerapi(\''+row.LEVEL+row.KATEGORI_TANYATERAPI+row.PILIHAN+ '\')">' + row.PILIHAN + '</td><td><img src="img/menu/'+  row.PILIHAN+'.png"></td></tr>');
                  }
                }
           },errorHandler);
       },errorHandler,nullHandler);
      }
     

  }
  
     
//================================================== Link Petunjuk Terapi (linkPetTerapi()) ============================================

  function linkPetTerapi(a){



      linkPT = a;  
      sessionStorage.setItem('pilihan', linkPT);
      //alert(linkPT +'.html');
      window.location.href = linkPT +'.html';
      
  }


//============================================= Link Terapi =================================================================

  function linkterapi(){

    var data = sessionStorage.getItem('pilihan');
    alert(data);


  }




//=============================================== Drop All ======================================================
  function dropAll(){

         if (!window.openDatabase) {
         alert('Databases are not supported in this browser.');
         return;
         }

         $('#lbUsers').html('');
          db.transaction(function(transaction) {
         transaction.executeSql('DROP TABLE AKUN', [], nullHandler,errorHandler);
         transaction.executeSql('DROP TABLE CATATAN', [], nullHandler,errorHandler);
         transaction.executeSql('DROP TABLE LAPORAN', [], nullHandler,errorHandler);
         transaction.executeSql('DROP TABLE NILAI', [], nullHandler,errorHandler);
         transaction.executeSql('DROP TABLE REWARD', [], nullHandler,errorHandler);
         transaction.executeSql('DROP TABLE PERTANYAAN', [], nullHandler,errorHandler);
         transaction.executeSql('DROP TABLE TERAPI', [], nullHandler,errorHandler);
         

         
         });
          
  }

//============================================= Add Data Laporan ================================================

function addData(){
      db.transaction(function(transaction){
          var now = new Date();
      var monthNow = now.getMonth()+1;

      var yearNow = now.getFullYear();
      var dateNow = now.getDate();
       alert(dateNow);

      var waktu = dateNow + '-' + monthNow + '-' + yearNow;

          transaction.executeSql('INSERT INTO LAPORAN(waktu, komunikasi, sosial, kognitif, kebiasaan, total) VALUES (?,?,?,?,?,?)',[waktu, "1000", "2000", "3000", "4000", "10000"],nullHandler,errorHandler);
          transaction.executeSql('INSERT INTO LAPORAN(waktu, komunikasi, sosial, kognitif, kebiasaan, total) VALUES (?,?,?,?,?,?)',["2-8-2015", "2000", "3000", "4000", "5000", "14000"],nullHandler,errorHandler);
          transaction.executeSql('INSERT INTO LAPORAN(waktu, komunikasi, sosial, kognitif, kebiasaan, total) VALUES (?,?,?,?,?,?)',["2-9-2015", "3000", "4000", "5000", "6000", "34000"],nullHandler,errorHandler);
          transaction.executeSql('INSERT INTO LAPORAN(waktu, komunikasi, sosial, kognitif, kebiasaan, total) VALUES (?,?,?,?,?,?)',["2-10-2015", "4000", "5000", "6000", "7000", "22000"],nullHandler,errorHandler);
          /*transaction.executeSql('INSERT INTO LAPORAN(waktu, komunikasi, sosial, kognitif, kebiasaan, total) VALUES (?,?,?,?,?,?)',["7", "5000", "6000", "7000", "8000", "26000"],nullHandler,errorHandler);
          transaction.executeSql('INSERT INTO LAPORAN(waktu, komunikasi, sosial, kognitif, kebiasaan, total) VALUES (?,?,?,?,?,?)',["8", "6000", "7000", "8000", "9000", "30000"],nullHandler,errorHandler);
          transaction.executeSql('INSERT INTO LAPORAN(waktu, komunikasi, sosial, kognitif, kebiasaan, total) VALUES (?,?,?,?,?,?)',["9", "7000", "8000", "9000", "10000", "34000"],nullHandler,errorHandler);*/

          
      });
}

//=========================================== Fetch Data ===========================================================

function ambilData(){
    db.transaction(function(transaction) {
     transaction.executeSql('SELECT total FROM LAPORAN;', [],
       function(transaction, result) {
        if (result != null && result.rows != null) {
          for (var i = 0; i < result.rows.length; i++) {
            panjangdat = result.rows.length;
            alert('pjg '+panjangdat);
            rowTotal = result.rows.item(i).total;
            arrTotal[i] = rowTotal;
            //alert(arrTotal[i]);
            //$('#lbUsers').append('<br>' + row.UserId + '. ' + row.FirstName+ ' ' + row.LastName);
          }
        }
       },errorHandler);
   },errorHandler,nullHandler);
    alert('selesai ambil data');
}

//======================================== Tampil Laporan Total =====================================================
      function displayTotal(){
        RunBody();
        db.transaction(function(transaction) {
           transaction.executeSql('SELECT total, waktu FROM LAPORAN;', [],
             function(transaction, result) {
              if (result != null && result.rows != null) {
                for (var i = 0; i < result.rows.length; i++) {
                  panjangdat = result.rows.length;                    //menentukan jumlah isi laporan 
                  rowTotal = result.rows.item(i).total;               //menangkap data total
                  rowWaktu = result.rows.item(i).waktu;               //menangkap data waktu
                  pjgWaktu = result.rows.item(i).waktu.length;        //menghitung panjang string waktu

                  
                  arrMonth[i] = Math.abs(parseInt( rowWaktu[pjgWaktu-7]+rowWaktu[pjgWaktu-6]));     //row waktu dimasukkan ke dalam array
                  arrYear[i] = parseInt( rowWaktu[pjgWaktu-4] + rowWaktu[pjgWaktu-3] + rowWaktu[pjgWaktu-2] + rowWaktu[pjgWaktu-1]);
                  arrLabel[i] = arrMonth[i] + '/' + arrYear[i];            //digabungkan menjadi 1 string (bln/tahun)

                  if (panjangdat == 1) {                                  //misal data di db hanya 1, maka akan ditambahkan bulan selanjutnya
                    arrLabel[i] = '0'+ arrMonth[i] + '/' + arrYear[i];  
                    arrLabel[panjangdat] = '0'+ arrMonth[i]+1 +'/' + arrYear[i];
                  }
                  else{
                    arrLabel[i] = '0'+ arrMonth[i] + '/' + arrYear[i];
                  }
                  arrTotal[i] = rowTotal;                                 //memasukkan data total ke dalam array
                  //alert(arrLabel[panjangdat]);                            
                  
                }

                 var areaChartData = {                                
                    labels: arrLabel,                                     //melabelkan berupa bulan dan tahun
                    datasets: [
                      {
                        label: "Digital Goods",
                        fillColor: "#ffffff",
                        strokeColor: "#ffffff",
                        pointColor: "#000000",
                        pointStrokeColor: "rgba(60,141,188,1)",
                        pointHighlightFill: "#ffffff",
                        pointHighlightStroke: "rgba(255,255,255,1)",
                        data: arrTotal                                   //data total
                      }
                    ]
                  };

              var areaChartOptions = {
                //Boolean - If we should show the scale at all
                showScale: true,
                //Boolean - Whether grid lines are shown across the chart
                scaleShowGridLines: false,
                //String - Colour of the grid lines
                scaleGridLineColor: "rgba(0,0,0,1)",
                //Number - Width of the grid lines
                scaleGridLineWidth: 1,
                //Boolean - Whether to show horizontal lines (except X axis)
                scaleShowHorizontalLines: true,
                //Boolean - Whether to show vertical lines (except Y axis)
                scaleShowVerticalLines: true,
                //Boolean - Whether the line is curved between points
                bezierCurve: false,
                //Number - Tension of the bezier curve between points
                bezierCurveTension: 0.3,
                //Boolean - Whether to show a dot for each point
                pointDot: true,
                //Number - Radius of each point dot in pixels
                pointDotRadius: 4,
                //Number - Pixel width of point dot stroke
                pointDotStrokeWidth: 1,
                //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
                pointHitDetectionRadius: 20,
                //Boolean - Whether to show a stroke for datasets
                datasetStroke: true,
                //Number - Pixel width of dataset stroke
                datasetStrokeWidth: 2,
                //Boolean - Whether to fill the dataset with a color
                datasetFill: true,
                //String - A legend template
                legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
                //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
                maintainAspectRatio: false,
                //Boolean - whether to make the chart responsive to window resizing
                responsive: true
              };

            //Create the line chart
            //-------------
            //- LINE CHART -
            //--------------
            var lineChartCanvas = $("#lineChart").get(0).getContext("2d");
            var lineChart = new Chart(lineChartCanvas);
            var lineChartOptions = areaChartOptions;
            lineChartOptions.datasetFill = false;
            lineChart.Line(areaChartData, lineChartOptions);



              }
             },errorHandler);
         },errorHandler,nullHandler);
      }

//===================================================== Tampil Laporan Aspek ======================================================


    function displayAspek(){
        RunBody();

        db.transaction(function(transaction) {
           transaction.executeSql('SELECT komunikasi, sosial, kognitif, kebiasaan, waktu FROM LAPORAN;', [],
             function(transaction, result) {
              if (result != null && result.rows != null) {
                for (var i = 0; i < result.rows.length; i++) {
                  panjangdat = result.rows.length;                    //menentukan jumlah isi laporan 

                  rowKom = result.rows.item(i).komunikasi;
                  rowSos = result.rows.item(i).sosial;
                  rowKog = result.rows.item(i).kognitif;               
                  rowKeb = result.rows.item(i).kebiasaan;
                  rowWaktu = result.rows.item(i).waktu;               //menangkap data waktu

                  pjgWaktu = result.rows.item(i).waktu.length;        //menghitung panjang string waktu

                  
                  arrMonth[i] = Math.abs(parseInt( rowWaktu[pjgWaktu-7]+rowWaktu[pjgWaktu-6]));     //row waktu dimasukkan ke dalam array
                  arrYear[i] = parseInt( rowWaktu[pjgWaktu-4] + rowWaktu[pjgWaktu-3] + rowWaktu[pjgWaktu-2] + rowWaktu[pjgWaktu-1]);
                  arrLabel[i] = arrMonth[i] + '/' + arrYear[i];            //digabungkan menjadi 1 string (bln/tahun)

                  if (panjangdat == 1) {                                  //misal data di db hanya 1, maka akan ditambahkan bulan selanjutnya
                    arrLabel[i] = '0'+ arrMonth[i] + '/' + arrYear[i];  
                    arrLabel[panjangdat] = '0'+ arrMonth[i]+1 +'/' + arrYear[i];
                  }
                  else{
                    arrLabel[i] = '0'+ arrMonth[i] + '/' + arrYear[i];
                  }
                  arrTotal[i] = rowTotal;                                 //memasukkan data total ke dalam array
                  
                  arrKomunikasi[i] = rowKom;
                  arrSosial[i] = rowSos;
                  arrKognitif[i] = rowKog;
                  arrKebiasaan[i] = rowKeb;
                }

                 var areaChartData = {
                    labels: arrLabel,
                    datasets: [
                      {
                        label: "komunikasi",
                        fillColor: "#ffffff",
                        strokeColor: "#ffffff",
                        pointColor: "#000000",
                        pointStrokeColor: "rgba(60,141,188,1)",
                        pointHighlightFill: "#ffffff",
                        pointHighlightStroke: "rgba(255,255,255,1)",
                        data: arrKomunikasi
                      },
                      {
                        label: "sosial",
                        fillColor: "#ffffff",
                        strokeColor: "#ffffff",
                        pointColor: "#000000",
                        pointStrokeColor: "rgba(60,141,188,1)",
                        pointHighlightFill: "#ffffff",
                        pointHighlightStroke: "rgba(255,255,255,1)",
                        data: arrSosial
                      },
                      {
                        label: "kognitif",
                        fillColor: "#ffffff",
                        strokeColor: "#ffffff",
                        pointColor: "#000000",
                        pointStrokeColor: "rgba(60,141,188,1)",
                        pointHighlightFill: "#ffffff",
                        pointHighlightStroke: "rgba(255,255,255,1)",
                        data: arrKognitif
                      },
                      {
                        label: "kebiasaan",
                        fillColor: "#ffffff",
                        strokeColor: "#ffffff",
                        pointColor: "#ffffff",
                        pointStrokeColor: "rgba(60,0,188,1)",
                        pointHighlightFill: "red",
                        pointHighlightStroke: "rgba(255,255,255,1)",
                        data: arrKebiasaan
                      }
                    ]
                  };

                  var areaChartOptions = {
                    //Boolean - If we should show the scale at all
                    showScale: true,
                    //Boolean - Whether grid lines are shown across the chart
                    scaleShowGridLines: false,
                    //String - Colour of the grid lines
                    scaleGridLineColor: "rgba(0,0,0,1)",
                    //Number - Width of the grid lines
                    scaleGridLineWidth: 1,
                    //Boolean - Whether to show horizontal lines (except X axis)
                    scaleShowHorizontalLines: true,
                    //Boolean - Whether to show vertical lines (except Y axis)
                    scaleShowVerticalLines: true,
                    //Boolean - Whether the line is curved between points
                    bezierCurve: false,
                    //Number - Tension of the bezier curve between points
                    bezierCurveTension: 0.3,
                    //Boolean - Whether to show a dot for each point
                    pointDot: true,
                    //Number - Radius of each point dot in pixels
                    pointDotRadius: 4,
                    //Number - Pixel width of point dot stroke
                    pointDotStrokeWidth: 1,
                    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
                    pointHitDetectionRadius: 20,
                    //Boolean - Whether to show a stroke for datasets
                    datasetStroke: true,
                    //Number - Pixel width of dataset stroke
                    datasetStrokeWidth: 2,
                    //Boolean - Whether to fill the dataset with a color
                    datasetFill: true,
                    //String - A legend template
                    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
                    //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
                    maintainAspectRatio: false,
                    //Boolean - whether to make the chart responsive to window resizing
                    responsive: true
                  };

                  //Create the line chart
                  //-------------
                  //- LINE CHART -
                  //--------------
                  var lineChartCanvas = $("#lineChart").get(0).getContext("2d");
                  var lineChart = new Chart(lineChartCanvas);
                  var lineChartOptions = areaChartOptions;
                  lineChartOptions.datasetFill = false;
                  lineChart.Line(areaChartData, lineChartOptions);
                  //then you just need to generate the legend
              var legendTable = lineChart.generateLegend();
              //and append it to your page somewhere
              document.getElementById('legend').innerHTML = legendTable;
              alert(legendTable);



              }
             },errorHandler);
         },errorHandler,nullHandler);

    }



//============================================================ Display Per Bulan ===========================================================

function displayBulan(){

    RunBody();


        db.transaction(function(transaction) {

          $('#pilihbulan').html('');

           transaction.executeSql('SELECT komunikasi, sosial, kognitif, kebiasaan, waktu, ID_LAPORAN FROM LAPORAN;', [],
             function(transaction, result) {
              if (result != null && result.rows != null) {
                for (var i = 0; i < result.rows.length; i++) {

                  panjangdat = result.rows.length;                    //menentukan jumlah isi laporan 
                  rowWaktu = result.rows.item(i).waktu;               //menangkap data waktu

                  pjgWaktu = result.rows.item(i).waktu.length;        //menghitung panjang string waktu

                  
                  arrMonth[i] = Math.abs(parseInt( rowWaktu[pjgWaktu-7]+rowWaktu[pjgWaktu-6]));     //row waktu dimasukkan ke dalam array
                  arrYear[i] = parseInt( rowWaktu[pjgWaktu-4] + rowWaktu[pjgWaktu-3] + rowWaktu[pjgWaktu-2] + rowWaktu[pjgWaktu-1]);
                  arrLabel[i] = arrMonth[i] + '/' + arrYear[i];            //digabungkan menjadi 1 string (bln/tahun)

                  if (panjangdat == 1) {                                  //misal data di db hanya 1, maka akan ditambahkan bulan selanjutnya
                    arrLabel[i] = '0'+ arrMonth[i] + '/' + arrYear[i];  
                    arrLabel[panjangdat] = '0'+ arrMonth[i]+1 +'/' + arrYear[i];
                  }
                  else{
                    arrLabel[i] = '0'+ arrMonth[i] + '/' + arrYear[i];
                  }

                  var rowID = result.rows.item(i).ID_LAPORAN;
                   $('#pilihbulan').append('<option value="'+ rowID +'">' + arrLabel[i] );



                  rowKom = result.rows.item(i).komunikasi;
                  rowSos = result.rows.item(i).sosial;
                  rowKog = result.rows.item(i).kognitif;               
                  rowKeb = result.rows.item(i).kebiasaan;
                       
                  arrKomunikasi[i] = rowKom;
                  arrSosial[i] = rowSos;
                  arrKognitif[i] = rowKog;
                  arrKebiasaan[i] = rowKeb;

                }

                if (flagChar == 0) {
                  areaChartData = {
                      labels: ["komunikasi", "sosial", "kognitif", "kebiasaan"],
                      datasets: [
                      {
                        label: "komunikasi",
                        fillColor: "rgb(136,160,185)",
                        strokeColor: "#ffffff",
                        pointColor: "#000000",
                        pointStrokeColor: "rgba(60,141,188,1)",
                        pointHighlightFill: "#ffffff",
                        pointHighlightStroke: "rgba(255,255,255,1)",
                        data: [arrKomunikasi[0], arrSosial[0], arrKognitif[0], arrKebiasaan[0]]
                      }
                     ]
                    };


                    var barChartCanvas = $("#barChart").get(0).getContext("2d");
                    var barChart = new Chart(barChartCanvas);
                    var barChartData = areaChartData;
                            
                            
                    var barChartOptions = {
                        //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
                        scaleBeginAtZero: true,
                        //Boolean - Whether grid lines are shown across the chart
                        scaleShowGridLines: true,
                        //String - Colour of the grid lines
                        scaleGridLineColor: "rgba(0,0,0,.05)",
                        //Number - Width of the grid lines
                        scaleGridLineWidth: 1,
                        //Boolean - Whether to show horizontal lines (except X axis)
                        scaleShowHorizontalLines: true,
                        //Boolean - Whether to show vertical lines (except Y axis)
                        scaleShowVerticalLines: true,
                        //Boolean - If there is a stroke on each bar
                        barShowStroke: true,
                        //Number - Pixel width of the bar stroke
                        barStrokeWidth: 2,
                        //Number - Spacing between each of the X value sets
                        barValueSpacing: 5,
                        //Number - Spacing between data sets within X values
                        barDatasetSpacing: 1,
                        //String - A legend template
                        legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
                              //Boolean - whether to make the chart responsive
                        responsive: true,
                        maintainAspectRatio: false
                    };

                    barChartOptions.datasetFill = false;
                    barChart.Bar(barChartData, barChartOptions);

                    flagChar = 1000;
                };

              }

            },errorHandler);
         },errorHandler,nullHandler);

             
                        

}

function displayGrafBulan(){

    var e = document.getElementById("pilihbulan");
    indexbulan = e.options[e.selectedIndex].value - 1;

     
          areaChartData = {
            labels: ["komunikasi", "sosial", "kognitif", "kebiasaan"],
            datasets: [
            {
              label: "komunikasi",
              fillColor: "rgb(136,160,185)",
              strokeColor: "#ffffff",
              pointColor: "#000000",
              pointStrokeColor: "rgba(60,141,188,1)",
              pointHighlightFill: "#ffffff",
              pointHighlightStroke: "rgba(255,255,255,1)",
              data: [arrKomunikasi[indexbulan], arrSosial[indexbulan], arrKognitif[indexbulan], arrKebiasaan[indexbulan]]
            }
           ]
          };


          var barChartCanvas = $("#barChart").get(0).getContext("2d");
          var barChart = new Chart(barChartCanvas);
          var barChartData = areaChartData;
                  
                  
          var barChartOptions = {
              //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
              scaleBeginAtZero: true,
              //Boolean - Whether grid lines are shown across the chart
              scaleShowGridLines: true,
              //String - Colour of the grid lines
              scaleGridLineColor: "rgba(0,0,0,.05)",
              //Number - Width of the grid lines
              scaleGridLineWidth: 1,
              //Boolean - Whether to show horizontal lines (except X axis)
              scaleShowHorizontalLines: true,
              //Boolean - Whether to show vertical lines (except Y axis)
              scaleShowVerticalLines: true,
              //Boolean - If there is a stroke on each bar
              barShowStroke: true,
              //Number - Pixel width of the bar stroke
              barStrokeWidth: 2,
              //Number - Spacing between each of the X value sets
              barValueSpacing: 5,
              //Number - Spacing between data sets within X values
              barDatasetSpacing: 1,
              //String - A legend template
              legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
                    //Boolean - whether to make the chart responsive
              responsive: true,
              maintainAspectRatio: false
          };

          barChartOptions.datasetFill = false;
          barChart.Bar(barChartData, barChartOptions);
}





/*


                  
                  
                  


                      
                 
                  //-------------
                  //- BAR CHART -
                  //-------------
                  
              }
             },errorHandler);
         },errorHandler,nullHandler);











         

*/