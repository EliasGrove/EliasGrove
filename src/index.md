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
      h1, h2 {
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

    <!-- About anchor (we'll build this next) -->
    <section id="about"></section>
  </body>
</html>
