import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3468 } from "./fragment3468";
import type { FragmentToken3469 } from "./fragment3469";

export const FRAGMENT_3470 = gql(`
  fragment Fragment3470 on Member109 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_109
    memberCount_109
    memberMetric_109
  }
`);

type FragmentResult3470 = ResultOf<typeof FRAGMENT_3470>;
type FragmentSelf3470 = NonNullable<FragmentResult3470>;

export type FragmentToken3470 =
  | FragmentSelf3470["__typename"]
  | FragmentSelf3470["typenameHint"] | FragmentToken3468 | FragmentToken3469;
