 const games = [
            {
                title: "Ajedrez",
                category: "estrategia",
                players: "2 jugadores",
                duration: "30-60 min",
                description: "Juego clásico de estrategia donde dos ejércitos se enfrentan en un tablero de 64 casillas.",
                rules: [
                    "Cada jugador mueve una pieza por turno",
                    "El objetivo es dar jaque mate al rey rival",
                    "Cada pieza tiene movimientos específicos",
                    "No se puede poner al propio rey en jaque"
                ],
                materials: [
                    "Tablero de ajedrez 8x8",
                    "16 piezas blancas",
                    "16 piezas negras"
                ]
            },
            {
                title: "UNO",
                category: "cartas",
                players: "2-10 jugadores",
                duration: "15-30 min",
                description: "Popular juego de cartas donde debes deshacerte de todas tus cartas antes que los demás.",
                rules: [
                    "Combina cartas por color o número",
                    "Grita '¡UNO!' cuando te quede una carta",
                    "Las cartas especiales cambian el juego",
                    "El primero sin cartas gana"
                ],
                materials: [
                    "Baraja de UNO (108 cartas)",
                    "Cartas numéricas (0-9)",
                    "Cartas especiales (+2, +4, cambio, reversa)"
                ]
            },
            {
                title: "Monopoly",
                category: "mesa",
                players: "2-8 jugadores",
                duration: "60-180 min",
                description: "Juego de bienes raíces donde compras propiedades y cobras alquileres para quebrar a tus oponentes.",
                rules: [
                    "Tira los dados y mueve tu ficha",
                    "Compra propiedades disponibles",
                    "Cobra alquiler cuando otros caigan en tus propiedades",
                    "Evita la bancarrota"
                ],
                materials: [
                    "Tablero de juego",
                    "Fichas de jugadores",
                    "Dados",
                    "Dinero del Monopoly",
                    "Tarjetas de propiedad",
                    "Casas y hoteles"
                ]
            },
            {
                title: "Escondidas",
                category: "exterior",
                players: "3+ jugadores",
                duration: "15-30 min",
                description: "Juego clásico de persecución donde uno busca mientras los demás se esconden.",
                rules: [
                    "Uno cuenta hasta un número acordado",
                    "Los demás se esconden durante el conteo",
                    "El que cuenta debe encontrar a todos",
                    "El último encontrado gana"
                ],
                materials: [
                    "Espacio amplio para esconderse",
                    "Punto de partida designado"
                ]
            },
            {
                title: "Sudoku",
                category: "logica",
                players: "1 jugador",
                duration: "10-30 min",
                description: "Rompecabezas numérico que desafía tu lógica y paciencia.",
                rules: [
                    "Completa la cuadrícula 9x9",
                    "Cada fila debe tener números del 1 al 9",
                    "Cada columna debe tener números del 1 al 9",
                    "Cada cuadrado 3x3 debe tener números del 1 al 9",
                    "No se pueden repetir números"
                ],
                materials: [
                    "Tablero de Sudoku impreso o digital",
                    "Lápiz o bolígrafo",
                    "Borrador (opcional)"
                ]
            },
            {
                title: "Dominó",
                category: "mesa",
                players: "2-4 jugadores",
                duration: "20-40 min",
                description: "Juego de fichas donde debes emparejar números para deshacerte de todas tus piezas.",
                rules: [
                    "Empareja los números de las fichas",
                    "Coloca fichas en los extremos de la cadena",
                    "Si no puedes jugar, tomas del pozo",
                    "Gana quien se quede sin fichas primero"
                ],
                materials: [
                    "Set de 28 fichas de dominó",
                    "Superficie plana para jugar"
                ]
            }
        ];

        function renderGames(filter = 'todos') {
            const grid = document.getElementById('gamesGrid');
            const filteredGames = filter === 'todos' 
                ? games 
                : games.filter(game => game.category === filter);

            grid.innerHTML = filteredGames.map(game => `
                <div class="game-card">
                    <div class="game-header">
                        <div class="game-title">${game.title}</div>
                        <span class="game-category">${game.category.toUpperCase()}</span>
                    </div>
                    <div class="game-body">
                        <div class="game-section">
                            <div class="section-content">
                                ${game.description}
                            </div>
                            <div>
                                <span class="players"><span class="icon">👥</span> ${game.players}</span>
                                <span class="duration"><span class="icon">⏱️</span> ${game.duration}</span>
                            </div>
                        </div>

                        <div class="game-section">
                            <div class="section-title">
                                <span class="icon">📋</span> Reglas
                            </div>
                            <div class="section-content">
                                <ul>
                                    ${game.rules.map(rule => `<li>${rule}</li>`).join('')}
                                </ul>
                            </div>
                        </div>

                        <div class="game-section">
                            <div class="section-title">
                                <span class="icon">🎲</span> Materiales
                            </div>
                            <div class="section-content">
                                <ul>
                                    ${game.materials.map(material => `<li>${material}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Event listeners para los botones de categoría
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                renderGames(e.target.dataset.category);
            });
        });

        // Renderizar todos los juegos al cargar
        renderGames();
    