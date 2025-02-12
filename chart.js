  const ctx = document.getElementById('lineChart').getContext('2d');

  new Chart(ctx, {
    type: 'line',  // Cambia a 'line' para crear un gráfico de línea
    data: {
      labels: ['Human Resources', 'CRM Development', 'Data Analytics', 'Experience Design', 'Cloud Services', 'Management Consulting','Digital Transformation','IT Operations','Marketing','Finance','Legal','Operations & Support','Business & Strategy','Innovation & Research'],
      datasets: [{
        label: 'Certifications 2024',
        data: [12, 19, 17, 11, 12, 14,20,17,15,14,11,12,10,9,8],
        borderColor: 'rgba(99, 102, 241)', // Color de la línea
        backgroundColor: 'rgba(213, 214, 255, 0.5)', // Color de fondo (si deseas rellenar el área debajo de la línea)
        fill: true,  // Para llenar el área debajo de la curva
        borderWidth: 2,
        tension: 0.5 // Este valor hace que la línea sea curvada. Ajusta este valor para suavizar más o menos la curva
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  
  
const ctx2 = document.getElementById('barChart');

  new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Febr', 'Mar', 'Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'],
      datasets: [{
        label: 'Training hours 2024',
        data: [165, 207, 217 ,198, 187, 185, 191, 198, 175, 182, 174, 155],
        borderColor: 'rgba(99, 102, 241)',
        backgroundColor: 'rgba(213, 214, 255, 0.5)',
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  