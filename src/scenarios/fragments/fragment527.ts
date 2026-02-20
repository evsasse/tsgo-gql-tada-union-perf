import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken525 } from "./fragment525";
import type { FragmentToken526 } from "./fragment526";

export const FRAGMENT_527 = gql(`
  fragment Fragment527 on Member246 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_246
    memberCount_246
    memberMetric_246
  }
`);

type FragmentResult527 = ResultOf<typeof FRAGMENT_527>;
type FragmentSelf527 = NonNullable<FragmentResult527>;

export type FragmentToken527 =
  | FragmentSelf527["__typename"]
  | FragmentSelf527["typenameHint"] | FragmentToken525 | FragmentToken526;
