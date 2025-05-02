

export const Temperatura= async(req, res) => {
    const { valor, unidad } = req.body
    let C, F, K;
  
    switch (unidad) {
      case 'C':
        C = valor;
        F = (valor* 9/5) + 32
        K = (valor*1) + 273.15
        break
      case 'F':
        C = (valor- 32) * 5/9
        F = valor
        K = (valor- 32) * 5/9 + 273.15
        break
      case 'K':
        C = valor- 273.15
        F = (valor- 273.15) * 9/5 + 32
        K = valor
        break
      default:
        return res.json({ message: "No es una unidad válida Usar C F K" })
    }
    res.json({ C, F, K })
  }
