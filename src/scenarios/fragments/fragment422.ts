import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken420 } from "./fragment420";
import type { FragmentToken421 } from "./fragment421";

export const FRAGMENT_422 = gql(`
  fragment Fragment422 on Member141 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_141
    memberCount_141
    memberMetric_141
  }
`);

type FragmentResult422 = ResultOf<typeof FRAGMENT_422>;
type FragmentSelf422 = NonNullable<FragmentResult422>;

export type FragmentToken422 =
  | FragmentSelf422["__typename"]
  | FragmentSelf422["typenameHint"] | FragmentToken420 | FragmentToken421;
