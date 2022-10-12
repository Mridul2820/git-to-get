import Link from 'next/link';
import React from 'react';

const ProfilePinnedRepositories = ({ username, pinnedRepositories }) => {
  return (
    <div className="dark:bg-dark-color dark:text-white dark:border dark:border-gray-700 p-3 shadow-bs1 rounded-md h-full w-full bg-white">
      <p className="text-center mb-5 text-xl font-semibold">
        <div>
          {'@'} {username} Pinned Repositories
        </div>
        <div>
          {'(Total: '}
          {pinnedRepositories.totalCount}
          {')'}
        </div>
      </p>
      <div className="flex flex-col gap-4 pt-4 max-h-[450px] overflow-y-scroll pt-2 pr-5">
        {pinnedRepositories?.nodes.map((repo) => (
          <Link href={`${repo.url}`} key={repo.id}>
            <a className="flex items-center gap-3 rounded-md shadow-bs5 hover:shadow-bs2 transition-all duration-200 p-2 border-2 border-slate-300 dark:border-gray-700 dark:bg-dark-gray">
              <div className="w-full">
                <p className="text-base font-semibold">
                  <svg className="w-3.5 h-3.5 inline mr-1" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                    <g transform="matrix(0.011928, 0, 0, -0.011928, 220.936829, 277.006042)" fill="currentColor" stroke="none">
                      <g transform="matrix(1.585339, 0, 0, 1.585339, -14030.994238, -16521.417706)" fill="currentColor" stroke="none">
                        <path d="M 6655 24890 C 4243 24883 4438 24888 4085 24824 C 3082 24643 2193 24068 1593 23212 C 1350 22865 1114 22366 1015 21985 C 907 21568 900 21116 900 13820 C 901 7583 908 6609 955 6287 C 994 6023 1108 5668 1263 5333 C 1566 4676 2010 4137 2377 3980 C 2626 3875 2988 3868 3246 3965 C 3445 4040 3654 4208 3775 4391 C 3924 4615 3988 4867 3962 5128 C 3936 5394 3847 5584 3589 5930 C 3359 6238 3280 6410 3243 6680 C 3224 6822 3230 7161 3254 7288 C 3311 7595 3420 7798 3652 8030 C 3916 8294 4226 8453 4566 8499 C 4763 8526 5889 8532 11523 8537 L 17300 8542 L 17300 6962 L 17300 5383 L 17173 5377 C 17102 5373 16861 5370 16635 5370 C 15964 5369 14320.91 5340 14320.91 5340 C 12866.618 5294.315 12922.403 3016.034 14322 3060 L 16504 3060 L 18685 3060 C 18685 3060 19077.748 3031.287 19382.508 3336.047 C 19597.509 3551.048 19600 3964 19600 3964 L 19600 13976 L 19600 23989 C 19600 23989 19579.25 24354.885 19352.52 24581.615 C 19060.831 24873.304 18695 24888 18695 24888 L 13775 24892 C 11069 24894 7865 24893 6655 24890 Z M 17298 16708 L 17295 10835 L 11575 10829 C 6392 10823 4750.465 10795 4320 10795 C 3551.914 10795 3222 10520 3218 10520 C 3206 10520 3209 19771 3220 20350 C 3238 21266 3260 21465 3365 21687 C 3455 21878 3585 22045 3750 22184 C 3931 22335 4127 22450 4311 22511 L 4405 22542 L 4896 22551 C 5738 22568 8327 22577 12898 22578 L 17300 22580 L 17298 16708 Z"/>
                        <path d="M 6445 6149 C 5753 6131 5641 6094 5619 5879 C 5599 5685 5590 4857 5590 3165 C 5590 1070 5598 735 5647 515 C 5677 382 5763 333 5954 342 C 6075 348 6114 362 6238 452 C 6424 585 6838 891 7380 1295 C 8022 1773 8146 1864 8315 1977 C 8603 2169 8712 2202 8850 2138 C 8920 2106 9139 1946 10100 1226 C 10891 632 11202 404 11255 377 C 11347 331 11538 327 11626 370 C 11782 448 11789 574 11790 3130 C 11790 4718 11760 5860 11760 5860 C 11760 5860 11761.541 5955.62 11672.949 6035.758 C 11558.949 6143.758 11527 6135 11038 6150 C 10682 6161 6856 6161 6445 6149 Z"/>
                      </g>
                    </g>
                  </svg>
                  {repo.name}
                </p>
                <p className="font-normal text-sm">
                  {repo.shortDescriptionHTML}
                </p>
                <p className="font-normal flex items-center justify-between text-slate-600 text-xs">
                  <span className="flex items-center leading-none">
                    <svg className="w-3 h-3 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    { repo.stargazerCount }
                    {' | '}
                    <svg className="w-3 h-3 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    { repo.watchers.totalCount }
                    {' | '}
                    <svg className="w-2.5 h-2.5 inline" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 500 500">
                      <path d="M 63.456 10.962 C 117.407 -20.186 184.845 18.75 184.845 81.047 C 184.845 109.958 169.422 136.675 144.382 151.131 C 143.108 151.867 141.826 152.563 140.538 153.221 L 140.538 193.519 C 140.876 205.362 152.921 217.892 164.903 217.848 L 331.089 218.133 C 344.934 218.257 355.703 208.265 355.632 194.517 L 355.632 153.525 C 329.723 140.614 310.712 114.122 310.712 81.047 C 310.712 52.135 326.136 25.419 351.176 10.962 C 405.127 -20.186 472.565 18.75 472.565 81.047 C 472.565 109.958 457.141 136.675 432.102 151.131 C 429.823 152.447 427.52 153.637 425.199 154.707 L 425.199 197.995 C 425.199 251.799 392.951 278.396 337.205 278.396 L 282.514 278.396 L 282.514 347.681 C 307.227 360.992 325.106 386.876 325.106 418.953 C 325.106 447.865 309.682 474.582 284.644 489.037 C 230.693 520.186 163.254 481.25 163.254 418.953 C 163.254 390.041 178.677 363.325 203.717 348.868 C 206.755 347.114 209.838 345.583 212.946 344.263 L 212.946 278.396 L 162.418 278.396 C 101.586 278.396 70.97 249.168 70.97 197.042 L 70.97 154.972 C 43.513 142.666 22.993 115.412 22.993 81.047 C 22.993 52.135 38.417 25.419 63.456 10.962 Z M 89.579 105.884 C 108.7 116.923 132.599 103.125 132.599 81.047 C 132.599 70.801 127.133 61.332 118.259 56.209 C 99.138 45.171 75.239 58.968 75.239 81.047 C 75.239 91.293 80.705 100.762 89.579 105.884 Z M 229.841 443.791 C 248.961 454.829 272.86 441.031 272.86 418.953 C 272.86 408.708 267.394 399.239 258.52 394.115 C 239.4 383.077 215.5 396.875 215.5 418.953 C 215.5 429.199 220.966 438.668 229.841 443.791 Z M 377.298 105.884 C 396.42 116.923 420.319 103.125 420.319 81.047 C 420.319 70.801 414.853 61.332 405.978 56.209 C 386.858 45.171 362.959 58.968 362.959 81.047 C 362.959 91.293 368.425 100.762 377.298 105.884 Z"/>
                    </svg>
                    { repo.forks.totalCount }
                  </span>
                  <div className="text-right">
                    {repo.languages?.nodes.map((lang) => (
                      <div className="flex align-middle">
                        <span className="leading-none">{ lang.name }</span>
                        <div className="w-3 h-3 ml-1 inline-block rounded-full border-solid border" style={{backgroundColor: lang.color, borderColor: "rgba(255,255,255,0.2)"}}></div>
                      </div>
                    ))}
                  </div>
                </p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProfilePinnedRepositories;
