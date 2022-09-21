import { useState } from 'react';
import Select from './components/Select';
import { SelectOptions } from './components/Select';

const options = [
  {
    value: '1',
    label: 'One',
  },
  {
    value: '2',
    label: 'Two',
  },
  {
    value: '3',
    label: 'Three',
  },
  {
    value: '4',
    label: 'Four',
  },
  {
    value: '2',
    label: 'Two',
  },
  {
    value: '3',
    label: 'Three',
  },
  {
    value: '4',
    label: 'Four',
  },
];
function App() {
  const [value, setValue] = useState<SelectOptions | undefined>(options[0]);
  const [value2, setValue2] = useState<SelectOptions[]>([options[0]]);
  return (
    <div className="App">
      <Select options={options} value={value} onChange={(o) => setValue(o)} />
      <br />
      <Select
        options={options}
        value={value2}
        onChange={(o) => setValue2(o)}
        multiple
      />
    </div>
  );
}

export default App;
