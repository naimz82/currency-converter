<?php
//sample currencies
$currencies = [
    "aed" => "Emirati Dirham",
    "aud" => "Australian Dollar",
    "bnd" => "Bruneian Dollar",
    "btc" => "Bitcoin",
    "chf" => "Swiss Franc",
    "egp" => "Egyptian Pound",
    "eth" => "Ethereum",
    "eur" => "Euro",
    "gbp" => "British Pound",
    "idr" => "Indonesian Rupiah",
    "jod" => "Jordanian Dinar",
    "kwd" => "Kuwaiti Dinar",
    "kzt" => "Kazakhstani Tenge",
    "myr" => "Malaysian Ringgit",
    "sar" => "Saudi Arabian Riyal",
    "sgd" => "Singapore Dollar",
    "thb" => "Thai Baht",
    "usd" => "US Dollar"
];

$defaultBaseCurrency = "myr";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Currency Converter</title>
</head>
<body>
    <div class="fig">
        <div class="title">
            <i class="fa-solid fa-money-bill-transfer"></i>
            <span>Currency Converter Tool</span>
        </div>
        <form method="post" id="frmHomeCurrencyConverter">
            <span class="frmHomeLabel">Convert From:</span>
            <div class="currencyRow">
                <select class="currencies" id="from_curr">
                <?php
                foreach ($currencies as $code => $name) {
                    $selected = ($code === $defaultBaseCurrency) ? 'selected' : '';
                    echo "<option value='".$code."' ".$selected.">".strtoupper($code)."</option>";
                }
                ?>
                </select>
                <input type="number" id="currencyFrom" placeholder="0.00">
            </div>
            <span class="frmHomeLabel">Convert To:</span>
            <div class="currencyCol">
                <select class="currencies" id="into_curr">
                    <option value="">Select Currency</option>
                <?php
                foreach ($currencies as $code => $name) {
                    echo "<option value='".$code."'>".strtoupper($code)." - ".$name."</option>";
                }
                ?>
                </select>
                <input type="text" id="convertedValue" value="0.00" readonly>
            </div>
        </form>
    </div>
</body>
</html>