import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3571 } from "./fragment3571";
import type { FragmentToken3572 } from "./fragment3572";

export const FRAGMENT_3573 = gql(`
  fragment Fragment3573 on Member212 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_212
    memberCount_212
    memberMetric_212
  }
`);

type FragmentResult3573 = ResultOf<typeof FRAGMENT_3573>;
type FragmentSelf3573 = NonNullable<FragmentResult3573>;

export type FragmentToken3573 =
  | FragmentSelf3573["__typename"]
  | FragmentSelf3573["typenameHint"] | FragmentToken3571 | FragmentToken3572;
