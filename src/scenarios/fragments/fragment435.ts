import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken433 } from "./fragment433";
import type { FragmentToken434 } from "./fragment434";

export const FRAGMENT_435 = gql(`
  fragment Fragment435 on Member154 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_154
    memberCount_154
    memberMetric_154
  }
`);

type FragmentResult435 = ResultOf<typeof FRAGMENT_435>;
type FragmentSelf435 = NonNullable<FragmentResult435>;

export type FragmentToken435 =
  | FragmentSelf435["__typename"]
  | FragmentSelf435["typenameHint"] | FragmentToken433 | FragmentToken434;
