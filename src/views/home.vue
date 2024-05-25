<template>
  <div class="relative h-screen bg-cover bg-center" style="background-image: url('src/assets/teeworlds_wallpaper.png');">
    <div class="absolute inset-0 bg-opacity-50"></div>
    <div class="absolute inset-0 flex flex-col items-center justify-center animate-fade-in">
      <h1 class="text-4xl md:text-6xl lg:text-8xl font-bold font-roboto text-black text-center mb-4">
        TEEWORLDS QUACK SERVERS
      </h1>
      <Button label="Descargar" rounded raised class="px-6 py-2 text-6xl border-2 border-yellow-200 text-black"/>
    </div>
  </div>

  <section class="py-12 ">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-8">
        <h2 class="text-4xl font-extrabold">Últimas Noticias</h2>
      </div>
      <div class="max-w-3xl mx-auto">
        <div class="overflow-x-auto">
          <table class="w-full rounded-lg border border-zinc-700 shadow-2xl">
            <thead>
              <tr>
                <th class="px-6 py-3 bg-zinc-800 border border-zinc-700">Lanzamiento de los Nuevos Servidores</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="px-6 py-4">
                  <p>Estamos emocionados de anunciar el lanzamiento de nuestros nuevos servidores. Después de meses de desarrollo y pruebas exhaustivas, finalmente están disponibles para que la comunidad los disfrute.</p>
                  <br>
                  <p>Los nuevos servidores ofrecen una experiencia de juego mejorada, con una mayor estabilidad, rendimiento optimizado y nuevas características emocionantes. Desde nuevas arenas hasta modos de juego únicos, hay algo para todos los jugadores.</p>
                  <br>
                  <p>¡Únete a nosotros en este emocionante lanzamiento y sumérgete en la acción de Teeworlds Quack Serves hoy mismo!</p>
                </td>
              </tr>
            </tbody>
            <tfoot class="px-6 py-3 bg-zinc-800 border border-zinc-700">
              <tr>
                <td class="text-center">26-05-2024</td>
              </tr>
            </tfoot> 
          </table>
        </div>
      </div>
    </div>
  </section>

  <hr class="border-t-2 border-zinc-700 my-8 mx-8">

  <section>
    <div class="py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-4xl font-extrabold">Únete a Nuestra Comunidad</h2>
        </div>
        <div class="mt-10 flex flex-col items-center space-y-4">
          <!-- Primera fila: Discord, Soporte, Reddit -->
          <div class="flex flex-wrap justify-center">
            <Button label="Discord" raised class="w-32 px-3 py-1 text-3xl bg-blue-900 mb-4"/>
            <div class="w-4"></div>
            <Button label="Twitter" raised class="w-32 px-3 py-1 text-3xl bg-sky-400 mb-4"/>
            <div class="w-4"></div>
            <Button label="Reddit" raised class="w-32 px-3 py-1 text-3xl bg-amber-600 mb-4"/>
          </div>
          <!-- Segunda fila: Segundo botón de Soporte -->
          <div class="flex justify-center">
            <Button label="Soporte" raised class="w-32 px-3 py-1 text-3xl bg-gray-600"/>
          </div>
        </div>
      </div>
    </div>
  </section>

  <hr class="border-t-2 border-zinc-700 my-8 mx-8">

  <section>
    <div class="py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-4xl font-extrabold">Descarga el cliente oficial de Quack Serves</h2>
        </div>
        <div class="mt-10 flex flex-col items-center space-y-4">
          <!-- Primera fila: Windows, Mac, Linux -->
          <div class="flex justify-center">
            <Button label="Windows" raised class="w-34 px-3 py-1 text-3xl bg-sky-400"/>
            <div class="w-4"></div> <!-- Espacio entre los botones -->
            <Button label="Mac" raised class="w-34 px-3 py-1 text-3xl bg-gray-400"/>
            <div class="w-4"></div> <!-- Espacio entre los botones -->
            <Button label="Linux" raised class="w-34 px-3 py-1 text-3xl bg-orange-600"/>
          </div>
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
</style>
