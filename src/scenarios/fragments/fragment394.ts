import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken392 } from "./fragment392";
import type { FragmentToken393 } from "./fragment393";

export const FRAGMENT_394 = gql(`
  fragment Fragment394 on Member113 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_113
    memberCount_113
    memberMetric_113
  }
`);

type FragmentResult394 = ResultOf<typeof FRAGMENT_394>;
type FragmentSelf394 = NonNullable<FragmentResult394>;

export type FragmentToken394 =
  | FragmentSelf394["__typename"]
  | FragmentSelf394["typenameHint"] | FragmentToken392 | FragmentToken393;
