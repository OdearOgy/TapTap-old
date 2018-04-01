'use strict';

const router = require('koa-router')();
// const vmin = require('../second_debil_basa/1');
const path = require('path');

async function home(ctx) {
    await ctx.render('home/index');
}

async function tour_details(ctx) {
    console.log(ctx.params.id);
    const basa = require('../second_debil_basa/' + ctx.params.id);
    await ctx.render('tour_details/index', {
        basa: basa
    });
}

async function tour(ctx) {
    const basa = require('../debil_basa/' + ctx.params.type);
    await ctx.render('tour_category/index',{
        img: ctx.params.type,
        basa: basa
    });
}
router.get('/details/:id', tour_details);
router.get('/tourDetails/:id', tour_details);
router.get('/home_page', home);
router.get('/home', home);
router.get('/tour/:type', tour);
router.get('/', home);

module.exports = router;
