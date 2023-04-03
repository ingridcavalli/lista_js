let a = 0;
let b = 1;
for ( i = 0; i < 15; i++) {
    document.write(a + '<br>');
  let fibonacci = b;
  b = a + b;
  a = fibonacci;
}
document.write('<img src="images/fibonacci.jpg" alt="sequência"  title=" sequência de Fibonacci">');