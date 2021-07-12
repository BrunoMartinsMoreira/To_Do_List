const cadastraTarefa = document.querySelector('.input-tarefa');
const btnCadastraTarefa = document.querySelector('.btn-tarefa');
const listaDeTarefas = document.querySelector('.lista-tarefas');

cadastraTarefa.addEventListener('keypress', (event) => {
   if (event.keyCode === 13) {
      if (!cadastraTarefa.value) return;
      criaTarefa(cadastraTarefa.value);
   }
});

function criaLista() {
   const li = document.createElement('li');
   return li;
};

function criaTarefa(tarefa) {
   const lista = criaLista();
   lista.innerText = tarefa;
   listaDeTarefas.appendChild(lista);
   limpaInput();
   criaBtnApagar(lista);
   salvarTarefas();
};

btnCadastraTarefa.addEventListener('click', () => {
   if (!cadastraTarefa.value) return;
   criaTarefa(cadastraTarefa.value);
});

function limpaInput() {
   cadastraTarefa.value = "";
   cadastraTarefa.focus();
};

function criaBtnApagar(lista) {
   lista.innerText += ' ';
   const btnApagar = document.createElement('button');
   btnApagar.innerText = 'Apagar';
   btnApagar.setAttribute('class', 'apagar');
   btnApagar.setAttribute('title', 'Apagar essa tarefa.')
   lista.appendChild(btnApagar);
};

document.addEventListener('click', (event) => {
   const el = event.target;
   if (el.classList.contains('apagar')) {
      el.parentElement.remove();
   }
});

function salvarTarefas() {
   const tarefasParaSalvar = listaDeTarefas.querySelectorAll('li')
   const arrayTarefas = [];
   for (let tarefa of tarefasParaSalvar) {
      let tarefaTexto = tarefa.innerText;
      tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
      arrayTarefas.push(tarefaTexto)
   }
   console.log(arrayTarefas)
};