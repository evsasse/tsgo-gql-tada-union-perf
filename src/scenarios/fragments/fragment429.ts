import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken427 } from "./fragment427";
import type { FragmentToken428 } from "./fragment428";

export const FRAGMENT_429 = gql(`
  fragment Fragment429 on Member148 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_148
    memberCount_148
    memberMetric_148
  }
`);

type FragmentResult429 = ResultOf<typeof FRAGMENT_429>;
type FragmentSelf429 = NonNullable<FragmentResult429>;

export type FragmentToken429 =
  | FragmentSelf429["__typename"]
  | FragmentSelf429["typenameHint"] | FragmentToken427 | FragmentToken428;
