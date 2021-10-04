export type SingleNavItem = { title: string; href: string; outlined?: boolean }
export type NavItems = SingleNavItem[]
export type SingleFooterListItem = { title: string; href: string; }
export type FooterListItems = SingleFooterListItem[]
export type SingleFooterList = { header: string; listItem: FooterListItems; }
export type FooterItems = SingleFooterList[]
