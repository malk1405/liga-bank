function getClasses({block, element, modifiers = []}) {
  const el = element ? `${block}__${element}` : block;
  return [el, ...modifiers.map((m) => `${el}--${m}`)].join(` `);
}

export default getClasses;
