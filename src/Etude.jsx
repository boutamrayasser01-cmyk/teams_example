export const etudiants = [
    {id:1 ,nom: "yasser", note: 17},
    {id:2, nom: "amina", note: 16},
    {id:3, nom: "meryem", note: 9},
    {id:4, nom: "Amine", note: 12}
];
export default function Student(props){
    const { nom, note } = props;
    return(
        <div
            className={`p-4 rounded-lg ${
                note < 10
                    ? "bg-red-100 text-red-700"
                    : "bg-green-100 text-green-700"
            }`}
        >
            <h3 className="font-bold">{nom}</h3>
            <p>Note : {note}</p>
        </div>
    )
}