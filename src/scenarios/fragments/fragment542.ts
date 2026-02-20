import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken540 } from "./fragment540";
import type { FragmentToken541 } from "./fragment541";

export const FRAGMENT_542 = gql(`
  fragment Fragment542 on Member261 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_261
    memberCount_261
    memberMetric_261
  }
`);

type FragmentResult542 = ResultOf<typeof FRAGMENT_542>;
type FragmentSelf542 = NonNullable<FragmentResult542>;

export type FragmentToken542 =
  | FragmentSelf542["__typename"]
  | FragmentSelf542["typenameHint"] | FragmentToken540 | FragmentToken541;
