import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2796 } from "./fragment2796";
import type { FragmentToken2797 } from "./fragment2797";

export const FRAGMENT_2798 = gql(`
  fragment Fragment2798 on Member277 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_277
    memberCount_277
    memberMetric_277
  }
`);

type FragmentResult2798 = ResultOf<typeof FRAGMENT_2798>;
type FragmentSelf2798 = NonNullable<FragmentResult2798>;

export type FragmentToken2798 =
  | FragmentSelf2798["__typename"]
  | FragmentSelf2798["typenameHint"] | FragmentToken2796 | FragmentToken2797;
