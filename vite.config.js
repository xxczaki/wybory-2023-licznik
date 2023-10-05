import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    VitePWA({ 
			registerType: 'autoUpdate',
			// devOptions: {
			// 	enabled: true
			// },
			workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      manifest: {
				name: 'Wybory 2023 — licznik',
        short_name: 'Licznik',
        description: 'Licznik odebranych kart do głosowania w wyborach i referendum 2023 dla członków obwodowych komisji wyborczych.',
        theme_color: '#ffffff',
        icons: [
					{
						src: 'pwa-64x64.png',
						sizes: '64x64',
						type: 'image/png'
					},
					{
						src: 'pwa-192x192.png',
						sizes: '192x192',
						type: 'image/png'
					},
					{
						src: 'pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any'  
					},
					{
						src: 'maskable-icon-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'maskable'
					}
        ]
    	}
		})
  ]
})