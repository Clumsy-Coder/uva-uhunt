import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "../input";

type Props = {
  numColumns?: number;
  numRows?: number;
};

const DataTableLoading = ({ numColumns = 5, numRows = 5 }: Props) => {
  return (
    <div>
      <div className="flex justify-between items-center py-4">
        <div className="flex justify-between items-center gap-4">
          <Skeleton className="w-[223px] h-4 ml-4" />
        </div>
        <Skeleton className="w-[117px] h-4 mr-4" />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            {[...Array(numColumns)].map((_, tableColsIndex) => (
              <TableHead key={`loading-table-header-column-${tableColsIndex}`}>
                <Skeleton className="w-full h-4" />
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {[...Array(numRows)].map((_, i) => {
            return (
              <TableRow key={`loading-table-body-row-${i}`} className="min-h-6">
                {[...Array(numColumns)].map((_, k) => (
                  <TableCell key={`loading-table-body-row-${i}-cell-${k}`}>
                    <Skeleton className="w-full h-4" />
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <div className="flex justify-between items-center mx-4 my-4">
        <Skeleton className="flex-1 max-w-52 h-4" />
        <div className="px-4" />
        <Skeleton className="flex-1 max-w-96 h-4" />
      </div>
    </div>
  );
};

export default DataTableLoading;
