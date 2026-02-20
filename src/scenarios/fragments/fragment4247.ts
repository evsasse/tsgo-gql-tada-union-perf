import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4245 } from "./fragment4245";
import type { FragmentToken4246 } from "./fragment4246";

export const FRAGMENT_4247 = gql(`
  fragment Fragment4247 on Member46 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_46
    memberCount_46
    memberMetric_46
  }
`);

type FragmentResult4247 = ResultOf<typeof FRAGMENT_4247>;
type FragmentSelf4247 = NonNullable<FragmentResult4247>;

export type FragmentToken4247 =
  | FragmentSelf4247["__typename"]
  | FragmentSelf4247["typenameHint"] | FragmentToken4245 | FragmentToken4246;
