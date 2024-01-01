function search() {
  const searchInput = document.getElementById('searchInput');
  const symptom1Input = document.getElementById('symptom1');
  const symptom2Input = document.getElementById('symptom2');
  const symptom3Input = document.getElementById('symptom3');
  const symptom4Input = document.getElementById('symptom4');

  const searchTerm = searchInput.value.trim();

  // Defina o modo da solicitação como 'no-cors'
  const requestOptions = {
    method: 'GET',
    mode: 'no-cors',
  };

  // Verificar se o campo de busca está vazio
  if (searchTerm === '') {
    alert('Por favor, digite um sintoma.');
    return;
  }

  // Verificar se o campo de busca contém apenas letras ou espaços
  if (!/^[a-zA-Z\s]+$/.test(searchTerm)) {
    alert('No campo Buscar, digite apenas letras e espaços.');
    return;
  }

  // Fazer uma requisição ao servidor para buscar sintomas
  fetch(`http://localhost:3000/sintomas/${searchTerm}`)
    .then(response => response.json())
    .then(data => {
      // Verificar se há sintomas retornados
      if (data && data.length > 0) {
        // Preencher os campos de sintomas com os dados recebidos
        if (symptom1Input.value.trim() === '') {
          symptom1Input.value = data[0];
        } else if (symptom2Input.value.trim() === '') {
          symptom2Input.value = data[0];
        } else if (symptom3Input.value.trim() === '') {
          symptom3Input.value = data[0];
        } else if (symptom4Input.value.trim() === '') {
          symptom4Input.value = data[0];
        } else {
          alert('Você já inseriu todos os sintomas disponíveis.');
        }
      } else {
        alert('Sintoma não encontrado no banco de dados.');
      }
    })
    .catch(error => {
      console.error('Erro ao buscar sintomas:', error);
    });

  // Lógica adicional para realizar a pesquisa, se necessário
  console.log(`Pesquisando por: ${searchTerm}`);
}

  function showModal(title, text) {
    // Mostrar o modal
    const modal = document.getElementById('myModal');
    modal.style.display = 'block';
  
    // Preencher o modal com o título e texto
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalText').innerText = text;
  }
  
  function closeModal() {
    // Fechar o modal
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }
  
  function goToNextPage() {
    // Adicione aqui a lógica para ir para a próxima página
    // Por exemplo, você pode redirecionar para outra página ou exibir conteúdo dinâmico.
    const symptom1 = document.getElementById('symptom1').value;
    const symptom2 = document.getElementById('symptom2').value;
  
    // Verificar se pelo menos dois sintomas foram informados
    if (symptom1.trim() === '' || symptom2.trim() === '') {
      alert('Informe ao menos 2 sintomas.');
      return;
    }

    console.log('Analisando sintomas e indo para a próxima página (carregamento)...');
    window.location.href = 'carregamento.html';
  }
  
  function goToResultsPage() {
    // Adicione aqui a lógica para processamento adicional, se necessário
    console.log('Processamento adicional...');
    
    // Em seguida, redirecione para a página doencas.html
    window.location.href = 'doencas.html';
  }

  function goToExpertsPage() {
    // Adicione aqui a lógica para processamento adicional, se necessário
    console.log('Processamento adicional...');
    
    // Em seguida, redirecione para a página doencas.html
    window.location.href = 'especialistas.html';
  }

  function goToHomePage() {
    // Adicione aqui a lógica para processamento adicional, se necessário
    console.log('Processamento adicional...');
    
    // Em seguida, redirecione para a página doencas.html
    window.location.href = 'sintomas.html';
  }

  function goToEndPage() {
    // Adicione aqui a lógica para processamento adicional, se necessário
    console.log('Processamento adicional...');
    
    // Em seguida, redirecione para a página doencas.html
    window.location.href = 'finalizar.html';
  }
  
  
  