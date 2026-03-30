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
	<div class="nav__container container">
		<ul class="nav__list">
			{#each navigationLinks as link (link.href)}
				{@const Icon = link.icon}
				<li>
					<a
						href={link.href}
						target={link.target}
						rel={link.target === '_blank' ? link.rel ?? 'noopener noreferrer' : link.rel}
						class:active={isActive(link.href, page.url.pathname)}
						aria-current={isActive(link.href, page.url.pathname) ? 'page' : undefined}
					>
						<Icon />
						{link.name}
					</a>
				</li>
			{/each}
			<li><ThemeToggle /></li>
		</ul>
	</div>
</nav>

<style>
	.nav {
		background: transparent;
		padding: 16px 0;
	}

	.nav__container {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.nav__list {
		display: flex;
		gap: 40px;
		padding: 0;
		margin: 0;
		list-style: none;
	}

	a {
		display: flex;
		align-items: center;
		gap: 6px;
		text-decoration: none;
		color: inherit;
		font-weight: 500;
		letter-spacing: 0.2px;
	}

	a :global(svg) {
		width: 18px;
		height: 18px;
		flex-shrink: 0;
	}

	a:hover,
	a:focus-visible {
		text-decoration: underline;
		text-underline-offset: 6px;
	}

	a.active {
		text-decoration: underline;
		text-underline-offset: 6px;
		text-decoration-thickness: 2px;
	}
</style>
