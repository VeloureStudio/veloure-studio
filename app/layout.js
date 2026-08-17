export const metadata = {
  title: 'Veloure Studio',
  description: 'Digital Assets & Mockups',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, background: '#fafafa' }}>
        {children}
      </body>
    </html>
  )
}
