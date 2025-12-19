export function encodeCursor(post: { id: number }): string {
  return Buffer.from(JSON.stringify({ id: post.id })).toString('base64');
}

export function decodeCursor(cursor: string): { id: number } {
  const decoded = JSON.parse(Buffer.from(cursor, 'base64').toString('utf-8'));

  return { id: decoded.id };
}
