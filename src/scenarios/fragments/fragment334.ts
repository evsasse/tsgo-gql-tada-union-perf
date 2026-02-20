import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken332 } from "./fragment332";
import type { FragmentToken333 } from "./fragment333";

export const FRAGMENT_334 = gql(`
  fragment Fragment334 on Member53 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_53
    memberCount_53
    memberMetric_53
  }
`);

type FragmentResult334 = ResultOf<typeof FRAGMENT_334>;
type FragmentSelf334 = NonNullable<FragmentResult334>;

export type FragmentToken334 =
  | FragmentSelf334["__typename"]
  | FragmentSelf334["typenameHint"] | FragmentToken332 | FragmentToken333;
