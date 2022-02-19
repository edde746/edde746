<script>
  import { ArrowRightIconSolid } from "@codewithshin/svelte-heroicons";
  import { dragScroll } from "$lib/dragScroll";
</script>

<div class="max-w-3xl mx-auto px-4 py-8 grid gap-8">
  <div class="flex gap-8 justify-between items-center">
    <div class="space-y-2">
      <div class="flex gap-2 items-center">
        <h1>edde746</h1>
        <a href="https://github.com/edde746" class="group">
          <img
            src="https://unpkg.com/simple-icons/icons/github.svg"
            alt="Github"
            class="h-5 w-5 group-hover:opacity-70 transition"
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
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-plain.svg" alt="Svelte" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" alt="Redis" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" alt="Unity" />
      </div>
    </div>
  </div>

  <div class="space-y-2 relative overflow-x-hidden">
    <div>
      <h1>Unity Projects</h1>
      <p>Unity games made with Unity and C#. Playable in browser powered by WASM.</p>
    </div>
    <div class="projects snap-x" use:dragScroll>
      <a class="relative group" href="https://edde746.github.io/fps-spel/">
        <div class="project-overlay">
          <h3>fps-spel</h3>
          <ArrowRightIconSolid className="bottom-arrow" />
        </div>
        <img src="/images/fps.gif" alt="FPS Spel" />
      </a>
      <a class="relative group" href="https://edde746.github.io/fysikspel/">
        <div class="project-overlay">
          <h3>fysikspel</h3>
          <ArrowRightIconSolid className="bottom-arrow" />
        </div>
        <img src="/images/fysik.gif" alt="Fysikspel" />
      </a>
      <a class="relative group" href="https://edde746.github.io/plattformspel/">
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
      <p>Web projects made with different technologies, including SvelteKit, Next.JS, React and Django.</p>
    </div>
    <div class="projects snap-x" use:dragScroll>
      <a class="relative group" href="https://twce746.herokuapp.com/">
        <div class="project-overlay">
          <h3>twitter-clone</h3>
          <ArrowRightIconSolid className="bottom-arrow" />
        </div>
        <img src="/images/twitter.gif" alt="Twitter Clone" />
      </a>
      <a class="relative group" href="https://tiktok-downloader-ebon.vercel.app/">
        <div class="project-overlay">
          <h3>tiktok-downloader</h3>
          <ArrowRightIconSolid className="bottom-arrow" />
        </div>
        <img src="/images/tiktok.gif" alt="Tiktok Downloader" />
      </a>
      <a class="relative group" href="https://edde746.github.io/rdpservers/">
        <div class="project-overlay">
          <h3 style="color:#fff">rdpservers</h3>
          <ArrowRightIconSolid className="bottom-arrow" />
        </div>
        <img src="/images/rdp.gif" alt="rdpservers" />
      </a>
      <a class="relative group" href="https://edde746.github.io/nft-gen/">
        <div class="project-overlay">
          <h3>nft-gen</h3>
          <ArrowRightIconSolid className="bottom-arrow" />
        </div>
        <img src="/images/nft.gif" alt="NFT Generator" />
      </a>
      <a class="relative group" href="https://edde746.github.io/svelte-toasts/">
        <div class="project-overlay">
          <h3>toasts demo</h3>
          <ArrowRightIconSolid className="bottom-arrow" />
        </div>
        <img src="/images/toasts.gif" alt="svelte-toasts" />
      </a>
      <a class="relative group" href="https://gymnasieprojekt-2021.herokuapp.com/">
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
