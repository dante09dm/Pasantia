import { extend } from 'vee-validate'

extend('positive', value => {
  return value >= 0
});

extend('max', {
  validate(value, args) {
    return value.length >= args.length;
  },
  params: ['length']
})
extend('min', {
  validate(value, args) {
    return value.length <= args.length;
  },
  params: ['length']
})

extend('minmax', {
  validate(value, { min, max }) {
    return value.length >= min && value.length <= max;
  },
  params: ['min', 'max']
});
