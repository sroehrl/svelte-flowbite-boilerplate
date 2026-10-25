<script lang="ts">
  import '../app.css';
  import {page} from "$app/state";
  import {resolve} from "$app/paths";
  import {DarkMode, Navbar, NavBrand, NavHamburger, NavLi, NavUl} from "flowbite-svelte";
  import {GithubSolid} from "flowbite-svelte-icons";
  import ReusableModal from "$lib/components/ReusableModal.svelte";
  import type { LayoutProps } from './$types';

  let { children }: LayoutProps = $props();
  let activeUrl = $derived(page.url.pathname);
</script>
<Navbar class="z-10 bg-primary-400 dark:bg-primary-900">
    <NavBrand>
        <DarkMode/>
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white pl-3">
      <a href="{resolve('/')}">Svelte kit / Flowbite - starter </a>
    </span>
    </NavBrand>
    <NavHamburger />
    <NavUl {activeUrl}>
        <NavLi href={resolve('/docs')} active={page.url.pathname.endsWith('docs')}>DOCS</NavLi>
        <NavLi href="https://github.com/sroehrl/svelte-flowbite-boilerplate#readme" >
            <GithubSolid/>
        </NavLi>
    </NavUl>
</Navbar>
<div class="my-5">
    {@render children()}
    <ReusableModal/>
</div>
