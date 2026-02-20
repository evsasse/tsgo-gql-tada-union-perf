import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken358 } from "./fragment358";
import type { FragmentToken359 } from "./fragment359";

export const FRAGMENT_360 = gql(`
  fragment Fragment360 on Member79 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_79
    memberCount_79
    memberMetric_79
  }
`);

type FragmentResult360 = ResultOf<typeof FRAGMENT_360>;
type FragmentSelf360 = NonNullable<FragmentResult360>;

export type FragmentToken360 =
  | FragmentSelf360["__typename"]
  | FragmentSelf360["typenameHint"] | FragmentToken358 | FragmentToken359;
