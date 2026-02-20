import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4033 } from "./fragment4033";
import type { FragmentToken4034 } from "./fragment4034";

export const FRAGMENT_4035 = gql(`
  fragment Fragment4035 on Member114 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_114
    memberCount_114
    memberMetric_114
  }
`);

type FragmentResult4035 = ResultOf<typeof FRAGMENT_4035>;
type FragmentSelf4035 = NonNullable<FragmentResult4035>;

export type FragmentToken4035 =
  | FragmentSelf4035["__typename"]
  | FragmentSelf4035["typenameHint"] | FragmentToken4033 | FragmentToken4034;
