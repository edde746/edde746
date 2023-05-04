<script>
  import { inview } from 'svelte-inview';

  export let title;
  export let href;
  export let video;
  export let thumbnail;
  let loadVideo = false;
  let videoElement;
</script>

<a
  class="relative group dark:bg-neutral-900 rounded-md overflow-hidden bg-neutral-200"
  rel="external"
  {href}
  target="_blank"
  use:inview
  on:enter={() => (loadVideo = true)}
  on:mouseover={() => videoElement.play()}
  on:mouseout={() => videoElement.pause()}
  on:focus={() => videoElement.play()}
  on:blur={() => videoElement.pause()}
>
  {#if thumbnail}
    <img
      class="aspect-video w-full object-cover {video
        ? 'group-hover:opacity-0'
        : ''} opacity-100 transition absolute top-0 left-0 duration-300"
      src="/projects/thumbnails/{thumbnail}"
      alt={title}
    />
  {/if}
  {#if video && loadVideo}
    <video class="aspect-video w-full object-cover" loop muted playsinline bind:this={videoElement}>
      <source src="/projects/{video}" type="video/webm" />
    </video>
  {:else}
    <div class="block aspect-video w-full" />
  {/if}
  <div class="p-3">
    <h3 class="text-xl font-bold">{title}</h3>
    <p>
      <slot />
    </p>
  </div>
</a>
