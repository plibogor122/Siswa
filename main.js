import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  orderBy
} from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js'

const firebaseConfig = {
  apiKey: "AIzaSyCxlxuwJuUjYA4khjmWO7qV9xtfww8pGjE",
  authDomain: "insan-cemerlang-d0a62.firebaseapp.com",
  projectId: "insan-cemerlang-d0a62",
  storageBucket: "insan-cemerlang-d0a62.appspot.com",
  messagingSenderId: "494535112853",
  appId: "1:494535112853:web:6043f080f2fd288ec4c39c",
  measurementId: "G-ZC99LK7VK0"
};

// Inisialisasi firebase
const aplikasi = initializeApp(firebaseConfig)
const basisdata = getFirestore(aplikasi)

export async function ambilDaftarSiswa() {
  const refDukumen = collection(basisdata,  "siswa");
  const kueri = query(refDukumen, orderBy("nama"));
  const cuplikanKueri =await getDocs(kueri);
  
  let hasilKueri = [];
  cuplikanKueri.forEach((dokumen) => {
    hasilKueri.push({
      id: dokumen.id,
      nama: dokumen.data().nama,
      alamat: dokument.data().alamat
    })
  })
  
  return hasilKueri;
}