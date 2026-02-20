import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken132 } from "./fragment132";
import type { FragmentToken133 } from "./fragment133";

export const FRAGMENT_134 = gql(`
  fragment Fragment134 on Member133 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_133
    memberCount_133
    memberMetric_133
  }
`);

type FragmentResult134 = ResultOf<typeof FRAGMENT_134>;
type FragmentSelf134 = NonNullable<FragmentResult134>;

export type FragmentToken134 =
  | FragmentSelf134["__typename"]
  | FragmentSelf134["typenameHint"] | FragmentToken132 | FragmentToken133;
