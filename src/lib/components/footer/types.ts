import type { Component } from 'svelte';
import GithubIcon from '$lib/icons/GithubIcon.svelte';
import EmailIcon from '$lib/icons/EmailIcon.svelte';
import LinkedInIcon from '$lib/icons/LinkedInIcon.svelte';

export type SocialLink = Readonly<{
	name: string;
	href: string;
	icon: Component;
	label?: string;
}>;

export const defaultSocials: readonly SocialLink[] = [
	{
		name: 'LinkedIn',
		href: 'https://www.linkedin.com/in/maksym-yarmolenko/',
		icon: LinkedInIcon
	},
	{
		name: 'GitHub',
		href: 'https://github.com/myarmolenko',
		icon: GithubIcon
	},
	{
		name: 'Email',
		href: 'mailto:maksymyarmolenk@gmail.com',
		icon: EmailIcon
	}
];
