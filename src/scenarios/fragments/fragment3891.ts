import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3889 } from "./fragment3889";
import type { FragmentToken3890 } from "./fragment3890";

export const FRAGMENT_3891 = gql(`
  fragment Fragment3891 on Member250 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_250
    memberCount_250
    memberMetric_250
  }
`);

type FragmentResult3891 = ResultOf<typeof FRAGMENT_3891>;
type FragmentSelf3891 = NonNullable<FragmentResult3891>;

export type FragmentToken3891 =
  | FragmentSelf3891["__typename"]
  | FragmentSelf3891["typenameHint"] | FragmentToken3889 | FragmentToken3890;
