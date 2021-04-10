const controllerPages = {
  async index(ctx) {
    await ctx.render('index');
  },

  async signin(ctx) {
    await ctx.render('./signin/sign-in');
  },

  async password_recovery(ctx) {
    await ctx.render('./signin/pass-recovery');
  },

  async ready(ctx) {
    await ctx.render('./signin/rec-ready');
  },

  async reset_password(ctx) {
    await ctx.render('./signin/reset-pass');
  },

  async signup(ctx) {
    await ctx.render('./signup/signUp-1');
  },

  async signup2(ctx) {
    await ctx.render('./signup/signUp-2');
  },

  async signup_ready(ctx) {
    await ctx.render('./signup/signup-ready');
  },

  async profile_info(ctx) {
    await ctx.render('./profile/profile-personal');
  },

  async profile_account(ctx) {
    await ctx.render('./profile/profile-account');
  },

  async search_results(ctx) {
    await ctx.render('./search/search-results');
  },

  async search_map(ctx) {
    await ctx.render('./search/search-map');
  },

  async admin(ctx) {
    await ctx.render('./admin/admin');
  },

};

module.exports = {
  controllerPages,
};
