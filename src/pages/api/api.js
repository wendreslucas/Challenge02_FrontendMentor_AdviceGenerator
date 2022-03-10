const API_URL = 'https://api.adviceslip.com'
const CONSELHO = `${API_URL}/advice`

const conecta = async (url, options = {}) => {
  const resposta = await fetch(url, options)
  if (resposta.ok) {
    const dados = await resposta.json()
    return dados
  }
  throw new Error(resposta)
}

const listaConselho = () => conecta(CONSELHO)

export default { listaConselho }
