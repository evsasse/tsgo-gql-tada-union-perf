import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3994 } from "./fragment3994";
import type { FragmentToken3995 } from "./fragment3995";

export const FRAGMENT_3996 = gql(`
  fragment Fragment3996 on Member75 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_75
    memberCount_75
    memberMetric_75
  }
`);

type FragmentResult3996 = ResultOf<typeof FRAGMENT_3996>;
type FragmentSelf3996 = NonNullable<FragmentResult3996>;

export type FragmentToken3996 =
  | FragmentSelf3996["__typename"]
  | FragmentSelf3996["typenameHint"] | FragmentToken3994 | FragmentToken3995;
