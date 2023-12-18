<script>
  import "../app.postcss";
  import {DarkMode, Navbar, NavBrand, NavHamburger, NavLi, NavUl} from "flowbite-svelte";
  import {page} from "$app/stores";
  import {base} from "$app/paths";
  import {GithubSolid} from "flowbite-svelte-icons";
  import ReusableModal from "$lib/components/ReusableModal.svelte";
</script>
<Navbar class="z-10" let:hidden let:toggle>
    <NavBrand>
        <DarkMode/>
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white pl-3">
      <a href="{base}/">Svelte kit / Flowbite - starter </a>
    </span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden}>
        <NavLi href="{base}/docs" active={$page.url.pathname.endsWith('docs')}>DOCS</NavLi>
        <NavLi href="https://github.com/sroehrl/svelte-flowbite-boilerplate#readme" >
            <GithubSolid/>
        </NavLi>
    </NavUl>
</Navbar>
<div class="my-5">
<slot />
    <ReusableModal/>
</div>
