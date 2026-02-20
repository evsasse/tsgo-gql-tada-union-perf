import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4513 } from "./fragment4513";
import type { FragmentToken4514 } from "./fragment4514";

export const FRAGMENT_4515 = gql(`
  fragment Fragment4515 on Member34 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_34
    memberCount_34
    memberMetric_34
  }
`);

type FragmentResult4515 = ResultOf<typeof FRAGMENT_4515>;
type FragmentSelf4515 = NonNullable<FragmentResult4515>;

export type FragmentToken4515 =
  | FragmentSelf4515["__typename"]
  | FragmentSelf4515["typenameHint"] | FragmentToken4513 | FragmentToken4514;
