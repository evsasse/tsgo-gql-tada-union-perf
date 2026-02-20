import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2659 } from "./fragment2659";
import type { FragmentToken2660 } from "./fragment2660";

export const FRAGMENT_2661 = gql(`
  fragment Fragment2661 on Member140 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_140
    memberCount_140
    memberMetric_140
  }
`);

type FragmentResult2661 = ResultOf<typeof FRAGMENT_2661>;
type FragmentSelf2661 = NonNullable<FragmentResult2661>;

export type FragmentToken2661 =
  | FragmentSelf2661["__typename"]
  | FragmentSelf2661["typenameHint"] | FragmentToken2659 | FragmentToken2660;
