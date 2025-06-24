# Vehicle Model API 

A RESTful API for managing vehicle inventory with full CRUD operations, featuring popular Indian market vehicles with accurate pricing. Built with Express.js and EJS templating engine.

## Features

- ✅ Complete CRUD operations for vehicles
- 🌐 RESTful API endpoints
- 🎨 Beautiful web interface with responsive design
- 📱 Mobile-friendly design
- 🚗 Vehicle management with model, name, price (INR), image, description, and brand
- 🇮🇳 Pre-loaded with popular Indian market vehicles and realistic pricing

## Installation

1. Clone or download the project
2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`


## Vehicle Schema

Each vehicle has the following properties:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | Number | Auto-generated | Unique identifier |
| model | String | Yes | Vehicle model (e.g., "Swift") |
| name | String | Yes | Full vehicle name (e.g., "Maruti Suzuki Swift 2024") |
| price | Number | Yes | Price in INR |
| brand | String | Yes | Vehicle brand (e.g., "Maruti Suzuki") |
| image | String | No | Image URL (placeholder used if empty) |
| desc | String | No | Vehicle description |

## Web Interface

The application provides a user-friendly web interface accessible at:

- **Home Page**: `http://localhost:3000` - View all vehicles
- **Add Vehicle**: `http://localhost:3000/add` - Add new vehicle
- **Edit Vehicle**: `http://localhost:3000/edit/:id` - Edit existing vehicle

## Project Structure

```
├── app.js              # Main application file
├── package.json        # Project dependencies
├── views/              # EJS templates
│   ├── index.ejs       # Home page
│   ├── add.ejs         # Add vehicle form
│   ├── edit.ejs        # Edit vehicle form
│   └── partials/       # Reusable components
│       ├── header.ejs  # Header component
│       └── footer.ejs  # Footer component
└── public/             # Static files (if needed)
```

## Technologies Used

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **EJS** - Templating engine
- **HTML/CSS** - Frontend styling
- **In-memory storage** - Data persistence (for demo purposes)

## Sample Data

The application comes with 10 popular Indian market vehicles:

1. **Maruti Suzuki Swift 2024** - ₹5,99,000
2. **Hyundai Creta 2024** - ₹10,99,000
3. **Toyota Fortuner 2024** - ₹32,99,000
4. **Honda City 2024** - ₹11,99,000
5. **Tata Nexon 2024** - ₹7,99,000
6. **Hyundai Verna 2024** - ₹10,99,000
7. **Mahindra Scorpio-N 2024** - ₹13,49,000
8. **Maruti Suzuki Baleno 2024** - ₹6,49,000
9. **Mahindra XUV700 2024** - ₹13,99,000
10. **Hyundai Venue 2024** - ₹7,49,000

## Development

To run in development mode:
```bash
npm run dev
```

## Notes

- This application uses in-memory storage for simplicity
- In production, consider using a database like MongoDB, PostgreSQL, or MySQL
- All API responses are in JSON format
- The web interface provides the same functionality as the API endpoints
- Images use placeholder URLs by default

## API Testing

You can test the API using tools like:
- **curl** (command line)
- **Postman** (GUI)
- **Insomnia** (GUI)
- Browser (for GET requests)

## License

ISC License

* Yash Gaur 2025 © 
