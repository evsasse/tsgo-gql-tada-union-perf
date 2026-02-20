import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2797 } from "./fragment2797";
import type { FragmentToken2798 } from "./fragment2798";

export const FRAGMENT_2799 = gql(`
  fragment Fragment2799 on Member278 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_278
    memberCount_278
    memberMetric_278
  }
`);

type FragmentResult2799 = ResultOf<typeof FRAGMENT_2799>;
type FragmentSelf2799 = NonNullable<FragmentResult2799>;

export type FragmentToken2799 =
  | FragmentSelf2799["__typename"]
  | FragmentSelf2799["typenameHint"] | FragmentToken2797 | FragmentToken2798;
