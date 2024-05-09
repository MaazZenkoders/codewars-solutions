function formatDuration (seconds) {
    if (seconds === 0) {
      return "now";
    }
  const units = [
      { label: "year", value: 60 * 60 * 24 * 365 },
      { label: "day", value: 60 * 60 * 24 },
      { label: "hour", value: 60 * 60 },
      { label: "minute", value: 60 },
      { label: "second", value: 1 }
  ];

  const parts = [];

  for (const unit of units) {
      const value = Math.floor(seconds / unit.value);
      if (value > 0) {
          parts.push(`${value} ${unit.label}${value === 1 ? '' : 's'}`);
          seconds -= value * unit.value;
      }
  }

  return parts.length > 1 ?
      parts.slice(0, -1).join(', ') + ' and ' + parts[parts.length - 1] :
      parts[0];
}