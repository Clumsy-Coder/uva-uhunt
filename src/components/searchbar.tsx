"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { useState } from "react";

import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useFetchSearch } from "@/hooks";
import { cn } from "@/lib/utils";

const placeholderText = ["Search problem number", "Search username"];

const SearchBar = () => {
  const [searchStr, setSearchStr] = useState("");
  const { data: searchData } = useFetchSearch(searchStr);

  return (
    <div>
      <form>
        <div className="relative flex justify-items items-center gap-2">
          <Search className="h-[1.2rem] w-[1.2rem] absolute left-2 top-1/2 -translate-y-1/2 transform" />
          <Input
            type="text"
            onChange={(event) => setSearchStr(event.target.value)}
            value={searchStr}
            className="pl-8"
            placeholder={placeholderText[Math.floor(Math.random() * 2)]}
          />
        </div>
      </form>
      <div className="absolute z-20 pt-2">
        <Card
          onClick={() => setSearchStr("")}
          className={cn(
            "flex flex-col divide-y",
            searchData && "ring-2 ring-ring",
          )}
        >
          {searchData &&
            searchData.length > 0 &&
            searchData.map((cur, index) => (
              <Link
                href={cur.href}
                key={`search-result-${index}`}
                className=" hover:underline underline-offset-4 hover:bg-zinc-300 dark:hover:bg-zinc-700 first:rounded-t-lg last:rounded-b-lg"
              >
                <CardHeader className="py-4">
                  <CardDescription className="min-w-[16rem] text-primary text-md">
                    {cur.title}
                  </CardDescription>
                </CardHeader>
              </Link>
            ))}
        </Card>
      </div>
    </div>
  );
};

export default SearchBar;
