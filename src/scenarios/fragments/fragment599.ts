import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken597 } from "./fragment597";
import type { FragmentToken598 } from "./fragment598";

export const FRAGMENT_599 = gql(`
  fragment Fragment599 on Member38 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_38
    memberCount_38
    memberMetric_38
  }
`);

type FragmentResult599 = ResultOf<typeof FRAGMENT_599>;
type FragmentSelf599 = NonNullable<FragmentResult599>;

export type FragmentToken599 =
  | FragmentSelf599["__typename"]
  | FragmentSelf599["typenameHint"] | FragmentToken597 | FragmentToken598;
