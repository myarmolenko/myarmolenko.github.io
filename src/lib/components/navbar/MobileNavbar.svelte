<script lang="ts">
	import { page } from '$app/state';
	import type { NavigationLink } from './types';
	import { defaultNavigationLinks, isActive } from './types';
	import ThemeToggle from './ThemeToggle.svelte';

	let {
		navigationLinks = defaultNavigationLinks,
		class: className = ''
	}: {
		navigationLinks?: readonly NavigationLink[];
		class?: string;
	} = $props();
</script>

<nav class={`nav ${className}`} aria-label="Primary navigation">
	<ul class="nav__list" role="list">
		{#each navigationLinks as link (link.href)}
			{@const active = isActive(link.href, page.url.pathname)}
			{@const Icon = link.icon}
			<li>
				<a
					class="nav__link"
					class:nav__link--active={active}
					href={link.href}
					target={link.target}
					rel={link.target === '_blank' ? link.rel ?? 'noopener noreferrer' : link.rel}
					aria-current={active ? 'page' : undefined}
				>
					<Icon />
					{#if active}
						<span class="nav__label">{link.name}</span>
					{/if}
				</a>
			</li>
		{/each}
		<li class="nav__toggle"><ThemeToggle /></li>
	</ul>
</nav>

<style>
	.nav {
		padding: 16px 0;
		background: transparent;
	}

	.nav__list {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 8px;
		padding: 0;
		margin: 0;
		list-style: none;
	}

	.nav__link {
		display: flex;
		align-items: center;
		gap: 6px;
		padding: 6px 8px;
		border-radius: 999px;
		text-decoration: none;
		color: inherit;
		font-weight: 500;
		letter-spacing: 0.2px;
	}

	.nav__link--active {
		text-decoration: underline;
		text-underline-offset: 6px;
		text-decoration-thickness: 2px;
	}

	a :global(svg) {
		width: 20px;
		height: 20px;
		flex-shrink: 0;
	}

	.nav__toggle {
		display: flex;
		align-items: center;
		padding: 6px 8px;
	}
</style>
