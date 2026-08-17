const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
const origin = 'https://sandustryguide.wiki';

export function withBase(path = '/') {
  if (!path || path === '/') {
    return basePath || '/';
  }

  if (/^(https?:|mailto:|tel:|#)/.test(path)) {
    return path;
  }

  return `${basePath}${path.startsWith('/') ? path : `/${path}`}`;
}

export function absoluteUrl(path = '/') {
  const root = `${origin}${basePath}`;
  if (!path || path === '/') {
    return `${root}/`;
  }

  return `${root}${path.startsWith('/') ? path : `/${path}`}`;
}
