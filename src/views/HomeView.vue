<template>
  <div class="background">
    <div class="overlay"></div>
    <div class="content animate-fade-in">
      <h1 class="title">
        TEEWORLDS QUACK SERVERS
      </h1>
      <Button label="Descargar" rounded raised class="custom-button" />
    </div>
  </div>

  <section class="news-section">
    <div class="container">
      <div class="text-center mb-8">
        <h2 class="section-title">Últimas Noticias</h2>
      </div>
      <div class="news-container">
        <div class="table-wrapper">
          <table class="news-table">
            <thead>
              <tr>
                <th class="news-header">Lanzamiento de los Nuevos Servidores</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="news-content">
                  <p>Estamos emocionados de anunciar el lanzamiento de nuestros nuevos servidores. Después de meses de desarrollo y pruebas exhaustivas, finalmente están disponibles para que la comunidad los disfrute.</p>
                  <br>
                  <p>Los nuevos servidores ofrecen una experiencia de juego mejorada, con una mayor estabilidad, rendimiento optimizado y nuevas características emocionantes. Desde nuevas arenas hasta modos de juego únicos, hay algo para todos los jugadores.</p>
                  <br>
                  <p>¡Únete a nosotros en este emocionante lanzamiento y sumérgete en la acción de Teeworlds Quack Serves hoy mismo!</p>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td class="news-footer">26-05-2024</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </section>

  <hr class="divider">

  <section class="community-section">
    <div class="container">
      <div class="text-center">
        <h2 class="section-title">Únete a Nuestra Comunidad</h2>
      </div>
      <div class="buttons-container">
        <div class="button-row">
          <Button label="Discord" raised class="community-button discord" />
          <Button label="Twitter" raised class="community-button twitter" />
          <Button label="Reddit" raised class="community-button reddit" />
        </div>
        <div class="button-row">
          <Button label="Soporte" raised class="community-button support" />
        </div>
      </div>
    </div>
  </section>

  <hr class="divider">

  <section class="download-section">
    <div class="container">
      <div class="text-center">
        <h2 class="section-title">Descarga el cliente oficial de Quack Serves</h2>
      </div>
      <div class="buttons-container">
        <div class="button-row">
          <Button label="Windows" raised class="download-button windows" />
          <Button label="Mac" raised class="download-button mac" />
          <Button label="Linux" raised class="download-button linux" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 2s ease-in-out;
}

.background {
  position: relative;
  height: 100vh;
  background: url('src/assets/teeworlds_wallpaper.png') no-repeat center center;
  background-size: cover;
}

.overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.2);
}

.content {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  text-align: center;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  color: black;
  margin-bottom: 1rem;
}

.custom-button {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  border: 2px solid #f0c040;
  background-color: transparent;
  color: black;
  cursor: pointer;
  border-radius: 9999px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.custom-button:hover {
  background-color: #f0c040;
  color: white;
  transform: translateY(-3px);
}

.custom-button:active {
  transform: translateY(2px);
  box-shadow: 0 5px #666;
}

.news-section, .community-section, .download-section {
  padding: 3rem 1rem;
}

.container {
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1rem;
}

.section-title {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
}

.news-container {
  max-width: 100%;
  margin: 0 auto;
}

.table-wrapper {
  overflow-x: auto;
}

.news-table {
  width: 100%;
  border: 1px solid #3f3f3f;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.news-header, .news-footer {
  padding: 1rem;
  background-color: #323232;
  border: 1px solid #3f3f3f;
}

.news-content {
  padding: 1.5rem;
}

.divider {
  border-top: 2px solid #3f3f3f;
  margin: 2rem 0;
}

.buttons-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
}

.button-row {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.community-button, .download-button {
  padding: 1rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 10rem;
}
  
.community-button.discord {
  background-color: #7289da;
}

.community-button.twitter {
  background-color: #1da1f2;
}

.community-button.reddit {
  background-color: #ff4500;
}

.community-button.support {
  background-color: #4b4b4b;
}

.download-button.windows {
  background-color: #0078d7;
}

.download-button.mac {
  background-color: #a1a1a1;
}

.download-button.linux {
  background-color: #f68b1e;
}

.community-button:hover, .download-button:hover {
  color: white;
  transform: translateY(-3px);
}

.community-button:active, .download-button:active {
  transform: translateY(2px);
  box-shadow: 0 5px #666;
}

@media (min-width: 768px) {
  .title {
    font-size: 3rem;
  }

  .custom-button {
    font-size: 1.5rem;
    padding: 1rem 2rem;
  }

  .community-button, .download-button {
    font-size: 1.25rem;
    padding: 0.75rem 1.5rem;
  }
}

@media (min-width: 1024px) {
  .title {
    font-size: 4rem;
  }

  .custom-button {
    font-size: 2rem;
    padding: 1.5rem 3rem;
  }

  .community-button, .download-button {
    font-size: 1.5rem;
    padding: 1rem 2rem;
  }
}

</style>
