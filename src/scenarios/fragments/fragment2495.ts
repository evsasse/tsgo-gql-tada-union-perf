import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2493 } from "./fragment2493";
import type { FragmentToken2494 } from "./fragment2494";

export const FRAGMENT_2495 = gql(`
  fragment Fragment2495 on Member254 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_254
    memberCount_254
    memberMetric_254
  }
`);

type FragmentResult2495 = ResultOf<typeof FRAGMENT_2495>;
type FragmentSelf2495 = NonNullable<FragmentResult2495>;

export type FragmentToken2495 =
  | FragmentSelf2495["__typename"]
  | FragmentSelf2495["typenameHint"] | FragmentToken2493 | FragmentToken2494;
