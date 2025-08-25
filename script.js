let exchanges = [], defaultBaseCurrency = 'myr';

function loadBaseCurrency(curr){
    exchanges = [];
    let fromVal = parseFloat( $("#currencyFrom").val() );
    let toCurr = $("#into_curr option:selected").val();
    $("#convertedValue").val("Loading...");
    fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/'+curr+'.json')
        .then(response => {
            if(!response.ok) throw new Error('URL failed');
            return response.json();
        })
        .then(data => {
            exchanges.push(data[curr]);
            if(toCurr.length > 0){
                let rate = exchanges[0][toCurr];
                $("#convertedValue").val((fromVal * rate).toFixed(2));
            } else {
                $("#convertedValue").val("0.00");
            }
        })
        .catch(() => {
            fetch('https://latest.currency-api.pages.dev/v1/currencies/'+curr+'.json')
                .then(response => {
                    if(!response.ok) throw new Error('URL failed');
                    return response.json();
                })
                .then(data => {
                    exchanges.push(data[curr]);
                    if(toCurr.length > 0){
                        let rate = exchanges[0][toCurr];
                        $("#convertedValue").val((fromVal * rate).toFixed(2));
                    } else {
                        $("#convertedValue").val("0.00");
                    }
                })
                .catch(() => {
                    $("#convertedValue").val("Error!");
                });
        });
}

$(document).ready(function(){
    loadBaseCurrency(defaultBaseCurrency);

    $("#frmHomeCurrencyConverter").on("change", "#from_curr", function(){
        let selectedCurr = $(this).val();
        loadBaseCurrency(selectedCurr);
    });

    $("#frmHomeCurrencyConverter").on("change", "#into_curr", function(){
        let selectedCurr = $(this).val();
        let fromVal = parseFloat( $("#currencyFrom").val() );
        let rate = exchanges[0][selectedCurr];
        if(rate){
            $("#convertedValue").val((fromVal * rate).toFixed(2));
        } else {
            $("#convertedValue").val("0.00");
        }
    });

    $("#frmHomeCurrencyConverter").on("input", "#currencyFrom", function(){
        let fromVal = parseFloat( $(this).val() );
        let toCurr = $("#into_curr option:selected").val();
        if(toCurr.length > 0 && !isNaN(fromVal)){
            let rate = exchanges[0][toCurr];
            $("#convertedValue").val((fromVal * rate).toFixed(2));
        } else {
            $("#convertedValue").val("0.00");
        }
    });
});