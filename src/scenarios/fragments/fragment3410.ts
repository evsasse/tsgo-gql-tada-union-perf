import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3408 } from "./fragment3408";
import type { FragmentToken3409 } from "./fragment3409";

export const FRAGMENT_3410 = gql(`
  fragment Fragment3410 on Member49 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_49
    memberCount_49
    memberMetric_49
  }
`);

type FragmentResult3410 = ResultOf<typeof FRAGMENT_3410>;
type FragmentSelf3410 = NonNullable<FragmentResult3410>;

export type FragmentToken3410 =
  | FragmentSelf3410["__typename"]
  | FragmentSelf3410["typenameHint"] | FragmentToken3408 | FragmentToken3409;
