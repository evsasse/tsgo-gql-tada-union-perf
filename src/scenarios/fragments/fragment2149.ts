import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2147 } from "./fragment2147";
import type { FragmentToken2148 } from "./fragment2148";

export const FRAGMENT_2149 = gql(`
  fragment Fragment2149 on Member188 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_188
    memberCount_188
    memberMetric_188
  }
`);

type FragmentResult2149 = ResultOf<typeof FRAGMENT_2149>;
type FragmentSelf2149 = NonNullable<FragmentResult2149>;

export type FragmentToken2149 =
  | FragmentSelf2149["__typename"]
  | FragmentSelf2149["typenameHint"] | FragmentToken2147 | FragmentToken2148;
