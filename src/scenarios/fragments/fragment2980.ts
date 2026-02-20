import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2978 } from "./fragment2978";
import type { FragmentToken2979 } from "./fragment2979";

export const FRAGMENT_2980 = gql(`
  fragment Fragment2980 on Member179 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_179
    memberCount_179
    memberMetric_179
  }
`);

type FragmentResult2980 = ResultOf<typeof FRAGMENT_2980>;
type FragmentSelf2980 = NonNullable<FragmentResult2980>;

export type FragmentToken2980 =
  | FragmentSelf2980["__typename"]
  | FragmentSelf2980["typenameHint"] | FragmentToken2978 | FragmentToken2979;
