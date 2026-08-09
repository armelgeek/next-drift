/**
 * Drift Auto-Routing Hook
 * UserPromptSubmit: Parse user intent → invoke right skill
 *
 * Bypass rules (never route):
 * - Starts with "/" → slash command
 * - Starts with "!" → explicit escape
 * - Ends with "?" → question
 * - <4 chars → ack ("yes", "ok")
 */

module.exports = {
  hookType: 'UserPromptSubmit',
  handler: async (message, context) => {
    const text = message.trim();

    // Bypass rules
    if (text.startsWith('/')) return message; // Slash command
    if (text.startsWith('!')) return message; // Explicit escape
    if (text.endsWith('?')) return message; // Question
    if (text.length < 4) return message; // Short ack

    // Auto-routing disabled?
    const autoRoutingEnabled = process.env.DRIFT_AUTO_ROUTING !== 'off';
    if (!autoRoutingEnabled) return message;

    // Parse intent from first 3-5 words
    const words = text.toLowerCase().split(/\s+/).slice(0, 5);
    const intent = words.join(' ');

    let skill = null;

    // Route by keyword
    if (
      intent.includes('add ') ||
      intent.includes('build ') ||
      intent.includes('create ') ||
      intent.includes('implement ')
    ) {
      skill = '/ship-feature';
    } else if (intent.includes('fix ') || intent.includes('bug ')) {
      skill = '/ship-bug';
    } else if (
      intent.includes('refactor ') ||
      intent.includes('improve ') ||
      intent.includes('optimize ')
    ) {
      skill = '/drift-architect';
    } else if (intent.includes('research ') || intent.includes('investigate ')) {
      skill = '/drift-scout';
    } else if (intent.includes('learn ') || intent.includes('remember ')) {
      skill = '/learn';
    } else if (intent.includes('explain ') || intent.includes('why ')) {
      // Questions → no routing, keep as normal Claude query
      return message;
    }

    // If routing detected, prepend skill invocation
    if (skill) {
      // Inject brain snapshot if available (see drift-brain-snapshot.js)
      const brainContext = context.brainSnapshot || '';
      return `${brainContext}\n\n${skill} ${text}`;
    }

    return message;
  }
};
