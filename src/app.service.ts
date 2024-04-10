import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch'; // Import fetch for making HTTP requests

@Injectable()
export class AppService {
  async getDummyData(): Promise<any> {
    try {
      const apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Dummy API URL
      const response = await fetch(apiUrl); // Fetch data from the API
      const data = await response.json(); // Parse response JSON
      return data; // Return fetched data
    } catch (error) {
      throw new Error(
        'Error fetching data from the dummy API: ' + error.message,
      ); // Handle errors
    }
  }
}
