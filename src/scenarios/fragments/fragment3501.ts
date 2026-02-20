import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3499 } from "./fragment3499";
import type { FragmentToken3500 } from "./fragment3500";

export const FRAGMENT_3501 = gql(`
  fragment Fragment3501 on Member140 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_140
    memberCount_140
    memberMetric_140
  }
`);

type FragmentResult3501 = ResultOf<typeof FRAGMENT_3501>;
type FragmentSelf3501 = NonNullable<FragmentResult3501>;

export type FragmentToken3501 =
  | FragmentSelf3501["__typename"]
  | FragmentSelf3501["typenameHint"] | FragmentToken3499 | FragmentToken3500;
