import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3730 } from "./fragment3730";
import type { FragmentToken3731 } from "./fragment3731";

export const FRAGMENT_3732 = gql(`
  fragment Fragment3732 on Member91 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_91
    memberCount_91
    memberMetric_91
  }
`);

type FragmentResult3732 = ResultOf<typeof FRAGMENT_3732>;
type FragmentSelf3732 = NonNullable<FragmentResult3732>;

export type FragmentToken3732 =
  | FragmentSelf3732["__typename"]
  | FragmentSelf3732["typenameHint"] | FragmentToken3730 | FragmentToken3731;
