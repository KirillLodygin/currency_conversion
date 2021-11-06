export function useCalculateResult(currencies, denomination, rate) {
  console.log('useCalculateResult');
  console.log(currencies);

  if ((currencies[0] === currencies[1])){
    return String(denomination);
  } else {
    if (!currencies.includes('RUB')) {
      return '';
    }
    if (currencies[0] === 'RUB') {
      return String(denomination / rate[currencies[1]])
    }
    if (currencies[0] !== 'RUB') {
      return String(denomination * rate[currencies[0]])
    }
  }
}
