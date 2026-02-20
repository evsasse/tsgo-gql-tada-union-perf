import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken469 } from "./fragment469";
import type { FragmentToken470 } from "./fragment470";

export const FRAGMENT_471 = gql(`
  fragment Fragment471 on Member190 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_190
    memberCount_190
    memberMetric_190
  }
`);

type FragmentResult471 = ResultOf<typeof FRAGMENT_471>;
type FragmentSelf471 = NonNullable<FragmentResult471>;

export type FragmentToken471 =
  | FragmentSelf471["__typename"]
  | FragmentSelf471["typenameHint"] | FragmentToken469 | FragmentToken470;
