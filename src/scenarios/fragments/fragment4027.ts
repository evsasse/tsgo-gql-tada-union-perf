import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4025 } from "./fragment4025";
import type { FragmentToken4026 } from "./fragment4026";

export const FRAGMENT_4027 = gql(`
  fragment Fragment4027 on Member106 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_106
    memberCount_106
    memberMetric_106
  }
`);

type FragmentResult4027 = ResultOf<typeof FRAGMENT_4027>;
type FragmentSelf4027 = NonNullable<FragmentResult4027>;

export type FragmentToken4027 =
  | FragmentSelf4027["__typename"]
  | FragmentSelf4027["typenameHint"] | FragmentToken4025 | FragmentToken4026;
