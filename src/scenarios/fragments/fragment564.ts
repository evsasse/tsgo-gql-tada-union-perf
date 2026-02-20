import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken562 } from "./fragment562";
import type { FragmentToken563 } from "./fragment563";

export const FRAGMENT_564 = gql(`
  fragment Fragment564 on Member03 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_03
    memberCount_03
    memberMetric_03
  }
`);

type FragmentResult564 = ResultOf<typeof FRAGMENT_564>;
type FragmentSelf564 = NonNullable<FragmentResult564>;

export type FragmentToken564 =
  | FragmentSelf564["__typename"]
  | FragmentSelf564["typenameHint"] | FragmentToken562 | FragmentToken563;
