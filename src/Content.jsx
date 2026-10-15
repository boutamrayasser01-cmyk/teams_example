//  import Student from "./students.jsx"
//  import { etudiants } from "./students.jsx"
//  function Content() { 
//   function greetings(nom){
//    console.log("helo!!!",nom)
//   }
//     return (
           
//     <main className="flex-1 p-8">

//       <h2 className="text-3xl font-bold text-blue-500">
//     Liste des étudiants
//       </h2>
//       <button onClick={greetings} className='bg-red-500 text-white hover:bg-gray-300'>
//       A1         
//       </button>
      
//       <div className="mt-6 grid grid-cols-3 gap-5">
//         {etudiants.map(function(item, index) {
//           return <Student key={index} nom={item.nom} note={item.note} />
//         })}
//       </div>
      
//     </main>
//     )
//     function ajouter(){
//       const etudiant = { nom: nom, note: note }
//       setEtudiants([...etudiants, newObj])
//     }

//     function modifier(){
//       const newObj = { nom: nom, note: note }
//       const updatedEtudiants = etudiants.map(function(item) {
//         if (item.nom === nom) {
//           return newObj
//         }
//         return item
//     })
//     setEtudiants(updateEtudiants)
//  }
//     function supprimer(){
//       setEtudiants(updateEtudiants)
//     }
//     return
//  }
//  export default Content











































 
// import { useState } from "react";
// import Student from "./Etude.jsx";
// import { etudiants as initialEtudiants } from "./Etude.jsx";

// function Content() {

//   // const [etudiants, setEtudiants] = useState(initialEtudiants);
//   // const [ id, setId]= useState("");
//   // const [nom, setNom] = useState("");
//   // const [note, setNote] = useState("");
//   const [oEtudiant,setOEtudiant]=useState({
//     id:"",
//     nom:"",
//     note:""
//   })
//   const[etudiants,setEtudiants]=useState([
//     {id:1 ,nom: "yasser", note: 17},
//     {id:2, nom: "amina", note: 16},
//     {id:3, nom: "meryem", note: 9},
//     {id:4, nom: "Amine", note: 12}
//   ])
    

//   function greetings(nom) {
//     console.log("hello!!!", nom);
//   }

//   function ajouter() {
//    const etudiant = { id:oEtudiant.id ,nom: oEtudiant.nom,note: oEtudiant.note};
//     setEtudiants([...etudiants, etudiant]);
//     setOEtudiant({id:"", nom:"", note:""});
//   }

//   function modifier() {
//     const newObj = {id:oEtudiant.id, nom:oEtudiant.nom ,note:oEtudiant.note}
      
    

//     const updatedEtudiants = etudiants.map(function (item) {
//         if (item.id === id) {
//         return newObj;
//       }
//       return item;
//     });
//     console.log(newObj)
//     console.log(updatedEtudiants)
//     setEtudiants(updatedEtudiants);
//   }
//   function remplir(data){
//     console.log(data)
//     setId(data.id)
//     setNom(data.nom)
//     setNote(data.note)

//   }
  

//   function supprimer() {
//     const updatedEtudiants = etudiants.filter(function (item) {
//       return item.id != id;
//     });
//     setEtudiants(updatedEtudiants);
//   }

//   return (
//     <main className="flex-1 p-8">
//       <h2 className="text-3xl font-bold text-blue-500">
//         Liste des étudiants
//       </h2>
//       <button
//         onClick={() => greetings("A1")}
//         className="bg-red-500 text-white hover:bg-gray-300"
//       >
//         A1
//       </button>
//       <div className="mt-5">
//         <input
//           type="text"
//           placeholder="id"
//           value={oEtudiant.id} 
//           onChange={(e) => setOEtudiant({...oEtudiant, id: e.target.value})} className="border p-2 mr-2"
//         />
//         <input
//           type="text"
//           placeholder="Nom"
//           value={oEtudiant.nom}
//           onChange={(e) => setOEtudiant({...oEtudiant, nom: e.target.value})} className="border p-2 mr-2"
//         />
//         <input
//           type="text"
//           placeholder="Note"
//           value={oEtudiant.note}
//           onChange={(e) => setOEtudiant({...oEtudiant, note: e.target.value})} className="border p-2 mr-2"
//         />
//         <button
//           onClick={ajouter} className="bg-black text-white p-2 mr-2"
//         >
//           Ajouter
//         </button>
//         <button
//           onClick={modifier}
//             className="bg-blue-500 text-white px-4 py-2 rounded"
//           >
//             Modifier
//         </button>
//         <button
//           onClick={supprimer}
//             className="bg-blue-500 text-white px-4 py-2 rounded"
//           >
//             supprimer
//         </button>
            
//       </div>
//       <div className="mt-6 grid grid-cols-3 gap-5">
//         {etudiants.map(function(item){
//           return (<div
//           onClick={()=>remplir(item)}
//            className="rounded-xl bg-white p-5 shadow">
//           <h3 class="text-lg font-bold">
//             {item.nom}
//           </h3>

//           <p class="mt-2 text-slate-500">
//             Note : {item.note} / 20
//           </p>
//         </div>)
//         })}
//       </div>
//     </main>
//   );
// }
// export default Content;










import { useState } from "react";
 
function Content() {
  const [oEtudiant, setOEtudiant] = useState({
    id: "",
    nom: "",
    note: "",
  });
 
  const [etudiants, setEtudiants] = useState([
    { id: 1, nom: "yasser", note: 17 },
    { id: 2, nom: "amina", note: 16 },
    { id: 3, nom: "meryem", note: 9 },
    { id: 4, nom: "Amine", note: 12 },
  ]);
 

  const total = etudiants.length;
  const nombreAdmis = etudiants.filter((item) => Number(item.note) >= 10).length;
  const moyenneGenerale = total
    ? etudiants.reduce((somme, item) => somme + Number(item.note), 0) / total
    : 0;

  function greetings(nom) {
    console.log("hello!!!", nom);
  }
 
  function viderFormulaire() {
    setOEtudiant({ id: "", nom: "", note: "" });
  }
 
  function ajouter() {
    if (!oEtudiant.id || !oEtudiant.nom || oEtudiant.note === "") {
      alert("Veuillez remplir tous les champs.");
      return;
    }
    if (etudiants.some((item) => Number(item.id) === Number(oEtudiant.id))) {
      alert("Cet ID existe déjà.");
      return;
    }
    const etudiant = {
      id: Number(oEtudiant.id),
      nom: oEtudiant.nom,
      note: Number(oEtudiant.note),
    };
    setEtudiants([...etudiants, etudiant]);
    viderFormulaire();
  }
 
  function modifier() {
    const newObj = {
      id: Number(oEtudiant.id),
      nom: oEtudiant.nom,
      note: Number(oEtudiant.note),
    };
 
    const updatedEtudiants = etudiants.map(function (item) {
      if (Number(item.id) === newObj.id) {
        return newObj;
      }
      return item;
    });
 
    setEtudiants(updatedEtudiants);
    viderFormulaire();
  }
 
  function remplir(data) {
    setOEtudiant({ id: data.id, nom: data.nom, note: data.note });
  }
 
  function supprimer() {
    const updatedEtudiants = etudiants.filter(function (item) {
      return Number(item.id) !== Number(oEtudiant.id);
    });
    setEtudiants(updatedEtudiants);
    viderFormulaire();
  }
 
  return (
    <div>
      <div className="groupes">
        <button onClick={() => greetings("A1")}>A1</button>
      </div>
 
      <div className="form-box">
        <input
          type="number"
          placeholder="ID"
          value={oEtudiant.id}
          onChange={(e) => setOEtudiant({ ...oEtudiant, id: e.target.value })}
        />
        <input
          type="text"
          placeholder="Nom"
          value={oEtudiant.nom}
          onChange={(e) => setOEtudiant({ ...oEtudiant, nom: e.target.value })}
        />
        <input
          type="number"
          placeholder="Note"
          value={oEtudiant.note}
          onChange={(e) => setOEtudiant({ ...oEtudiant, note: e.target.value })}
        />
        <button onClick={ajouter}>Ajouter</button>
        <button onClick={modifier}>Modifier</button>
        <button className="danger" onClick={supprimer}>
          Supprimer
        </button>
      </div>
 
      <div className="stats">
        <div className="stat-card">
          <div>
            <span className="stat-label">Total étudiants</span>
            <strong className="stat-value">{total}</strong>
          </div>
          
        </div>
 
        <div className="stat-card">
          <div>
            <span className="stat-label">Admis</span>
            <strong className="stat-value">{nombreAdmis}</strong>
          </div>
         
        </div>
 
        <div className="stat-card">
          <div>
            <span className="stat-label">Moyenne générale</span>
            <strong className="stat-value">{moyenneGenerale.toFixed(1)}/20</strong>
          </div>
          
        </div>
      </div>
 
      <h2 className="list-title">Liste des étudiants</h2>
 
      <div className="student-grid">
        {etudiants.map(function (item) {
          return (
            <div
              key={item.id}
              className="student-card"
              onClick={() => remplir(item)}
            >
              <h3>{item.nom}</h3>
              <p>Note : {item.note} / 20</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
 
export default Content;