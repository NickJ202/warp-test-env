import ReactDOM from 'react-dom/client';

import { InjectedArweaveSigner } from 'warp-contracts-plugin-signature';

function App() {
	let signer = new InjectedArweaveSigner(window.arweaveWallet);
	return <p>App</p>
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<App />
);
