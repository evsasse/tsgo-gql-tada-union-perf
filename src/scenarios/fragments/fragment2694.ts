import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2692 } from "./fragment2692";
import type { FragmentToken2693 } from "./fragment2693";

export const FRAGMENT_2694 = gql(`
  fragment Fragment2694 on Member173 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_173
    memberCount_173
    memberMetric_173
  }
`);

type FragmentResult2694 = ResultOf<typeof FRAGMENT_2694>;
type FragmentSelf2694 = NonNullable<FragmentResult2694>;

export type FragmentToken2694 =
  | FragmentSelf2694["__typename"]
  | FragmentSelf2694["typenameHint"] | FragmentToken2692 | FragmentToken2693;
