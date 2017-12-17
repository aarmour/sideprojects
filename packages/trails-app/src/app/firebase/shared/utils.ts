import { filter, pipe } from 'ramda';

export const isDefined = v => typeof v !== 'undefined';

export const isNotNull = v => v != null;

export const formatData = pipe(filter(isDefined), filter(isNotNull));
