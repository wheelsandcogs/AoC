<?php
$lines = file('./input.txt', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
$numbers = array_map(fn($binary) => str_split($binary), $lines);

function reduce(array $numbers, string $common) {
    $bitPos = 0;

    while (count($numbers) > 1) {
        $freq = array_count_values(array_column($numbers, $bitPos));
        if ($common === 'most') {
            $filter = ($freq[0] === $freq[1]) ? 1 : array_search(max($freq), $freq);
        } else {
            $filter = ($freq[0] === $freq[1]) ? 0 : array_search(min($freq), $freq);
        }
        $numbers = array_filter($numbers, fn($number) => intval($number[$bitPos]) === $filter);
        $bitPos++;
    }
    return implode(reset($numbers));
}

$O2Bin = reduce($numbers, 'most');
$CO2Bin = reduce($numbers, 'least');
var_dump(bindec($O2Bin) * bindec($CO2Bin));
