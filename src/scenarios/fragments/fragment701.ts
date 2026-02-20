import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken699 } from "./fragment699";
import type { FragmentToken700 } from "./fragment700";

export const FRAGMENT_701 = gql(`
  fragment Fragment701 on Member140 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_140
    memberCount_140
    memberMetric_140
  }
`);

type FragmentResult701 = ResultOf<typeof FRAGMENT_701>;
type FragmentSelf701 = NonNullable<FragmentResult701>;

export type FragmentToken701 =
  | FragmentSelf701["__typename"]
  | FragmentSelf701["typenameHint"] | FragmentToken699 | FragmentToken700;
