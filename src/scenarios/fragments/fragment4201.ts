import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4199 } from "./fragment4199";
import type { FragmentToken4200 } from "./fragment4200";

export const FRAGMENT_4201 = gql(`
  fragment Fragment4201 on Member00 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_00
    memberCount_00
    memberMetric_00
  }
`);

type FragmentResult4201 = ResultOf<typeof FRAGMENT_4201>;
type FragmentSelf4201 = NonNullable<FragmentResult4201>;

export type FragmentToken4201 =
  | FragmentSelf4201["__typename"]
  | FragmentSelf4201["typenameHint"] | FragmentToken4199 | FragmentToken4200;
