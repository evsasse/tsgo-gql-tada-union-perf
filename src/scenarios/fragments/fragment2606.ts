import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2604 } from "./fragment2604";
import type { FragmentToken2605 } from "./fragment2605";

export const FRAGMENT_2606 = gql(`
  fragment Fragment2606 on Member85 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_85
    memberCount_85
    memberMetric_85
  }
`);

type FragmentResult2606 = ResultOf<typeof FRAGMENT_2606>;
type FragmentSelf2606 = NonNullable<FragmentResult2606>;

export type FragmentToken2606 =
  | FragmentSelf2606["__typename"]
  | FragmentSelf2606["typenameHint"] | FragmentToken2604 | FragmentToken2605;
