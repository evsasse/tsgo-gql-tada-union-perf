import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1889 } from "./fragment1889";
import type { FragmentToken1890 } from "./fragment1890";

export const FRAGMENT_1891 = gql(`
  fragment Fragment1891 on Member210 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_210
    memberCount_210
    memberMetric_210
  }
`);

type FragmentResult1891 = ResultOf<typeof FRAGMENT_1891>;
type FragmentSelf1891 = NonNullable<FragmentResult1891>;

export type FragmentToken1891 =
  | FragmentSelf1891["__typename"]
  | FragmentSelf1891["typenameHint"] | FragmentToken1889 | FragmentToken1890;
