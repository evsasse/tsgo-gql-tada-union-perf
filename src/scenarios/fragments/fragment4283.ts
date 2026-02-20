import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4281 } from "./fragment4281";
import type { FragmentToken4282 } from "./fragment4282";

export const FRAGMENT_4283 = gql(`
  fragment Fragment4283 on Member82 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_82
    memberCount_82
    memberMetric_82
  }
`);

type FragmentResult4283 = ResultOf<typeof FRAGMENT_4283>;
type FragmentSelf4283 = NonNullable<FragmentResult4283>;

export type FragmentToken4283 =
  | FragmentSelf4283["__typename"]
  | FragmentSelf4283["typenameHint"] | FragmentToken4281 | FragmentToken4282;
