<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Elias Grove</title>
    <link href="https://fonts.googleapis.com/css2?family=EB+Garamond&family=Inter:wght@400;600&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
      body {
        font-family: 'Inter', sans-serif;
      }
      h1, h2, h3 {
        font-family: 'EB Garamond', serif;
      }
      .fade-in {
        opacity: 0;
        animation: fadeIn ease 2s forwards;
      }
      @keyframes fadeIn {
        to {
          opacity: 1;
        }
      }
    </style>
  </head>
  <body class="bg-black text-white">

    <!-- Hero / Landing -->
    <section class="relative h-screen flex flex-col justify-center items-center text-center px-6 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1522120690810-7a7d41dcd81d?auto=format&fit=crop&w=1650&q=80');">
      <div class="bg-black/60 absolute inset-0"></div>
      <div class="relative z-10">
        <h1 class="text-5xl md:text-7xl font-serif mb-4 fade-in">Elias Grove</h1>
        <p class="text-lg md:text-xl italic text-gray-300 fade-in" style="animation-delay: 0.5s;">I write fiction. You can find my work below.</p>
        <div class="mt-10 animate-bounce">
          <a href="#about" class="text-white text-2xl">&#8595;</a>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="bg-white text-black py-20 px-6 md:px-20">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-serif mb-6 fade-in">About</h2>
        <p class="text-lg leading-relaxed fade-in" style="animation-delay: 0.3s;">
          Elias Grove writes fiction. Gritty, grounded, and literary—his work moves through haunted places and haunted people. He doesn’t bother with the sugarcoat.
        </p>
      </div>
    </section>

    <!-- Works Section -->
    <section id="works" class="bg-black text-white py-20 px-6 md:px-20">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-serif mb-10 fade-in">Works</h2>
        <div class="space-y-8">
          <div class="fade-in">
            <h3 class="text-2xl font-serif">Concerning the Vampire of the Vieux Carré</h3>
            <p class="text-sm text-gray-400 uppercase tracking-widest">Short Story</p>
          </div>

          <div class="fade-in" style="animation-delay: 0.1s;">
            <h3 class="text-2xl font-serif">For All the Goodbyes</h3>
            <p class="text-sm text-gray-400 uppercase tracking-widest">Novel</p>
          </div>

          <div class="fade-in" style="animation-delay: 0.2s;">
            <h3 class="text-2xl font-serif">The Nugget</h3>
            <p class="text-sm text-gray-400 uppercase tracking-widest">Novel</p>
          </div>

          <div class="fade-in" style="animation-delay: 0.3s;">
            <h3 class="text-2xl font-serif">Ghostwriter</h3>
            <p class="text-sm text-yellow-500 uppercase tracking-widest">Work in Progress</p>
          </div>

          <div class="fade-in" style="animation-delay: 0.4s;">
            <h3 class="text-2xl font-serif">Tochmarc</h3>
            <p class="text-sm text-yellow-500 uppercase tracking-widest">Work in Progress</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="bg-white text-black py-20 px-6 md:px-20">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-serif mb-10 fade-in">Contact</h2>
        <p class="text-lg mb-8 fade-in" style="animation-delay: 0.2s;">
          Reach out via email or find me on social media:
        </p>
        <ul class="space-y-4 text-lg fade-in" style="animation-delay: 0.3s;">
          <li>
            <a href="mailto:contact@eliasgrove.com" class="hover:underline">
              📧 contact@eliasgrove.com
            </a>
          </li>
          <li>
            <a href="https://twitter.com/elias_grove" target="_blank" class="hover:underline">
              🐦 @elias_grove
            </a>
          </li>
          <li>
            <a href="https://instagram.com/a.elias.grove" target="_blank" class="hover:underline">
              📷 @a.elias.grove
            </a>
          </li>
        </ul>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-black text-gray-400 text-center text-sm py-6">
      © 2025 Elias Grove. All rights reserved.
    </footer>
  </body>
</html>
