import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4342 } from "./fragment4342";
import type { FragmentToken4343 } from "./fragment4343";

export const FRAGMENT_4344 = gql(`
  fragment Fragment4344 on Member143 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_143
    memberCount_143
    memberMetric_143
  }
`);

type FragmentResult4344 = ResultOf<typeof FRAGMENT_4344>;
type FragmentSelf4344 = NonNullable<FragmentResult4344>;

export type FragmentToken4344 =
  | FragmentSelf4344["__typename"]
  | FragmentSelf4344["typenameHint"] | FragmentToken4342 | FragmentToken4343;
