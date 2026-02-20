import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken016 } from "./fragment016";
import type { FragmentToken017 } from "./fragment017";

export const FRAGMENT_018 = gql(`
  fragment Fragment018 on Member17 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_17
    memberCount_17
    memberMetric_17
  }
`);

type FragmentResult018 = ResultOf<typeof FRAGMENT_018>;
type FragmentSelf018 = NonNullable<FragmentResult018>;

export type FragmentToken018 =
  | FragmentSelf018["__typename"]
  | FragmentSelf018["typenameHint"] | FragmentToken016 | FragmentToken017;
