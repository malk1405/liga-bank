function getClasses({block, element, modifiers = []}) {
  const el = block + (`__${element}` || ``);
  return [el, ...modifiers.map((m) => `${el}--${m}`)].join(` `);
}

export default getClasses;
