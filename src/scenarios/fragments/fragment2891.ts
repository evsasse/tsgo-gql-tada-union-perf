import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2889 } from "./fragment2889";
import type { FragmentToken2890 } from "./fragment2890";

export const FRAGMENT_2891 = gql(`
  fragment Fragment2891 on Member90 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_90
    memberCount_90
    memberMetric_90
  }
`);

type FragmentResult2891 = ResultOf<typeof FRAGMENT_2891>;
type FragmentSelf2891 = NonNullable<FragmentResult2891>;

export type FragmentToken2891 =
  | FragmentSelf2891["__typename"]
  | FragmentSelf2891["typenameHint"] | FragmentToken2889 | FragmentToken2890;
