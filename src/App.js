import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <div style={{width: '100%'}}><iframe width="50%" height={300}  src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed">&lt;<a href="https://www.maps.ie/distance-area-calculator.html"/>&gt;measure distance on map&lt;/a&gt;</iframe></div>

{/* https://www.maps.ie/create-google-map/ */}
{/* https://www.embedmymap.com/#iframecodegenerator/ */}

<div style={{width: '500px'}}><iframe width="100%" height={500}  src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=%20Shivdhara%20Society%20Mansarovar%20Part-4,%20Yogi%20Chowk,%20Varachha,%20Surat,%20Gujarat%20395006+(RoyalRich%20Hotel)&t=k&z=14&ie=UTF8&iwloc=B&output=embed">&lt;<a href="https://www.maps.ie/distance-area-calculator.html"/>&gt;measure acres/hectares on map&lt;/a&gt;</iframe></div>
    </div>
  );
}

export default App;