import React, { ChangeEvent, FormEvent, useState } from 'react';

function TipsCalculator() {
  const URLS = [
    {
      env: "dev",
      link: "https://dev.url",
    },
    {
      env: "qa",
      link: "https://qa.url",
    },
    {
      env: "prod",
      link: "https://prod.url",
    },
  ];

  const [selectedEnv, setSelectedEnv] = useState<string>('');

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedEnv(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const selectedUrl = URLS.find(url => url.env === selectedEnv);

    if (selectedUrl) {
      console.log(selectedUrl.link);
    } else {
      console.log('No matching URL found');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {URLS.map((url, index) => (
        <div key={index}>
          <input
            type="radio"
            value={url.env}
            name="url"
            onChange={handleRadioChange}
          />
          <label>{url.env}</label>
        </div>
      ))}
      <button type="submit" disabled={!selectedEnv}>submit</button>
    </form>
  );
}

export default TipsCalculator;