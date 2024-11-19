import React, { useState } from "react";
import "./App.css";
import Search from "./components/Search/Search";

function App() {
  const filmes = [
    { titulo: "O Senhor dos Anéis: A Sociedade do Anel", avaliacao: 9.0 },
    { titulo: "O Poderoso Chefão", avaliacao: 9.2 },
    { titulo: "Interestelar", avaliacao: 8.6 },
    { titulo: "Vingadores: Ultimato", avaliacao: 8.4 },
    { titulo: "A Origem", avaliacao: 8.8 },
    { titulo: "Coringa", avaliacao: 8.4 },
    { titulo: "Matrix", avaliacao: 8.7 },
    { titulo: "Parasita", avaliacao: 8.6 },
    { titulo: "Clube da Luta", avaliacao: 8.8 },
    { titulo: "Pulp Fiction: Tempo de Violência", avaliacao: 8.9 },
    { titulo: "Gladiador", avaliacao: 8.5 },
    { titulo: "Os Infiltrados", avaliacao: 8.5 },
    { titulo: "O Rei Leão", avaliacao: 8.5 },
    { titulo: "Harry Potter e a Pedra Filosofal", avaliacao: 7.6 },
    { titulo: "V de Vingança", avaliacao: 8.2 },
    { titulo: "Forrest Gump: O Contador de Histórias", avaliacao: 8.8 },
    { titulo: "O Grande Truque", avaliacao: 8.5 },
    { titulo: "O Lobo de Wall Street", avaliacao: 8.2 },
    { titulo: "Homem-Aranha: Sem Volta Para Casa", avaliacao: 8.7 },
    { titulo: "Batman: O Cavaleiro das Trevas", avaliacao: 9.0 },
  ];

  const [filteredFilmes, setFilteredFilmes] = useState(filmes);

  const handleSearch = (query) => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = filmes.filter((filme) =>
      filme.titulo.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredFilmes(filtered);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista de Filmes com Avaliações</h1>
        <Search onSearch={handleSearch} />
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Título</th>
                <th>Avaliação</th>
              </tr>
            </thead>
            <tbody>
              {filteredFilmes.map((filme, index) => (
                <tr key={index}>
                  <td>{filme.titulo}</td>
                  <td>{filme.avaliacao}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="caption">* Avaliações com base em dados fictícios</p>
        </div>
      </header>
    </div>
  );
}

export default App;
