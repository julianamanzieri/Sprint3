import message from '../hello-world';

describe('Given a hello-world script', () => {
  describe('When it is executed', () => {
    test('Then is should log in to the console', () => {
      //  Verifica se a mensagem não está vazia
      expect(message).not.toBe('');

      // Verifica se a mensagem é igual a "Hello World"
      expect(message).toBe('HELLO WORLD');
    });
  });
});
