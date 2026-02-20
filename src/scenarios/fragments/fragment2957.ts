import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2955 } from "./fragment2955";
import type { FragmentToken2956 } from "./fragment2956";

export const FRAGMENT_2957 = gql(`
  fragment Fragment2957 on Member156 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_156
    memberCount_156
    memberMetric_156
  }
`);

type FragmentResult2957 = ResultOf<typeof FRAGMENT_2957>;
type FragmentSelf2957 = NonNullable<FragmentResult2957>;

export type FragmentToken2957 =
  | FragmentSelf2957["__typename"]
  | FragmentSelf2957["typenameHint"] | FragmentToken2955 | FragmentToken2956;
