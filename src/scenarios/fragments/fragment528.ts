import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken526 } from "./fragment526";
import type { FragmentToken527 } from "./fragment527";

export const FRAGMENT_528 = gql(`
  fragment Fragment528 on Member247 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_247
    memberCount_247
    memberMetric_247
  }
`);

type FragmentResult528 = ResultOf<typeof FRAGMENT_528>;
type FragmentSelf528 = NonNullable<FragmentResult528>;

export type FragmentToken528 =
  | FragmentSelf528["__typename"]
  | FragmentSelf528["typenameHint"] | FragmentToken526 | FragmentToken527;
