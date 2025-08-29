const mockApiData = [
  { id: 1, name: "Item One", description: "This is the first item." },
  { id: 2, name: "Item Two", description: "This is the second item." },
  { id: 3, name: "Item Three", description: "This is the third item." },
];

// Function to simulate fetching data from an API
export const fetchMockData = (): Promise<typeof mockApiData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockApiData); // Simulate a delay
    }, 2000); // 2 second delay
  });
};
