import {useState} from 'react'

const Artis = (props) => {

    const [Suka ,setSuka] = useState(true);
    const [Tampil,setMoreTampil] = useState(true);

 

    function TombolSuka(){
        setSuka(!Suka);
    }

    function TombolDesk(){
        setMoreTampil(!Tampil);
    }
  return (
    <>
    
    <div style={{
        borderRadius:"50px",
        padding:"10px",
       alignContent:"center",
       textAlign:"center",
        flexWrap:"wrap",
        marginleft:150
    }}>
    

    
    
    <h2>{props.nama}</h2>
    <img src={props.gambar} alt="foto" style={{
        width:"200px",
       height:"200px",
       borderRadius:"40px"
    }}/>

    <h5>{props.propertiLain}</h5>

    <p>{Tampil?"":props.deskripsi}</p>
    <button style={{
        display:"inline-block",
        borderRadius:"40px",
        padding: "10px 20px",
        borderadius: "4px",
         border: "none",
         backgroundColor:"green",
        color: "white",
        cursor: "pointer"
        

        
    }} onClick={()=>TombolDesk()}>
         Deskripsi
    </button>

    <button style={{
             display:"inline-block",
             borderRadius:"40px",
             padding: "10px 20px",
             borderadius: "4px",
              border: "none",
              backgroundColor:Suka? "blue" : "red",
             color: "white",
             cursor: "pointer"
    }} onClick={TombolSuka}>
        {Suka?"Suka" : "Tidak Suka "}
    </button>
    </div>
   
    </>
  )
}

export default Artis