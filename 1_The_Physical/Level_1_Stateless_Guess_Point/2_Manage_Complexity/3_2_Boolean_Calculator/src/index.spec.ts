import {EvaluateBoolean} from "./index"

describe('boolean calculator', () => {
  it('knows TRUE to be true',() =>{

    const  result = EvaluateBoolean("TRUE");
    expect(result).toBe(true);
  })

  it('knows FALSE to be false',() =>{

    const  result = EvaluateBoolean("FALSE");
    expect(result).toBe(false);
  })
})
