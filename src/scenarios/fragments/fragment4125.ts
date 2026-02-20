import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4123 } from "./fragment4123";
import type { FragmentToken4124 } from "./fragment4124";

export const FRAGMENT_4125 = gql(`
  fragment Fragment4125 on Member204 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_204
    memberCount_204
    memberMetric_204
  }
`);

type FragmentResult4125 = ResultOf<typeof FRAGMENT_4125>;
type FragmentSelf4125 = NonNullable<FragmentResult4125>;

export type FragmentToken4125 =
  | FragmentSelf4125["__typename"]
  | FragmentSelf4125["typenameHint"] | FragmentToken4123 | FragmentToken4124;
