import { create } from 'zustand';

// ✅ Use env key (ensure your .env has: VITE_LOCATIONIQ_API_KEY=XXXXX)
const LOCATIONIQ_API_KEY = import.meta.env.VITE_LOCATIONIQ_API_KEY;

const useLocationStore = create((set) => ({
  currentLocation: 'Varanasi', // Default location
  isDetecting: false,
  error: null,

  detectUserLocation: () => {
    set({ isDetecting: true, error: null });

    if (!navigator.geolocation) {
      return set({ isDetecting: false, error: 'Geolocation not supported.' });
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        // ✅ LocationIQ Reverse Geocoding API
        const url = `https://us1.locationiq.com/v1/reverse?key=${LOCATIONIQ_API_KEY}&lat=${latitude}&lon=${longitude}&format=json`;

        try {
          const response = await fetch(url);
          const data = await response.json();

          if (data && data.address) {
            const address = data.address;
            // ✅ Extracting city-like value from LocationIQ response
            const city =
              address.city ||
              address.town ||
              address.village ||
              address.county ||
              address.state ||
              'Unknown Location';

            set({
              currentLocation: city,
              isDetecting: false,
              error: null,
            });
          } else {
            set({
              isDetecting: false,
              error: 'City data not found.',
            });
          }
        } catch (err) {
          set({
            isDetecting: false,
            error: 'API call failed. Check key or network.',
          });
        }
      },
      (error) => {
        set({
          isDetecting: false,
          error:
            error.code === 1
              ? 'Location permission denied by user.'
              : 'Location unavailable.',
        });
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
    );
  },
}));

export default useLocationStore;
