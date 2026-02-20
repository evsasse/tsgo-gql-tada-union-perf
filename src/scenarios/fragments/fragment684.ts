import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken682 } from "./fragment682";
import type { FragmentToken683 } from "./fragment683";

export const FRAGMENT_684 = gql(`
  fragment Fragment684 on Member123 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_123
    memberCount_123
    memberMetric_123
  }
`);

type FragmentResult684 = ResultOf<typeof FRAGMENT_684>;
type FragmentSelf684 = NonNullable<FragmentResult684>;

export type FragmentToken684 =
  | FragmentSelf684["__typename"]
  | FragmentSelf684["typenameHint"] | FragmentToken682 | FragmentToken683;
