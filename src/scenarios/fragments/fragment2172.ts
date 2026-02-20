import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2170 } from "./fragment2170";
import type { FragmentToken2171 } from "./fragment2171";

export const FRAGMENT_2172 = gql(`
  fragment Fragment2172 on Member211 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_211
    memberCount_211
    memberMetric_211
  }
`);

type FragmentResult2172 = ResultOf<typeof FRAGMENT_2172>;
type FragmentSelf2172 = NonNullable<FragmentResult2172>;

export type FragmentToken2172 =
  | FragmentSelf2172["__typename"]
  | FragmentSelf2172["typenameHint"] | FragmentToken2170 | FragmentToken2171;
