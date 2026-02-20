import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4092 } from "./fragment4092";
import type { FragmentToken4093 } from "./fragment4093";

export const FRAGMENT_4094 = gql(`
  fragment Fragment4094 on Member173 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_173
    memberCount_173
    memberMetric_173
  }
`);

type FragmentResult4094 = ResultOf<typeof FRAGMENT_4094>;
type FragmentSelf4094 = NonNullable<FragmentResult4094>;

export type FragmentToken4094 =
  | FragmentSelf4094["__typename"]
  | FragmentSelf4094["typenameHint"] | FragmentToken4092 | FragmentToken4093;
