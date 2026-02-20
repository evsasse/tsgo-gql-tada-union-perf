import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken435 } from "./fragment435";
import type { FragmentToken436 } from "./fragment436";

export const FRAGMENT_437 = gql(`
  fragment Fragment437 on Member156 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_156
    memberCount_156
    memberMetric_156
  }
`);

type FragmentResult437 = ResultOf<typeof FRAGMENT_437>;
type FragmentSelf437 = NonNullable<FragmentResult437>;

export type FragmentToken437 =
  | FragmentSelf437["__typename"]
  | FragmentSelf437["typenameHint"] | FragmentToken435 | FragmentToken436;
