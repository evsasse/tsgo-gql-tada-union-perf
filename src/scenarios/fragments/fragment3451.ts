import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3449 } from "./fragment3449";
import type { FragmentToken3450 } from "./fragment3450";

export const FRAGMENT_3451 = gql(`
  fragment Fragment3451 on Member90 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_90
    memberCount_90
    memberMetric_90
  }
`);

type FragmentResult3451 = ResultOf<typeof FRAGMENT_3451>;
type FragmentSelf3451 = NonNullable<FragmentResult3451>;

export type FragmentToken3451 =
  | FragmentSelf3451["__typename"]
  | FragmentSelf3451["typenameHint"] | FragmentToken3449 | FragmentToken3450;
