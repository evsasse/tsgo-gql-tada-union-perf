import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3678 } from "./fragment3678";
import type { FragmentToken3679 } from "./fragment3679";

export const FRAGMENT_3680 = gql(`
  fragment Fragment3680 on Member39 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_39
    memberCount_39
    memberMetric_39
  }
`);

type FragmentResult3680 = ResultOf<typeof FRAGMENT_3680>;
type FragmentSelf3680 = NonNullable<FragmentResult3680>;

export type FragmentToken3680 =
  | FragmentSelf3680["__typename"]
  | FragmentSelf3680["typenameHint"] | FragmentToken3678 | FragmentToken3679;
