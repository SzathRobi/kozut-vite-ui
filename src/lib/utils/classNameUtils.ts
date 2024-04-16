import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const clsxMerge = (...classes: ClassValue[]): string =>
  twMerge(clsx(...classes));
