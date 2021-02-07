import STATUSES from '../constants/ statuses';

export default (status) => `${STATUSES[
  status === null ? 2 : status ? 0 : 1
]}`;
