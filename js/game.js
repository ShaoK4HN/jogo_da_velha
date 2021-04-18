var jogadorX = "X";
var jogadorO = "O";

var player;
var jogo = [];
var tabuleiro = [];
var quemJoga = 0; //0=jogador  1=cpu
var verifica;
var jogando = true;

var jogadaCpu = 1;
var quemComeca = 1;
var jogada = 0;
//variaveis da versao 1.1 pra escolher o lado do jogador
var playerCPU;
var mostrarjogador;
var mostrarCPU;

function cpuJoga() {
  if (jogando) {
    var l, c;

    if (document.getElementById("escolherOLado").value == 1) {
      player = "X";
      playerCPU = "O";
    } else if (document.getElementById("escolherOLado").value == 2) {
      player = "O";
      playerCPU = "X";
    }
    mostrarjogador = player;
    mostrarCPU = playerCPU;

    if (document.getElementById("nivelselector").value == 1) {
      do {
        l = Math.round(Math.random() * 2);
        c = Math.round(Math.random() * 2);
      } while (jogo[l][c] != "");
      jogo[l][c] = `${playerCPU}`;
    } else if (document.getElementById("nivelselector").value == 2) {
      //ATAQUE
      //jogadas linha 1
      if (
        jogo[0][0] == `${playerCPU}` &&
        jogo[0][1] == `${playerCPU}` &&
        jogo[0][2] == ""
      ) {
        jogo[0][2] = `${playerCPU}`;
      } else if (
        jogo[0][0] == `${playerCPU}` &&
        jogo[0][2] == `${playerCPU}` &&
        jogo[0][1] == ""
      ) {
        jogo[0][1] = `${playerCPU}`;
      } else if (
        jogo[0][1] == `${playerCPU}` &&
        jogo[0][2] == `${playerCPU}` &&
        jogo[0][0] == ""
      ) {
        jogo[0][0] = `${playerCPU}`;
      }
      //jogadas linha 2
      else if (
        jogo[1][0] == `${playerCPU}` &&
        jogo[1][1] == `${playerCPU}` &&
        jogo[1][2] == ""
      ) {
        jogo[1][2] = `${playerCPU}`;
      } else if (
        jogo[1][0] == `${playerCPU}` &&
        jogo[1][2] == `${playerCPU}` &&
        jogo[1][1] == ""
      ) {
        jogo[1][1] = `${playerCPU}`;
      } else if (
        jogo[1][1] == `${playerCPU}` &&
        jogo[1][2] == `${playerCPU}` &&
        jogo[1][0] == ""
      ) {
        jogo[1][0] = `${playerCPU}`;
      }
      //jogadas linha 3
      else if (
        jogo[2][0] == `${playerCPU}` &&
        jogo[2][1] == `${playerCPU}` &&
        jogo[2][2] == ""
      ) {
        jogo[2][2] = `${playerCPU}`;
      } else if (
        jogo[2][0] == `${playerCPU}` &&
        jogo[2][2] == `${playerCPU}` &&
        jogo[2][1] == ""
      ) {
        jogo[2][1] = `${playerCPU}`;
      } else if (
        jogo[2][1] == `${playerCPU}` &&
        jogo[2][2] == `${playerCPU}` &&
        jogo[2][0] == ""
      ) {
        jogo[2][0] = `${playerCPU}`;
      }
      //jogadas coluna 1
      else if (
        jogo[0][0] == `${playerCPU}` &&
        jogo[1][0] == `${playerCPU}` &&
        jogo[2][0] == ""
      ) {
        jogo[2][0] = `${playerCPU}`;
      } else if (
        jogo[0][0] == `${playerCPU}` &&
        jogo[2][0] == `${playerCPU}` &&
        jogo[1][0] == ""
      ) {
        jogo[1][0] = `${playerCPU}`;
      } else if (
        jogo[1][0] == `${playerCPU}` &&
        jogo[2][0] == `${playerCPU}` &&
        jogo[0][0] == ""
      ) {
        jogo[0][0] = `${playerCPU}`;
      }
      //jogadas coluna 2
      else if (
        jogo[0][1] == `${playerCPU}` &&
        jogo[1][1] == `${playerCPU}` &&
        jogo[2][1] == ""
      ) {
        jogo[2][1] = `${playerCPU}`;
      } else if (
        jogo[0][1] == `${playerCPU}` &&
        jogo[2][1] == `${playerCPU}` &&
        jogo[1][1] == ""
      ) {
        jogo[1][1] = `${playerCPU}`;
      } else if (
        jogo[1][1] == `${playerCPU}` &&
        jogo[2][1] == `${playerCPU}` &&
        jogo[0][1] == ""
      ) {
        jogo[0][1] = `${playerCPU}`;
      }
      //jogadas coluna 3
      else if (
        jogo[0][2] == `${playerCPU}` &&
        jogo[1][2] == `${playerCPU}` &&
        jogo[2][2] == ""
      ) {
        jogo[2][2] = `${playerCPU}`;
      } else if (
        jogo[0][2] == `${playerCPU}` &&
        jogo[2][2] == `${playerCPU}` &&
        jogo[1][2] == ""
      ) {
        jogo[1][2] = `${playerCPU}`;
      } else if (
        jogo[1][2] == `${playerCPU}` &&
        jogo[2][2] == `${playerCPU}` &&
        jogo[0][2] == ""
      ) {
        jogo[0][2] = `${playerCPU}`;
      }
      //jogadas diagonal 1
      else if (
        jogo[0][0] == `${playerCPU}` &&
        jogo[1][1] == `${playerCPU}` &&
        jogo[2][2] == ""
      ) {
        jogo[2][2] = `${playerCPU}`;
      } else if (
        jogo[0][0] == `${playerCPU}` &&
        jogo[2][2] == `${playerCPU}` &&
        jogo[1][1] == ""
      ) {
        jogo[1][1] = `${playerCPU}`;
      } else if (
        jogo[1][1] == `${playerCPU}` &&
        jogo[2][2] == `${playerCPU}` &&
        jogo[0][0] == ""
      ) {
        jogo[0][0] = `${playerCPU}`;
      }
      //jogadas diagonal 2
      else if (
        jogo[0][2] == `${playerCPU}` &&
        jogo[1][1] == `${playerCPU}` &&
        jogo[2][0] == ""
      ) {
        jogo[2][0] = `${playerCPU}`;
      } else if (
        jogo[0][2] == `${playerCPU}` &&
        jogo[2][0] == `${playerCPU}` &&
        jogo[1][1] == ""
      ) {
        jogo[1][1] = `${playerCPU}`;
      } else if (
        jogo[2][0] == `${playerCPU}` &&
        jogo[1][1] == `${playerCPU}` &&
        jogo[0][2] == ""
      ) {
        jogo[0][2] = `${playerCPU}`;
      }
      //DEFESA
      //jogadas linha 1
      else if (
        jogo[0][0] == `${player}` &&
        jogo[0][1] == `${player}` &&
        jogo[0][2] == ""
      ) {
        jogo[0][2] = `${playerCPU}`;
      } else if (
        jogo[0][0] == `${player}` &&
        jogo[0][2] == `${player}` &&
        jogo[0][1] == ""
      ) {
        jogo[0][1] = `${playerCPU}`;
      } else if (
        jogo[0][1] == `${player}` &&
        jogo[0][2] == `${player}` &&
        jogo[0][0] == ""
      ) {
        jogo[0][0] = `${playerCPU}`;
      }
      //jogadas linha 2
      else if (
        jogo[1][0] == `${player}` &&
        jogo[1][1] == `${player}` &&
        jogo[1][2] == ""
      ) {
        jogo[1][2] = `${playerCPU}`;
      } else if (
        jogo[1][0] == `${player}` &&
        jogo[1][2] == `${player}` &&
        jogo[1][1] == ""
      ) {
        jogo[1][1] = `${playerCPU}`;
      } else if (
        jogo[1][1] == `${player}` &&
        jogo[1][2] == `${player}` &&
        jogo[1][0] == ""
      ) {
        jogo[1][0] = `${playerCPU}`;
      }
      //jogadas linha 3
      else if (
        jogo[2][0] == `${player}` &&
        jogo[2][1] == `${player}` &&
        jogo[2][2] == ""
      ) {
        jogo[2][2] = `${playerCPU}`;
      } else if (
        jogo[2][0] == `${player}` &&
        jogo[2][2] == `${player}` &&
        jogo[2][1] == ""
      ) {
        jogo[2][1] = `${playerCPU}`;
      } else if (
        jogo[2][1] == `${player}` &&
        jogo[2][2] == `${player}` &&
        jogo[2][0] == ""
      ) {
        jogo[2][0] = `${playerCPU}`;
      }
      //jogadas coluna 1
      else if (
        jogo[0][0] == `${player}` &&
        jogo[1][0] == `${player}` &&
        jogo[2][0] == ""
      ) {
        jogo[2][0] = `${playerCPU}`;
      } else if (
        jogo[0][0] == `${player}` &&
        jogo[2][0] == `${player}` &&
        jogo[1][0] == ""
      ) {
        jogo[1][0] = `${playerCPU}`;
      } else if (
        jogo[1][0] == `${player}` &&
        jogo[2][0] == `${player}` &&
        jogo[0][0] == ""
      ) {
        jogo[0][0] = `${playerCPU}`;
      }
      //jogadas coluna 2
      else if (
        jogo[0][1] == `${player}` &&
        jogo[1][1] == `${player}` &&
        jogo[2][1] == ""
      ) {
        jogo[2][1] = `${playerCPU}`;
      } else if (
        jogo[0][1] == `${player}` &&
        jogo[2][1] == `${player}` &&
        jogo[1][1] == ""
      ) {
        jogo[1][1] = `${playerCPU}`;
      } else if (
        jogo[1][1] == `${player}` &&
        jogo[2][1] == `${player}` &&
        jogo[0][1] == ""
      ) {
        jogo[0][1] = `${playerCPU}`;
      }
      //jogadas coluna 3
      else if (
        jogo[0][2] == `${player}` &&
        jogo[1][2] == `${player}` &&
        jogo[2][2] == ""
      ) {
        jogo[2][2] = `${playerCPU}`;
      } else if (
        jogo[0][2] == `${player}` &&
        jogo[2][2] == `${player}` &&
        jogo[1][2] == ""
      ) {
        jogo[1][2] = `${playerCPU}`;
      } else if (
        jogo[1][2] == `${player}` &&
        jogo[2][2] == `${player}` &&
        jogo[0][2] == ""
      ) {
        jogo[0][2] = `${playerCPU}`;
      }
      //jogadas diagonal 1
      else if (
        jogo[0][0] == `${player}` &&
        jogo[1][1] == `${player}` &&
        jogo[2][2] == ""
      ) {
        jogo[2][2] = `${playerCPU}`;
      } else if (
        jogo[0][0] == `${player}` &&
        jogo[2][2] == `${player}` &&
        jogo[1][1] == ""
      ) {
        jogo[1][1] = `${playerCPU}`;
      } else if (
        jogo[1][1] == `${player}` &&
        jogo[2][2] == `${player}` &&
        jogo[0][0] == ""
      ) {
        jogo[0][0] = `${playerCPU}`;
      }
      //jogadas diagonal 2
      else if (
        jogo[0][2] == `${player}` &&
        jogo[1][1] == `${player}` &&
        jogo[2][0] == ""
      ) {
        jogo[2][0] = `${playerCPU}`;
      } else if (
        jogo[0][2] == `${player}` &&
        jogo[2][0] == `${player}` &&
        jogo[1][1] == ""
      ) {
        jogo[1][1] = `${playerCPU}`;
      } else if (
        jogo[2][0] == `${player}` &&
        jogo[1][1] == `${player}` &&
        jogo[0][2] == ""
      ) {
        jogo[0][2] = `${playerCPU}`;
      } else {
        if (jogada < 8) {
          do {
            l = Math.round(Math.random() * 2);
            c = Math.round(Math.random() * 2);
          } while (jogo[l][c] != "");
          jogo[l][c] = `${playerCPU}`;
        } else {
          for (var l = 0; l < 3; l++) {
            for (var c = 0; c < 3; c++) {
              if (jogo[l][c] == "") {
                jogo[l][c] = `${playerCPU}`;
              }
            }
          }
        }
      }
    }
    verifica = verificaVitoria();

    // verificação se O ganhou
    if (verifica != "") {
      jogando = false;
      mostrarVencedor();
    }
    atualizaTabuleiro();
    jogada++;

    verificaEmpate(jogada);
    quemJoga = 0;
  }
}

function verificaVitoria() {
  var l, c;
  //LINHAS
  for (l = 0; l < 3; l++) {
    if (jogo[l][0] == jogo[l][1] && jogo[l][1] == jogo[l][2]) {
      return jogo[l][0];
    }
  }
  //COLUNAS
  for (c = 0; c < 3; c++) {
    if (jogo[0][c] == jogo[1][c] && jogo[1][c] == jogo[2][c]) {
      return jogo[0][c];
    }
  }
  //DIAGONAIS
  if (jogo[0][0] == jogo[1][1] && jogo[1][1] == jogo[2][2]) {
    return jogo[0][0];
  }
  if (jogo[0][2] == jogo[1][1] && jogo[1][1] == jogo[2][0]) {
    return jogo[0][2];
  }
  return "";
}

function jogar(p) {
  if (document.getElementById("escolherOLado").value == 1) {
    player = "X";
    playerCPU = "O";
  } else if (document.getElementById("escolherOLado").value == 2) {
    player = "O";
    playerCPU = "X";
  }
  if (jogando && quemJoga == 0) {
    switch (p) {
      case 1:
        if (jogo[0][0] == "") {
          jogo[0][0] = `${player}`;
          quemJoga = 1;
        }
        break;
      case 2:
        if (jogo[0][1] == "") {
          jogo[0][1] = `${player}`;
          quemJoga = 1;
        }
        break;
      case 3:
        if (jogo[0][2] == "") {
          jogo[0][2] = `${player}`;
          quemJoga = 1;
        }
        break;
      case 4:
        if (jogo[1][0] == "") {
          jogo[1][0] = `${player}`;
          quemJoga = 1;
        }
        break;
      case 5:
        if (jogo[1][1] == "") {
          jogo[1][1] = `${player}`;
          quemJoga = 1;
        }
        break;
      case 6:
        if (jogo[1][2] == "") {
          jogo[1][2] = `${player}`;
          quemJoga = 1;
        }
        break;
      case 7:
        if (jogo[2][0] == "") {
          jogo[2][0] = `${player}`;
          quemJoga = 1;
        }
        break;
      case 8:
        if (jogo[2][1] == "") {
          jogo[2][1] = `${player}`;
          quemJoga = 1;
        }
        break;
      default:
        //Caso 9
        if (jogo[2][2] == "") {
          jogo[2][2] = `${player}`;
          quemJoga = 1;
        }
        break;
    }
    if (quemJoga == 1) {
      atualizaTabuleiro();
      verifica = verificaVitoria();

      if (verifica != "") {
        jogando = false;
        mostrarVencedor();
      }
      ++jogada;
      verificaEmpate(jogada);
      cpuJoga();
    }
  }
}

function atualizaTabuleiro() {
  for (var l = 0; l < 3; l++) {
    for (var c = 0; c < 3; c++) {
      if (jogo[l][c] == "X") {
        tabuleiro[l][c].innerHTML = "X";
        tabuleiro[l][c].style.cursor = "default";
      } else if (jogo[l][c] == "O") {
        tabuleiro[l][c].innerHTML = "O";
        tabuleiro[l][c].style.cursor = "default";
      } else {
        tabuleiro[l][c].innerHTML = "";
        tabuleiro[l][c].style.cursor = "pointer";
      }
    }
  }
}

function inicia() {
  jogando = true;
  jogadaCpu = 1;

  jogada = 0;
  jogo = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  tabuleiro = [
    [
      document.getElementById("p1"),
      document.getElementById("p2"),
      document.getElementById("p3"),
    ],
    [
      document.getElementById("p4"),
      document.getElementById("p5"),
      document.getElementById("p6"),
    ],
    [
      document.getElementById("p7"),
      document.getElementById("p8"),
      document.getElementById("p9"),
    ],
  ];
  atualizaTabuleiro();
  if (quemComeca == 1) {
    quemComeca = 0;
    quemJoga = quemComeca;
    document.getElementById("dvQuemComeca").innerHTML = "Quem Começa: Jogador";
  } else {
    quemComeca = 1;
    quemJoga = quemComeca;
    document.getElementById("dvQuemComeca").innerHTML = "Quem Começa: CPU";
    cpuJoga();
  }
}

function mostrarVencedor() {
  const vencedorO = new Promise((resolve, reject) => {
    setTimeout(() => {
      Swal.fire({
        title: `${verifica} venceu`,
        showDenyButton: true,
        confirmButtonText: `Reiniciar`,
        denyButtonText: `Desisto`,
        imageUrl: "../img/avatar.png",
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: "Jogo da Velha",
      }).then((result) => {
        if (result.isConfirmed) {
          inicia();
        } else if (result.isDenied) {
          Swal.fire({ title: "Que pena, volte sempre!", timer: 1000 });
        }
      });
    }, 300);
  });
}

function verificaEmpate(numeroDeJogadas) {
  //var possivelGanhador = verificaVitoria();
  if (numeroDeJogadas === 9 && verificaVitoria() == "") {
    const vencedorO = new Promise((resolve, reject) => {
      setTimeout(() => {
        Swal.fire({
          title: "EMPATE",
          showDenyButton: true,
          confirmButtonText: `Reiniciar`,
          denyButtonText: `Desisto`,
          imageUrl: "../img/avatar.png",
          imageWidth: 200,
          imageHeight: 200,
          imageAlt: "Custom image",
        }).then((result) => {
          if (result.isConfirmed) {
            inicia();
          } else if (result.isDenied) {
            Swal.fire({ title: "Que pena, volte sempre!", timer: 1000 });
          }
        });
      }, 300);
    });
  }
}

window.addEventListener("load", inicia);
