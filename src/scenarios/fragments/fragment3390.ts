import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3388 } from "./fragment3388";
import type { FragmentToken3389 } from "./fragment3389";

export const FRAGMENT_3390 = gql(`
  fragment Fragment3390 on Member29 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_29
    memberCount_29
    memberMetric_29
  }
`);

type FragmentResult3390 = ResultOf<typeof FRAGMENT_3390>;
type FragmentSelf3390 = NonNullable<FragmentResult3390>;

export type FragmentToken3390 =
  | FragmentSelf3390["__typename"]
  | FragmentSelf3390["typenameHint"] | FragmentToken3388 | FragmentToken3389;
