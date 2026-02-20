import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2827 } from "./fragment2827";
import type { FragmentToken2828 } from "./fragment2828";

export const FRAGMENT_2829 = gql(`
  fragment Fragment2829 on Member28 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_28
    memberCount_28
    memberMetric_28
  }
`);

type FragmentResult2829 = ResultOf<typeof FRAGMENT_2829>;
type FragmentSelf2829 = NonNullable<FragmentResult2829>;

export type FragmentToken2829 =
  | FragmentSelf2829["__typename"]
  | FragmentSelf2829["typenameHint"] | FragmentToken2827 | FragmentToken2828;
