# Bookshelf API
Ini adalah Proyek Tugas Akhir dari kelas **Belajar Membuat Aplikasi Back-End untuk Pemula** pada **platform Dicoding**

## How to use
1. Clone atau Download File
2. Buka File di Code Editor
3. Run API dengan cara:  
  ```
  npm run start
  ```
4. Daftar API yang bisa digunakan:

  | Path | Method | Description |  
  | --- | --- | --- |  
  | **/books** | POST | Menyimpan buku |  

  Body Request:  
  ```
  {
    "name": string,
    "year": number,
    "author": string,
    "summary": string,
    "publisher": string,
    "pageCount": number,
    "readPage": number,
    "reading": boolean
  }
  ```
| Path | Method | Description |
| --- | --- | --- |
| **/books** | GET | Menampilkan seluruh buku |
| **/books/{bookID}** | GET | Menampilkan detail buku |  

| Path | Method | Description |
| --- | --- | --- |
| **/books/{bookID}** | PUT | Mengubah data buku |

  Body Request:
  ```
  {
    "name": string,
    "year": number,
    "author": string,
    "summary": string,
    "publisher": string,
    "pageCount": number,
    "readPage": number,
    "reading": boolean
  }
  ```

| Path | Method | Description |
| --- | --- | --- |
| **/books/{bookID}** | DELETE | Menghapus buku | 
