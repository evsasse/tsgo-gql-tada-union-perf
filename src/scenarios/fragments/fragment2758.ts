import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2756 } from "./fragment2756";
import type { FragmentToken2757 } from "./fragment2757";

export const FRAGMENT_2758 = gql(`
  fragment Fragment2758 on Member237 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_237
    memberCount_237
    memberMetric_237
  }
`);

type FragmentResult2758 = ResultOf<typeof FRAGMENT_2758>;
type FragmentSelf2758 = NonNullable<FragmentResult2758>;

export type FragmentToken2758 =
  | FragmentSelf2758["__typename"]
  | FragmentSelf2758["typenameHint"] | FragmentToken2756 | FragmentToken2757;
