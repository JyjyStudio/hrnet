export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="fr">
			<head></head>
			<body>{children}</body>
		</html>
	)
}
