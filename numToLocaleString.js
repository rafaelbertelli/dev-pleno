const num = 325897.99;

console.log(`num.toLocaleString() => ${num.toLocaleString()}`);

console.log(`num.toLocaleString('en-US', {style: 'decimal'}) => ${num.toLocaleString('en-US', {style: 'decimal'})}`);

console.log(`num.toLocaleString('en-US', {style: 'percent'}) => ${num.toLocaleString('en-US', {style: 'percent'})}`);

console.log(`num.toLocaleString('en-US', {style: 'currency', currency: 'USD'}) => ${num.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}`);

console.log(`num.toLocaleString('en-US', {style: 'currency', currency: 'BRL'}) => ${num.toLocaleString('en-US', {style: 'currency', currency: 'BRL'})}`);

console.log(`num.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) => ${num.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`);

console.log(`num.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL', currencyDisplay: 'symbol'}) => ${num.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL', currencyDisplay: 'symbol'})}`);

console.log(`num.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL', currencyDisplay: 'code'}) => ${num.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL', currencyDisplay: 'code'})}`);

console.log(`num.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL', currencyDisplay: 'name'}) => ${num.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL', currencyDisplay: 'name'})}`);