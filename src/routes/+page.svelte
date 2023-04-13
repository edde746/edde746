<script>
  import { dragScroll } from '$lib/dragScroll';
  import Project from './Project.svelte';
</script>

<div class="max-w-4xl mx-auto px-4 py-8 grid gap-8">
  <div class="flex gap-8 justify-between items-center">
    <div class="space-y-2">
      <div class="flex gap-2 items-center">
        <h1>edde746</h1>
        <a rel="external" href="https://github.com/edde746" class="group">
          <img
            src="https://unpkg.com/simple-icons/icons/github.svg"
            alt="Github"
            class="h-5 w-5 group-hover:opacity-70 transition dark:invert"
          />
        </a>
      </div>
      <p>I mainly do web development.</p>
    </div>

    <img
      src="https://avatars.githubusercontent.com/u/86283021"
      alt="Avatar"
      class="rounded-full aspect-square w-24 hidden md:block"
    />
  </div>

  <div class="grid gap-8 md:gap-4 md:grid-cols-2">
    <div class="space-y-2">
      <h1>Languages</h1>
      <div class="languages">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          alt="TypeScript"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          alt="JavaScript"
        />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" />
      </div>
    </div>
    <div class="space-y-2">
      <h1>Technologies</h1>
      <div class="languages">
        <img
          class="dark:invert"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-plain.svg"
          alt="Svelte"
        />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg" alt="React" />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
          alt="Postgres"
        />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" alt="Redis" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
        <img
          class="dark:invert"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg"
          alt="Unity"
        />
      </div>
    </div>
  </div>

  <div class="space-y-2 relative overflow-x-hidden">
    <div>
      <h1>Web Projects</h1>
      <p class="text-sm">
        Various projects made with different technologies, including SvelteKit, Next.JS, React, Strapi and Django.
      </p>
    </div>
    <div class="projects grid gap-4 grid-cols-2">
      <Project title="RealDudesInc" href="https://realdudesinc.com" video="rdi.webm" thumbnail="rdi.webp">
        E-commerce site for software licenses built with SvelteKit, Strapi and Docker. Based of the previous design of
        the site but rewritten from scratch with Tailwind for styling.
      </Project>
      <Project title="Divine" href="https://divinemods.com" video="divine.webm" thumbnail="divine.webp">
        E-commerce site for software licenses built with SvelteKit, Strapi and Docker. Integrates Stripe, Coinbase and
        PayPal for payments and Amazon SES for email including magic-link login.
      </Project>
      <Project
        title="ZeroPoint Exotics"
        href="https://zeropointexotics.com"
        video="zeropoint.webm"
        thumbnail="zeropoint.webp"
      >
        Rental car booking site built with SvelteKit, Strapi and Docker. Renders contacts as docx and e-mails them. Cars
        can be managed via the Strapi admin panel.
      </Project>
      <Project title="Cedara" href="https://cedara.cc" video="cedara.mp4" thumbnail="cedara.webp">
        E-commerce site for software licenses built with SvelteKit, Strapi and Docker. Uses Stripe and Coinbase for
        payments and integrated OAuth login with Discord and Google.
      </Project>
      <Project
        title="Static Blog"
        href="https://github.com/edde746/sveltekit-markdown-blog"
        video="blog.webm"
        thumbnail="blog.webp"
      >
        A blog that statically generates pages from markdown files. Built with SvelteKit and Tailwind.
      </Project>
      <Project
        title="Flowbite React Svelte Port"
        href="https://github.com/edde746/flowbite-svelte-but-better"
        thumbnail="flowbite.webp"
      >
        Port of the Flowbite React to Svelte due to the lack of quality in the current Svelte version of Flowbite.
      </Project>
      <Project title="Twitter Clone" href="https://github.com/edde746/twitter-clone" video="twitter.mp4">
        Twitter clone built with SvelteKit and Redis. Uses Redis as the primary database and Amazon S3 for user uploads
        such as images.
      </Project>
      <Project
        title="TikTok Downloader"
        href="https://tiktok-downloader-ebon.vercel.app/"
        video="tiktok.mp4"
        thumbnail="tikdown.webp"
      >
        Most likely broken due to API changes.
      </Project>
      <Project title="Live Chat" href="https://github.com/edde746/live-chat" video="chat.webm" thumbnail="chat.webp">
        Very basic live chat built with Next.JS and Socket.IO.
      </Project>
      <Project title="RDPservers" href="https://edde746.github.io/rdpservers/" video="rdp.webm" thumbnail="rdp.webp">
        Final project for a course in web development. Built in Next.JS, no backend.
      </Project>
      <!-- <Project title="NFT Generator" href="https://edde746.github.io/nft-gen/" video="nft.mp4">
        Generate NFT like images from a set of components, uses HTML5 canvas.
      </Project> -->
      <Project
        title="Svelte Toasts Demo"
        href="https://edde746.github.io/svelte-toasts/"
        video="toasts.mp4"
        thumbnail="toasts.webp"
      >
        Alternative demo page for the Svelte Toasts library.
      </Project>
      <Project title="Gymnasieprojekt" href="https://github.com/edde746/gymnasieprojekt" video="gymnasieprojekt.mp4">
        Webshop for digital products built with Django and React for my gymnasieprojekt in 2021.
      </Project>
    </div>
  </div>

  <div class="space-y-2 relative overflow-x-hidden">
    <div>
      <h1>Game Projects</h1>
      <p class="text-sm">Games made with Unity and C#. Most are playable in browser powered by WASM.</p>
    </div>
    <div class="projects grid gap-4 grid-cols-2">
      <Project
        title="Survival Game"
        href="https://github.com/edde746/survival-spel/"
        video="survival.webm"
        thumbnail="survival.webp"
      >
        Survival game built in Unity, has procedural map generation, resources gathering, building, inventory and
        crafting system. Not playable in browser.
      </Project>
      <Project title="RPG Game" href="https://github.com/edde746/rpg-spel/" video="rpg.mp4" thumbnail="rpg.jpg">
        Basic RPG mechanics like movement and a dialogue system.
      </Project>
      <Project title="FPS Game" href="https://github.com/edde746/fps-spel/" video="fps.mp4" thumbnail="fps.jpg">
        First person shooter game with basic movement and shooting mechanics, time trial mode.
      </Project>
      <Project
        title="Angry Brids Clone"
        href="https://github.com/edde746/fysikspel/"
        video="fysik.mp4"
        thumbnail="fysikspel.jpg"
      >
        Physics based game with a slingshot mechanic. Trajectory preview and physics based movement.
      </Project>
      <Project
        title="Platformer"
        href="https://github.com/edde746/plattformspel/"
        video="plattform.mp4"
        thumbnail="platform.jpg"
      >
        Platformer game with basic movement, enemies and a few levels.
      </Project>
    </div>
  </div>

  <div class="space-y-2 relative overflow-x-hidden">
    <div>
      <h1>Other Projects</h1>
      <p class="text-sm">Other miscallaneous and often smaller projects.</p>
    </div>
    <div class="projects grid gap-4 grid-cols-2">
      <Project title="random-ip-generator" href="https://github.com/edde746/random-ip-generator/" thumbnail="ip.webp">
        Python package to generate random IPv4 addresses based on a country code.
      </Project>
      <Project title={'"voice-gpt"'} href="https://github.com/edde746/voice-gpt/" thumbnail="discord-gpt.webp">
        A Discord bot to (badly) interact with ChatGPT in voice chat using by Whisper and TTS by Coqui.
      </Project>
      <Project title="tiktok-askreddit" href="https://github.com/edde746/tiktok-askreddit/" thumbnail="tt-rd.webp">
        A bot to automatically scrape Reddit posts, render them as a video with a Text-to-Speech voiceover and then
        upload it with Selenium.
      </Project>
      <Project title="tiktok-uploader" href="https://github.com/edde746/tiktok-uploader/" thumbnail="tiktok-adb.webp">
        Upload videos or slideshows to TikTok progrematically using ADB and TikTok's Android app.
      </Project>
    </div>
  </div>

  <p>&copy; {new Date().getFullYear()} edde746</p>
</div>
