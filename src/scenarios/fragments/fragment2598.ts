import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2596 } from "./fragment2596";
import type { FragmentToken2597 } from "./fragment2597";

export const FRAGMENT_2598 = gql(`
  fragment Fragment2598 on Member77 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_77
    memberCount_77
    memberMetric_77
  }
`);

type FragmentResult2598 = ResultOf<typeof FRAGMENT_2598>;
type FragmentSelf2598 = NonNullable<FragmentResult2598>;

export type FragmentToken2598 =
  | FragmentSelf2598["__typename"]
  | FragmentSelf2598["typenameHint"] | FragmentToken2596 | FragmentToken2597;
