import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3603 } from "./fragment3603";
import type { FragmentToken3604 } from "./fragment3604";

export const FRAGMENT_3605 = gql(`
  fragment Fragment3605 on Member244 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_244
    memberCount_244
    memberMetric_244
  }
`);

type FragmentResult3605 = ResultOf<typeof FRAGMENT_3605>;
type FragmentSelf3605 = NonNullable<FragmentResult3605>;

export type FragmentToken3605 =
  | FragmentSelf3605["__typename"]
  | FragmentSelf3605["typenameHint"] | FragmentToken3603 | FragmentToken3604;
