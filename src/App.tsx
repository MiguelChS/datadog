import dataConfig from './filerenders.json'
import { StoreProvider } from './context-app'
import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: '9e5a6186-5131-4cf6-ae3b-8602e76afc45',
    clientToken: 'pub5d06f60a4faab5dae823d148f77d1047',
    site: 'datadoghq.com',
    service:'miguel-app',
    sampleRate: 100,
    version:'1.0.0',
    premiumSampleRate: 100,
    trackInteractions: true
});

function App() {
  const handleMiguel = () => {
    datadogRum.addError(new Error("que paso miguel"))
  }

  return (
    <StoreProvider values={dataConfig.state}>
      <div>
        <h1>React </h1>
        <button onClick={handleMiguel}>miguel</button>
      </div>
    </StoreProvider>
  );
}

export default App;
