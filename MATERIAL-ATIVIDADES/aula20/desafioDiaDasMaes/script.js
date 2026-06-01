const homenagens = [
    {
      nome: "Maria Oliveira",
      mensagem: "Mãe, você é meu porto seguro e minha maior inspiração. Obrigada por cada abraço, cada conselho e cada sorriso compartilhado. Te amo infinitamente! ❤️",
      fotos: [
        "https://novadiagnostico.com.br/wp-content/uploads/2023/05/cuidado-maes-scaled.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmnhPua8IClnmGfemMV1WtcFla9tkwkR1YDA&s",
        "https://conteudo.imguol.com.br/c/bol/entretenimento/5c/2019/05/11/no-brasil-o-dia-das-maes-foi-instituido-em-1932-pelo-entao-presidente-getulio-vargas-mas-a-data-so-se-consolidou-anos-depois-durante-o-regime-militar-1557626232624_v2_900x506.jpg",
        "https://ebm.com.br/wp-content/uploads/2022/05/dia-das-maes.webp",
      ],
      curtidas: 24
    },
    {
      nome: "Ana Souza",
      mensagem: "Sua força e dedicação me ensinaram que o amor verdadeiro não tem limites. Você é a mulher mais incrível que conheço. Feliz Dia das Mães! 🌸",
      fotos: [
        "https://www.criovida.com.br/wp-content/uploads/2020/10/GettyImages-1191676636.jpg",
        "https://www.estadao.com.br/recomenda/wp-content/uploads/2024/04/12-dicas-de-presentes-para-maes-de-primeira-viagem.jpeg-300x300.webp",
        "https://media.istockphoto.com/id/1446885495/pt/foto/happy-kiss-and-hug-on-mothers-day-in-living-room-sofa-love-and-relaxing-together-in-australia.jpg?s=612x612&w=0&k=20&c=RLegAXzTU_8eZ0is7ar0cqk5-oGGTSruMIIGluWGIyM=",
        "https://conteudo.imguol.com.br/c/noticias/c2/2021/05/07/dia-das-maes-mae-filha-amor-materno-pais-e-filhos-1620416694468_v2_4x3.jpg",
      ],
      curtidas: 17
    },
    {
      nome: "Joana Ferreira",
      mensagem: "Cada memória ao seu lado é um tesouro que guardo no coração. Você me ensinou a voar e sempre esteve lá para me amparar. Amo você, mãe! 💕",
      fotos: [
        "https://img.magnific.com/fotos-premium/mulher-afro-americana-segurando-uma-crianca-em-seus-bracos-mostrando-cuidado-materno-e-afeto-em-um_116547-113985.jpg?semt=ais_hybrid&w=740&q=80",
        "https://img.freepik.com/fotos-premium/menina-e-jovem-mulher-negra-juntos-olhando-para-a-camera-mae-e-filhas-abracando_297446-1469.jpg?semt=ais_hybrid&w=740&q=80",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSql5k2QcHTMqjC-HDGjG08xCnWEi6ij-15wQ&s",
        "https://img.freepik.com/fotos-premium/menina-e-jovem-mulher-negra-juntos-olhando-para-a-camera-mae-e-filhas-abracando_297446-1469.jpg?semt=ais_hybrid&w=740&q=80",
      ],
      curtidas: 31
    }
  ];

  const estado = homenagens.map(h => ({
    fotoAtual: 0,
    curtidas: h.curtidas,
    curtiu: false,
    favorito: false,
    mensagemVisivel: false
  }));

 
  const galeria = document.querySelector('#galeria');

  function renderizarGaleria() {
    galeria.innerHTML = '';

    homenagens.forEach((homenagem, idx) => {
      const card = criarCard(homenagem, idx);
      // animação escalonada
      card.style.animationDelay = `${idx * 0.12}s`;
      galeria.appendChild(card);
    });
  }

  function criarCard(homenagem, idx) {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.idx = idx;


    const imgArea = document.createElement('div');
    imgArea.className = 'card-img-area';

    const img = document.createElement('img');
    img.src = homenagem.fotos[estado[idx].fotoAtual];
    img.alt = `Foto de ${homenagem.nome}`;

    const btnPrev = document.createElement('button');
    btnPrev.className = 'nav-btn prev';
    btnPrev.innerHTML = '&#8592;';
    btnPrev.title = 'Foto anterior';
    btnPrev.addEventListener('click', () => trocarFoto(idx, -1));

    const btnNext = document.createElement('button');
    btnNext.className = 'nav-btn next';
    btnNext.innerHTML = '&#8594;';
    btnNext.title = 'Próxima foto';
    btnNext.addEventListener('click', () => trocarFoto(idx, 1));

    const counter = document.createElement('span');
    counter.className = 'img-counter';
    counter.textContent = `${estado[idx].fotoAtual + 1} / ${homenagem.fotos.length}`;

    imgArea.appendChild(btnPrev);
    imgArea.appendChild(img);
    imgArea.appendChild(btnNext);
    imgArea.appendChild(counter);


    const thumbsRow = document.createElement('div');
    thumbsRow.className = 'thumbnails';

    homenagem.fotos.forEach((src, fIdx) => {
      const thumb = document.createElement('img');
      thumb.className = 'thumb' + (fIdx === estado[idx].fotoAtual ? ' active' : '');
      thumb.src = src;
      thumb.alt = `Miniatura ${fIdx + 1}`;
      thumb.addEventListener('click', () => irParaFoto(idx, fIdx));
      thumbsRow.appendChild(thumb);
    });

  
    const body = document.createElement('div');
    body.className = 'card-body';

    const nome = document.createElement('h2');
    nome.className = 'card-name';
    nome.textContent = homenagem.nome;

    const mensagemBox = document.createElement('div');
    mensagemBox.className = 'mensagem-box' + (estado[idx].mensagemVisivel ? ' visible' : '');
    mensagemBox.textContent = homenagem.mensagem;

    const likesRow = document.createElement('div');
    likesRow.className = 'likes-row';
    likesRow.innerHTML = `<span style="font-size:1.2rem">❤️</span>
      <span class="likes-count"><span class="num">${estado[idx].curtidas}</span> curtidas</span>`;

    body.appendChild(nome);
    body.appendChild(mensagemBox);
    body.appendChild(likesRow);

  
    const actions = document.createElement('div');
    actions.className = 'card-actions';

    const btnCurtir = document.createElement('button');
    btnCurtir.className = 'btn btn-curtir' + (estado[idx].curtiu ? ' liked' : '');
    btnCurtir.innerHTML = estado[idx].curtiu ? '❤️ Curtido' : 'Curtir ❤️';
    btnCurtir.addEventListener('click', () => curtir(idx));

    const btnMsg = document.createElement('button');
    btnMsg.className = 'btn btn-msg';
    btnMsg.textContent = estado[idx].mensagemVisivel ? '🙈 Ocultar' : '💌 Mensagem';
    btnMsg.addEventListener('click', () => toggleMensagem(idx));

    const btnFav = document.createElement('button');
    btnFav.className = 'btn btn-fav' + (estado[idx].favorito ? ' fav' : '');
    btnFav.textContent = estado[idx].favorito ? '⭐' : '☆';
    btnFav.title = 'Favoritar';
    btnFav.addEventListener('click', () => favoritar(idx));

    actions.appendChild(btnCurtir);
    actions.appendChild(btnMsg);
    actions.appendChild(btnFav);

    // ── Montar card ──
    card.appendChild(imgArea);
    card.appendChild(thumbsRow);
    card.appendChild(body);
    card.appendChild(actions);

    return card;
  }

  

  function trocarFoto(idx, direcao) {
    const total = homenagens[idx].fotos.length;
    estado[idx].fotoAtual = (estado[idx].fotoAtual + direcao + total) % total;
    atualizarFoto(idx);
  }

  function irParaFoto(idx, fIdx) {
    estado[idx].fotoAtual = fIdx;
    atualizarFoto(idx);
  }

  function atualizarFoto(idx) {
    const card = galeria.querySelector(`.card[data-idx="${idx}"]`);
    const img = card.querySelector('.card-img-area img');
    const counter = card.querySelector('.img-counter');
    const thumbs = card.querySelectorAll('.thumb');
    const novaFoto = homenagens[idx].fotos[estado[idx].fotoAtual];

    img.classList.add('fade-out');
    setTimeout(() => {
      img.src = novaFoto;
      img.classList.remove('fade-out');
    }, 300);

    counter.textContent = `${estado[idx].fotoAtual + 1} / ${homenagens[idx].fotos.length}`;

    thumbs.forEach((t, i) => {
      t.classList.toggle('active', i === estado[idx].fotoAtual);
    });
  }

  function curtir(idx) {
    const card = galeria.querySelector(`.card[data-idx="${idx}"]`);
    const btn = card.querySelector('.btn-curtir');
    const numEl = card.querySelector('.likes-count .num');

    if (!estado[idx].curtiu) {
      estado[idx].curtidas++;
      estado[idx].curtiu = true;
      btn.classList.add('liked');
      btn.innerHTML = '❤️ Curtido';
      // partícula de coração
      emitirCoracao(btn);
    } else {
      estado[idx].curtidas--;
      estado[idx].curtiu = false;
      btn.classList.remove('liked');
      btn.innerHTML = 'Curtir ❤️';
    }

    numEl.textContent = estado[idx].curtidas;
    numEl.style.transform = 'scale(1.4)';
    setTimeout(() => { numEl.style.transform = 'scale(1)'; }, 200);
  }

  function emitirCoracao(btn) {
    const heart = document.createElement('span');
    heart.textContent = '❤️';
    heart.style.cssText = `
      position:fixed;
      pointer-events:none;
      font-size:1.4rem;
      z-index:999;
      animation: floatUp .9s ease forwards;
    `;
    const r = btn.getBoundingClientRect();
    heart.style.left = (r.left + r.width / 2 - 14) + 'px';
    heart.style.top  = (r.top - 10) + 'px';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 900);
  }

  function toggleMensagem(idx) {
    estado[idx].mensagemVisivel = !estado[idx].mensagemVisivel;
    const card = galeria.querySelector(`.card[data-idx="${idx}"]`);
    const box  = card.querySelector('.mensagem-box');
    const btn  = card.querySelector('.btn-msg');
    box.classList.toggle('visible', estado[idx].mensagemVisivel);
    btn.textContent = estado[idx].mensagemVisivel ? '🙈 Ocultar' : '💌 Mensagem';
  }

  function favoritar(idx) {
    estado[idx].favorito = !estado[idx].favorito;
    const card = galeria.querySelector(`.card[data-idx="${idx}"]`);
    const btn  = card.querySelector('.btn-fav');
    btn.classList.toggle('fav', estado[idx].favorito);
    btn.textContent = estado[idx].favorito ? '⭐' : '☆';
  }

  
  const styleEl = document.createElement('style');
  styleEl.textContent = `
    @keyframes floatUp {
      0%   { opacity:1;  transform: translateY(0) scale(1); }
      100% { opacity:0;  transform: translateY(-80px) scale(1.6); }
    }
  `;
  document.head.appendChild(styleEl);


  renderizarGaleria();