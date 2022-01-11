const sportsSelect = [
  { nome: 'NENHUM ESPORTE', calorias: 0 },
  { nome: 'Musculação iniciante', calorias: 300 },
  { nome: 'Musculação intermediario', calorias: 400 },
  { nome: 'Musculação avançado', calorias: 550 },
  { nome: 'Futebol 30minutos', calorias: 270 },
  { nome: 'Futebol 1hora', calorias: 540 },
  { nome: 'Pular corda', calorias: 861 },
  { nome: 'Corrida ate 12KM', calorias: 861 },
  { nome: 'Corrida ate 6KM', calorias: 430 },
  { nome: 'Corrida ate 3KM', calorias: 215 },
  { nome: 'Caminhada ate 12KM', calorias: 620 },
  { nome: 'Caminhada ate 6KM', calorias: 310 },
  { nome: 'Caminhada ate 3KM', calorias: 150 },
  { nome: 'Ginástica aeróbica', calorias: 360 },
  { nome: 'Jiu-jitsu', calorias: 300 },
  { nome: 'Judô', calorias: 300 },
  { nome: 'Tae kwon do', calorias: 752 },
  { nome: 'Natação (ritmo intenso)', calorias: 715 },
  { nome: 'Natação (ritmo moderado)', calorias: 420 },
  { nome: 'Natação (ritmo leve)', calorias: 250 },
  { nome: 'Escadas 30minutos', calorias: 500 },
  { nome: 'Escadas 1hora', calorias: 800 },
  { nome: 'Futebol americano', calorias: 584 },
  { nome: 'Tênis', calorias: 584 },
  { nome: 'Patinação', calorias: 548 },
  { nome: 'Aeróbica (alto impacto)', calorias: 500 },
  { nome: 'Aeróbica (medio impacto)', calorias: 350 },
  { nome: 'Aeróbica (baixo impacto)', calorias: 250 },
  { nome: 'Patinação no gelo', calorias: 511 },
  { nome: 'Trilha', calorias: 438 },
  { nome: 'Remo ', calorias: 400 },
  { nome: 'Hidroginástica', calorias: 400 },
  { nome: 'Ciclismo (leve, por lazer)', calorias: 290 },
  { nome: 'Vôlei', calorias: 292 },
  { nome: 'Canoagem', calorias: 256 },
  { nome: 'Dança de Salão', calorias: 220 },
  { nome: 'Tai chi', calorias: 219 },
  { nome: 'Basquete', calorias: 584 },
];

export const sports = sportsSelect.map((sport, ind) => {
  return (
    <option value={sport.calorias} key={ind}>
      {sport.nome}
    </option>
  );
});
