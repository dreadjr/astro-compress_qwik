import { component$, useSignal } from "@builder.io/qwik";

import styles from "./counter.module.css";

export const Counter = component$(() => {
  const count = useSignal(0);

  return (
    <>
      <div class={styles.container}>
        <button
          class={styles.counter}
          type="button"
          onClick$={() => count.value++}
        >
          count is&nbsp;{count.value}
        </button>
      </div>
    </>
  );
});
