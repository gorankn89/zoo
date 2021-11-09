import logo from './logo.svg';
import './App.css';



function App() {
  let animalList = [
    {vrsta:"Mrav", ime:"Atom", datumRodjenja: new Date(1543, 4, 22).toString()},
    {vrsta:"Lav", ime:"Alex", datumRodjenja: new Date(1543, 4, 21).toString()},
    {vrsta:"Pingvin", ime:"Vojnik", datumRodjenja: new Date(1543, 4, 20).toString()},
    {vrsta:"Sundjer", ime:"Bob", datumRodjenja: new Date(1543, 4, 19).toString()},
    {vrsta:"Veverica", ime:"Sendi", datumRodjenja: new Date(1543, 4, 15).toString()},
  ]

  
let nesto = "Neki string u vezi zivotinja sve jedno";

  return (

    <div>
      <table>
        <tr>
         <th>Vrsta</th>
         <th>Ime</th>
         <th>Datum Rodjenja</th>
         </tr>
      </table>
     {animalList.map((el) => <table><tr><td>{el.vrsta}</td><td>{el.ime}</td><td>{el.datumRodjenja}</td></tr></table>)}
      {nesto} <br/>
      

    </div>
  );
}

export default App;
