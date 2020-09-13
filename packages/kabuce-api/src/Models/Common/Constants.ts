export const Constants = {
  domain: '(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]',
  mediatype:
    "(application|audio|font|example|image|message|model|multipart|text|video|x-(?:[0-9A-Za-z!#$%&'*+.^_`|~-]+))\\/([0-9A-Za-z!#$%&'*+.^_`|~-]+)",
  slug: '^[a-z0-9]+(?:-[a-z0-9]+)*$',
}
