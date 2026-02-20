import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2661 } from "./fragment2661";
import type { FragmentToken2662 } from "./fragment2662";

export const FRAGMENT_2663 = gql(`
  fragment Fragment2663 on Member142 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_142
    memberCount_142
    memberMetric_142
  }
`);

type FragmentResult2663 = ResultOf<typeof FRAGMENT_2663>;
type FragmentSelf2663 = NonNullable<FragmentResult2663>;

export type FragmentToken2663 =
  | FragmentSelf2663["__typename"]
  | FragmentSelf2663["typenameHint"] | FragmentToken2661 | FragmentToken2662;
