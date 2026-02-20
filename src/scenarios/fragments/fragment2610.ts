import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2608 } from "./fragment2608";
import type { FragmentToken2609 } from "./fragment2609";

export const FRAGMENT_2610 = gql(`
  fragment Fragment2610 on Member89 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_89
    memberCount_89
    memberMetric_89
  }
`);

type FragmentResult2610 = ResultOf<typeof FRAGMENT_2610>;
type FragmentSelf2610 = NonNullable<FragmentResult2610>;

export type FragmentToken2610 =
  | FragmentSelf2610["__typename"]
  | FragmentSelf2610["typenameHint"] | FragmentToken2608 | FragmentToken2609;
