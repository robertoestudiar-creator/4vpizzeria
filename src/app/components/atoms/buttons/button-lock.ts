import { WritableSignal } from '@angular/core';

export const BUTTON_LOCK_MS = 400;

export function runLocked(locked: WritableSignal<boolean>, action: () => void): void {
  if (locked()) {
    return;
  }
  locked.set(true);
  action();
  setTimeout(() => locked.set(false), BUTTON_LOCK_MS);
}
