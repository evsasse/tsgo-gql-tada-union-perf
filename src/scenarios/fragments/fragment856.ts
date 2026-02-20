import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken854 } from "./fragment854";
import type { FragmentToken855 } from "./fragment855";

export const FRAGMENT_856 = gql(`
  fragment Fragment856 on Member15 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_15
    memberCount_15
    memberMetric_15
  }
`);

type FragmentResult856 = ResultOf<typeof FRAGMENT_856>;
type FragmentSelf856 = NonNullable<FragmentResult856>;

export type FragmentToken856 =
  | FragmentSelf856["__typename"]
  | FragmentSelf856["typenameHint"] | FragmentToken854 | FragmentToken855;
