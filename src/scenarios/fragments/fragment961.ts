import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken959 } from "./fragment959";
import type { FragmentToken960 } from "./fragment960";

export const FRAGMENT_961 = gql(`
  fragment Fragment961 on Member120 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_120
    memberCount_120
    memberMetric_120
  }
`);

type FragmentResult961 = ResultOf<typeof FRAGMENT_961>;
type FragmentSelf961 = NonNullable<FragmentResult961>;

export type FragmentToken961 =
  | FragmentSelf961["__typename"]
  | FragmentSelf961["typenameHint"] | FragmentToken959 | FragmentToken960;
