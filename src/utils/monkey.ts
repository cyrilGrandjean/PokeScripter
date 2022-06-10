/* Create a monkey promise that let us inject our own code after the promise has finished.
   This is a bit ugly but necessary due to PokeClicker weird logic.
 */
export class MonkeyPromise<T> extends Promise<T> {
  private static callback() {}
  // Execute the callback after the promise
  static patch(promise: Promise<void>, cb: () => void) {
    promise.then = MonkeyPromise.prototype.then;
    this.callback = cb;
  }

  then<T1 = T, T2 = never>(
    onfulfilled?: ((value: T) => T1 | PromiseLike<T1>) | undefined | null,
    onrejected?: ((reason: any) => T2 | PromiseLike<T2>) | undefined | null
  ): Promise<T1 | T2> {
    // Modify the .then logic so we can inject our own function after PokeClicker initialisation
    const promise = super.then(onfulfilled, onrejected);
    promise.then(MonkeyPromise.callback);
    return promise;
  }
}

// Monkey patch the preload routine and return a promise that resolve after PokeClicker initialisation
export function patchPreload(): Promise<void> {
  return new Promise<void>((resolve) => {
    const preload = Preload.load;
    Preload.load = (skipWait?: boolean) => {
      let promise = preload(skipWait);
      MonkeyPromise.patch(promise, resolve);
      return promise;
    };
  });
}
