import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2743 } from "./fragment2743";
import type { FragmentToken2744 } from "./fragment2744";

export const FRAGMENT_2745 = gql(`
  fragment Fragment2745 on Member224 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_224
    memberCount_224
    memberMetric_224
  }
`);

type FragmentResult2745 = ResultOf<typeof FRAGMENT_2745>;
type FragmentSelf2745 = NonNullable<FragmentResult2745>;

export type FragmentToken2745 =
  | FragmentSelf2745["__typename"]
  | FragmentSelf2745["typenameHint"] | FragmentToken2743 | FragmentToken2744;
