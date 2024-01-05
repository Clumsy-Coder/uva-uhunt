import moment from "moment";

/**
 * Base uHunt APU URL
 */
export const uhuntBaseApiUrl = "https://uhunt.onlinejudge.org/api";

/**
 * URL for viewing the problem.
 * Need to provide pid. NOT problem number
 * Just append the pid.
 */
export const viewProblemUrl =
  "https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=24&page=show_problem&problem=";

/**
 * URL for viewing the details of the problem PDF using problem ID
 * @param {String | Number} pid problem ID
 */
export const uhuntViewProblemUrl = (pid: string | number) => `${viewProblemUrl}${pid}`;

/**
 * URL for fetching all problems on uva-uhunt
 */
export const uhuntAllProblemsUrl = () => 'https://uhunt.onlinejudge.org/api/p';

/**
 * URL for getting Problem data using Problem ID
 * @param {String | Number} pid - problem ID
 */
export const uhuntProblemIdUrl = (pid: string | number) =>
  `${uhuntBaseApiUrl}/p/id/${pid}`;

/**
 * URL for getting Problem data using Problem number
 * @param {String | Number} problemNumber - problem number
 */
export const uhuntProblemNumUrl = (problemNumber: string | number) =>
  `${uhuntBaseApiUrl}/p/num/${problemNumber}`;

/**
 * URL for getting Problem ranklist using Problem ID, starting rank and number of ranks to return
 * @param {String | Number} pid - Problem ID
 * @param {Number} [start=1] - rank to start from. Default is 1
 * @param {Number} [count=100] - rank to go up to. Default is 100
 */
export const uhuntProblemRankUrl = (pid: string | number, start = 1, count = 100) =>
  `${uhuntBaseApiUrl}/p/rank/${pid}/${start}/${count}`;

/**
 * URL for getting Submission count for a problem.
 * By default it will return 20 years of data,
 * represented in 20 array elements, each element represents 12 months.
 * The submissionTime represents at what time should look back from,
 * could be start from 5 years ago or now.
 * @param {String | Number} pid - problem ID
 * @param {Number} [submissionTime=moment().unix()] - Unix timestamp. Default is current unix timestamp
 * @param {Number} [back=20] - Number of years to look back. Default is 20
 * @param {Number} [jump=12] - Number of months each array element will represent. Default is 12
 */
export const uhuntSubmissionCountUrl = (
  pid: string | number,
  submissionTime = moment().unix(),
  back = 20,
  jump = 12,
) => `${uhuntBaseApiUrl}/p/count/${pid}/${submissionTime}/${back}/${jump}`;

/**
 * URL for getting User ID using username
 * @param {String} username - username
 */
export const uhuntUsername2UidUrl = (username: string) =>
  `${uhuntBaseApiUrl}/uname2uid/${username}`;

/**
 * URL for getting Submission list of a problem using Problem ID
 * @param {String | Number} pid - problem ID
 */
export const uhuntProblemSubmissionListUrl = (pid: string | number) =>
  `${uhuntBaseApiUrl}/p/subs/${pid}/0/${moment().unix()}`;

/**
 * Get User submissions using UserID
 * @param {String | Number} uid User ID
 */
export const uhuntUserSubmissionsUrl = (uid: string | number) =>
  `${uhuntBaseApiUrl}/subs-user/${uid}`;

/**
 * URL for fetching all uhunt problems
 */
export const fetchAllProblemsUrl = () => `${uhuntBaseApiUrl}/p`;

export const fetchLiveSubmissionsUrl = (pollId = 0) =>
  `${uhuntBaseApiUrl}/poll/${pollId}`;
