import {EvaluateBoolean} from "./index"

describe('boolean calculator', () => {
  it('knows TRUE to be true',() =>{

    const result = EvaluateBoolean("TRUE");
    expect(result).toBe(true);
  })

  it('knows FALSE to be false',() =>{

    const result = EvaluateBoolean("FALSE");
    expect(result).toBe(false);
  })

  it('knows NOT TRUE to be false',() =>{

    const result = EvaluateBoolean("NOT TRUE");
    expect(result).toBe(false);
  })

  it('knows NOT FALSE to be true',() =>{

    const result = EvaluateBoolean("NOT FALSE");
    expect(result).toBe(true);
  })

  it('TRUE AND TRUE to be true',() =>{

    const result = EvaluateBoolean("TRUE AND TRUE");
    expect(result).toBe(true);
  })

  it('FALSE AND FALSE to be false',() =>{

    const result = EvaluateBoolean("FALSE AND FALSE ");
    expect(result).toBe(false);
  })

  it('FALSE AND TRUE to be false',() =>{

    const result = EvaluateBoolean("FALSE AND TRUE");
    expect(result).toBe(false);
  })

  it('TRUE AND FALSE to be false',() =>{

    const result = EvaluateBoolean("FALSE AND TRUE");
    expect(result).toBe(false);
  })

  it('knows TRUE OR TRUE to be true',() =>{

    const result = EvaluateBoolean("TRUE OR TRUE");
    expect(result).toBe(true);
  })

  it('knows TRUE OR FALSE to be true',() =>{

    const result = EvaluateBoolean("TRUE OR FALSE");
    expect(result).toBe(true);
  })

  it('knows FALSE OR TRUE to be true',() =>{

    const result = EvaluateBoolean("FALSE OR TRUE");
    expect(result).toBe(true);
  })
  
  it('knows FALSE OR FALSE to be true',() =>{

    const result = EvaluateBoolean("FALSE OR FALSE");
    expect(result).toBe(false);
  })
})
