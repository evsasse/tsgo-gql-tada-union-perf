import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3453 } from "./fragment3453";
import type { FragmentToken3454 } from "./fragment3454";

export const FRAGMENT_3455 = gql(`
  fragment Fragment3455 on Member94 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_94
    memberCount_94
    memberMetric_94
  }
`);

type FragmentResult3455 = ResultOf<typeof FRAGMENT_3455>;
type FragmentSelf3455 = NonNullable<FragmentResult3455>;

export type FragmentToken3455 =
  | FragmentSelf3455["__typename"]
  | FragmentSelf3455["typenameHint"] | FragmentToken3453 | FragmentToken3454;
