import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken390 } from "./fragment390";
import type { FragmentToken391 } from "./fragment391";

export const FRAGMENT_392 = gql(`
  fragment Fragment392 on Member111 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_111
    memberCount_111
    memberMetric_111
  }
`);

type FragmentResult392 = ResultOf<typeof FRAGMENT_392>;
type FragmentSelf392 = NonNullable<FragmentResult392>;

export type FragmentToken392 =
  | FragmentSelf392["__typename"]
  | FragmentSelf392["typenameHint"] | FragmentToken390 | FragmentToken391;
