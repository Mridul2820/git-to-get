import React from "react";
import { useTheme } from "next-themes";
import { v4 as uuidv4 } from "uuid";

import RepositoryCard from "./GitHubCard";

const PinnedRepositories = ({ username, pinnedRepositories }) => {
  const { theme } = useTheme();

  return (
    <div className="card-item p-5">
      <p className="text-center mb-5 text-xl font-semibold">
        <div>
          {"@"} {username} Pinned Repositories
        </div>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-4 max-h-[450px] overflow-y-scroll pt-2 pr-5">
        {pinnedRepositories?.nodes.map((repo) => (
          <RepositoryCard repository={repo} theme={theme} key={uuidv4()} />
        ))}
      </div>
    </div>
  );
};

export default PinnedRepositories;
