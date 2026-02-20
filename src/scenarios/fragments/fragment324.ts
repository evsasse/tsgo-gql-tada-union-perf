import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken322 } from "./fragment322";
import type { FragmentToken323 } from "./fragment323";

export const FRAGMENT_324 = gql(`
  fragment Fragment324 on Member43 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_43
    memberCount_43
    memberMetric_43
  }
`);

type FragmentResult324 = ResultOf<typeof FRAGMENT_324>;
type FragmentSelf324 = NonNullable<FragmentResult324>;

export type FragmentToken324 =
  | FragmentSelf324["__typename"]
  | FragmentSelf324["typenameHint"] | FragmentToken322 | FragmentToken323;
