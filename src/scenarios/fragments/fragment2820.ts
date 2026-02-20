import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2818 } from "./fragment2818";
import type { FragmentToken2819 } from "./fragment2819";

export const FRAGMENT_2820 = gql(`
  fragment Fragment2820 on Member19 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_19
    memberCount_19
    memberMetric_19
  }
`);

type FragmentResult2820 = ResultOf<typeof FRAGMENT_2820>;
type FragmentSelf2820 = NonNullable<FragmentResult2820>;

export type FragmentToken2820 =
  | FragmentSelf2820["__typename"]
  | FragmentSelf2820["typenameHint"] | FragmentToken2818 | FragmentToken2819;
