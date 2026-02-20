import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3454 } from "./fragment3454";
import type { FragmentToken3455 } from "./fragment3455";

export const FRAGMENT_3456 = gql(`
  fragment Fragment3456 on Member95 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_95
    memberCount_95
    memberMetric_95
  }
`);

type FragmentResult3456 = ResultOf<typeof FRAGMENT_3456>;
type FragmentSelf3456 = NonNullable<FragmentResult3456>;

export type FragmentToken3456 =
  | FragmentSelf3456["__typename"]
  | FragmentSelf3456["typenameHint"] | FragmentToken3454 | FragmentToken3455;
