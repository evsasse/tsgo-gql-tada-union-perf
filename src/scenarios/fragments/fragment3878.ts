import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3876 } from "./fragment3876";
import type { FragmentToken3877 } from "./fragment3877";

export const FRAGMENT_3878 = gql(`
  fragment Fragment3878 on Member237 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_237
    memberCount_237
    memberMetric_237
  }
`);

type FragmentResult3878 = ResultOf<typeof FRAGMENT_3878>;
type FragmentSelf3878 = NonNullable<FragmentResult3878>;

export type FragmentToken3878 =
  | FragmentSelf3878["__typename"]
  | FragmentSelf3878["typenameHint"] | FragmentToken3876 | FragmentToken3877;
