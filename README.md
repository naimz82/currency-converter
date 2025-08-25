# Currency Converter Tool

A simple, responsive web-based currency converter that provides real-time exchange rates for various currencies including cryptocurrencies.

## Features

- **Real-time Exchange Rates**: Fetches current exchange rates from reliable currency APIs
- **Multiple Currency Support**: Supports all major currencies (including crypotcurrencies)
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Instant Conversion**: Real-time conversion as you type
- **Fallback API**: Uses backup currency API for enhanced reliability
- **User-friendly Interface**: Clean and intuitive design

## Sample Currencies Used in This Tool

| Code | Currency |
|------|----------|
| AED | Emirati Dirham |
| AUD | Australian Dollar |
| BND | Bruneian Dollar |
| BTC | Bitcoin |
| CHF | Swiss Franc |
| EGP | Egyptian Pound |
| ETH | Ethereum |
| EUR | Euro |
| GBP | British Pound |
| IDR | Indonesian Rupiah |
| JOD | Jordanian Dinar |
| KWD | Kuwaiti Dinar |
| KZT | Kazakhstani Tenge |
| MYR | Malaysian Ringgit (Default base currency) |
| SAR | Saudi Arabian Riyal |
| SGD | Singapore Dollar |
| THB | Thai Baht |
| USD | US Dollar |

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript
- **Library**: jQuery 3.7.1
- **Backend**: PHP 8.x
- **APIs**: 
  - Primary: [@fawazahmed0/currency-api](https://github.com/fawazahmed0/currency-api)
  - Fallback: [currency-api.pages.dev](https://currency-api.pages.dev/)

## Installation

### Prerequisites
- Web server with PHP support (Apache, Nginx, etc.)
- PHP 7.4 or higher

### Setup

1. Clone or download the repository:
   ```bash
   git clone https://github.com/naimz82/currency-converter.git
   ```

2. Copy files to your web server directory:
   ```bash
   cp -r currency-converter/* /var/www/html/currency-converter/
   ```

3. Ensure proper permissions:
   ```bash
   chmod 644 /var/www/html/currency-converter/*
   ```

4. Access the application in your web browser:
   ```
   http://localhost/currency-converter/
   ```

## Usage

1. **Select Source Currency**: Choose the currency you want to convert from using the first dropdown
2. **Enter Amount**: Input the amount you wish to convert in the number field
3. **Select Target Currency**: Choose the currency you want to convert to using the second dropdown
4. **View Result**: The converted amount will appear instantly in the result field

### Example
- Convert 100 MYR to USD
- Select "MYR" from the first dropdown
- Enter "100" in the amount field
- Select "USD - US Dollar" from the second dropdown
- View the converted amount in USD

## File Structure

```
currency-converter/
├── index.php           # Main application file with HTML structure
├── script.js          # JavaScript logic for currency conversion
├── jquery-3.7.1.min.js # jQuery library
├── LICENSE            # MIT License
└── README.md          # This file
```

## API Information

This tool uses free currency exchange rate APIs:

- **Primary API**: [@fawazahmed0/currency-api](https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/)
- **Fallback API**: [Currency API](https://latest.currency-api.pages.dev/v1/currencies/)

The application automatically switches to the fallback API if the primary API is unavailable, ensuring reliable service.

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Opera 47+

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Currency data provided by [@fawazahmed0](https://github.com/fawazahmed0/exchange-api)
- jQuery library for DOM manipulation
- Currency API services for reliable exchange rate data

## Support

If you encounter any issues or have questions, please:
1. Check the existing issues on GitHub
2. Create a new issue with detailed information
3. Include browser information and steps to reproduce any bugs

---

**Note**: Exchange rates are fetched from third-party APIs and may have slight delays. This tool is for informational and educational purposes and should not be used for financial transactions without verification from official sources.
