// Content marked [VERIFY] is unconfirmed. These helpers keep it visible on the page
// as a TODO instead of hiding it or treating it as real data.
export const VERIFY = '[VERIFY]';

export const needsVerify = (text: string) => text.includes(VERIFY);

// "Grew 16% [VERIFY]" -> ["Grew 16% ", ""]; the gaps between parts are where badges go.
export const splitVerify = (text: string) => text.split(VERIFY);
