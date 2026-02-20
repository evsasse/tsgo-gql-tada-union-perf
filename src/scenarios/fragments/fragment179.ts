import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken177 } from "./fragment177";
import type { FragmentToken178 } from "./fragment178";

export const FRAGMENT_179 = gql(`
  fragment Fragment179 on Member178 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_178
    memberCount_178
    memberMetric_178
  }
`);

type FragmentResult179 = ResultOf<typeof FRAGMENT_179>;
type FragmentSelf179 = NonNullable<FragmentResult179>;

export type FragmentToken179 =
  | FragmentSelf179["__typename"]
  | FragmentSelf179["typenameHint"] | FragmentToken177 | FragmentToken178;
