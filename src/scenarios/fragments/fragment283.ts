import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken281 } from "./fragment281";
import type { FragmentToken282 } from "./fragment282";

export const FRAGMENT_283 = gql(`
  fragment Fragment283 on Member02 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_02
    memberCount_02
    memberMetric_02
  }
`);

type FragmentResult283 = ResultOf<typeof FRAGMENT_283>;
type FragmentSelf283 = NonNullable<FragmentResult283>;

export type FragmentToken283 =
  | FragmentSelf283["__typename"]
  | FragmentSelf283["typenameHint"] | FragmentToken281 | FragmentToken282;
