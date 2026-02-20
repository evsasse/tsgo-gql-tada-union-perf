import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2168 } from "./fragment2168";
import type { FragmentToken2169 } from "./fragment2169";

export const FRAGMENT_2170 = gql(`
  fragment Fragment2170 on Member209 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_209
    memberCount_209
    memberMetric_209
  }
`);

type FragmentResult2170 = ResultOf<typeof FRAGMENT_2170>;
type FragmentSelf2170 = NonNullable<FragmentResult2170>;

export type FragmentToken2170 =
  | FragmentSelf2170["__typename"]
  | FragmentSelf2170["typenameHint"] | FragmentToken2168 | FragmentToken2169;
