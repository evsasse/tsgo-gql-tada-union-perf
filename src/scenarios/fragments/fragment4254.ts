import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4252 } from "./fragment4252";
import type { FragmentToken4253 } from "./fragment4253";

export const FRAGMENT_4254 = gql(`
  fragment Fragment4254 on Member53 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_53
    memberCount_53
    memberMetric_53
  }
`);

type FragmentResult4254 = ResultOf<typeof FRAGMENT_4254>;
type FragmentSelf4254 = NonNullable<FragmentResult4254>;

export type FragmentToken4254 =
  | FragmentSelf4254["__typename"]
  | FragmentSelf4254["typenameHint"] | FragmentToken4252 | FragmentToken4253;
