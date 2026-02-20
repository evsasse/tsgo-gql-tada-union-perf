import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken017 } from "./fragment017";
import type { FragmentToken018 } from "./fragment018";

export const FRAGMENT_019 = gql(`
  fragment Fragment019 on Member18 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_18
    memberCount_18
    memberMetric_18
  }
`);

type FragmentResult019 = ResultOf<typeof FRAGMENT_019>;
type FragmentSelf019 = NonNullable<FragmentResult019>;

export type FragmentToken019 =
  | FragmentSelf019["__typename"]
  | FragmentSelf019["typenameHint"] | FragmentToken017 | FragmentToken018;
