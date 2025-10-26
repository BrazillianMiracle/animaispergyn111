// Dados simulados (mantidos)
const ANUNCIOS = [
    {
        id: 1, nome: "Bob", raca: "Labrador Retriever", sexo: "Macho", idade: "5 anos", cor: "Dourado",
        bairro: "Setor Bueno", endereco: "Próximo à Praça da T-25. Porte Grande.",
        ultimaVisto: "Ontem, 19:30h", recompensa: "R$ 500,00",
        contato: "(62) 98111-XXXX", fotoUrl: "https://placedog.net/600/400?random&id=1",
        detalhes: "Muito dócil, atende por 'Bobão'. Tem coleira vermelha com plaquinha."
    },
    {
        id: 2, nome: "Luna", raca: "Vira-Lata (SRD)", sexo: "Fêmea", idade: "2 anos", cor: "Caramelo",
        bairro: "Jardim América", endereco: "Rua C-156, perto do Supermercado. Porte Médio.",
        ultimaVisto: "Hoje, 07:00h", recompensa: "Não",
        contato: "(62) 98222-XXXX", fotoUrl: "https://placedog.net/600/400?random&id=2",
        detalhes: "É castrada, muito medrosa. Se abaixar e chamar pelo nome, ela se aproxima."
    },
    {
        id: 3, nome: "Thor", raca: "Pastor Alemão", sexo: "Macho", idade: "8 meses", cor: "Preto e Marrom",
        bairro: "Parque Flamboyant", endereco: "Avenida Jamel Cecílio, fugiu durante passeio. Porte Grande.",
        ultimaVisto: "Há 2 dias, 15:00h", recompensa: "R$ 1.000,00",
        contato: "(62) 98333-XXXX", fotoUrl: "https://placedog.net/600/400?random&id=3",
        detalhes: "Filhote brincalhão, mas pode estar assustado. Não tem microchip. "
    },
    {
        id: 4, nome: "Mel", raca: "Poodle Toy", sexo: "Fêmea", idade: "7 anos", cor: "Branco",
        bairro: "Setor Oeste", endereco: "Rua 9, próximo ao Bosque dos Buritis. Porte Pequeno.",
        ultimaVisto: "Ontem, 10:00h", recompensa: "Sim (A combinar)",
        contato: "(62) 98444-XXXX", fotoUrl: "https://placedog.net/600/400?random&id=4",
        detalhes: "Cega de um olho. Precisa de medicação diária. Por favor, ajudem!"
    },
    {
        id: 5, nome: "Zeus", raca: "Husky Siberiano", sexo: "Macho", idade: "3 anos", cor: "Cinza e Branco",
        bairro: "Setor Sul", endereco: "Avenida 1ª Radial, próximo ao viaduto. Porte Grande.",
        ultimaVisto: "Hoje, 05:30h", recompensa: "R$ 750,00",
        contato: "(62) 98555-XXXX", fotoUrl: "https://placedog.net/600/400?random&id=5",
        detalhes: "Olhos azuis, muito agitado. Não se aproxima facilmente de estranhos. "
    },
    {
        id: 6, nome: "Pipoca", raca: "Shih Tzu", sexo: "Fêmea", idade: "1 ano", cor: "Marrom e Branco",
        bairro: "Setor Marista", endereco: "Rua 13, fugiu pelo portão de casa. Porte Pequeno.",
        ultimaVisto: "Há 3 dias, 12:00h", recompensa: "Não",
        contato: "(62) 98666-XXXX", fotoUrl: "https://placedog.net/600/400?random&id=6",
        detalhes: "Pelagem longa, tosa recente. Tem um laço rosa na cabeça. "
    },
    {
        id: 7, nome: "Belinha", raca: "Boxer", sexo: "Fêmea", idade: "4 anos", cor: "Tigrada",
        bairro: "Vila Redenção", endereco: "Avenida Minas Gerais, vista correndo na rua. Porte Grande.",
        ultimaVisto: "Ontem, 21:00h", recompensa: "R$ 300,00",
        contato: "(62) 98777-XXXX", fotoUrl: "https://placedog.net/600/400?random&id=7",
        detalhes: "Muito forte, mas amigável. Tem uma cicatriz na pata dianteira."
    },
    {
        id: 8, nome: "Max", raca: "Basset Hound", sexo: "Macho", idade: "6 anos", cor: "Tricolor",
        bairro: "Nova Suíça", endereco: "Próximo ao Parque Vaca Brava. Porte Médio.",
        ultimaVisto: "Hoje, 09:15h", recompensa: "Não",
        contato: "(62) 98888-XXXX", fotoUrl: "https://placedog.net/600/400?random&id=8",
        detalhes: "Orelhas longas, anda devagar. Adora petiscos de frango. "
    },
    {
        id: 9, nome: "Princesa", raca: "Chow Chow", sexo: "Fêmea", idade: "2 anos", cor: "Vermelha",
        bairro: "Campinas", endereco: "Avenida 24 de Outubro, perto do camelódromo. Porte Médio.",
        ultimaVisto: "Há 1 dia, 14:00h", recompensa: "R$ 400,00",
        contato: "(62) 98999-XXXX", fotoUrl: "https://placedog.net/600/400?random&id=9",
        detalhes: "Língua azulada. Muito desconfiada com estranhos. "
    },
    {
        id: 10, nome: "Bidu", raca: "Dachshund (Salsicha)", sexo: "Macho", idade: "9 anos", cor: "Preto e Tan",
        bairro: "Setor Fama", endereco: "Rua do Comércio, saiu do pet shop. Porte Pequeno.",
        ultimaVisto: "Ontem, 16:00h", recompensa: "R$ 600,00",
        contato: "(62) 98000-XXXX", fotoUrl: "https://placedog.net/600/400?random&id=10",
        detalhes: "Idoso, tem dificuldade para andar. Precisa de atenção especial."
    },
    {
        id: 11, nome: "Amora", raca: "Golden Retriever", sexo: "Fêmea", idade: "1 ano", cor: "Dourado",
        bairro: "Alphaville Flamboyant", endereco: "Fugiu da residência, área de mata. Porte Grande.",
        ultimaVisto: "Há 4 dias, 08:00h", recompensa: "R$ 1.500,00",
        contato: "(62) 98123-XXXX", fotoUrl: "https://placedog.net/600/400?random&id=11",
        detalhes: "Muito peluda e carinhosa. Tem medo de barulhos altos. "
    },
    {
        id: 12, nome: "Rex", raca: "Rottweiler", sexo: "Macho", idade: "6 anos", cor: "Preto e Marrom",
        bairro: "Setor Aeroporto", endereco: "Av. Piriá, perto da Hípica. Porte Grande.",
        ultimaVisto: "Hoje, 11:45h", recompensa: "Não",
        contato: "(62) 98234-XXXX", fotoUrl: "https://placedog.net/600/400?random&id=12",
        detalhes: "Vacinado e castrado. Parece bravo, mas é um 'bebê'."
    },
    {
        id: 13, nome: "Jolie", raca: "Yorkshire Terrier", sexo: "Fêmea", idade: "3 anos", cor: "Prata e Dourado",
        bairro: "Setor Pedro Ludovico", endereco: "Rua 104, levada por engano. Porte Pequeno.",
        ultimaVisto: "Ontem, 13:00h", recompensa: "R$ 800,00",
        contato: "(62) 98345-XXXX", fotoUrl: "https://placedog.net/600/400?random&id=13",
        detalhes: "Microchipada. Usa roupinha rosa. "
    },
    {
        id: 14, nome: "Pingo", raca: "Pug", sexo: "Macho", idade: "2 anos", cor: "Bege",
        bairro: "Setor Universitário", endereco: "Praça Universitária, fugiu da coleira. Porte Pequeno.",
        ultimaVisto: "Hoje, 18:00h", recompensa: "Não",
        contato: "(62) 98456-XXXX", fotoUrl: "https://placedog.net/600/400?random&id=14",
        detalhes: "Respiração ofegante, precisa de água e lugar fresco. "
    },
    {
        id: 15, nome: "Zeca", raca: "SRD (Preto)", sexo: "Macho", idade: "10 anos", cor: "Preto",
        bairro: "Goiânia II", endereco: "Avenida Central, desorientado. Porte Médio.",
        ultimaVisto: "Há 5 dias, 17:00h", recompensa: "R$ 200,00",
        contato: "(62) 98567-XXXX", fotoUrl: "https://placedog.net/600/400?random&id=15",
        detalhes: "Coleira antipulgas verde. Muito magro, possivelmente não está comendo. "
    }
];

const announcementGrid = document.getElementById('announcement-grid');
const filterInput = document.getElementById('filter-input');
const modal = document.getElementById('pet-details-modal');
const modalContent = document.getElementById('modal-body-content');
const closeModalBtn = document.querySelector('.close-button');

// --- Funções de Renderização e Filtro ---

/**
 * Gera o HTML para um card de anúncio.
 * @param {object} pet - Objeto do pet.
 * @returns {string} HTML do card.
 */
function generateAnnouncementCardHTML(pet) {
    const recompensaBadge = pet.recompensa !== 'Não' ? 
        `<span class="badge badge-recompensa"><i class="fas fa-gift"></i> ${pet.recompensa}</span>` : 
        `<span class="badge badge-recompensa" style="background-color: #ccc; color: #555;"><i class="fas fa-hand-holding-usd"></i> Sem Recompensa</span>`;

    return `
        <article class="announcement-card" data-id="${pet.id}" onclick="openPetDetails(${pet.id})">
            <img src="${pet.fotoUrl}" alt="Foto do ${pet.nome}, um(a) ${pet.raca}" class="pet-photo" loading="lazy">
            <div class="card-content">
                <h3>${pet.nome} <span class="badge badge-perdido">PERDIDO</span></h3>
                <div class="card-info">
                    <p><strong><i class="fas fa-dog"></i> Raça:</strong> ${pet.raca}</p>
                    <p><strong><i class="fas fa-map-marker-alt"></i> Bairro:</strong> ${pet.bairro}</p>
                    <p><strong><i class="fas fa-clock"></i> Última Vez:</strong> ${pet.ultimaVisto}</p>
                </div>
                <div class="card-badges">
                    ${recompensaBadge}
                    <span class="badge badge-visto"><i class="fas fa-venus-mars"></i> ${pet.sexo}</span>
                </div>
            </div>
        </article>
    `;
}

/**
 * Renderiza a lista de anúncios no grid.
 * @param {Array<object>} list - Lista de pets a serem exibidos.
 */
function renderAnnouncements(list) {
    announcementGrid.innerHTML = ''; // Limpa o conteúdo
    
    if (list.length === 0) {
        announcementGrid.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; font-size: 1.5em; color: var(--color-alert);">Nenhum anúncio encontrado. Tente refinar a busca.</p>';
        return;
    }

    list.forEach(pet => {
        announcementGrid.innerHTML += generateAnnouncementCardHTML(pet);
    });
}

/**
 * Função principal de filtro (case-insensitive).
 */
function filterAnnouncements() {
    const input = filterInput.value.toLowerCase().trim();
    
    if (input.length < 2 && input.length > 0) {
        // Evita buscas muito genéricas que podem ser lentas em sites maiores
        alert("Digite pelo menos 2 caracteres para refinar a busca.");
        return;
    }

    const filteredList = ANUNCIOS.filter(pet => 
        pet.nome.toLowerCase().includes(input) || 
        pet.bairro.toLowerCase().includes(input) ||
        pet.raca.toLowerCase().includes(input) ||
        pet.cor.toLowerCase().includes(input)
    );
    
    renderAnnouncements(filteredList);
}

/**
 * Limpa o campo de filtro e renderiza todos os anúncios.
 */
function resetFilters() {
    filterInput.value = '';
    renderAnnouncements(ANUNCIOS);
}

// --- Funções do Modal ---

/**
 * Prepara e abre o modal de detalhes do pet.
 * @param {number} petId - ID único do pet.
 */
function openPetDetails(petId) {
    const pet = ANUNCIOS.find(p => p.id === petId);
    if (!pet) return;

    modalContent.innerHTML = `
        <img src="${pet.fotoUrl}" alt="Foto de ${pet.nome}" class="modal-img">
        <h3>${pet.nome} <span style="font-size: 0.6em; color: var(--color-alert);"> (PERDIDO)</span></h3>
        <p><strong><i class="fas fa-search-plus"></i> Detalhes Adicionais:</strong> ${pet.detalhes}</p>
        
        <div class="modal-info-group">
            <div><strong><i class="fas fa-dog"></i> Raça:</strong> ${pet.raca}</div>
            <div><strong><i class="fas fa-palette"></i> Cor:</strong> ${pet.cor}</div>
            <div><strong><i class="fas fa-venus-mars"></i> Sexo/Idade:</strong> ${pet.sexo}, ${pet.idade}</div>
            <div><strong><i class="fas fa-gift"></i> Recompensa:</strong> ${pet.recompensa}</div>
        </div>

        <div class="modal-info-group">
            <div><strong><i class="fas fa-map-marker-alt"></i> Último Visto:</strong> ${pet.bairro} (${pet.endereco})</div>
            <div><strong><i class="fas fa-clock"></i> Data/Hora:</strong> ${pet.ultimaVisto}</div>
        </div>
        
        <a href="tel:${pet.contato}" class="btn-contact-modal"><i class="fas fa-phone-volume"></i> Contato Urgente: ${pet.contato}</a>
    `;

    modal.style.display = "block";
    document.body.style.overflow = 'hidden'; // Evita scroll da página principal
}

/**
 * Fecha o modal.
 */
function closePetDetails() {
    modal.style.display = "none";
    document.body.style.overflow = 'auto'; // Restaura o scroll da página
}

// Event Listeners
closeModalBtn.onclick = closePetDetails;

window.onclick = function(event) {
    if (event.target == modal) {
        closePetDetails();
    }
}

// Inicialização: Renderiza todos os anúncios ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    renderAnnouncements(ANUNCIOS);
    // Adiciona evento de tecla Enter no input de filtro
    filterInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            filterAnnouncements();
        }
    });
});