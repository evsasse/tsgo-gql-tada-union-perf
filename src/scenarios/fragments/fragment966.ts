import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken964 } from "./fragment964";
import type { FragmentToken965 } from "./fragment965";

export const FRAGMENT_966 = gql(`
  fragment Fragment966 on Member125 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_125
    memberCount_125
    memberMetric_125
  }
`);

type FragmentResult966 = ResultOf<typeof FRAGMENT_966>;
type FragmentSelf966 = NonNullable<FragmentResult966>;

export type FragmentToken966 =
  | FragmentSelf966["__typename"]
  | FragmentSelf966["typenameHint"] | FragmentToken964 | FragmentToken965;
