const dico = <%= JSON.stringify(options.dicoParsed, null, 2) %>

export default (_, inject) => {
  inject("dico", dico)
}
