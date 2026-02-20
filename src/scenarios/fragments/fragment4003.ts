import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4001 } from "./fragment4001";
import type { FragmentToken4002 } from "./fragment4002";

export const FRAGMENT_4003 = gql(`
  fragment Fragment4003 on Member82 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_82
    memberCount_82
    memberMetric_82
  }
`);

type FragmentResult4003 = ResultOf<typeof FRAGMENT_4003>;
type FragmentSelf4003 = NonNullable<FragmentResult4003>;

export type FragmentToken4003 =
  | FragmentSelf4003["__typename"]
  | FragmentSelf4003["typenameHint"] | FragmentToken4001 | FragmentToken4002;
