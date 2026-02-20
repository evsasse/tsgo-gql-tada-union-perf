import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4930 } from "./fragment4930";
import type { FragmentToken4931 } from "./fragment4931";

export const FRAGMENT_4932 = gql(`
  fragment Fragment4932 on Member171 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_171
    memberCount_171
    memberMetric_171
  }
`);

type FragmentResult4932 = ResultOf<typeof FRAGMENT_4932>;
type FragmentSelf4932 = NonNullable<FragmentResult4932>;

export type FragmentToken4932 =
  | FragmentSelf4932["__typename"]
  | FragmentSelf4932["typenameHint"] | FragmentToken4930 | FragmentToken4931;
