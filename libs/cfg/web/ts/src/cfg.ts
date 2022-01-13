type ConfigError = {
  message: string
}

function cfg(name: string, defaultValue: T): string
function cfg(name: string): string | ConfigError

export function cfg(name: string, defaultValue: T): string {
  const result = cfg(name)
  if(result instanceof ConfigError) {
    return defaultValue
  }
  return result
}

type Finder = (name: string) string | ConfigError

function findInQueryString(name: string): string | ConfigError {
  const params = new URLSearchParams(window.location.search);
  const result = params.get(name)
  if (result === null) {
    return { message: `Could not find ${name} in query string` } as ConfigError
  }
  return result
}

function findInCookie(name: string, finders?: Finder[] = defaultFinders): string {
  // from w3schools https://www.w3schools.com/js/js_cookies.asp
  function getCookie(cname: string): string | null {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return null;
  }

  const result = getCookie(name)
  if (result === null) {
    return { message: `Could not find ${name} in query string` } as ConfigError
  }
  return result
}

function findInLocalStorage(name: string): string {
  const result = localStorage.getItem(name)
  if (result === null) {
    return { message: `Could not find ${name} in query string` } as ConfigError
  }
  return result
}

function findInLocal(name: string): string {
  const result = window.$$__studio.emblem_cfg[name]
  if (typeof result === 'string' || result instanceof String) {
    return result
  }
  return {
    message: `Could not find ${name} in window.$$__studio.emblem_cfg`
  } as ConfigError
}

const defaultFinders: Finder[] [
  findInQueryString,
  findInCookie,
  findInLocalStorage,
  findInLocal,
]

export function cfg(name: string, finders?: Finder[] = defaultFinders): string | ConfigError {
  // Try finders in order until you find one that's not an error or
  for (i in finders) {
    const found = finders[i].func(name)
    if (found instanceof ConfigError) {
      // Nothing here?
      continue
    }
    // Found something!
    return found
  }

  // Didn't find anything? ConfigError
  return { message: `Could not find config at ${name}.` } as ConfigError
}
