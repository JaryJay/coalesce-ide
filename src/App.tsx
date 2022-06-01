import { Header, Explorer, Editor, Tools, Console, Footer } from "./components";

function App() {
	return (
		<div>
			<Header />
			<div className="flex resize-y bg-slate-600">
				<Explorer />
				<Editor />
				<Tools />
			</div>
			<Console />
			<Footer />
		</div>
	)
}

export default App;
