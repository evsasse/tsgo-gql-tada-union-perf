import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken548 } from "./fragment548";
import type { FragmentToken549 } from "./fragment549";

export const FRAGMENT_550 = gql(`
  fragment Fragment550 on Member269 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_269
    memberCount_269
    memberMetric_269
  }
`);

type FragmentResult550 = ResultOf<typeof FRAGMENT_550>;
type FragmentSelf550 = NonNullable<FragmentResult550>;

export type FragmentToken550 =
  | FragmentSelf550["__typename"]
  | FragmentSelf550["typenameHint"] | FragmentToken548 | FragmentToken549;
