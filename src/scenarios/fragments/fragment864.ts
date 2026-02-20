import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken862 } from "./fragment862";
import type { FragmentToken863 } from "./fragment863";

export const FRAGMENT_864 = gql(`
  fragment Fragment864 on Member23 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_23
    memberCount_23
    memberMetric_23
  }
`);

type FragmentResult864 = ResultOf<typeof FRAGMENT_864>;
type FragmentSelf864 = NonNullable<FragmentResult864>;

export type FragmentToken864 =
  | FragmentSelf864["__typename"]
  | FragmentSelf864["typenameHint"] | FragmentToken862 | FragmentToken863;
