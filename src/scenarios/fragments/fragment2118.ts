import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2116 } from "./fragment2116";
import type { FragmentToken2117 } from "./fragment2117";

export const FRAGMENT_2118 = gql(`
  fragment Fragment2118 on Member157 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_157
    memberCount_157
    memberMetric_157
  }
`);

type FragmentResult2118 = ResultOf<typeof FRAGMENT_2118>;
type FragmentSelf2118 = NonNullable<FragmentResult2118>;

export type FragmentToken2118 =
  | FragmentSelf2118["__typename"]
  | FragmentSelf2118["typenameHint"] | FragmentToken2116 | FragmentToken2117;
