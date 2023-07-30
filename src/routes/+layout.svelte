<script>
  import "../app.postcss";
  import {DarkMode, Navbar, NavBrand, NavHamburger, NavLi, NavUl} from "flowbite-svelte";
</script>
<Navbar let:hidden let:toggle>
    <NavBrand >
        <DarkMode/>
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white pl-3">
      Svelte kit / Flowbite - starter
    </span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden}>
        <NavLi href="https://retech-software.de" active={true}>RETECH</NavLi>
    </NavUl>
</Navbar>
<div class="mt-5 w-4/5 mx-auto">
<slot />
</div>
