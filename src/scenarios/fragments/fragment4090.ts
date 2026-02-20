import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4088 } from "./fragment4088";
import type { FragmentToken4089 } from "./fragment4089";

export const FRAGMENT_4090 = gql(`
  fragment Fragment4090 on Member169 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_169
    memberCount_169
    memberMetric_169
  }
`);

type FragmentResult4090 = ResultOf<typeof FRAGMENT_4090>;
type FragmentSelf4090 = NonNullable<FragmentResult4090>;

export type FragmentToken4090 =
  | FragmentSelf4090["__typename"]
  | FragmentSelf4090["typenameHint"] | FragmentToken4088 | FragmentToken4089;
