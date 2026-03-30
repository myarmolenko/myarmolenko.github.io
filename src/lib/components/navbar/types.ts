import type { Component } from 'svelte';
import HomeIcon from '$lib/icons/HomeIcon.svelte';
import ProjectsIcon from '$lib/icons/ProjectsIcon.svelte';
import AboutIcon from '$lib/icons/AboutIcon.svelte';

export type NavigationLink = Readonly<{
	name: string;
	href: string;
	icon: Component;
	rel?: string;
	target?: '_self' | '_blank';
}>;

export function isActive(href: string, pathname: string): boolean {
	if (href === '/') return pathname === '/';
	return pathname.startsWith(href);
}

export const defaultNavigationLinks: readonly NavigationLink[] = [
	{
		name: 'Home',
		href: '/',
		icon: HomeIcon
	},
	{
		name: 'Projects',
		href: '/projects',
		icon: ProjectsIcon
	},
	{
		name: 'About',
		href: '/about',
		icon: AboutIcon
	}
];
