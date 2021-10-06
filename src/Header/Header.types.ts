import { ReactNode } from 'react';

export interface HeaderTypes {
    options: headerTy[];
}

interface headerTy {
    slug: string,
    url: string
}
