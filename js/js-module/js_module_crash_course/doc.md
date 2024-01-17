# 关于命名导入/导出 和 默认导入/导出

- 一个文件可以使用多个命名导入/导出，但只能使用一个默认导入/导出
- 默认导入/导出的意义是为了在没有明确指出导入的函数的时候，选择默认的函数导入
- 对于默认导出，你可以使用任何你想要的名称。这是因为 `export default` 实际上是将整个模块的默认导出项指定为一个值，而不是将具体的标识符导出。对于命名导出，你需要使用相应的标识符来导入。希望这次能够更清楚地解释这个概念。

- 导出：
    ```typescript
    // MyModule.ts

    // 命名导出
    export function namedFunction1() {
      console.log("Named Function 1");
    }

    export function namedFunction2() {
      console.log("Named Function 2");
    }

    // 默认导出
    export default function defaultFunction() {
      console.log("Default Function");
    }
    ```

- 导入：

    ```typescript
    // AnotherFile.ts

    // 使用默认导出，并起一个自定义的名字
    import myCustomName from "./MyModule";

    // 使用命名导出
    import { namedFunction1, namedFunction2 } from "./MyModule";

    // 使用默认导出的函数
    myCustomName();

    // 使用命名导出的函数
    namedFunction1();
    namedFunction2();
    ```

