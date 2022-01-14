// Luodaan console.login "matkija" global-kontekstiin.
global.console = {
  log: jest.fn(),
}

describe('Tarkistetaan console.login sisältö', () => {
  it('pitäisi sisältää kolmirivisen lainauksen', () => {
    
    const tehtava = require('../tehtava.js');

    tehtava();

    expect(global.console.log).toBeCalledTimes(3);
    expect(global.console.log).toHaveBeenNthCalledWith(1,'Walking on water and developing software from');
    expect(global.console.log).toHaveBeenNthCalledWith(2,'a specification are easy if both are frozen.');
    expect(global.console.log).toHaveBeenNthCalledWith(3,'-- Edward V Berard');
    
  });
});

