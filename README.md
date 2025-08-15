# TravelBloomwebsite

## Project Overview

TravelBloom is a responsive travel website designed to help users explore dream destinations around the world. The website features:

- Home page with inspirational travel content
- About Us section with company information and team details
- Contact Us form for user inquiries
- Search functionality to find specific destinations

## Features

### Main Features:
- **Responsive Design**: Works on all device sizes
- **Navigation**: Consistent header with Home, About Us, and Contact Us links
- **Social Media Integration**: Sidebar with social media icons
- **Search Functionality**: 
  - Search by country (displays cities from that country)
  - Search by city (displays specific city information)
  - Special keywords ("beach" or "temple" for curated recommendations)

### Pages:
1. **Home Page**:
   - Hero section with "Explore Dream Destination" headline
   - "BOOK NOW" call-to-action button
   - Search functionality with results display area

2. **About Us Page**:
   - Company mission and values
   - Team member profiles with roles
   - Professional presentation of company information

3. **Contact Us Page**:
   - Contact form with name, email, and message fields
   - Clean, user-friendly interface

## Technical Implementation

### Technologies Used:
- HTML5
- CSS3
- JavaScript (with Axios for API calls)
- Bootstrap 5 (for responsive design and components)
- Bootstrap Icons

### Key JavaScript Functions:
- `change(event)`: Handles search functionality and displays results
- `cleardiv()`: Clears search results
- `create(obj)`: Helper function to create destination cards

### JSON Data Structure:
The project uses a JSON file containing:
- Countries
- States/cities within each country
- Descriptions and images for each destination

## How to Use

1. **Search Functionality**:
   - Enter a country name to see cities from that country
   - Enter a city name to see specific information
   - Use "beach" or "temple" for curated recommendations

2. **Navigation**:
   - Use the header links to navigate between Home, About Us, and Contact Us pages

3. **Contact Form**:
   - Fill out the form to send inquiries (currently frontend-only)

## Future Improvements

1. Implement backend functionality for the contact form
2. Add more search categories (mountains, historical sites, etc.)
3. Include user authentication for saving favorite destinations
4. Implement booking functionality
5. Add more detailed destination pages
6. Include user reviews and ratings

## Setup Instructions

1. Clone the repository
2. Open `Home.html` in a web browser
3. Ensure all assets (CSS, JS, images) are in the correct directories

## Credits

- Bootstrap 5 for UI components
- Bootstrap Icons for icon set
- Axios for API requests
