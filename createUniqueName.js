export default createUniqueName = (name, existingNames) => {
  let desiredName = `${name}_Copied`;
  let exists = existingNames.includes(desiredName);
  let version = 0;

  while (exists) {
    version++;
    desiredName = `${name}_Copied(${version})`;
    exists = existingNames.includes(desiredName);
  }

  return desiredName;
}
