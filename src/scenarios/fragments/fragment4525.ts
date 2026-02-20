import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4523 } from "./fragment4523";
import type { FragmentToken4524 } from "./fragment4524";

export const FRAGMENT_4525 = gql(`
  fragment Fragment4525 on Member44 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_44
    memberCount_44
    memberMetric_44
  }
`);

type FragmentResult4525 = ResultOf<typeof FRAGMENT_4525>;
type FragmentSelf4525 = NonNullable<FragmentResult4525>;

export type FragmentToken4525 =
  | FragmentSelf4525["__typename"]
  | FragmentSelf4525["typenameHint"] | FragmentToken4523 | FragmentToken4524;
