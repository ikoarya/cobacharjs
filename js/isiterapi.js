//=============================================== masukkan terapi ====================================================

		function EntryTerapi(){

			alert("DEBUGGING: we are in the EntryQuestion() function");

	    	if (!window.openDatabase) {
	           alert('Databases are not supported in this browser.');
	           return;
         	}

         	db.transaction(function(transaction){

         			transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Belajar", "Huruf Besar","" ,"" ],nullHandler,errorHandler);
         			transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Belajar", "Huruf Kecil","" ,"" ],nullHandler,errorHandler);
         			transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Belajar", "Angka 1-20","" ,"" ],nullHandler,errorHandler);
         			transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Belajar", "Benda","" ,"" ],nullHandler,errorHandler);
         			transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Belajar", "Bentuk","" ,"" ],nullHandler,errorHandler);
         			transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Belajar", "Binatang","" ,"" ],nullHandler,errorHandler);
         			transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Belajar", "Buah","" ,"" ],nullHandler,errorHandler);
         			transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Belajar", "Warna","" ,"" ],nullHandler,errorHandler);

         			//-------------------------------------------------------------------------------------

         			transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Identifikasi(1)", "Huruf Besar","Huruf Besar" ,"Konsentrasi|Reseptif|Motorik Halus" ],nullHandler,errorHandler);
         			transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Identifikasi(1)", "Huruf Kecil","Huruf Kecil" ,"Konsentrasi|Reseptif|Motorik Halus" ],nullHandler,errorHandler);
         			transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Identifikasi(1)", "Angka 1-20","Angka 1-20" ,"Konsentrasi|Reseptif|Motorik Halus" ],nullHandler,errorHandler);
         			transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Identifikasi(1)", "Benda","Benda" ,"Konsentrasi|Reseptif|Motorik Halus" ],nullHandler,errorHandler);
         			transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Identifikasi(1)", "Bentuk","Bentuk" ,"Konsentrasi|Reseptif|Motorik Halus" ],nullHandler,errorHandler);
         			transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Identifikasi(1)", "Binatang","Binatang" ,"Konsentrasi|Reseptif|Motorik Halus" ],nullHandler,errorHandler);
         			transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Identifikasi(1)", "Buah","Buah" ,"Konsentrasi|Reseptif|Motorik Halus" ],nullHandler,errorHandler);
         			transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Identifikasi(1)", "Warna","Warna" ,"Konsentrasi|Reseptif|Motorik Halus" ],nullHandler,errorHandler);

         			//-------------------------------------------------------------------------------------

         			transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Identifikasi(2)", "Suara Lingkungan Sekitar","Binatang|Benda" ,"Konsentrasi|Reseptif|Motorik Halus|Lingkungan|Imajinasi" ],nullHandler,errorHandler);
         			transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Identifikasi(2)", "Benda Menurut Fungsinya", "Benda|Kata Kerja" ,"Konsentrasi|Reseptif|Motorik Halus|Lingkungan|Imajinasi|Logika" ],nullHandler,errorHandler);

         			//-------------------------------------------------------------------------------------------

         			transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Melabel","Huruf Besar","Huruf Besar","Wicara|Logika|Imajinasi|Kognitif" ],nullHandler,errorHandler);
	              transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Melabel","Huruf Kecil","Huruf Kecil","Wicara|Logika|Imajinasi|Kognitif" ],nullHandler,errorHandler);
	              transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Melabel","Angka 1-20","Angka 1-20","Wicara|Logika|Imajinasi|Kognitif" ],nullHandler,errorHandler);
	              transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Melabel","Benda","Benda","Wicara|Logika|Imajinasi|Kognitif" ],nullHandler,errorHandler);
	              transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Melabel","Bentuk","Bentuk","Wicara|Logika|Imajinasi|Kognitif" ],nullHandler,errorHandler);              
	              transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Melabel","Binatang","Binatang","Wicara|Logika|Imajinasi|Kognitif" ],nullHandler,errorHandler);
	              transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Melabel","Buah","Buah","Wicara|Logika|Imajinasi|Kognitif" ],nullHandler,errorHandler);
	              transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Melabel","Warna","Warna","Wicara|Logika|Imajinasi|Kognitif" ],nullHandler,errorHandler);
	              transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Matching","Bentuk - 2","Bentuk","Konsentrasi|Imajinasi|Logika" ],nullHandler,errorHandler);
	              transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Matching","Bentuk - 3","Bentuk","Konsentrasi|Imajinasi|Logika" ],nullHandler,errorHandler);
	              transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Matching","Bentuk - 4","Bentuk","Konsentrasi|Imajinasi|Logika" ],nullHandler,errorHandler);
	              transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Imitasi GM Kasar","Tepuk Tangan","","Imitasi Kasar|Motorik Kasar" ],nullHandler,errorHandler);
	              transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Imitasi GM Kasar","Tangan Ke Atas","","Imitasi Kasar|Motorik Kasar" ],nullHandler,errorHandler);
	              transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Imitasi GM Kasar","Tangan Ke Bawah","","Imitasi Kasar|Motorik Kasar" ],nullHandler,errorHandler);
	              transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Imitasi GM Kasar","Tangan Ke Samping","","Imitasi Kasar|Motorik Kasar" ],nullHandler,errorHandler);
	              transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Imitasi GM Kasar","Tutup Muka","","Imitasi Kasar|Motorik Kasar" ],nullHandler,errorHandler);
	              transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Imitasi GM Halus","Acungkan Jempol","","Imitasi Halus|Motorik Halus" ],nullHandler,errorHandler);
	              transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Imitasi GM Halus","Tanda Damai","","Imitasi Halus|Motorik Halus" ],nullHandler,errorHandler);
	              transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Imitasi GM Halus","Buka Tutup Telapak Tangan","","Imitasi Halus|Motorik Halus" ],nullHandler,errorHandler);
	              transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Imitasi GM Mulut","Buka Mulut","","Imitasi Mulut" ],nullHandler,errorHandler);

	              	//-------------------------------------------------------------------------------------------------------

	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Belajar","Huruf Besar","","" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Belajar","Huruf Kecil","","" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Belajar","Angka 1-20","","" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Belajar","Bentuk","","" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Belajar","Suku Kata","","" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Belajar","Petugas Sosial","","" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Belajar","Kendaraan","","" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Belajar","Kata Kerja","","" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Belajar","Ruangan","","" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Belajar","Tempat","","" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Belajar","Tubuh","","" ],nullHandler,errorHandler);

	              	//-------------------------------------------------------------------------------------------------------

	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Identifikasi(1)","Huruf Besar","Huruf Besar|Warna","Konsentrasi|Reseptif|Motorik Halus" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Identifikasi(1)","Huruf Kecil","Huruf Kecil|Warna","Konsentrasi|Reseptif|Motorik Halus" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Identifikasi(1)","Angka 1-20","Angka 1-20|Warna","Konsentrasi|Reseptif|Motorik Halus" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Identifikasi(1)","Bentuk","Bentuk|Warna","Konsentrasi|Reseptif|Motorik Halus" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Identifikasi(1)","Suku Kata","Huruf Kecil","Konsentrasi|Reseptif|Motorik Halus|Wicara" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Identifikasi(1)","Petugas Sosial","Petugas Sosial","Konsentrasi|Reseptif|Motorik Halus" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Identifikasi(1)","Kendaraan","Kendaraan","Konsentrasi|Reseptif|Motorik Halus" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Identifikasi(1)","Kata Kerja","Kata Kerja","Konsentrasi|Reseptif|Motorik Halus" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Identifikasi(1)","Ruangan","Ruangan","Konsentrasi|Reseptif|Motorik Halus" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Identifikasi(1)","Tempat","Tempat","Konsentrasi|Reseptif|Motorik Halus" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Identifikasi(1)","Tubuh","Tubuh","Konsentrasi|Reseptif|Motorik Halus" ],nullHandler,errorHandler);

	              	//-------------------------------------------------------------------------------------------------------

	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Identifikasi(2)","Identifikasi Bebas / Pilih Sendiri","","Konsentrasi|Reseptif|Motorik Halus|Kognitif" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Identifikasi(2)","Kategori / Kelompok","Binatang|Buah|Huruf Kecil|Angka 1-20","Konsentrasi|Reseptif|Motorik Halus|Logika|Lingkungan" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Identifikasi(2)","Menjawab Pertanyaan 'Dimana'","Tempat|Ruangan|Kata Kerja","Konsentrasi|Reseptif|Motorik Halus|Lingkungan|Imajinasi|Logika" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Identifikasi(2)","Banyak / Sedikit","Buah|Binatang","Konsentrasi|Aritmatika|Imajinasi|Logika" ],nullHandler,errorHandler);

	              	//--------------------------------------------------------------------------------------------------------

	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Melabel(1)","Huruf Besar","Huruf Besar|Warna","Wicara|Logika|Imajinasi|Kognitif" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Melabel(1)","Huruf Kecil","Huruf Kecil|Warna","Wicara|Logika|Imajinasi|Kognitif" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Melabel(1)","Angka 1-20","Angka 1-20|Warna","Wicara|Logika|Imajinasi|Kognitif" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Melabel(1)","Bentuk","Bentuk|Warna","Wicara|Logika|Imajinasi|Kognitif" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Melabel(1)","Suku Kata","Suku Kata","Wicara|Logika|Imajinasi|Kognitif" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Melabel(1)","Petugas Sosial","Petugas Sosial","Wicara|Logika|Imajinasi|Kognitif" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Melabel(1)","Kendaraan","Kendaraan","Wicara|Logika|Imajinasi|Kognitif" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Melabel(1)","Kata Kerja","Kata Kerja","Wicara|Logika|Imajinasi|Kognitif" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Melabel(1)","Ruangan","Ruangan","Wicara|Logika|Imajinasi|Kognitif" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Melabel(1)","Tempat","Tempat","Wicara|Logika|Imajinasi|Kognitif" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Melabel(1)","Tubuh","Tubuh","Wicara|Logika|Imajinasi|Kognitif" ],nullHandler,errorHandler);

	              	//----------------------------------------------------------------------------------------------------------

	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Melabel(2)","Emosi","Emosi","Wicara|Logika|Imajinasi|Kognitif" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Melabel(2)","Fungsi Benda","Benda|Kata Kerja","Wicara|Logika|Imajinasi|Kognitif" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Melabel(2)","Fungsi Anggota Tubuh","Tubuh|Kata Kerja","Wicara|Logika|Imajinasi|Kognitif" ],nullHandler,errorHandler);

                    //-------------------------------------------------------------------------------------------------------------

                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Matching","Bentuk - 2","Bentuk|Warna","Konsentrasi|Imajinasi|Logika" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Matching","Bentuk - 3","Bentuk|Warna","Konsentrasi|Imajinasi|Logika" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Matching","Bentuk - 4","Bentuk|Warna","Konsentrasi|Imajinasi|Logika" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Matching","Huruf Besar - 2","Huruf Besar","Konsentrasi|Imajinasi|Logika" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Matching","Huruf Besar - 3","Huruf Besar","Konsentrasi|Imajinasi|Logika" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Matching","Huruf Besar - 4","Huruf Besar","Konsentrasi|Imajinasi|Logika" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Matching","Huruf Kecil - 2","Huruf Kecil","Konsentrasi|Imajinasi|Logika" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Matching","Huruf Kecil - 3","Huruf Kecil","Konsentrasi|Imajinasi|Logika" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Matching","Huruf Kecil - 4","Huruf Kecil","Konsentrasi|Imajinasi|Logika" ],nullHandler,errorHandler);

                    //-----------------------------------------------------------------------------------------------------------------

                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Imitasi GM Kompleks","Imitasi Gerak Motorik Kasar","","Motorik Kasar|Imitasi Kasar|Konsentrasi" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Imitasi GM Kompleks","Imitasi Gerak Motorik Halus","","Motorik Halus|Imitasi Halus|Konsentrasi" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Imitasi GM Kompleks","Menyusun Pola / Susunan Balok","","Motorik Kasar|Imitasi Kasar|Motorik Halus|Imitasi Halus|Konsentrasi|Imajinasi|Lingkungan" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Imitasi GM Kompleks","Meniru Gambar Sederhana","","Motorik Kasar|Imitasi Kasar|Motorik Halus|Imitasi Halus|Konsentrasi|Imajinasi|Lingkungan" ],nullHandler,errorHandler);

                    //----------------------------------------------------------------------------------------------------------------

                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Akademik","Berhitung","Angka 1-20|Bentuk","Konsentrasi|Reseptif|Motorik Halus|Aritmatika|Logika|Imajinasi" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Akademik","Mewarna","Warna|Bentuk","Konsentrasi|Motorik Halus|Imajinasi" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Bahasa Ekspresif","Urutan Kata Kerja","Kata Kerja|Angka 1-20","Logika|Imajinasi|Konsentrasi|Lingkungan" ],nullHandler,errorHandler);

                    //-------------------------------------------------------------------------------------------------------------------

                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Belajar","Jenis Kelamin","","" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Belajar","Waktu / Jam","","" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Identifikasi","Lebih / Kurang","Angka 1-20","Konsentrasi|Aritmatika|Imajinasi|Logika" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Identifikasi","Jenis Kelamin","Jenis Kelamin","Konsentrasi|Reseptif|Motorik Halus" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Identifikasi","Waktu / Jam","Jam|Angka 1-20","Konsentrasi|Reseptif|Motorik Halus" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Identifikasi","Bagian Tubuh Melalui Fungsinya","Tubuh|Kata Kerja","Konsentrasi|Reseptif|Motorik Halus|Lingkungan|Imajinasi|Logika" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Akademik","Berhitung","Angka 1-20|Bentuk|Buah|Binatang|Benda|Warna","Konsentrasi|Reseptif|Motorik Halus|Aritmatika|Logika|Imajinasi" ],nullHandler,errorHandler);

                    //------------------------------------------------------------------------------------------------------------

                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Akademik","Mengetik Kata & Kalimat","Huruf Besar|Angka 1-20|Suku Kata","Konsentrasi|Reseptif|Motorik Halus|Kognitif" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Akademik","Membaca Kata / Kalimat","Huruf Kecil|Suku Kata","Wicara|Logika|Imajinasi|Kognitif" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Akademik","Penjumlahan","Angka 1-20","Konsentrasi|Reseptif|Motorik Halus|Aritmatika|Logika" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Akademik","Pengurangan","Angka 1-20","Konsentrasi|Reseptif|Motorik Halus|Aritmatika|Logika" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Akademik","Menyelesaikan Pertanyaan Sederhana","Kata Kerja|Suku Kata|Huruf Kecil","Logika|Imajinasi|Kognitif|Lingkungan" ],nullHandler,errorHandler);

                    //---------------------------------------------------------------------

                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Matching","Benda Pasangan - 2","Benda","Konsentrasi|Logika|Imajinasi|Lingkungan|Kognitif" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Matching","Benda Pasangan - 3","Benda","Konsentrasi|Logika|Imajinasi|Lingkungan|Kognitif" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Matching","Benda Pasangan - 4","Benda","Konsentrasi|Logika|Imajinasi|Lingkungan|Kognitif" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Matching","Benda Ruangan - 2","Benda|Ruangan","Konsentrasi|Logika|Imajinasi|Lingkungan|Kognitif" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Matching","Benda Ruangan - 3","Benda|Ruangan","Konsentrasi|Logika|Imajinasi|Lingkungan|Kognitif" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Matching","Benda Ruangan - 4","Benda|Ruangan","Konsentrasi|Logika|Imajinasi|Lingkungan|Kognitif" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Matching","Benda Ke Nama - 2","Benda|Huruf Kecil|Huruf Besar|Suku Kata","Konsentrasi|Logika|Imajinasi|Kognitif" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Matching","Benda Ke Nama - 3","Benda|Huruf Kecil|Huruf Besar|Suku Kata","Konsentrasi|Logika|Imajinasi|Kognitif" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Matching","Benda Ke Nama - 4","Benda|Huruf Kecil|Huruf Besar|Suku Kata","Konsentrasi|Logika|Imajinasi|Kognitif" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Matching","Nama Ke Benda - 2","Benda|Huruf Kecil|Huruf Besar|Suku Kata","Konsentrasi|Logika|Imajinasi|Kognitif" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Matching","Nama Ke Benda - 3","Benda|Huruf Kecil|Huruf Besar|Suku Kata","Konsentrasi|Logika|Imajinasi|Kognitif" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Matching","Nama Ke Benda - 4","Benda|Huruf Kecil|Huruf Besar|Suku Kata","Konsentrasi|Logika|Imajinasi|Kognitif" ],nullHandler,errorHandler);

                    //---------------------------------------------------------------------------

                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Melabel","Jenis Kelamin","Jenis Kelamin","Wicara|Logika|Imajinasi|Kognitif" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Melabel","Menjelaskan Gambar Dalam Kalimat","Kata Kerja","Wicara|Logika|Imajinasi|Kognitif|Lingkungan" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Melabel","Bagian Tubuh Melalui Fungsinya","Tubuh","Wicara|Logika|Imajinasi|Kognitif|Lingkungan" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Melabel","Waktu / Jam","Waktu / Jam","Wicara|Logika|Imajinasi|Kognitif" ],nullHandler,errorHandler);
         	});


		}