import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { Submission } from "@/types";
import moment from "moment";

type LiveSubmissionTableProps = {
  data: Submission[];
};

const LiveSubmissionTable = ({ data }: LiveSubmissionTableProps) => {
  return (
    <Table >
      <TableHeader className="sticky top-0 z-80">
        <TableRow className="items-center whitespace-nowrap">
          <TableHead>Submission ID</TableHead>
          <TableHead>Problem number</TableHead>
          <TableHead>Problem title</TableHead>
          <TableHead>User (username)</TableHead>
          <TableHead className="text-center">Verdict</TableHead>
          <TableHead>Language</TableHead>
          <TableHead>Time</TableHead>
          <TableHead>Rank</TableHead>
          <TableHead className="text-right">Submit time</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map(({ msg }) => {
          const { sid, pnum, pTitle, uname, name, verdict, lan, run, rank, ver, sbt, } = msg;
          return (
            <TableRow key={`${sid}-${verdict.title}`}>
              <TableCell>{sid}</TableCell>
              <TableCell>{pnum}</TableCell>
              <TableCell>{pTitle}</TableCell>
              <TableCell>{name} ({uname})</TableCell>
              <TableCell>
                <p
                  className={cn(
                    "font-semibold py-1.5 px-1.5 rounded-full text-center whitespace-nowrap",
                    `${verdict.bgColor}`,
                    `${verdict.fgColor}`,
                    ver === 0 || ver === 20 ? "animate-pulse" : null,
                  )}
                >
                  {verdict.title}
                </p>
              </TableCell>
              <TableCell>{lan}</TableCell>
              <TableCell>{(run / 1000).toFixed(3)}</TableCell>
              <TableCell>{rank}</TableCell>
              <TableCell className="text-right">
                {moment.unix(sbt).fromNow()}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default LiveSubmissionTable;
