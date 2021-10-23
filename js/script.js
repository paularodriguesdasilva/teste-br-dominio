// pegando os elementos do HTML da seção Destaques
const btnEmphasisLeft = document.getElementById("btn-emphasis-left");
const btnEmphasisRight = document.getElementById("btn-emphasis-right");
const divEmphasis = document.getElementById("emphasis");

// pegando os elementos do HTML da seção Produtos Populares
const btnProductLeft = document.getElementById("btn-product-left");
const btnProductRight = document.getElementById("btn-product-right");
const divProduct = document.getElementById("products");

const btnSearch = document.getElementById("btn-search");
const divInputSearch = document.getElementById("div-input-search");

btnSearch.addEventListener("click", () => {
  let newInput = `
    <input type="text" placeholder="Digite aqui sua pesquisa..."/>
  `;
  divInputSearch.innerHTML = newInput;
  console.log("entrei na função input");
});

// funções para trocar os produtos na seção Destaques
function handleButtonLeft() {
  let newContent = `
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img class="img-fluid rounded-start" src="./assets/Lencos-Umedecidos.jpg" alt="Lenços" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">R$ 99,99</h5>
          <p class="card-text">Nome do produto</p>
        </div>
      </div>
    </div>
  </div>

  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img class="img-fluid rounded-start" src="./assets/Ninho-Fases-3.jpg" alt="Luftal" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">R$ 99,99</h5>
          <p class="card-text">Nome do produto</p>
        </div>
      </div>
    </div>
  </div>

  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img class="img-fluid rounded-start" src="./assets/Sabonete-Pom-Pom.png" alt="Nevralgex" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">R$ 99,99</h5>
          <p class="card-text">Nome do produto</p>
        </div>
      </div>
    </div>
  </div>
</div>
  `;

  divEmphasis.innerHTML = newContent;
}

function handleButtonRight() {
  let newContent = `
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img class="img-fluid rounded-start" src="./assets/colirio-lacrima.jpg" alt="Colirio" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">R$ 99,99</h5>
          <p class="card-text">Nome do produto</p>
        </div>
      </div>
    </div>
  </div>

  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img class="img-fluid rounded-start" src="./assets/luftal.jpg" alt="Luftal" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">R$ 99,99</h5>
          <p class="card-text">Nome do produto</p>
        </div>
      </div>
    </div>
  </div>

  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img class="img-fluid rounded-start" src="./assets/nevralgex.jpg" alt="Nevralgex" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">R$ 99,99</h5>
          <p class="card-text">Nome do produto</p>
        </div>
      </div>
    </div>
  </div>
</div>
  `;

  divEmphasis.innerHTML = newContent;
}

btnEmphasisLeft.addEventListener("click", handleButtonLeft);
btnEmphasisRight.addEventListener("click", handleButtonRight);

// funções para trocar os produtos na seção Produtos Populares

function handleButtonLeftProduct() {
  let newContent = `
  <div class="row" id="products">
    <div class="col">
      <div class="card text-center h-100">
        <img src="./assets/colirio-lacrima.jpg" class="card-img-top" alt="Colirio" />
        <div class="card-body">
          <h5 class="card-title">R$ 99,99</h5>
          <p class="card-text">Nome do produto</p>
          <a href="#" class="btn btn-primary">ADD CARRINHO</a>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="card text-center h-100">
        <img src="./assets/luftal.jpg" class="card-img-top" alt="Luftal" />
        <div class="card-body">
          <h5 class="card-title">R$ 99,99</h5>
          <p class="card-text">Nome do produto</p>
          <a href="#" class="btn btn-primary">ADD CARRINHO</a>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="card text-center h-100">
        <img src="./assets/nevralgex.jpg" class="card-img-top" alt="Nevralgex" />
        <div class="card-body">
          <h5 class="card-title">R$ 99,99</h5>
          <p class="card-text">Nome do produto</p>
          <a href="#" class="btn btn-primary">ADD CARRINHO</a>
        </div>
      </div>
    </div>
  </div>
  
  `;

  divProduct.innerHTML = newContent;
}

function handleButtonRightProduct() {
  let newContent = `
  <div class="row" id="products">
    <div class="col">
      <div class="card text-center h-100">
        <img src="./assets/Lencos-Umedecidos.jpg" class="card-img-top" alt="Lenços umedecidos" />
        <div class="card-body">
          <h5 class="card-title">R$ 99,99</h5>
          <p class="card-text">Nome do produto</p>
          <a href="#" class="btn btn-primary">ADD CARRINHO</a>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="card text-center h-100">
        <img src="./assets/Ninho-Fases-3.jpg" class="card-img-top" alt="Ninho fases" />
        <div class="card-body">
          <h5 class="card-title">R$ 99,99</h5>
          <p class="card-text">Nome do produto</p>
          <a href="#" class="btn btn-primary">ADD CARRINHO</a>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="card text-center h-100">
        <img src="./assets/Sabonete-Pom-Pom.png" class="card-img-top" alt="Sabonete Pom-Pom" />
        <div class="card-body">
          <h5 class="card-title">R$ 99,99</h5>
          <p class="card-text">Nome do produto</p>
          <a href="#" class="btn btn-primary">ADD CARRINHO</a>
        </div>
      </div>
    </div>
  </div>
  
  `;

  divProduct.innerHTML = newContent;
}

btnProductLeft.addEventListener("click", handleButtonLeftProduct);
btnProductRight.addEventListener("click", handleButtonRightProduct);
