document.addEventListener('DOMContentLoaded', function() {
    var responses = {
        'Primeira Mensagem': [
            'Olá, como posso ajudar?',
            'Bem-vindo! Em que posso ser útil?'
        ],
        'Finalização de Atendimento': [
            'Obrigado por entrar em contato!',
            'Estamos sempre à disposição.'
        ],
        'Informações de Produto': [
            'Gostaria de saber mais sobre nossos produtos? Aqui estão alguns detalhes...',
            'Posso fornecer informações específicas sobre nossos produtos, o que gostaria de saber?'
        ],
        'Agendamento': [
            'Você gostaria de agendar uma consulta ou visita?',
            'Posso ajudar a encontrar um horário conveniente para você.'
        ],
        'Feedback': [
            'Agradecemos o seu feedback!',
            'Sua opinião é muito importante para nós.'
        ],
        'Dúvidas Frequentes': [
            'Aqui estão as respostas para algumas perguntas frequentes...',
            'Tenho informações que podem ajudar a esclarecer suas dúvidas.'
        ],
        'Promoções': [
            'Temos algumas promoções especiais no momento. Gostaria de conhecer?',
            'Confira nossas últimas ofertas e promoções!'
        ],
        'Suporte Técnico': [
            'Estou aqui para ajudar com suas questões técnicas. O que está acontecendo?',
            'Vamos resolver isso juntos. Por favor, me informe sobre o problema.'
        ],
        'Pagamento e Faturamento': [
            'Posso ajudar com questões relacionadas a pagamentos e faturas.',
            'Para perguntas sobre faturamento, estou à disposição.'
        ]
    };
    

  var container = document.getElementById('response-container');

  Object.keys(responses).forEach(category => {
      var categoryDiv = document.createElement('div');
      var header = document.createElement('h2');
      header.textContent = category;
      header.style.cursor = 'pointer';
      categoryDiv.appendChild(header);

      var responseDiv = document.createElement('div');
      responseDiv.style.display = 'none'; // Começa escondido
      responses[category].forEach(text => {
          var button = document.createElement('button');
          button.textContent = text;
          button.onclick = function() {
              navigator.clipboard.writeText(text);
          };
          responseDiv.appendChild(button);
      });

      categoryDiv.appendChild(responseDiv);
      container.appendChild(categoryDiv);

      header.onclick = function() {
          responseDiv.style.display = responseDiv.style.display === 'none' ? 'block' : 'none';
      };
  });
});
