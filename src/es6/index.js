// spread

let locale = {
  ok: 'ok',
  cancel: 'cancel'
}

let newLocale = {
  ok: '确定',
  cancel: '取消'
}

locale = {...locale, ...newLocale, ok: 'sure'}

console.log(locale);

