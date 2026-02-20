import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3409 } from "./fragment3409";
import type { FragmentToken3410 } from "./fragment3410";

export const FRAGMENT_3411 = gql(`
  fragment Fragment3411 on Member50 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_50
    memberCount_50
    memberMetric_50
  }
`);

type FragmentResult3411 = ResultOf<typeof FRAGMENT_3411>;
type FragmentSelf3411 = NonNullable<FragmentResult3411>;

export type FragmentToken3411 =
  | FragmentSelf3411["__typename"]
  | FragmentSelf3411["typenameHint"] | FragmentToken3409 | FragmentToken3410;
