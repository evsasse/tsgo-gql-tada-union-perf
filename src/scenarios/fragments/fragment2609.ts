import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2607 } from "./fragment2607";
import type { FragmentToken2608 } from "./fragment2608";

export const FRAGMENT_2609 = gql(`
  fragment Fragment2609 on Member88 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_88
    memberCount_88
    memberMetric_88
  }
`);

type FragmentResult2609 = ResultOf<typeof FRAGMENT_2609>;
type FragmentSelf2609 = NonNullable<FragmentResult2609>;

export type FragmentToken2609 =
  | FragmentSelf2609["__typename"]
  | FragmentSelf2609["typenameHint"] | FragmentToken2607 | FragmentToken2608;
