import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken889 } from "./fragment889";
import type { FragmentToken890 } from "./fragment890";

export const FRAGMENT_891 = gql(`
  fragment Fragment891 on Member50 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_50
    memberCount_50
    memberMetric_50
  }
`);

type FragmentResult891 = ResultOf<typeof FRAGMENT_891>;
type FragmentSelf891 = NonNullable<FragmentResult891>;

export type FragmentToken891 =
  | FragmentSelf891["__typename"]
  | FragmentSelf891["typenameHint"] | FragmentToken889 | FragmentToken890;
