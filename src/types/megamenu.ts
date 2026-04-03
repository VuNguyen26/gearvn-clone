import type { ElementType } from "react";

export type MegaMenuChildItem =
  | string
  | {
      label: string;
      href?: string;
    };

export type MenuColumn = {
  title: string;
  items: MegaMenuChildItem[];
};

export type MenuContent = {
  columns: MenuColumn[];
};

export type MenuItem = {
  label: string;
  icon: ElementType;
  href?: string;
  id: string;
  content?: MenuContent | null;
};