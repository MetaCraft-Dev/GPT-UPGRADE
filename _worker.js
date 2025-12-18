export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url)
    const map = {
      "/go/gpt-shared": "https://www.naifeistation.com/index/buy?id=238&invite=3903",
      "/go/gpt-exclusive": "https://www.naifeistation.com/index/buy?id=238&invite=3903",
      "/go/gpt-topup": "https://www.naifeistation.com/index/buy?id=241&invite=3903",
      "/go/pokepay": "https://app.pokepay.cc/pages/invitation/regist?r=365888",
      "/go/okx": "https://www.hfivpyichgod.com/zh-hans/join?channelId=ACE529411"
    }
    if (map[url.pathname]) {
      return Response.redirect(map[url.pathname], 302)
    }
    return env.ASSETS.fetch(request)
  }
}
