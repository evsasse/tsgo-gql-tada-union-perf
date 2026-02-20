import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken186 } from "./fragment186";
import type { FragmentToken187 } from "./fragment187";

export const FRAGMENT_188 = gql(`
  fragment Fragment188 on Member187 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_187
    memberCount_187
    memberMetric_187
  }
`);

type FragmentResult188 = ResultOf<typeof FRAGMENT_188>;
type FragmentSelf188 = NonNullable<FragmentResult188>;

export type FragmentToken188 =
  | FragmentSelf188["__typename"]
  | FragmentSelf188["typenameHint"] | FragmentToken186 | FragmentToken187;
