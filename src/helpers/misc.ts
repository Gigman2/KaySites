import _, { isEmpty } from 'lodash';
import moment from 'moment';
import { t } from 'typy';
import Axios from 'axios';
import { createStandaloneToast } from '@chakra-ui/react';

const { toast } = createStandaloneToast({
  defaultOptions: {
    duration: 2000,
    position: 'top-right',
    isClosable: true,
  },
});

export function isInThePast(date: Date) {
  const today = new Date();

  // 👇️ OPTIONAL!
  // This line sets the hour of the current date to midnight
  // so the comparison only returns `true` if the passed in date
  // is at least yesterday

  return date < today;
}

/**
 * @author Whitson
 * @param condition
 * @param trueValue
 * @param falseValue
 * @returns
 */
export const flowDecision = (
  condition: boolean,
  trueValue: unknown,
  falseValue: unknown
) => {
  if (condition) {
    return trueValue;
  }
  return falseValue;
};

export const toastError = (err: unknown) => {
  const test = 'Unexpected network error.';
  if (err) {
    const error: Record<string, unknown> = err as Record<string, unknown>;
    let description = `${
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      error?.data?.message || error?.message || 'Unknown error occurred'
    }.`;
    if (error?.errorType && error?.errorType === 'validationError') {
      description = error.errorMessage as string;
    }

    if (toast && !toast.isActive(description)) {
      toast({
        id: description,
        status: 'error',
        duration: 2000,
        isClosable: true,
        position: 'top-right',
        title: 'An error occurred.',
        description,
      });
    }
  } else if (toast && !toast.isActive(test)) {
    toast({
      id: test,
      status: 'error',
      duration: 2000,
      isClosable: true,
      position: 'top-right',
      title: 'An error occurred.',
      description: test,
    });
  }
};

export const getFileExtension = (url: string) =>
  url?.split(/[#?]/)?.[0]?.split('.')?.pop()?.trim();


export const downloader = (
  fileURL: string,
  fileName: string,
  fileType: string
) => {
  fetch(fileURL, {
    method: 'GET',
    headers: {
      'Content-Type': fileType,
    },
  })
    .then((response) => response.blob())
    .then((blob) => {
      // Create blob link to download
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName);
      // Append to html link element page
      document.body.appendChild(link);
      // Start download
      link.click();
      // Clean up and remove the link
      if (link.parentNode) {
        link.parentNode.removeChild(link);
      }
    })
    .catch((err) => {
      toastError(err);
    });
};

export const between = (x: number, min: number, max: number) =>
  x >= min && x <= max;
export const clean = <T extends object>(obj: T) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const propName in obj) {
    if (
      obj[propName] === null ||
      obj[propName] === undefined ||
      (isEmpty(obj[propName]) &&
        typeof obj[propName] !== 'number' &&
        typeof obj[propName] !== 'function' &&
        typeof obj[propName] !== 'boolean')
    ) {
      delete obj[propName];
    }
  }
  return obj as Partial<T>;
};

export const ePv = (
  basePixelValue: number | string,
  basePixel = 1440,
  pixel = 1920
) => {
  if (typeof basePixelValue === 'string') {
    return basePixelValue;
  }

  return (basePixelValue * pixel) / basePixel;
};

export const reduceToGroups = <T extends object>(
  array: T[],
  key: string,
  keysToPush = []
) =>
  array?.reduce((categories: Record<string, T[]>, item: T) => {
    const category = categories[t(item, key).safeObject as string] || [];
    if (keysToPush.length > 0) {
      const newObj = {};
      for (let index = 0; index < keysToPush.length; index + 1) {
        newObj[keysToPush[index]] = item[keysToPush[index]];
      }
      category.push(newObj as T);
    } else {
      category.push(item);
    }
    categories[t(item, key).safeObject as string] = category;
    return categories;
  }, {});

export const fileToBase64 = (file: Blob) =>
  new Promise((resolve, reject) => {
    const reader = new window.FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (e) => reject(e);
  });

export const isNumberKey = (evt: KeyboardEvent) => {
  const charCode = evt.which ? evt.which : evt.keyCode;
  return !(
    charCode !== 46 &&
    charCode > 31 &&
    (charCode < 48 || charCode > 57)
  );
};

export const objDiff = <T>(
  obj: Record<string, unknown>,
  _base: object | Record<string, unknown>
) => {
  function changes(
    object: Record<string, unknown>,
    base: object | Record<string, unknown>
  ) {
    return _.transform(object, (result: object, value, key) => {
      if (!_.isEqual(value, base[key]) && result) {
        result[key] =
          _.isObject(value) && _.isObject(base[key])
            ? changes(
                value as Record<string, unknown>,
                base[key] as Record<string, unknown>
              )
            : value;
      }
    });
  }

  return changes(obj, _base) as Partial<T>;
};

export const getformattedDate = (
  date: Date,
  options = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }
) =>
  new Date(date).toLocaleDateString(
    'en-GB',
    options as Intl.DateTimeFormatOptions
  );

export const getFormattedMoney = (val: number, withCurrency?: boolean) => {
  let number = val;
  if (Number.isNaN(val)) {
    number = 0;
  }
  const newFMondy = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number);
  const formatted = !withCurrency ? newFMondy.split('$')[1] : newFMondy;
  if (formatted?.split('.')?.[1]?.length > 0) {
    return formatted;
  }
  return formatted.split('.')?.[0];
};

export const dateDiff = (olddate: moment.MomentInput) =>
  moment().diff(olddate, 'years', false);

export const toSentenceCase = (value: string) =>
  `${value?.charAt(0)?.toUpperCase()}${value?.slice(1)}`;

export const fetchData = async (
  path: RequestInfo | URL,
  config: RequestInit | undefined
) => {
  const response = await fetch(path, config);
  return response.json();
};

export const sliceIntoChunks = <T>(arr: T[], chunkSize: number) => {
  const res: T[][] = [];
  for (let i = 0; i < arr?.length; i += chunkSize) {
    const chunk = arr?.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
};

export const humanFileSize = (bytes: number, dp = 1) => {
  const thresh = 1024;

  if (Math.abs(bytes) < thresh) {
    return `${bytes} B`;
  }

  const units = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let u = -1;
  const r = 10 ** dp;

  let BYTES = bytes;
  do {
    BYTES /= thresh;
    // eslint-disable-next-line no-plusplus
    ++u;
  } while (
    Math.round(Math.abs(BYTES) * r) / r >= thresh &&
    u < units.length - 1
  );

  return `${BYTES.toFixed(dp)} ${units[u]}`;
};

export const getFileType = (type: string) => {
  const Type = type.split('/');
  if (Type[0] === 'image') {
    return 'img';
  }
  if (Type[0] === 'video') {
    return 'vid';
  }
  return 'doc';
};

export const range = (end: number, start = 0, value = 1) =>
  Array(end - start + 1)
    .fill(value)
    .map((ctx, idx) => start + idx);

export const TexTruncation = (length: number, string: string) =>
  string?.substring(0, length);

export const textTruncate = (length: number, string: string) => {
  const truncatedText = `${string?.substring(0, length)} ...`;
  return string?.length >= length ? truncatedText : string;
};

export const embedUrl = (text: string, url: string) =>
  `<a href=${url} className="farm-board" class="farm-board" style={{color: "cf.400"}} target="_blank">${text}</a>`;

export const toastSuccess = (title: string, message?: string) => {
  const msg = `${title}${message || 'Success'}`;
  if (!toast.isActive(msg)) {
    toast({
      id: msg,
      title: message || 'Success',
      isClosable: true,
      description: title || '',
      status: 'success',
      duration: 5000,
      position: 'top-right',
    });
  }
};
export const kelvinToCelsius = (data: number) => (data - 273.15).toFixed(0);

export const pixelToRem = (px: number | string, baseInput = 16) => {
  if (typeof px === 'string') {
    return px;
  }
  const base = () => baseInput || 16;
  const x = base() || 16;
  return `${(1 / x) * px}rem`;
};

const remFunction = (
  pixel: number | string,
  options?: Partial<
    Record<
      'base' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl',
      number | undefined | 'omit' | string
    >
  >
) => {
  const keys = {
    base: [],
    sm: [],
    md: [768, 768],
    lg: [768, 992],
    xl: [1440, 1280],
    '2xl': [1440, 1366],
    '3xl': [1440, 1440],
    '4xl': [1440, 1536],
    '5xl': [1440, 1920],
  };

  return clean(
    Object.keys(keys).reduce(
      (acc, current) => {
        if (!acc[current]) {
          const objKeys = keys[current as keyof typeof keys];
          const opt = options?.[current as keyof typeof options];
          const blockValueOne =
            typeof opt === 'number'
              ? opt
              : typeof opt === 'string'
              ? opt
              : pixel;
          const blockValue =
            opt === 'omit'
              ? undefined
              : [blockValueOne, objKeys?.[0], objKeys?.[1]];
          acc[current] = !blockValue
            ? undefined
            : current === 'base' || current === 'sm'
            ? pixelToRem(blockValue?.[0])
            : pixelToRem(
                ePv(
                  blockValue?.[0],
                  blockValue?.[1] as number,
                  blockValue?.[2] as number
                )
              );
        }
        return acc;
      },
      {
        base: undefined,
        sm: undefined,
        md: undefined,
        lg: undefined,
        xl: undefined,
        '2xl': undefined,
        '3xl': undefined,
        '4xl': undefined,
        '5xl': undefined,
      }
    )
  );
};
/**
 * @description hash a string and return a unique number representation
 * @param str string
 * @returns
 */
export function hashCode(str: string) {
  let hash = 0;
  // eslint-disable-next-line no-plusplus
  for (let i = 0, len = str.length; i < len; i++) {
    const chr = str.charCodeAt(i);
    // eslint-disable-next-line no-bitwise
    hash = (hash << 5) - hash + chr;
    // eslint-disable-next-line no-bitwise
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}

export const rem = remFunction;

export const numberOfItemsToAdd = (
  searchData: boolean,
  {
    pageSize,
    totalItems,
    add = 4,
  }: { pageSize: number; totalItems: number; add?: number }
) => {
  const currentTotal = searchData ? pageSize : 0;
  const total = searchData ? totalItems : 0;
  const left = total - currentTotal;
  return left < add && left >= 0 ? left : left < 0 ? 0 : add;
};

export const supportedMimes = (url: string) => {
  try {
    const ext = getFileExtension(url);
    const mimes = {
      jpg: 'image',
      png: 'image',
      pdf: 'application',
      jpeg: 'image',
    };
    return `${mimes[ext === 'jpg' ? 'jpeg' : (ext as keyof typeof mimes)]}/${
      (ext === 'jpg' ? 'jpeg' : ext) as string
    }`;
  } catch (error) {
    return Promise.reject(error);
  }
};
