<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-grid">
        <!-- Columna 1 -->
        <div>
          <p class="footer-text">© 2024 Teeworlds Quack Serves. Fake Web.</p>
        </div>
        <!-- Columna 2 -->
        <div>
          <h4 class="footer-heading">Redes Sociales</h4>
          <ul class="footer-list">
            <li><a href="#" class="footer-link">Discord</a></li>
            <li><a href="#" class="footer-link">Twitter</a></li>
            <li><a href="#" class="footer-link">Reddit</a></li>
          </ul>
        </div>
        <!-- Columna 3 -->
        <div>
          <h4 class="footer-heading">Recursos</h4>
          <ul class="footer-list">
            <li><a href="#" class="footer-link">Noticias</a></li>
          </ul>
        </div>
        <!-- Columna 4 -->
        <div>
          <h4 class="footer-heading">Acerca de</h4>
          <ul class="footer-list">
            <li><a href="#" class="footer-link">Equipo</a></li>
            <li><a href="#" class="footer-link">Términos de Servicio</a></li>
            <li><a href="#" class="footer-link">Política de Privacidad</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
.footer {
  background-color: #2d3748; /* Similar a bg-gray-800 */
  color: #d1d5db; /* Similar a text-gray-300 */
  padding: 2rem 0;
}

.footer-container {
  max-width: 80rem; /* Similar a max-w-7xl */
  margin: 0 auto;
  padding: 0 1rem; /* Similar a px-4 */
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 640px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .footer-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.footer-text {
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-bottom: 0.5rem;
}

.footer-heading {
  font-size: 1.125rem; /* Similar a text-lg */
  font-weight: 600; /* Similar a font-semibold */
  margin-bottom: 1rem;
}

.footer-list {
  list-style: none;
  padding: 0;
}

.footer-link {
  color: #d1d5db; /* Similar a text-gray-300 */
  text-decoration: none;
  transition: color 0.3s;
}

.footer-link:hover {
  color: #9ca3af; /* Similar a hover:text-gray-400 */
}
</style>
