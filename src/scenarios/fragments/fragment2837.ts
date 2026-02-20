import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2835 } from "./fragment2835";
import type { FragmentToken2836 } from "./fragment2836";

export const FRAGMENT_2837 = gql(`
  fragment Fragment2837 on Member36 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_36
    memberCount_36
    memberMetric_36
  }
`);

type FragmentResult2837 = ResultOf<typeof FRAGMENT_2837>;
type FragmentSelf2837 = NonNullable<FragmentResult2837>;

export type FragmentToken2837 =
  | FragmentSelf2837["__typename"]
  | FragmentSelf2837["typenameHint"] | FragmentToken2835 | FragmentToken2836;
