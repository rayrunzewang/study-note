# Jest - Unit Testing

## Description
 A simple guide/Memo for unit testing by Jest

## install and use jest
1. 
    ```
    npm init -y
    npm i -D jest
    ```
2. change to `"test": "jest"` and `"testwatch": "jest --watchALL"` in package.json
3. create new file `function.test.js` for `function.js` 
4. for example in `function.js` 
      ```js
      const axios = require ('axios');

      const functions = {
        add: (num1, num2) => num1 + num2,
        isNull: ()=> null,
        checkValue: x => x,
        createUser: () => {
          const user = {
            firstName: 'Ray'
          }
          user.['lastName'] = 'Wang';
          return user;
        },
        // async text and axios
        // `npm i axios`
        fetchUser: () => {
          return axios
            .get('https://www.domain.com/users/1')
            .then(res => res.data)
            .catch(error => 'error')
            }
      }

      module.exports = functions;
      ```
5. for example in `function.test.js`
    ```js
    const functions = require('./functions');

    // toBe
    test('Adds 2 + 2 to equal 4', () => {
      expect(functions.add(2,2)).toBe(4);
    });

    // not
    test('Adds 2 + 2 to NOT equal 4', () => {
      expect(functions.add(2,2)).not.toBe(5);
    });

    // toBeNull
    test('Should be Null', () => {
      expect(functions.isNull()).toBeNull();
    });

    // toBeFalsy
    test('Should be falsy', () => {
      expect(functions.checkValue(null)).toBeFalsy();
      // toBeTruthy
      // not.toBeFalsy (you could)
      // ...
    });

    // to Equal for Obejct and Array
    test('User should be Ray Wang object', () => {
      expect(functions.createUser()).toEqual({ firstName: 'Ray', lastName: 'Wang' });
    // toBe is for primary type
    // use toEqual for Object and Array
    });

    // '<' or '>'
    test('Should be under 5', () => {
      const num1 = 1;
      const num2 = 2;
      expect(num1 + num2).toBeLessThan(5);

      // you can put function inside function.js, you can put it here as well
    });

    //Regex
    text('There is no U or u in color', () => {
      expect('color').not.toMath(/U/u);
    });

    // Arrays
    text('peter should be in usernames', async () => {
      usernames = ['ray', 'tom'];
      // usernames = ['ray', 'tom', 'peter'];
      
      expect(usernames).toContain('peter');
    })

    // test async data

    // promise
    test('User fetched name should be Ray Wang', () => {
      expect.assertion(1);
      // expect.assertions(1) 的作用是确保至少有一个断言被执行。在 Jest 中，如果一个异步测试没有执行任何断言，Jest 将会默默地将测试标记为通过，而不会发出警告。这可能导致测试不够健壮，因为它可能意味着测试未检查你希望它检查的任何内容。

      return functions.fetchUser()
        .then(data => {
          expect(data.name).toEqual('Ray Wang');
        })
    })

    // async await
    test('User fetched name should be Ray Wang', () => {
      expect.assertion(1);
      const data = await functions.fetchUser()
      expect(data.name).toEqual('Ray Wang');
    })
    ```
5.
    ```cmd
    npm test
    ```
## 测试生命周期钩子
> 没看懂，再看一遍 https://www.youtube.com/watch?v=7r4xVDI2vho
> at 47:00
- beforeAll：
  - 作用： 在所有测试用例运行之前执行一次性的初始化操作。
  - 用途： 用于准备测试环境，例如连接数据库、设置全局配置等。
- afterAll：
  - 作用： 在所有测试用例运行之后执行一次性的清理操作。
  - 用途： 用于清理测试环境，例如关闭数据库连接、释放资源等。
- beforeEach：
  - 作用： 在每个测试用例运行之前执行初始化操作。
  - 用途： 用于确保每个测试用例运行前都处于相同的初始状态。
- afterEach：
  - 作用： 在每个测试用例运行之后执行清理操作。
  - 用途： 用于确保每个测试用例运行后都能进行必要的清理。
## describe
- describe 函数本身并不是测试生命周期钩子。测试生命周期钩子通常包括 beforeAll、beforeEach、afterEach 和 afterAll 这些函数，它们用于在测试执行的不同阶段执行一些初始化或清理操作。

- describe 函数主要是用来组织和结构化测试套件的，以便更清晰地组织测试用例。它不执行初始化或清理操作，而是提供一个容器，使得测试用例可以按照一定的层次结构组织。

- 在一个 describe 块中，你可以包含多个 test（或 it）块，而这些测试块是用来定义具体的测试用例的。这些测试块可以包含在测试生命周期钩子内，以确保在执行每个测试用例之前或之后执行一些共享的逻辑。

```js
describe('Math operations', () => {
  beforeAll(() => {
    // 在所有测试用例运行之前执行的初始化操作
  });

  beforeEach(() => {
    // 在每个测试用例运行之前执行的初始化操作
  });

  test('addition', () => {
    // 测试加法
  });

  test('subtraction', () => {
    // 测试减法
  });

  afterEach(() => {
    // 在每个测试用例运行之后执行的清理操作
  });

  afterAll(() => {
    // 在所有测试用例运行之后执行的清理操作
  });
});
// 在这个例子中，beforeAll、beforeEach、afterEach 和 afterAll 就是测试生命周期钩子，而 describe 用于组织测试用例。
```
## note:
- 做几个example, 视频中也有 
https://www.youtube.com/watch?v=7r4xVDI2vhos
- `toBeDefined()`
