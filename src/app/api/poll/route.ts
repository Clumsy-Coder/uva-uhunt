import { Language, Problem, Submission, Verdict } from "@/types";
import { fetchLiveSubmissionsUrl, uhuntProblemIdUrl } from "@/utils/constants";

export const GET = async () => {
  const url = fetchLiveSubmissionsUrl();

  const fetchResponse = await fetch(url);
  const data: Submission[] = await fetchResponse.json();

  const converted = data.map(async (submission: Submission) => {
    submission.msg.ver = Verdict[submission.msg.ver];
    submission.msg.lan = Language[submission.msg.lan];

    // add problem number to the object
    const pidUrl = uhuntProblemIdUrl(`${submission.msg.pid}`);
    const pidResponse = await fetch(pidUrl);
    const pidData: Problem = await pidResponse.json();
    submission.msg.pnum = pidData.num;
    submission.msg.pTitle = pidData.title;

    submission.msg.rank = +submission.msg.rank < 0 ? '-' : submission.msg.rank

    return submission;
  }).reverse();

  // using Promise.all because the map function is using an async function
  // use Promise.all to resolver async operations
  // obtained from: https://stackoverflow.com/a/68279968/3053548
  const response = await Promise.all(converted);

  return Response.json(response);
};
