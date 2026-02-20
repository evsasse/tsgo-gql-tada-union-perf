import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3729 } from "./fragment3729";
import type { FragmentToken3730 } from "./fragment3730";

export const FRAGMENT_3731 = gql(`
  fragment Fragment3731 on Member90 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_90
    memberCount_90
    memberMetric_90
  }
`);

type FragmentResult3731 = ResultOf<typeof FRAGMENT_3731>;
type FragmentSelf3731 = NonNullable<FragmentResult3731>;

export type FragmentToken3731 =
  | FragmentSelf3731["__typename"]
  | FragmentSelf3731["typenameHint"] | FragmentToken3729 | FragmentToken3730;
