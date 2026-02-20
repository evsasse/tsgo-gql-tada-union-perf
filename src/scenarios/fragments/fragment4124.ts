import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4122 } from "./fragment4122";
import type { FragmentToken4123 } from "./fragment4123";

export const FRAGMENT_4124 = gql(`
  fragment Fragment4124 on Member203 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_203
    memberCount_203
    memberMetric_203
  }
`);

type FragmentResult4124 = ResultOf<typeof FRAGMENT_4124>;
type FragmentSelf4124 = NonNullable<FragmentResult4124>;

export type FragmentToken4124 =
  | FragmentSelf4124["__typename"]
  | FragmentSelf4124["typenameHint"] | FragmentToken4122 | FragmentToken4123;
