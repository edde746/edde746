<script>
  import { ArrowRightIconSolid } from '@codewithshin/svelte-heroicons';
  import { dragScroll } from '$lib/dragScroll';
  import Project from './Project.svelte';
</script>

<div class="max-w-3xl mx-auto px-4 py-8 grid gap-8">
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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, aut? Doloribus, laudantium cupiditate nesciunt
        perferendis aut numquam soluta dolorem libero dolorum veritatis sint error repudiandae aspernatur maiores, vero
        quia earum.
      </p>
    </div>

    <img
      src="https://avatars.githubusercontent.com/u/86283021"
      alt="Avatar"
      class="rounded-full aspect-square w-48 hidden md:block"
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
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
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
      <h1>Unity Projects</h1>
      <p class="text-sm">Unity games made with Unity and C#. Playable in browser powered by WASM.</p>
    </div>
    <div class="projects snap-x" use:dragScroll>
      <Project title="Survival Game" href="https://github.com/edde746/survival-spel/" video="survival.mp4">
        Survival game built in Unity, has procedural map generation, resources gathering, building, inventory and
        crafting system.<br />Not playable in browser.
      </Project>
      <Project title="RPG Game" href="https://github.com/edde746/rpg-spel/" video="rpg.mp4">
        Basic RPG mechanics like movement and a dialogue system.
      </Project>
      <Project title="FPS Game" href="https://github.com/edde746/fps-spel/" video="fps.mp4">
        First person shooter game with basic movement and shooting mechanics, time trial mode.
      </Project>
      <Project title="Angry Brids Clone" href="https://github.com/edde746/fysikspel/" video="fysik.mp4">
        Physics based game with a slingshot mechanic. Trajectory preview and physics based movement.
      </Project>
      <Project title="Platformer" href="https://github.com/edde746/plattformspel/" video="plattform.mp4">
        Platformer game with basic movement, enemies and a few levels.
      </Project>
    </div>
  </div>

  <div class="space-y-2 relative overflow-x-hidden">
    <div>
      <h1>Web Projects</h1>
      <p class="text-sm">
        Various projects made with different technologies, including SvelteKit, Next.JS, React, Strapi and Django.
      </p>
    </div>
    <div class="projects snap-x" use:dragScroll>
      <Project title="Divine" href="https://divinemods.com" video="divine.mp4">
        E-commerce site for software licenses built with SvelteKit, Strapi and Docker.<br />
        Integrates Stripe, Coinbase and PayPal for payments and Amazon SES for email including magic-link login.
      </Project>
      <Project title="ZeroPoint Exotics" href="https://zeropointexotics.com" video="zp.mp4">
        Rental car booking site built with SvelteKit, Strapi and Docker.<br />
        Renders contacts as docx and e-mails them. Cars can be managed via the Strapi admin panel.
      </Project>
      <Project title="Cedara" href="https://cedara.cc" video="cedara.mp4">
        E-commerce site for software licenses built with SvelteKit, Strapi and Docker.<br />
        Uses Stripe and Coinbase for payments and integrated OAuth login with Discord and Google.
      </Project>
      <Project title="Twitter Clone" href="https://github.com/edde746/twitter-clone" video="twitter.mp4">
        Twitter clone built with SvelteKit and Redis.<br />
        Uses Redis as the primary database and Amazon S3 for user uploads such as images.
      </Project>
      <Project title="TikTok Downloader" href="https://tiktok-downloader-ebon.vercel.app/" video="tiktok.mp4">
        Most likely broken due to API changes.
      </Project>
      <Project title="Live Chat" href="https://github.com/edde746/live-chat" video="live-chat.mp4">
        Very basic live chat built with Next.JS and Socket.IO.
      </Project>
      <Project title="RDPservers" href="https://edde746.github.io/rdpservers/" video="rdp.mp4">
        Final project for a course in web development. Built in Next.JS, no backend.
      </Project>
      <Project title="NFT Generator" href="https://edde746.github.io/nft-gen/" video="nft.mp4">
        Generate NFT like images from a set of components, uses HTML5 canvas.
      </Project>
      <Project title="Svelte Toasts Demo" href="https://edde746.github.io/svelte-toasts/" video="toasts.mp4">
        Alternative demo page for the Svelte Toasts library.
      </Project>
      <Project title="Gymnasieprojekt" href="https://github.com/edde746/gymnasieprojekt" video="gymnasieprojekt.mp4">
        Gymnasieprojekt 2021, built with Django and React.
      </Project>
    </div>
  </div>

  <p>&copy; {new Date().toISOString().substr(0, 4)} edde746</p>
</div>
