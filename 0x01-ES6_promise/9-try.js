export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    queue.push(result);
  } catch (err) {
    queue.push(`Error: ${err.message}`);
  } finally {
    // eslint-disable-next-line no-unsafe-finally
    queue.push('Guardrail was processed');
    // eslint-disable-next-line no-unsafe-finally
    return queue;
  }
}
