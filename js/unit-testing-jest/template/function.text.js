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
    text('peter should be in usernames', () => {
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
    test('User fetched name should be Ray Wang', async () => {
      expect.assertion(1);
      const data = await functions.fetchUser()
      expect(data.name).toEqual('Ray Wang');
    })