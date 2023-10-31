

if (typeof window !== 'undefined'){
window.passport = new window.immutable.passport.Passport({
    baseConfig: new window.immutable.config.ImmutableConfiguration({
      environment: window.immutable.config.Environment.SANDBOX,
    }),
    clientId: '6ObE0q4XKqvKN1JAyWouQ2vKTraSRMGx',
    redirectUri: 'https://imx-game-k33d.vercel.app/',
    logoutRedirectUri: 'https://imx-game-k33d.vercel.app/',
    audience: 'platform_api',
    scope: 'openid offline_access email transact'
  });
}