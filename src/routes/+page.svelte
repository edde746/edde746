<script>
  import { ArrowRightIconSolid } from '@codewithshin/svelte-heroicons';
  import { dragScroll } from '$lib/dragScroll';
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
      <a class="relative group" rel="external" href="https://github.com/edde746/survival-spel/">
        <div class="project-overlay">
          <h3>survival-spel</h3>
          <p>
            Survival game built in Unity, has procedural map generation, resources gathering, building, inventory and
            crafting system.<br />Not playable in browser.
          </p>
          <ArrowRightIconSolid className="bottom-arrow" />
        </div>
        <video class="w-full" autoplay loop muted playsinline>
          <source src="/images/survival.mp4" type="video/mp4" />
        </video>
      </a>
      <a class="relative group" rel="external" href="https://edde746.github.io/rpg-spel/">
        <div class="project-overlay">
          <h3>rpg-spel</h3>
          <p>Basic RPG mechanics like movement and a dialogue system.</p>
          <ArrowRightIconSolid className="bottom-arrow" />
        </div>
        <img src="/images/rpg.gif" alt="RPG Spel" />
      </a>
      <a class="relative group" rel="external" href="https://edde746.github.io/fps-spel/">
        <div class="project-overlay">
          <h3>fps-spel</h3>
          <ArrowRightIconSolid className="bottom-arrow" />
        </div>
        <img src="/images/fps.gif" alt="FPS Spel" />
      </a>
      <a class="relative group" rel="external" href="https://edde746.github.io/fysikspel/">
        <div class="project-overlay">
          <h3>fysikspel</h3>
          <ArrowRightIconSolid className="bottom-arrow" />
        </div>
        <img src="/images/fysik.gif" alt="Fysikspel" />
      </a>
      <a class="relative group" rel="external" href="https://edde746.github.io/plattformspel/">
        <div class="project-overlay">
          <h3>plattformspel</h3>
          <ArrowRightIconSolid className="bottom-arrow" />
        </div>
        <img src="/images/plattform.gif" alt="Plattformspel" />
      </a>
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
      <a class="relative group" rel="external" href="https://divinemods.com">
        <div class="project-overlay">
          <h3>Divine</h3>
          <p>
            E-commerce site for software licenses built with SvelteKit, Strapi and Docker.<br />
            Integrates Stripe, Coinbase and PayPal for payments and Amazon SES for email including magic-link login.
          </p>
          <ArrowRightIconSolid className="bottom-arrow" />
        </div>
        <video class="w-full" autoplay loop muted playsinline>
          <source src="/images/divine.mp4" type="video/mp4" />
        </video>
      </a>
      <a class="relative group" rel="external" href="https://zeropointexotics.com">
        <div class="project-overlay">
          <h3>ZeroPoint Exotics</h3>
          <p>
            Rental car booking site built with SvelteKit, Strapi and Docker.<br />
            Renders contacts as docx and e-mails them. Cars can be managed via the Strapi admin panel.
          </p>
          <ArrowRightIconSolid className="bottom-arrow" />
        </div>
        <video class="w-full" autoplay loop muted playsinline>
          <source src="/images/zp.mp4" type="video/mp4" />
        </video>
      </a>
      <a class="relative group" rel="external" href="https://cedara.cc">
        <div class="project-overlay">
          <h3>Cedara</h3>
          <p>
            E-commerce site for software licenses built with SvelteKit, Strapi and Docker.<br />
            Uses Stripe and Coinbase for payments and integrated OAuth login with Discord and Google.
          </p>
          <ArrowRightIconSolid className="bottom-arrow" />
        </div>
        <video class="w-full" autoplay loop muted playsinline>
          <source src="/images/cedara.mp4" type="video/mp4" />
        </video>
      </a>
      <a class="relative group" rel="external" href="https://github.com/edde746/twitter-clone">
        <div class="project-overlay">
          <h3>twitter-clone</h3>
          <p>
            Twitter clone built with SvelteKit and Redis.<br />Uses Redis as the primary database and Amazon S3 for user
            uploads such as images.
          </p>
          <ArrowRightIconSolid className="bottom-arrow" />
        </div>
        <img src="/images/twitter.gif" alt="Twitter Clone" />
      </a>
      <a class="relative group" rel="external" href="https://tiktok-downloader-ebon.vercel.app/">
        <div class="project-overlay">
          <h3>tiktok-downloader</h3>
          <ArrowRightIconSolid className="bottom-arrow" />
        </div>
        <img src="/images/tiktok.gif" alt="Tiktok Downloader" />
      </a>
      <a class="relative group" rel="external" href="https://github.com/edde746/live-chat">
        <div class="project-overlay">
          <h3>live-chat</h3>
          <ArrowRightIconSolid className="bottom-arrow" />
        </div>
        <img src="/images/live-chat.gif" alt="Live Chat" />
      </a>
      <a class="relative group" rel="external" href="https://edde746.github.io/rdpservers/">
        <div class="project-overlay">
          <h3 style="color:#fff">rdpservers</h3>
          <ArrowRightIconSolid className="bottom-arrow" />
        </div>
        <img src="/images/rdp.gif" alt="rdpservers" />
      </a>
      <a class="relative group" rel="external" href="https://edde746.github.io/nft-gen/">
        <div class="project-overlay">
          <h3>nft-gen</h3>
          <ArrowRightIconSolid className="bottom-arrow" />
        </div>
        <img src="/images/nft.gif" alt="NFT Generator" />
      </a>
      <a class="relative group" rel="external" href="https://edde746.github.io/svelte-toasts/">
        <div class="project-overlay">
          <h3>toasts demo</h3>
          <ArrowRightIconSolid className="bottom-arrow" />
        </div>
        <img src="/images/toasts.gif" alt="svelte-toasts" />
      </a>
      <a class="relative group" rel="external" href="https://gymnasieprojekt-2021.herokuapp.com/">
        <div class="project-overlay">
          <h3 style="color:#fff">gymnasieprojekt</h3>
          <ArrowRightIconSolid className="bottom-arrow" />
        </div>
        <img src="/images/gymnasieprojekt.gif" alt="gymnasieprojekt" />
      </a>
    </div>
  </div>

  <p>&copy; {new Date().toISOString().substr(0, 4)} edde746</p>
</div>
