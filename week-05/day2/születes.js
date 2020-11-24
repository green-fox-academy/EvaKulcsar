// Írj egy függvényt, ami kap egy fájlnevet paraméterként
// A fájl tartalmaz egy befejezett Amőba meccset
// Biztosítottunk pár példafájlt (draw.txt, win-x.txt, win-o.txt)
// Adj vissza 'X'-et, 'O'-t vagy 'Döntetlen'-t a beadott fájl alapján.

console.log(ticTacResult('win-o.txt'))
// Ezt kéne kiírja: 'O'

console.log(ticTacResult('win-x.txt'))
// Ezt kéne kiírja: 'X'

console.log(ticTacResult('draw.txt'))
// Ezt kéne kiírja: 'Döntetlen'