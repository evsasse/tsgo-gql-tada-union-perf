import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2953 } from "./fragment2953";
import type { FragmentToken2954 } from "./fragment2954";

export const FRAGMENT_2955 = gql(`
  fragment Fragment2955 on Member154 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_154
    memberCount_154
    memberMetric_154
  }
`);

type FragmentResult2955 = ResultOf<typeof FRAGMENT_2955>;
type FragmentSelf2955 = NonNullable<FragmentResult2955>;

export type FragmentToken2955 =
  | FragmentSelf2955["__typename"]
  | FragmentSelf2955["typenameHint"] | FragmentToken2953 | FragmentToken2954;
