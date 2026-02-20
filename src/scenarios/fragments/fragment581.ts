import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken579 } from "./fragment579";
import type { FragmentToken580 } from "./fragment580";

export const FRAGMENT_581 = gql(`
  fragment Fragment581 on Member20 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_20
    memberCount_20
    memberMetric_20
  }
`);

type FragmentResult581 = ResultOf<typeof FRAGMENT_581>;
type FragmentSelf581 = NonNullable<FragmentResult581>;

export type FragmentToken581 =
  | FragmentSelf581["__typename"]
  | FragmentSelf581["typenameHint"] | FragmentToken579 | FragmentToken580;
