<script lang="ts">
	import { onMount } from 'svelte';
	import SunIcon from '$lib/icons/SunIcon.svelte';
	import MoonIcon from '$lib/icons/MoonIcon.svelte';

	let isDark = $state(false);

	onMount(() => {
		isDark = document.documentElement.getAttribute('data-theme') === 'dark';
	});

	function toggle() {
		isDark = !isDark;
		const theme = isDark ? 'dark' : 'light';
		document.documentElement.setAttribute('data-theme', theme);
		try {
			localStorage.setItem('theme', theme);
		} catch (e) {}
	}
</script>

<button
	class="theme-toggle"
	onclick={toggle}
	aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
>
	{#if isDark}
		<MoonIcon />
	{:else}
		<SunIcon />
	{/if}
</button>

<style>
	.theme-toggle {
		display: flex;
		align-items: center;
		justify-content: center;
		background: none;
		border: none;
		padding: 2px;
		cursor: pointer;
		color: inherit;
		line-height: 0;
		opacity: 0.85;
		transition: opacity var(--transition-fast);
	}

	.theme-toggle:hover,
	.theme-toggle:focus-visible {
		opacity: 1;
	}

	.theme-toggle:focus-visible {
		outline: 2px solid currentColor;
		outline-offset: 3px;
		border-radius: 4px;
	}
</style>
