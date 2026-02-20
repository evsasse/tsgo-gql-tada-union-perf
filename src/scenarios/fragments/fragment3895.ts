import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3893 } from "./fragment3893";
import type { FragmentToken3894 } from "./fragment3894";

export const FRAGMENT_3895 = gql(`
  fragment Fragment3895 on Member254 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_254
    memberCount_254
    memberMetric_254
  }
`);

type FragmentResult3895 = ResultOf<typeof FRAGMENT_3895>;
type FragmentSelf3895 = NonNullable<FragmentResult3895>;

export type FragmentToken3895 =
  | FragmentSelf3895["__typename"]
  | FragmentSelf3895["typenameHint"] | FragmentToken3893 | FragmentToken3894;
