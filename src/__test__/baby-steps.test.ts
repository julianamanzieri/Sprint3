import babySteps from '../baby-steps';

describe('Given a baby-steps script', () => {
  describe('When it is executed with 1, 2, 3', () => {
    test('Should return the sum of 1, 2 and 3', () => {
      // Chama a função babySteps com or argumentos
      const result = babySteps('1', '2', '3');

      // Verifica o resultado
      expect(result).toBe(6);
    });
  });
});
