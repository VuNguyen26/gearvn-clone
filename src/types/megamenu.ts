export type MenuColumn = {
    title: string;
    items: string[];
};

export type MenuContent = {
    columns: MenuColumn[];
};

export type MenuItem = {
    label: string;
    icon: React.ElementType;
    href: string;
    id: string;
    content: MenuContent;
};