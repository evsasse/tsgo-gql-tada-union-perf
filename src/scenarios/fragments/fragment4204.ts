import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4202 } from "./fragment4202";
import type { FragmentToken4203 } from "./fragment4203";

export const FRAGMENT_4204 = gql(`
  fragment Fragment4204 on Member03 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_03
    memberCount_03
    memberMetric_03
  }
`);

type FragmentResult4204 = ResultOf<typeof FRAGMENT_4204>;
type FragmentSelf4204 = NonNullable<FragmentResult4204>;

export type FragmentToken4204 =
  | FragmentSelf4204["__typename"]
  | FragmentSelf4204["typenameHint"] | FragmentToken4202 | FragmentToken4203;
