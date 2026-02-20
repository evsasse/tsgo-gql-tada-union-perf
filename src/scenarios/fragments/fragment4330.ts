import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4328 } from "./fragment4328";
import type { FragmentToken4329 } from "./fragment4329";

export const FRAGMENT_4330 = gql(`
  fragment Fragment4330 on Member129 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_129
    memberCount_129
    memberMetric_129
  }
`);

type FragmentResult4330 = ResultOf<typeof FRAGMENT_4330>;
type FragmentSelf4330 = NonNullable<FragmentResult4330>;

export type FragmentToken4330 =
  | FragmentSelf4330["__typename"]
  | FragmentSelf4330["typenameHint"] | FragmentToken4328 | FragmentToken4329;
