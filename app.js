const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Set EJS as template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// In-memory storage for vehicles (in production, use a database)
let vehicles = [
    {
        id: 1,
        model: 'Swift',
        name: 'Maruti Suzuki Swift 2024',
        price: 599000,
        image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/130591/swift-exterior-right-front-three-quarter-109.jpeg?isig=0&q=80',
        desc: 'India\'s most popular hatchback with excellent fuel efficiency and sporty design.',
        brand: 'Maruti Suzuki'
    },
    {
        id: 2,
        model: 'Creta',
        name: 'Hyundai Creta 2024',
        price: 1099000,
        image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/106815/creta-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80',
        desc: 'Premium compact SUV with advanced features and commanding road presence.',
        brand: 'Hyundai'
    },
    {
        id: 3,
        model: 'Fortuner',
        name: 'Toyota Fortuner 2024',
        price: 3299000,
        image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/40087/fortuner-exterior-right-front-three-quarter-11.jpeg?isig=0&q=80',
        desc: 'Robust and reliable SUV perfect for both city and off-road adventures.',
        brand: 'Toyota'
    },
    {
        id: 4,
        model: 'City',
        name: 'Honda City 2024',
        price: 1199000,
        image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/134287/city-exterior-right-front-three-quarter-76.jpeg?isig=0&q=80',
        desc: 'Premium sedan with spacious interiors and advanced safety features.',
        brand: 'Honda'
    },
    {
        id: 5,
        model: 'Nexon',
        name: 'Tata Nexon 2024',
        price: 799000,
        image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-71.jpeg?isig=0&q=80',
        desc: 'Compact SUV with 5-star safety rating and bold design language.',
        brand: 'Tata'
    },
    {
        id: 6,
        model: 'Verna',
        name: 'Hyundai Verna 2024',
        price: 1099000,
        image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/115777/verna-exterior-right-front-three-quarter-73.jpeg?isig=0&q=80',
        desc: 'Stylish sedan with premium features and excellent build quality.',
        brand: 'Hyundai'
    },
    {
        id: 7,
        model: 'Scorpio-N',
        name: 'Mahindra Scorpio-N 2024',
        price: 1349000,
        image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/130583/scorpio-n-exterior-right-front-three-quarter-109.jpeg?isig=0&q=80',
        desc: 'Powerful SUV with commanding presence and advanced 4WD capabilities.',
        brand: 'Mahindra'
    },
    {
        id: 8,
        model: 'Baleno',
        name: 'Maruti Suzuki Baleno 2024',
        price: 649000,
        image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/102663/baleno-exterior-right-front-three-quarter-67.jpeg?isig=0&q=80',
        desc: 'Premium hatchback with spacious cabin and advanced connectivity features.',
        brand: 'Maruti Suzuki'
    },
    {
        id: 9,
        model: 'XUV700',
        name: 'Mahindra XUV700 2024',
        price: 1399000,
        image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/115025/xuv700-exterior-right-front-three-quarter-75.jpeg?isig=0&q=80',
        desc: 'Feature-loaded SUV with cutting-edge technology and premium interiors.',
        brand: 'Mahindra'
    },
    {
        id: 10,
        model: 'Venue',
        name: 'Hyundai Venue 2024',
        price: 749000,
        image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/102663/venue-exterior-right-front-three-quarter-67.jpeg?isig=0&q=80',
        desc: 'Compact SUV with connected car technology and youthful design.',
        brand: 'Hyundai'
    }
];

let nextId = 11;

// Routes

// Home page - display all vehicles
app.get('/', (req, res) => {
    res.render('index', { vehicles });
});

// API Routes

// GET all vehicles
app.get('/api/vehicles', (req, res) => {
    res.json(vehicles);
});

// GET single vehicle by ID
app.get('/api/vehicles/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const vehicle = vehicles.find(v => v.id === id);
    
    if (!vehicle) {
        return res.status(404).json({ error: 'Vehicle not found' });
    }
    
    res.json(vehicle);
});

// POST - Create new vehicle
app.post('/api/vehicles', (req, res) => {
    const { model, name, price, image, desc, brand } = req.body;
    
    // Validation
    if (!model || !name || !price || !brand) {
        return res.status(400).json({ error: 'Model, name, price, and brand are required' });
    }
    
    const newVehicle = {
        id: nextId++,
        model,
        name,
        price: parseFloat(price),
        image: image || 'https://via.placeholder.com/300x200?text=No+Image',
        desc: desc || '',
        brand
    };
    
    vehicles.push(newVehicle);
    res.status(201).json(newVehicle);
});

// PUT - Update vehicle
app.put('/api/vehicles/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const vehicleIndex = vehicles.findIndex(v => v.id === id);
    
    if (vehicleIndex === -1) {
        return res.status(404).json({ error: 'Vehicle not found' });
    }
    
    const { model, name, price, image, desc, brand } = req.body;
    
    // Update vehicle
    vehicles[vehicleIndex] = {
        ...vehicles[vehicleIndex],
        model: model || vehicles[vehicleIndex].model,
        name: name || vehicles[vehicleIndex].name,
        price: price ? parseFloat(price) : vehicles[vehicleIndex].price,
        image: image || vehicles[vehicleIndex].image,
        desc: desc !== undefined ? desc : vehicles[vehicleIndex].desc,
        brand: brand || vehicles[vehicleIndex].brand
    };
    
    res.json(vehicles[vehicleIndex]);
});

// DELETE vehicle
app.delete('/api/vehicles/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const vehicleIndex = vehicles.findIndex(v => v.id === id);
    
    if (vehicleIndex === -1) {
        return res.status(404).json({ error: 'Vehicle not found' });
    }
    
    const deletedVehicle = vehicles.splice(vehicleIndex, 1)[0];
    res.json(deletedVehicle);
});

// Web form routes for frontend

// Show add vehicle form
app.get('/add', (req, res) => {
    res.render('add');
});

// Show edit vehicle form
app.get('/edit/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const vehicle = vehicles.find(v => v.id === id);
    
    if (!vehicle) {
        return res.redirect('/');
    }
    
    res.render('edit', { vehicle });
});

// Handle form submissions
app.post('/vehicles', (req, res) => {
    const { model, name, price, image, desc, brand } = req.body;
    
    const newVehicle = {
        id: nextId++,
        model,
        name,
        price: parseFloat(price),
        image: image || 'https://via.placeholder.com/300x200?text=No+Image',
        desc: desc || '',
        brand
    };
    
    vehicles.push(newVehicle);
    res.redirect('/');
});

app.post('/vehicles/:id/edit', (req, res) => {
    const id = parseInt(req.params.id);
    const vehicleIndex = vehicles.findIndex(v => v.id === id);
    
    if (vehicleIndex !== -1) {
        const { model, name, price, image, desc, brand } = req.body;
        
        vehicles[vehicleIndex] = {
            ...vehicles[vehicleIndex],
            model,
            name,
            price: parseFloat(price),
            image: image || vehicles[vehicleIndex].image,
            desc,
            brand
        };
    }
    
    res.redirect('/');
});

app.post('/vehicles/:id/delete', (req, res) => {
    const id = parseInt(req.params.id);
    const vehicleIndex = vehicles.findIndex(v => v.id === id);
    
    if (vehicleIndex !== -1) {
        vehicles.splice(vehicleIndex, 1);
    }
    
    res.redirect('/');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
