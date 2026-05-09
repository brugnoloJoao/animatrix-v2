const animes = [
    {
        midia: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuAVa7D-v_aYAf-O9LuWizYptDUEGkvUttkg&s",
        titulo: "Boku no Hero Academia",
        genero: "Ação, Super-heróis, Shounen",
        nota: 8.4,
        texto: "Em um mundo onde quase toda a população possui poderes chamados individualidades, Izuku Midoriya sonha em se tornar um herói mesmo tendo nascido sem poderes. Sua vida muda quando conhece All Might, o maior herói do mundo.",
        extra: "O autor, Kohei Horikoshi, é muito inspirado por quadrinhos ocidentais da Marvel e DC.",
        censura: 14
    },
    {
        midia: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNae0zNrwFMgDRdrGz_n3gghk7DRIB0rAzvQ&s",
        titulo: "Fullmetal Alchemist: Brotherhood",
        genero: "Ação, Drama, Fantasia",
        nota: 9.6,
        texto: "Os irmãos Edward e Alphonse Elric tentam ressuscitar a mãe usando alquimia, mas acabam pagando um preço altíssimo. Agora eles buscam a Pedra Filosofal para recuperar seus corpos.",
        extra: "É considerado um dos animes mais bem avaliados da história no MyAnimeList.",
        censura: 16
    },
    {
        midia: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/d96bb958-4e6c-4ce0-9447-fbe226fbbecf/dk6jetj-f2fde394-efd7-441d-abba-ae41f6210955.jpg",
        titulo: "Demon Slayer",
        genero: "Ação, Sobrenatural, Shounen",
        nota: 8.7,
        texto: "Tanjiro Kamado entra para a tropa de caçadores de demônios após sua família ser massacrada e sua irmã Nezuko se transformar em um demônio.",
        extra: "O filme 'Mugen Train' bateu recordes de bilheteria no Japão.",
        censura: 16
    },
    {
        midia: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ec491c5a-17fd-49e5-899d-6fd7fac1ab0b/defcnyd-bf105df2-018d-4955-a9a6-e74c2a7e63f3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9lYzQ5MWM1YS0xN2ZkLTQ5ZTUtODk5ZC02ZmQ3ZmFjMWFiMGIvZGVmY255ZC1iZjEwNWRmMi0wMThkLTQ5NTUtYTlhNi1lNzRjMmE3ZTYzZjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.wnjYqfCkeYtYvqYGs958S02WmSFnTQQbFF8PQJcCXHk",
        titulo: "Horimiya",
        genero: "Romance, Slice of Life, Escolar",
        nota: 9.0,
        texto: "A história acompanha Kyoko Hori e Izumi Miyamura, dois estudantes com personalidades completamente diferentes dentro e fora da escola, que acabam criando uma relação extremamente genuína.",
        extra: "O anime ficou muito famoso por fugir dos clichês exagerados de romance escolar.",
        censura: 12
    },
    {
        midia: "https://img.goodfon.com/original/1920x1180/1/bc/anime-art-paren-code-geass.jpg",
        titulo: "Code Geass",
        genero: "Ação, Estratégia, Mecha",
        nota: 9.3,
        texto: "Lelouch ganha o poder do Geass, capaz de controlar qualquer pessoa com uma ordem. Com isso, inicia uma revolução contra o império Britannia.",
        extra: "O final de Code Geass é considerado um dos mais marcantes dos animes.",
        censura: 16
    },
    {
        midia: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7a51839c-067c-4c4e-9807-2d0df5746f1b/ddweyv3-e15dfe05-a55d-46d3-9e02-034aee041f22.jpg/v1/fill/w_622,h_350,q_70,strp/mafuyu_and_ritsuka_wallpaper_by_dinocozero_ddweyv3-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzdhNTE4MzljLTA2N2MtNGM0ZS05ODA3LTJkMGRmNTc0NmYxYi9kZHdleXYzLWUxNWRmZTA1LWE1NWQtNDZkMy05ZTAyLTAzNGFlZTA0MWYyMi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5jy8o5Xv6EYHYvR_eitI_Tn1o2hoan28yTD4BkDRUOM",
        titulo: "Given",
        genero: "Drama, Música, Romance",
        nota: 8.5,
        texto: "A obra acompanha uma banda formada por jovens músicos enquanto enfrentam sentimentos, perdas e amadurecimento emocional através da música.",
        extra: "Given foi um dos animes BL mais populares dos últimos anos.",
        censura: 14
    },
    {
        midia: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLbIkUYIXpOLM8BkZ5dVPfgpNqu6h-Xn6yjg&s",
        titulo: "Fate/stay night",
        genero: "Ação, Fantasia, Sobrenatural",
        nota: 8.6,
        texto: "Shirou Emiya participa da Guerra do Santo Graal, um torneio mortal entre magos e heróis lendários invocados como servos.",
        extra: "A franquia Fate possui várias rotas e linhas do tempo alternativas.",
        censura: 16
    },
    {
        midia: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS556KoO93WaHzv2Fmq-IjZ-8KYn9KaCcSvRA&s",
        titulo: "Trigun",
        genero: "Ação, Ficção Científica, Faroeste",
        nota: 8.3,
        texto: "Vash the Stampede é um lendário pistoleiro conhecido por causar destruição, mas na verdade é alguém extremamente pacífico que evita matar.",
        extra: "Trigun mistura velho oeste com ficção científica de forma única.",
        censura: 14
    },
    {
        midia: "https://cdn.observatoriodocinema.com.br/2025/12/corrida-dos-100-metros-1.jpg",
        titulo: "100 Meters",
        genero: "Esporte, Drama",
        nota: 7.8,
        texto: "A história acompanha atletas que buscam superar seus próprios limites físicos e emocionais em competições de corrida.",
        extra: "A obra é focada mais no lado humano dos personagens do que apenas no esporte.",
        censura: 12
    },
    {
        midia: "https://www.freemalaysiatoday.com/cdn-cgi/image/quality=75,format=auto,fit=scale-down,dpr=1,width=1600,height=1000/https://media.freemalaysiatoday.com/wp-content/uploads/2024/05/b8a8b6ae-redorange-ls-production-i.g-pics-160524.webp",
        titulo: "Haikyuu!",
        genero: "Esporte, Comédia, Drama",
        nota: 9.1,
        texto: "Hinata Shoyo entra para o time de vôlei da Karasuno buscando se tornar um grande jogador, mesmo sendo baixo para o esporte.",
        extra: "Haikyuu ajudou a aumentar o interesse pelo vôlei entre jovens no Japão.",
        censura: 10
    },
    {
        midia: "https://deep3dsea.com/wp-content/uploads/2023/08/initial-d-hachi-roku.thumb_.jpeg",
        titulo: "Initial D",
        genero: "Corrida, Ação, Drama",
        nota: 8.8,
        texto: "Takumi Fujiwara trabalha fazendo entregas nas montanhas e acaba desenvolvendo habilidades absurdas no drift sem perceber.",
        extra: "Initial D popularizou o drift no mundo inteiro.",
        censura: 14
    },
    {
        midia: "https://live.staticflickr.com/46/191110245_b222558b5c_n.jpg",
        titulo: "Rurouni Kenshin",
        genero: "Ação, Samurai, Histórico",
        nota: 8.9,
        texto: "Kenshin Himura é um antigo assassino lendário que promete nunca mais matar e passa a proteger pessoas inocentes.",
        extra: "O protagonista utiliza uma espada de lâmina invertida para não tirar vidas.",
        censura: 14
    },
    {
        midia: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwfgOinkz9V30n0cMWLQxNqlh2_I9rXuPhVg&s",
        titulo: "The Fragrant Flower Blooms with Dignity",
        genero: "Romance, Escolar, Slice of Life",
        nota: 8.7,
        texto: "Dois estudantes de escolas rivais acabam se aproximando aos poucos, criando uma relação baseada em respeito, compreensão e amadurecimento.",
        extra: "O mangá ficou conhecido pela forma extremamente madura como trabalha os relacionamentos.",
        censura: 12
    },
    {
        midia: "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3NodXR0ZXJzdG9jay0yMjI4NTYzMjg3LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODI4fX19",
        titulo: "MF Ghost",
        genero: "Corrida, Ação, Drama",
        nota: 8.0,
        texto: "Em um futuro onde carros autônomos dominam as ruas, Kanata participa de corridas ilegais utilizando carros movidos a combustão.",
        extra: "MF Ghost é uma sequência espiritual de Initial D.",
        censura: 14
    },
    {
        midia: "https://upload.wikimedia.org/wikipedia/commons/7/78/White_Album_2.jpg",
        titulo: "White Album 2",
        genero: "Drama, Romance, Música",
        nota: 8.4,
        texto: "Três jovens desenvolvem sentimentos complexos enquanto participam de uma banda escolar, criando um intenso drama emocional.",
        extra: "White Album 2 é famoso pelo drama psicológico pesado envolvendo o triângulo amoroso.",
        censura: 16
    },
    {
        midia: "https://media.istockphoto.com/id/1457408689/vector/a-woman-with-a-calm-expression-in-a-cherry-blossom-storm.jpg?s=612x612&w=is&k=20&c=vQeSDgQpFWRymzEhAEiNyAk4NoZyl2oSSa5GGAmDfco=",
        titulo: "Your Lie in April",
        genero: "Drama, Romance, Música",
        nota: 9.0,
        texto: "Kousei Arima perde a capacidade de ouvir o próprio piano após um trauma, mas sua vida muda quando conhece a violinista Kaori Miyazono.",
        extra: "O anime é extremamente reconhecido pela trilha sonora e impacto emocional.",
        censura: 12
    }
];

const idadeUsuario = Number(prompt("Qual sua idade?"));

const catalogo = document.getElementById("catalogo");

animes.forEach((anime) => {
    let classificacao =
        anime.nota >= 9
        ? "Obra-prima ⭐"
        : "Muito bom 🔥";

    let premium =
        anime.nota > 9 && anime.episodios > 100
        ? "premium"
        : "";
    const card = document.createElement("article");
    card.className = `card ${premium}`;
    const restrito = idadeUsuario < anime.censura;
    card.innerHTML = `
        ${
            restrito ? `<div class="restrito">Conteúdo Restrito 🔞</div>`:`<img src="${anime.midia}" alt="${anime.titulo}">`
        }
        <div class="conteudo">
            <h2>${anime.titulo}</h2>

            <p class="genero">
                ${anime.genero}
            </p>
            <p class="nota">
                Nota: ${anime.nota} - ${classificacao}
            </p>
            <p>
                Classificação Indicativa:
                ${anime.censura} anos
            </p>
            ${
                restrito
                ? `<p class="texto">Resumo ocultado.</p>`
                : `<p class="texto">${anime.texto}</p>`
            }
            <div class="extra">
                <strong>Você sabia?</strong>
                <p>${anime.extra}</p>
            </div>
        </div>
    `;
    catalogo.appendChild(card);
});