import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3941 } from "./fragment3941";
import type { FragmentToken3942 } from "./fragment3942";

export const FRAGMENT_3943 = gql(`
  fragment Fragment3943 on Member22 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_22
    memberCount_22
    memberMetric_22
  }
`);

type FragmentResult3943 = ResultOf<typeof FRAGMENT_3943>;
type FragmentSelf3943 = NonNullable<FragmentResult3943>;

export type FragmentToken3943 =
  | FragmentSelf3943["__typename"]
  | FragmentSelf3943["typenameHint"] | FragmentToken3941 | FragmentToken3942;
