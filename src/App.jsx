import React from 'react'
import Artis from './components/Artis';

function App(){

const Penyanyi = [
  {
  nama: "The Weeknd",
  gambar: "https://hiphop-n-more.com/wp-content/uploads/2019/11/the-weeknd-blinding-lights-1.jpg",
  deskripsi: "Abel Makkonen Tesfaye (አቤል መኮንን ተስፋዬ) (lahir 16 Februari 1990), lebih dikenal dengan nama panggung The Weeknd, adalah seorang penyanyi, penulis lagu dan produser rekaman asal negara Kanada.[1]",
  propertiLain:"Lagu : Save Your Tears , Die For You , Reminder"
  },
  {
  nama: "Ed Sheeran",
  gambar: "https://th.bing.com/th/id/OIP.A9zfnG_EYnTJfBOXIBpfJgHaJ1?pid=ImgDet&rs=1",
  deskripsi: "Edward Christopher Sheeran, MBE adalah seorang penyanyi, penulis lagu, gitaris, produser rekaman, dan aktor berkebangsaan Inggris. Sheeran lahir di Halifax, West Yorkshire, dan dibesarkan di Framlingham, Suffolk",
  propertiLain:"Shape of You , Bad Habbits , Perfect"
  },
  {
    nama: "Justin Bieber",
  gambar: "https://th.bing.com/th/id/OIP.Dk7jM7J_qRE16CqzuTDRfgHaE5?pid=ImgDet&rs=1",
  deskripsi: "Justin Drew Bieber adalah seorang penyanyi dan penulis lagu berkebangsaan Kanada. Setelah manajer pencarian bakat Scooter Braun menemukannya melalui video-video YouTube-nya,",
  propertiLain:"Lagu : Stay , Baby , Ghost "
  },

  {
    nama: "Naff",
  gambar: "https://pingkoweb.com/wp-content/uploads/2019/05/naff-min-1280x720.jpg",
  deskripsi: "Naff dibentuk pada 14 Februari 1998 dan berdomisili di Cimahi. Band ini dibentuk oleh empat orang pemuda. Rusyaedi Makmun adalah salah satu pendiri band tersebut dan Ady mendapatkan posisi vokalis sekaligus pencipta lagu-lagu Naff.",
  propertiLain:"Lagu : Terbang tinggi , Rahasia hati , Senandung Hati "
  },

  {
    nama: "JKT 48",
  gambar: "https://th.bing.com/th/id/R.ef4e63d6f3666fee5d777672305a8f44?rik=TUNsS6VejI6wNg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-kM2tN5c6vtk%2fUQOFwd59cfI%2fAAAAAAAAFmM%2feV_bZqcPV4Y%2fs1600%2fjkt%2b48.png&ehk=XoDGpBFGSWglBNU3R85CASWItIdvidf%2fUZec4MVRh0I%3d&risl=&pid=ImgRaw&r=0",
  deskripsi: "JKT48 adalah grup idola asal Indonesia dan grup saudari AKB48 yang pertama di luar Jepang.[1] Mengadopsi konsep AKB48, ,[2] grup ini mengadakan pertunjukan rutin di Teater JKT48 yang terletak di Lantai 4 fX Sudirman, Jakarta Pusat, DKI Jakarta",
  propertiLain:"Lagu : River , Rapsodi , Refrain penuh harapan  "
  },

  {
    nama: "Virgoun",
  gambar: "https://i.scdn.co/image/ab6761610000e5eb68149153467b16bf46afe904",
  deskripsi: "Virgoun Putra Tambunan (lahir 26 September 1986) merupakan seorang penyanyi dan pencipta lagu berkebangsaan Indonesia yang juga merupakan vokalis dari grup musik Last Child. Dia juga membawakan lagu hits bersama Gisella Anastasia finalis Indonesian Idol yang berjudul ",
  propertiLain:"Lagu : Surat Cinta Untuk Starla , Selamat , Orang Yang Sama "
  }
 ]

return (
  <div>
  {
    Penyanyi.map((value,index)=>{
      return(
      <Artis key={index} gambar={value.gambar} nama={value.nama} deskripsi={value.deskripsi} propertiLain={value.propertiLain}/>
      )
    })
  }
  <footer style={{
    backgroundColor:"grey",
    textAlign:"center",
    color:"white",
    fontSize:"20px"
  }}>Tugas React Achmad Fauzi 2023 Trial</footer>
  </div>
 )
}

 export default App