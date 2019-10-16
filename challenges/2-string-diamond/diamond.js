export default (length) => {
  if (length <= 0) return null;
  if (length % 2 === 0) return null;

  // Initialize with middle line
  const lines = ['*'.repeat(length)];

  // Assemble lines with a middle-out approach
  for (let i = 0; i < ((length - 1) / 2); i += 1) {
    const spaceReps = i + 1;
    const starReps = length - (spaceReps * 2);

    const spaces = ' '.repeat(spaceReps);
    const stars = '*'.repeat(starReps);

    const line = `${spaces}${stars}${spaces}`;

    lines.push(line);
    lines.unshift(line);
  }

  return lines.join('\n');
};
