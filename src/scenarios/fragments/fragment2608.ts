import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2606 } from "./fragment2606";
import type { FragmentToken2607 } from "./fragment2607";

export const FRAGMENT_2608 = gql(`
  fragment Fragment2608 on Member87 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_87
    memberCount_87
    memberMetric_87
  }
`);

type FragmentResult2608 = ResultOf<typeof FRAGMENT_2608>;
type FragmentSelf2608 = NonNullable<FragmentResult2608>;

export type FragmentToken2608 =
  | FragmentSelf2608["__typename"]
  | FragmentSelf2608["typenameHint"] | FragmentToken2606 | FragmentToken2607;
