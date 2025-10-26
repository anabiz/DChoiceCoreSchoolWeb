
export const formatErrorMessage = (err: any) => {
  let message = "";
  if (err?.response?.data?.message === "string") {
    message = err?.response?.data?.message;
  } else if (typeof err?.response?.data?.errors === "string") {
    message = err?.response?.data?.errors;
  } else if (typeof err?.response?.data?.errors === "object") {
    message =
      err?.response?.data?.errors[Object.keys(err?.response?.data?.errors)[0]];
  } else if (typeof err?.response?.data?.data[0]?.message === "string") {
    message = err?.response?.data?.data[0]?.message;
  }
  if (!message) {
    message = err?.message;
  }
  return typeof message === "string" ? message : message[0];
};

export function getCookie(name: string) {
  const matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        // eslint-disable-next-line no-useless-escape
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}


export function shortenString(input: string, lent: number) {
  if (typeof input !== "string") return "";
  return input.length > lent ? input.substring(0, lent) + "..." : input;
}

export const stopPolling = (intervalId:NodeJS.Timeout | null = null) => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
};

export const sanitizeNigerianPhone = (phone: string): string => {
    if (!phone || phone.trim() === '') {
        return '';
    }
    const digitsOnly = phone.replace(/\D/g, '');

    let sanitized = digitsOnly;

    if (sanitized.startsWith('234') && sanitized.substring(3).length < 11) {
        sanitized = '0' + sanitized.substring(3);
    }

    if (sanitized.startsWith('234') && sanitized.substring(3).length === 11) {
        sanitized = sanitized.substring(3);
    }

    if (sanitized.length === 11 && sanitized.startsWith('0')) {
        return sanitized;
    }
    return '';
}

export const isNumeric = (input: string): boolean => {
  return /^\d+$/.test(input);
}

export function formatDate(date: Date | string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}