declare type Constructor<T> = new (...args: any[]) => T;
declare type ConstructorImplementing<T, K extends keyof T> = Constructor<Pick<T, K> & T>;
