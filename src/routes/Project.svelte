<script>
  import { ArrowRightIconSolid } from '@codewithshin/svelte-heroicons';
  import { inview } from 'svelte-inview';

  export let title;
  export let href;
  export let video;
  let loadVideo = false;
</script>

<a class="relative group" rel="external" {href} target="_blank" use:inview on:enter={() => (loadVideo = true)}>
  <div class="project-overlay">
    <h3>{title}</h3>
    <p>
      <slot />
    </p>
    <ArrowRightIconSolid className="bottom-arrow" />
  </div>
  {#if video && loadVideo}
    <video class="w-full" autoplay loop muted playsinline>
      <source src="/projects/{video}" type="video/mp4" />
    </video>
  {/if}
</a>
