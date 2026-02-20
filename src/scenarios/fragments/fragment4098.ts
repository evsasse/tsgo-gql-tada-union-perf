import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4096 } from "./fragment4096";
import type { FragmentToken4097 } from "./fragment4097";

export const FRAGMENT_4098 = gql(`
  fragment Fragment4098 on Member177 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_177
    memberCount_177
    memberMetric_177
  }
`);

type FragmentResult4098 = ResultOf<typeof FRAGMENT_4098>;
type FragmentSelf4098 = NonNullable<FragmentResult4098>;

export type FragmentToken4098 =
  | FragmentSelf4098["__typename"]
  | FragmentSelf4098["typenameHint"] | FragmentToken4096 | FragmentToken4097;
