<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { SocialLink } from './types';
	import { defaultSocials } from './types';

	let {
		year = 2026,
		owner = 'Maksym Yarmolenko',
		socials = defaultSocials,
		middle,
		class: className = ''
	}: {
		year?: number;
		owner?: string;
		socials?: readonly SocialLink[];
		middle?: Snippet;
		class?: string;
	} = $props();
</script>

<footer class={`footer ${className}`} aria-label="Footer">
	<div class="footer__inner container">
		<!-- Left: Copyright -->
		<div class="footer__left">© {year} {owner}</div>

		<!-- Middle: Snippet for custom content -->
		<div class="footer__middle">
			{@render middle?.()}
		</div>

		<!-- Right: Social Icons -->
		<div class="footer__right" aria-label="Social links">
			{#each socials as social (social.href)}
				{@const Icon = social.icon}
				<a
					class="footer__iconLink"
					href={social.href}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={social.label ?? social.name}
					title={social.label ?? social.name}
				>
					<Icon />
				</a>
			{/each}
		</div>
	</div>
</footer>

<style>
	.footer {
		position: relative;
		background: transparent;
		padding: var(--space-4) 0;
		color: var(--text-color);
	}

	.footer__inner {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		align-items: center;
		gap: var(--space-2);
	}

	.footer__left {
		justify-self: start;
		font-size: var(--font-size-sm);
		letter-spacing: 0.2px;
		white-space: nowrap;
		opacity: 0.9;
	}

	.footer__middle {
		justify-self: center;
		min-width: 160px;
	}

	.footer__right {
		justify-self: end;
		display: flex;
		gap: 14px;
		flex-wrap: wrap;
	}

	.footer__iconLink {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 8px;
		border-radius: var(--border-radius-md);
		color: var(--text-color);
		text-decoration: none;
		transition: background-color var(--transition-fast);
	}

	.footer__iconLink:hover {
		background-color: var(--code-bg);
	}

	.footer__iconLink:focus-visible {
		outline: 2px solid currentColor;
		outline-offset: 4px;
	}

</style>
