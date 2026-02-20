import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4042 } from "./fragment4042";
import type { FragmentToken4043 } from "./fragment4043";

export const FRAGMENT_4044 = gql(`
  fragment Fragment4044 on Member123 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_123
    memberCount_123
    memberMetric_123
  }
`);

type FragmentResult4044 = ResultOf<typeof FRAGMENT_4044>;
type FragmentSelf4044 = NonNullable<FragmentResult4044>;

export type FragmentToken4044 =
  | FragmentSelf4044["__typename"]
  | FragmentSelf4044["typenameHint"] | FragmentToken4042 | FragmentToken4043;
