function search() {
  const searchInput = document.getElementById('searchInput');
  const symptom1Input = document.getElementById('symptom1');
  const symptom2Input = document.getElementById('symptom2');
  const symptom3Input = document.getElementById('symptom3');
  const symptom4Input = document.getElementById('symptom4');

  const searchTerm = searchInput.value.trim();

  // Verificar se o campo de busca está vazio
  if (searchTerm === '') {
    alert('Por favor, digite um sintoma.');
    return;
  }

  // Verificar se o campo de busca contém apenas letras
  if (!/^[a-zA-Z\s]+$/.test(searchTerm)) {
    alert('No campo Buscar, digite apenas letras.');
    return;
  }

  // Verificar se o campo Sintoma 1 está vazio
  if (symptom1Input.value.trim() === '') {
    // Se estiver vazio, preencher com o termo de busca
    symptom1Input.value = searchTerm;
  } else if (symptom2Input.value.trim() === '') {
    // Se o Sintoma 1 já estiver preenchido, preencher o Sintoma 2
    symptom2Input.value = searchTerm;
  } else if (symptom3Input.value.trim() === '') {
    // Se o Sintoma 2 já estiver preenchido, preencher o Sintoma 3
    symptom3Input.value = searchTerm;
  } else if (symptom4Input.value.trim() === '') {
    // Se o Sintoma 3 já estiver preenchido, preencher o Sintoma 4
    symptom4Input.value = searchTerm;
  } else {
    // Se todos os sintomas já estiverem preenchidos, exibir uma mensagem de aviso
    alert('Você já inseriu todos os sintomas disponíveis.');
  }

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
  
  
  