import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken045 } from "./fragment045";
import type { FragmentToken046 } from "./fragment046";

export const FRAGMENT_047 = gql(`
  fragment Fragment047 on Member46 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_46
    memberCount_46
    memberMetric_46
  }
`);

type FragmentResult047 = ResultOf<typeof FRAGMENT_047>;
type FragmentSelf047 = NonNullable<FragmentResult047>;

export type FragmentToken047 =
  | FragmentSelf047["__typename"]
  | FragmentSelf047["typenameHint"] | FragmentToken045 | FragmentToken046;
