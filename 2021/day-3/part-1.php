<?php
$lines = file('./input.txt', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
$numbers = array_map(fn($binary) => str_split($binary), $lines);
$gammaBin = '';
$epsilonBin = '';
$numBits = count($numbers[0]);

for ($i = 0; $i < $numBits; $i++) {
    $freq = array_count_values(array_column($numbers, $i));
    $gammaBin .= $freq[0] > $freq[1] ? '0' : '1';
}

$epsilonBin = strtr($gammaBin, [1,0]);
var_dump(binDec($gammaBin) * binDec($epsilonBin));
