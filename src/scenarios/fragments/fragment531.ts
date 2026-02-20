import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken529 } from "./fragment529";
import type { FragmentToken530 } from "./fragment530";

export const FRAGMENT_531 = gql(`
  fragment Fragment531 on Member250 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_250
    memberCount_250
    memberMetric_250
  }
`);

type FragmentResult531 = ResultOf<typeof FRAGMENT_531>;
type FragmentSelf531 = NonNullable<FragmentResult531>;

export type FragmentToken531 =
  | FragmentSelf531["__typename"]
  | FragmentSelf531["typenameHint"] | FragmentToken529 | FragmentToken530;
