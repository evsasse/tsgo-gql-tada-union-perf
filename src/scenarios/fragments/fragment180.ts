import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken178 } from "./fragment178";
import type { FragmentToken179 } from "./fragment179";

export const FRAGMENT_180 = gql(`
  fragment Fragment180 on Member179 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_179
    memberCount_179
    memberMetric_179
  }
`);

type FragmentResult180 = ResultOf<typeof FRAGMENT_180>;
type FragmentSelf180 = NonNullable<FragmentResult180>;

export type FragmentToken180 =
  | FragmentSelf180["__typename"]
  | FragmentSelf180["typenameHint"] | FragmentToken178 | FragmentToken179;
