import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken160 } from "./fragment160";
import type { FragmentToken161 } from "./fragment161";

export const FRAGMENT_162 = gql(`
  fragment Fragment162 on Member161 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_161
    memberCount_161
    memberMetric_161
  }
`);

type FragmentResult162 = ResultOf<typeof FRAGMENT_162>;
type FragmentSelf162 = NonNullable<FragmentResult162>;

export type FragmentToken162 =
  | FragmentSelf162["__typename"]
  | FragmentSelf162["typenameHint"] | FragmentToken160 | FragmentToken161;
